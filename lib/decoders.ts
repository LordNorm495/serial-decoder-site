export interface DecodeResult {
  brand: string
  year: number | null
  month: number | null
  week: number | null
  age: number | null
  monthName: string | null
  confidence: 'high' | 'medium' | 'low'
  notes: string[]
  rawSerial: string
  candidateYears?: number[]
  error?: string
}

export type BrandKey =
  | 'carrier' | 'bryant' | 'payne'
  | 'trane' | 'american-standard'
  | 'lennox' | 'york' | 'heil' | 'coleman'
  | 'goodman' | 'amana-hvac' | 'daikin'
  | 'rheem' | 'ruud'
  | 'whirlpool' | 'kitchenaid' | 'maytag' | 'amana'
  | 'ge' | 'hotpoint'
  | 'samsung' | 'lg'
  | 'comfortmaker' | 'tempstar' | 'luxaire' | 'champion-hvac' | 'keeprite'
  | 'jennair' | 'kenmore' | 'roper'
  | 'frigidaire' | 'electrolux' | 'speed-queen' | 'bosch'


const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const LETTER_MONTHS = 'ABCDEFGHJKLM'
const GE_MONTHS = 'ADFGHLMRSTVZ'
// GE's published chart, not an inferred alphabetic progression.
const GE_YEARS: Record<string, number[]> = {
 A:[2025,2013,2001,1989,1977,1944],B:[1945],C:[1946],D:[2026,2014,2002,1990,1978,1947],
 E:[1969,1948],F:[2015,2003,1991,1979,1949],G:[2016,2004,1992,1980,1950],
 H:[2017,2005,1993,1981,1951],J:[1952],K:[1953],L:[2018,2006,1994,1982,1970,1954],
 M:[2019,2007,1995,1983,1971,1955],N:[1972,1956],P:[1973,1957],R:[2020,2008,1996,1984,1972,1958],
 S:[2021,2009,1997,1985,1973,1959],T:[2022,2010,1998,1986,1974,1960],V:[2023,2011,1999,1987,1975],Z:[2024,2012,2000,1988,1976],
}
const names: Partial<Record<BrandKey,string>> = {'amana-hvac':'Amana HVAC','amana':'Amana Appliances','ge':'GE Appliances','lg':'LG','speed-queen':'Speed Queen','american-standard':'American Standard','champion-hvac':'Champion HVAC','kitchenaid':'KitchenAid','jennair':'JennAir'}
export const automaticBrands: BrandKey[] = ['carrier','bryant','payne','lennox','goodman','amana-hvac','daikin','rheem','ruud','heil','comfortmaker','tempstar','keeprite','ge','hotpoint','lg','bosch','whirlpool','maytag','speed-queen']
function label(b: BrandKey) { return names[b] || b.charAt(0).toUpperCase()+b.slice(1) }
function blank(serial:string, brand:BrandKey, error?:string):DecodeResult {
 return {brand:label(brand),year:null,month:null,week:null,age:null,monthName:null,confidence:'low',notes:[],rawSerial:serial,error}
}
function dateAllowed(year:number,month:number|null,week:number|null,now:Date) {
 if(year>now.getFullYear() || year<1900)return false
 if(month!==null && (month<1 || month>12 || (year===now.getFullYear() && month>now.getMonth()+1)))return false
 // Manufacturer weeks are fiscal weeks; allow the current approximate week plus one.
 const elapsed = (now.getTime()-new Date(now.getFullYear(),0,1).getTime())/86400000
 if(week!==null && (week<1 || week>53 || (year===now.getFullYear() && week>Math.floor(elapsed/7)+2)))return false
 return true
}
function result(serial:string, brand:BrandKey, years:number[], month:number|null, week:number|null, notes:string[]):DecodeResult {
 const now=new Date()
 const candidates=Array.from(new Set(years)).filter(y=>dateAllowed(y,month,week,now)).sort((a,b)=>b-a)
 if(!candidates.length)return blank(serial,brand,'The date code is invalid or in the future. Check the complete label and the supported format below.')
 const year=candidates.length===1?candidates[0]:null
 return {...blank(serial,brand),year,month,week,monthName:month?MONTHS[month-1]:null,age:year?now.getFullYear()-year:null,
 confidence:year?'medium':'low',candidateYears:candidates,notes:[...notes,...(year?[]:['More than one year fits this code. Use the model, receipt or manufacturer record to identify the correct cycle.']),
 'Manufacture date is not installation date, warranty coverage, remaining life or a safety assessment.']}
}
function year2(value:string){const n=Number(value);return n>=80?1900+n:2000+n}
function decades(digit:string){return [1970,1980,1990,2000,2010,2020,2030].map(y=>y+Number(digit))}
export function decodeByBrand(serial:string,brand:BrandKey):DecodeResult {
 const s=serial.toUpperCase().replace(/\s/g,'')
 const invalid=()=>blank(serial,brand,'This serial does not match a supported format. Use the brand guide and manufacturer confirmation; no date has been guessed.')
 if(['goodman','amana-hvac','daikin','speed-queen'].includes(brand)){
  if(!/^\d{10}$/.test(s))return invalid()
  return result(serial,brand,[year2(s.slice(0,2))],Number(s.slice(2,4)),null,[`YYMM: ${s.slice(0,2)} is the year code and ${s.slice(2,4)} is the month.`, 'Supported ten-digit numeric format only. Two-digit years use the 1980–2079 window; other eras require confirmation.'])
 }
 if(['carrier','bryant','payne'].includes(brand)){
  if(!/^\d{4}[A-Z0-9]\d{5}$/.test(s))return invalid()
  return result(serial,brand,[year2(s.slice(2,4))],null,Number(s.slice(0,2)),[`WWYY: ${s.slice(0,2)} = production week; ${s.slice(2,4)} = year. Character 5 is a factory identifier, not a year letter.`, 'Limited to the documented ten-character layout. Older and imported equipment may use another format.'])
 }
 if(brand==='lennox'){
  if(!/^\d{4}[A-HJ-M]\d{5}$/.test(s))return invalid()
  return result(serial,brand,[year2(s.slice(2,4))],LETTER_MONTHS.indexOf(s[4])+1,null,[`Plant ${s.slice(0,2)}; year ${s.slice(2,4)}; month letter ${s[4]}. The letter I is skipped.`, 'Supported plant + YY + month-letter + five-digit sequence only.'])
 }
 if(['heil','comfortmaker','tempstar','keeprite'].includes(brand)){
  if(!/^[A-Z]\d{9}$/.test(s))return invalid()
  return result(serial,brand,[year2(s.slice(1,3))],null,Number(s.slice(3,5)),[`Factory ${s[0]}; year ${s.slice(1,3)}; week ${s.slice(3,5)}.`, 'Use only for the documented ICP letter + YYWW + five-digit sequence layout. This is not a York date code.'])
 }
 if(['rheem','ruud'].includes(brand)){
  // Restrict to a single identifiable date block, rather than guessing among several letters.
  const m=s.match(/^[A-Z]{1,2}(\d{2})(\d{2})\d{5}$/)
  if(!m)return invalid()
  return result(serial,brand,[year2(m[2])],null,Number(m[1]),[`After the plant letters: week ${m[1]}, year ${m[2]}.`, 'Supported HVAC prefix format only. Long embedded date blocks, newer numeric formats and water heaters need their own documentation.'])
 }
 if(brand==='ge'||brand==='hotpoint'){
  if(!/^[A-Z]{2}\d{6}[A-Z]?$/.test(s)||!GE_MONTHS.includes(s[0])||!GE_YEARS[s[1]])return invalid()
  return result(serial,brand,GE_YEARS[s[1]],GE_MONTHS.indexOf(s[0])+1,null,[`First letter ${s[0]} = month; second letter ${s[1]} = repeating year code.`, 'GE Appliances US chart. Do not apply this chart to Hotpoint products from another manufacturer or market.'])
 }
 if(brand==='lg'){
  if(!/^\d{3}[A-Z0-9]{5,12}$/.test(s))return invalid()
  return result(serial,brand,decades(s[0]).filter(y=>y>=1990),Number(s.slice(1,3)),null,[`Leading digit ${s[0]} gives the year within a decade; ${s.slice(1,3)} gives the month.`, 'The serial alone cannot establish the decade. Candidate years are a working range from 1990 onward, not proof of model availability.'])
 }
 if(brand==='bosch'){
  const m=s.match(/^(?:FD)?(\d{4})$/)
  if(!m)return blank(serial,brand,'Enter only the four-digit FD date code (for example FD 9708). Do not enter the E-Nr model or the full serial.')
  const n=Number(m[1].slice(0,2)); if(n<20)return blank(serial,brand,'This newer FD cycle requires Bosch confirmation. The supported offset range is 20–99.'); const y=1920+n
  return result(serial,brand,[y],Number(m[1].slice(2,4)),null,['FD date code only: add the first two digits to 1920 for the supported 20–99 range.', 'Confirm very old equipment and other FD lengths with Bosch.'])
 }
 if(brand==='whirlpool'||brand==='maytag'){
  const m=s.match(/^([A-Z]{1,2})(\d)(\d{2})(\d{5})$/)
  if(!m)return blank(serial,brand,'The automatic tool supports only the numeric-year layout documented for selected Whirlpool/Maytag dryers, wall ovens and the TF washer/dryer. Letter-year and refrigerator formats require the model-specific guide below.')
  if(!['M','D','TF'].includes(m[1]))return invalid()
  return result(serial,brand,decades(m[2]).filter(y=>y>=2000),null,Number(m[3]),[`Plant ${m[1]}; year digit ${m[2]}; week ${m[3]}.`, 'M dryer, D wall-oven and TF all-in-one examples are documented; match the appliance and model manual before using this pattern.', 'A numeric year digit repeats each decade. We do not automatically select the newest candidate.'])
 }
 return blank(serial,brand,'A reliable automatic date is not available for this brand and product combination. Follow the model-specific verification steps in the brand guide. Your serial has not been assigned a guessed date.')
}
// Patterns can overlap between unrelated manufacturers: suggestions never identify a brand.
export function autoDetect(serial:string):{brand:BrandKey;confidence:'high'|'medium'|'low'}[]{
 return automaticBrands.filter(b=>!decodeByBrand(serial,b).error).map(brand=>({brand,confidence:'low'}))
}

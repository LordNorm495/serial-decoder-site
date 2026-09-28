const assert=require('node:assert/strict');const fs=require('node:fs');const ts=require('typescript');const vm=require('node:vm');
// Fixed review date makes future-date assertions reproducible.
class Clock extends Date {constructor(...args){super(...(args.length?args:['2026-09-28T12:00:00Z']))} static now(){return new Clock().getTime()}}
const sandbox={exports:{},Date:Clock};vm.runInNewContext(ts.transpileModule(fs.readFileSync('lib/decoders.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,sandbox);
const {decodeByBrand:d,autoDetect,automaticBrands}=sandbox.exports;
// Independent examples from manufacturer nomenclature, cited in guideData.ts.
for(const [brand,serial,year,month,week] of [
 ['carrier','0512C12345',2012,null,5],['bryant','0106E00001',2006,null,1],['lennox','5820F12345',2020,6,null],
 ['goodman','1306123456',2013,6,null],['amana-hvac','1306123456',2013,6,null],['daikin','1306123456',2013,6,null],
 ['heil','V102212345',2010,null,22],['rheem','TM159799999',1997,null,15],['ruud','M159799999',1997,null,15],
 ['speed-queen','1505000001',2015,5,null],['bosch','FD9708',2017,8,null],['bosch','FD8901',2009,1,null]]){
 const x=d(serial,brand);assert.equal(x.error,undefined,brand);assert.equal(x.year,year,brand);assert.equal(x.month,month,brand);assert.equal(x.week,week,brand)
}
for(const [brand,serial,year,month,week] of [['ge','GA123456A',2013,4,null],['lg','503AB12345',2015,3,null],['whirlpool','M82510000',2018,null,25],['whirlpool','D74703117',2017,null,47],['whirlpool','TF82510000',2018,null,25]]){
 const x=d(serial,brand);assert.equal(x.error,undefined);assert.equal(x.year,null);assert.equal(x.age,null);assert.ok(x.candidateYears.includes(year));assert.equal(x.month,month);assert.equal(x.week,week)
}
for(const [brand,serial] of [['goodman','1843123456'],['goodman','2612123456'],['carrier','9920A12345'],['carrier','0020A12345'],['lennox','5820I12345'],['lennox','5820F1234'],['ge','BB123456A'],['lg','513AB12345'],['bosch','FD9913'],['bosch','FD0106'],['bosch','AB9708'],['rheem','A001299999'],['whirlpool','M89910000'],['whirlpool','X82510000']])assert.ok(d(serial,brand).error,brand+':'+serial);
for(const b of automaticBrands)for(const s of ['', 'ABC', '!!!!', '1A', '1'.repeat(100),'<script>'])assert.ok(d(s,b).error,b+': invalid '+s);
for(const b of ['trane','york','kenmore','samsung','frigidaire']){assert.ok(d('K1051234567',b).error);assert.equal(d('K1051234567',b).year,null)}
const patterns=autoDetect('1306123456');assert.ok(patterns.length>1);assert.ok(patterns.every(x=>x.confidence==='low'));
assert.equal(d('13 06 123456','goodman').year,2013);assert.equal(d('ga123456a','ge').month,4);
console.log('Date-format checks passed: manufacturer examples, ambiguous cycles, invalid formats, future dates, whitespace and overlapping brand patterns.');

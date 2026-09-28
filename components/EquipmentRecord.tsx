'use client'
import { useState } from 'react'
export default function EquipmentRecord(){
 const [fields,setFields]=useState<Record<string,string>>({})
 const labels=['Equipment type','Brand','Full model number','Full serial / FD code','Printed manufacture date','Decoded date or possible years','Evidence used to confirm the year','Installation date (if documented)','Warranty confirmation reference','Inspection / repair notes']
 return <div><p className="text-gray-600 mb-6">Fill this in while you have the label in front of you. Print it or save it as a PDF using your browser. Entries stay only in this page’s memory and are cleared when you reload or leave; they are not submitted or saved by Serial Decoder.</p>
 <div className="grid sm:grid-cols-2 gap-4">{labels.map((label,i)=><div key={label}><label htmlFor={`record-${i}`} className="block font-semibold text-sm mb-1">{label}</label><input id={`record-${i}`} value={fields[label]||''} onChange={e=>setFields({...fields,[label]:e.target.value})} className="w-full rounded border border-gray-400 p-3" /></div>)}</div>
 <button onClick={()=>window.print()} className="print:hidden my-6 px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold">Print / save PDF</button>
 <p className="text-sm text-gray-600">Keep the label photo and purchase documents privately with this record. Write “unknown” for dates you cannot confirm. A blank warranty field is more useful than an inferred expiry date.</p></div>
}

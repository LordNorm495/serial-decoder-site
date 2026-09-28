import EquipmentRecord from '@/components/EquipmentRecord'
export const metadata={title:'Printable HVAC & Appliance Equipment Record',description:'Record model and serial numbers, date evidence and service notes. Print or save a private PDF without uploading your equipment details.'}
export default function Page(){return <article className="max-w-4xl mx-auto px-4 py-12"><h1 className="text-3xl font-bold mb-4">Equipment age and evidence record</h1><EquipmentRecord/></article>}

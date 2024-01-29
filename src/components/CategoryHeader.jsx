import { FaChevronDown } from "react-icons/fa"

const CategoryHeader = () => {
  return (
    <div className="bg-slate-300 py-2">
     <ul className="flex flex-row justify-around px-16">
        <li className="font-bold  flex my-auto">ALL CATEGORIES <FaChevronDown/></li>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Mobile Phone</li>
        <li>For Sale:House&Apartment</li>
        <li>Scooter</li>
        <li>Commercial & Other Vehicles</li>
        <li>For Rent :House & Apartment</li>
     </ul>

    </div>
  )
}
export default CategoryHeader
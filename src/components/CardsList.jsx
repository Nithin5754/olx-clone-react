import secondHandItems from "../utils/data"
import { Cards } from "./index";
const CardsList = () => {
  return (
    <div className="flex flex-wrap gap-4 m-4">
       {
        secondHandItems.map((second,index)=>{
          return(
       <Cards key={index} second={second}/>
          
          )
        })
      }
    </div>
  )
}
export default CardsList
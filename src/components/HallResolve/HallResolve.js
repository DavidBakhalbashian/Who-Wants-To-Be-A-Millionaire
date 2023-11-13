import { Route } from "react-router-dom"
import HallRes from '../../assets/images/HallRes.png'
const HallResolve = ({Answer,Right,HallView})=>{
  
    return(
        <>
        {HallView   &&   <div className="HallBlock">
     <div className="HallItem">
            {Answer.map((item)=>{
                if(item === Right){
                    return(
                        <div className="HallAns">
                        <h1>{item}-40%</h1>
                        </div>
                    )
                }else{
                    return(
                    
                        <div className="HallAns">
                    <h1>{item}-20%</h1>
                    </div>
                    )
                }
                
            })}
        </div>
        </div>}
        </>
    )
}

export default HallResolve
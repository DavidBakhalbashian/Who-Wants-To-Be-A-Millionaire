import { Route } from "react-router-dom"

const HallResolve = ({Answer,Right,HallView})=>{
  
    return(
        <>
     {HallView  &&   <div className="HallBlock">
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
        </div>}
        </>
    )
}

export default HallResolve
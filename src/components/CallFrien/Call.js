import ManPng from '../../assets/images/man.png'

const CallFrien =({CallView})=>{
    return(
        <>
  {CallView && <div className="CallDisplay">

    <img src={ManPng}></img>
   </div>}
   </>
    )
}
export default CallFrien
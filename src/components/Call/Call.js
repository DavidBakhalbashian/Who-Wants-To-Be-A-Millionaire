import ManPng from '../../assets/images/man.png'

const Call =({CallView})=>{
    return(
        <>
  {CallView && <div className="CallDisplay">

    <img src={ManPng}></img>
   </div>}
   </>
    )
}
export default Call
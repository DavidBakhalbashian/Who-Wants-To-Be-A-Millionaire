const Help = ({FitftyClick,FitftyDel,CallClick,CallDel})=>{
    return(
        <div className='Help'>
    { FitftyDel && <div className='Fitfty' onClick={FitftyClick}>50/50</div>}
       {CallDel &&  <div className='Call' onClick={CallClick}>call</div>} 
        <div className='Hall'>zali</div>
    </div>
    )
}

export default Help
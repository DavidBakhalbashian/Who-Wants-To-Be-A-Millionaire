const Help = ({FitftyClick,FitftyDel})=>{
    return(
        <div className='Help'>
    { FitftyDel && <div className='Fitfty' onClick={FitftyClick}>50/50</div>}
        <div className='Call'>call</div>
        <div className='Hall'>zali</div>
    </div>
    )
}

export default Help
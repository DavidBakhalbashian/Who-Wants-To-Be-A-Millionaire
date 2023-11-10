const Help = ({ FitftyClick, FitftyDel, CallClick, CallDel, HallClick, HallClickView }) => {
    return (
        <div className='Help'>
            {FitftyDel && <div className='Fitfty' onClick={FitftyClick}>50/50</div>}
            {CallDel && <div className='Call' onClick={CallClick}>call</div>}
            {HallClickView && <div className='Hall' onClick={HallClick}>zali</div>}
        </div>
    )
}

export default Help
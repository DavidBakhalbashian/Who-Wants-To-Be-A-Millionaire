import Phone from '../../assets/images/phone.png'
import Hall from '../../assets/images/hall.png'
import fifty from '../../assets/images/fifty.png'
const Help = ({ FitftyClick, FitftyDel, CallClick, CallDel, HallClick, HallClickView }) => {
    return (
        <div className='Help'>
            {FitftyDel && <div className='Fitfty' onClick={FitftyClick}>
            <img src={fifty}></img>
            
            
            </div>}
            {CallDel && <div className='Call' onClick={CallClick}>
                <img src={Phone}></img>
                </div>}
            {HallClickView && <div className='Hall' onClick={HallClick}>
                <img src= {Hall}></img>
                </div>}
        </div>
    )
}

export default Help
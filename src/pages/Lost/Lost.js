import { useNavigate } from 'react-router-dom'
import './style.css'
import { useCallback } from 'react'

const Lost = ()=>{
    const navigate = useNavigate()
    const onClick = useCallback(()=>{
    navigate('/game')
    },[])
    return(
        <div className="Lost">
            <div className='MainLost'>
                <h1>You Lost</h1>

        <div onClick={onClick} className='Play'>
           <h1>Play Again</h1>
        </div>
        
       </div>
            </div>

    )
}

export default Lost
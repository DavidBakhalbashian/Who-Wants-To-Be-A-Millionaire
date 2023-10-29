import { Link, useNavigate } from 'react-router-dom'
import './Registr.css'
import { useCallback } from 'react'

const Registr = ()=>{
    const navigate = useNavigate()
    const onClick = useCallback(()=>{
    navigate('/game')
    },[])
    return(
        <div className="Registr">
       <div className="Module">
        <div onClick={onClick}>
           <h1>Play</h1>
        </div>
       </div>
        </div>
    )
}

export default Registr
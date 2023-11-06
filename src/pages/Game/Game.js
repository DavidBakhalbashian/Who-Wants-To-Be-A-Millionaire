import { useCallback, useState } from 'react'
import './style.css'
import Question from '../../components/Question/Question'
import Server from '../../server/server.json'
const Game = ()=>{


  
   const [question_index,setQuestionIndex] = useState(0)
   const [Quest,setQuest] = useState(Server.question[question_index])
   const [Answer,setAnswer] = useState(Server.answer[question_index])
   const [Right,setRight] = useState(Server.right_answer[question_index])
   
    const AnswerClick = useCallback((item)=>{
        if(item.target.innerText === Right){
           setQuestionIndex((prev) => prev + 1)
           setAnswer(Server.answer[question_index + 1])
           setQuest(Server.question[question_index + 1])
           setRight(Server.right_answer[question_index + 1])
           
        }else{
            prompt("sxal")
        }

     },[question_index])
   

    return(
        <div className='Game'>
        <div className='Header'>
            <div>logo</div>
            <div>10</div>
            <div className='Help'>
                <div className='Fitfty'>50/50</div>
                <div className='Call'>call</div>
                <div className='Hall'>zali</div>
            </div>
        </div>
       <div className='Bank'>bank</div>
       
        <Question  Ans = {Answer}  AnswerClick = {AnswerClick} Quest={Quest}/>        
        </div>
    )
}

export default Game
import { useCallback, useEffect, useState } from 'react'
import './style.css'
import Question from '../../components/Question/Question'
import Server from '../../server/server.json'
import Help from '../../components/Help/Help'
import Call from '../../components/CallFrien/Call'
import CallFrien from '../../components/CallFrien/Call'
import HallResolve from '../../components/HallResolve/HallResolve'
import Bank from '../../components/Bank/Bank'
const Game = () => {

    const q1 = Server.q1;
    const q2 = Server.q2;
    const q3 = Server.q3;
    const q4 = Server.q4;
    const q5 = Server.q5
    const q6 = Server.q6;
    const q7 = Server.q7;
    const q8 = Server.q8;
    const q9 = Server.q9;
    const q10 = Server.q10;
    const q11 = Server.q11;
    const q12 = Server.q12;
    const q13 = Server.q13;
    
    const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13]
    
    const [question_index, setQuestionIndex] = useState(0)
    const [Quest, setQuest] = useState(questions[question_index].question)
    const [Answer, setAnswer] = useState(questions[question_index].answer)
    const [Right, setRight] = useState(questions[question_index].Right)
    const [FitftyDel, setFitftyDel] = useState(true)
    const [CallView,setCallView] = useState(false)
    const [CallDel,setCallDel] = useState(true)
    const [HallView,setHallView] = useState(false)
    const [HallClickView,setHallClickView] = useState(true)
    const [timer, setTimer] = useState(30);
    const [Money,setMoney] = useState(questions[question_index].Money)
    const AnswerClick = useCallback((item) => {
        if (item.target.innerText === Right) {
            setQuestionIndex((prev) => prev + 1)
            setAnswer(questions[question_index + 1].answer)
            setQuest(questions[question_index + 1].question)
            setRight(questions[question_index + 1].Right)
            setMoney(questions[question_index + 1].Money)
            setHallView(false)
            setTimer(30)
          
        } else {
            prompt("sxal")
        }

    }, [question_index])
    const FitftyClick = useCallback((item) => {
        const incorrectAnswers = Answer.filter(answer => answer !== Right);
        const randomIndex1 = Math.floor(Math.random() * incorrectAnswers.length);
        const randomIndex2 = (randomIndex1 + 1) % incorrectAnswers.length;
        const updatedAnswer = Answer.map(answer => {
            if (answer === incorrectAnswers[randomIndex1] || answer === incorrectAnswers[randomIndex2]) {
                return null;
            }

            return answer;
        });

        setAnswer(updatedAnswer);
        setFitftyDel(false)
    }, [Answer, Right]);
const CallClick = useCallback(()=>{
    // setCallView(true)
  alert(Quest+ ' ' + "BAAAREEEV")
  alert(Right+ ' ' + "im karciqov")
  setCallDel(false)


},[question_index])

const HallClick = useCallback(()=>{
setHallView(true)
setHallClickView(false)
},[question_index])

useEffect(() => {
    const timerInterval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);


    return () => clearInterval(timerInterval);
}, []);

useEffect(()=>{
if(timer === 0){
    alert("Time up")
    
}
},[timer,question_index])


    
    return (
        <div className='Game'>
            <div className='Header'>
                <div>logo</div>
                <div className='Timer'>
                   <h1>{timer}</h1> 
                    </div>
                <Help FitftyClick={FitftyClick} FitftyDel={FitftyDel}  CallClick ={CallClick} CallDel={CallDel} HallClick = {HallClick} HallClickView = {HallClickView}/>
            </div>
            <div className='Main'>
            <Bank Money = {Money}/>
            <div className='Nkar'>NKAR</div>
            <div className='CallHelp'>
             <CallFrien CallView ={CallView} />
             </div>
             <HallResolve Answer = {Answer} Right = {Right} HallView = {HallView}/>
             </div>
         
            <Question Ans={Answer} AnswerClick={AnswerClick} Quest={Quest} />
        </div>
    )
}

export default Game
const Question = ({Quest,Ans,AnswerClick})=>{

    return(
        <div className='Questions'>
         <div className='Quiz'>
        <h1>{Quest}</h1>
         </div>

         

            <div className='answers'>
            <div className='answer1' onClick={AnswerClick}>
                <h1>{Ans[0]}</h1>
                </div>  
                 <div className='answer1' onClick={AnswerClick}>
                <h1>{Ans[1]}</h1>
                </div> 
            </div>
          
            <div className='answers2'>
            <div className='answer1' onClick={AnswerClick}>
                <h1>{Ans[2]}</h1>
                </div>  
                <div className='answer1' onClick={AnswerClick}>
                <h1>{Ans[3]}</h1>
                </div>  

    
       </div>
       </div>
    )
}

export default Question
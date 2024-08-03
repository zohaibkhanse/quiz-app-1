import { useState } from "react";





const questionData = [
  {
    question: "Who is the CEO of Google?",
    options: [
      {
        option: "markzaker barg",
        active: false
      },
      
      {
        option:  "ahmad Ali",
        active: false
      },
      {
        option:  "John son",
        active: false
      },
      {
        option: "Sundar Pichai",
        active: false
      },
    ]

  },
  {
    question: "Abbreviation of HP.",

    options: [
      {
        option: "hewlett pak",
        active: false
      },
      
      {
        option:  "hewlett packard",
        active: false
      },
      {
        option:  "How pack",
        active: false
      },
      {
        option: "Hewlett-pocket",
        active: false
      },
    ]

  },
  {
    question: "Who is the CEO of Facebook?",

    options: [
      {
        option: "markzaker barg",
        active: false
      },
      
      {
        option:  "Ahmad Ali",
        active: false
      },
      {
        option:  "John son",
        active: false
      },
      {
        option: "Sundar Pichai",
        active: false
      },
    ]

  },
  {
    question: "Who is the CEO of Facebook22?",

    options: [
      {
        option: "markzaker barg",
        active: false
      },
      
      {
        option:  "Ahmad Ali",
        active: false
      },
      {
        option:  "John son",
        active: false
      },
      {
        option: "Sundar Pichai",
        active: false
      },
    ]

  },
  {
    question: "Who is the CEO of Facebook333?",

    options: [
      {
        option: "markzaker barg",
        active: false
      },
      
      {
        option:  "Ahmad Ali",
        active: false
      },
      {
        option:  "John son",
        active: false
      },
      {
        option: "Sundar Pichai",
        active: false
      },
    ]

  },
  
]

const correctOptions = ["sundar pichai", "hewlett packard",'markzaker barg'];



export default function App(){
  const [selectedOption, setSeletedOptions] = useState('');
  const [quizNumber, setQuizNumber] = useState(0);

  function handleSelectAnswer(answer, number, ){
    setSeletedOptions(answer);
    questionData[quizNumber].options.map((el) => el.active = false);
    questionData[quizNumber].options[number].active = true;
  }
  


 


  function handleNextQuizBtn(){
    setQuizNumber((num) => num === 4 ? 0 : ++num);
  }
 
  function handleBackQuizBtn(){
    setQuizNumber((num) => num === 0 ? 4 : --num);
  }

  return (
    <div className="quiz"> 
        <QuizQuestionAndOptions 
        questionData={questionData[quizNumber]} 
  
        onSelectAnswer={handleSelectAnswer}
        />
        <QuizBtns
         onBackQuizBtn={handleBackQuizBtn}
         onNextQuizBtn={handleNextQuizBtn} 
         quizNumber={quizNumber} 
          
          />
    </div>
  )
}

function QuizBtns({onBackQuizBtn, onNextQuizBtn,quizNumber}){
  return (
    <>
        <div className="quiz__btns">
          {quizNumber !== 0 && <button onClick={() => onBackQuizBtn()} className="btn btn-back">Back {quizNumber}</button>}
         {quizNumber !== 4 && <button onClick={() => onNextQuizBtn()} className="btn btn-next">Next {quizNumber+2} </button>}
        </div>
         <button className="btn btn-finish">Finish Quiz to show result</button>
    </>
  )
}

function QuizQuestionAndOptions({questionData, onSelectAnswer}){
  return(
    <div>
        <h1 className="question">Question: <span>{questionData.question}</span></h1>
        <div>

          {questionData.options.map( (el, i) => <QuizOption onSelectAnswer={onSelectAnswer} option={el.option} active={el.active} currentNumber={i}  />)}
         
        </div>
    </div>
  );
}

function QuizOption({onSelectAnswer, active, option, currentNumber, quizNumber}){
  return(
    <p className={`question-option ${active && 'active-option'}`} onClick={() => onSelectAnswer(option, currentNumber )}> <span className={`question-check-box ${active ? 'active-option-circle' : ''}`}></span> {option.toUpperCase()}</p>
  )
  ;
}



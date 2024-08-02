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



/*
// const questionData = [
//   {
//     question: "Who is the CEO of Google?",
//     options: [
//       {
//         option: "markzaker barg",
//         active: false
//       },
      
//       {
//         option:  "ahmad Ali",
//         active: false
//       },
//       {
//         option:  "John son",
//         active: false
//       },
//       {
//         option: "Sundar Pichai",
//         active: false
//       },
//     ]

//   },
//   {
//     question: "Abbreviation of HP.",

//     options: [
//       {
//         option: "hewlett pak",
//         active: false
//       },
      
//       {
//         option:  "hewlett packard",
//         active: false
//       },
//       {
//         option:  "How pack",
//         active: false
//       },
//       {
//         option: "Hewlett-pocket",
//         active: false
//       },
//     ]

//   },
//   {
//     question: "Who is the CEO of Facebook?",

//     options: [
//       {
//         option: "markzaker barg",
//         active: false
//       },
      
//       {
//         option:  "Ahmad Ali",
//         active: false
//       },
//       {
//         option:  "John son",
//         active: false
//       },
//       {
//         option: "Sundar Pichai",
//         active: false
//       },
//     ]

//   },
//   {
//     question: "Who is the CEO of Facebook22?",

//     options: [
//       {
//         option: "markzaker barg",
//         active: false
//       },
      
//       {
//         option:  "Ahmad Ali",
//         active: false
//       },
//       {
//         option:  "John son",
//         active: false
//       },
//       {
//         option: "Sundar Pichai",
//         active: false
//       },
//     ]

//   },
//   {
//     question: "Who is the CEO of Facebook333?",

//     options: [
//       {
//         option: "markzaker barg",
//         active: false
//       },
      
//       {
//         option:  "Ahmad Ali",
//         active: false
//       },
//       {
//         option:  "John son",
//         active: false
//       },
//       {
//         option: "Sundar Pichai",
//         active: false
//       },
//     ]

//   },
  
// ]

const correctOptions = ["sundar pichai", "hewlett packard",'markzaker barg'];



export default function App(){
  const [questionData, setQuestionData] = useState([
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
    
  ]);
  const [quizNumber, setQuizNumber] = useState(0);

  function handleSelectAnswer(answer, number, ){
    setQuestionData((data) => 
     data[quizNumber].options.map((el) => el.active = false)
  )
    setQuestionData((data) => 
      data[quizNumber].options[number].active = true
    )
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

*/
















/* 





const questionData = [
  {
    question: "Who is the CEO of Google?",
    // option1: "markzaker barg",
    // option2: "ahmad Ali",
    // option3: "John son",
    // option4: "Sundar Pichai",
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
    option1: "hewlett packard",
    option2: "Hewlett Pack",
    option3: "How pack",
    option4: "Hewlett-pocket",
    id:2

  },
  {
    question: "Who is the CEO of Facebook333?",
    option1: "markzaker barg",
    option2: "Ahmad Ali",
    option3: "John son",
    option4: "Sundar Pichai",
    id:3

  },
  {
    question: "Who is the CEO of Facebook444?",
    option1: "markzaker barg",
    option2: "Ahmad Ali",
    option3: "John son",
    option4: "Sundar Pichai",
    id:4
    
  },
  {
    question: "Who is the CEO of Facebook5555?",
    option1: "markzaker barg",
    option2: "Ahmad Ali",
    option3: "John son",
    option4: "Sundar Pichai",
    id:5
    
  }
]

const correctOptions = ["sundar pichai", "hewlett packard",'markzaker barg'];

const isSelected = [false, false, false];

export default function App(){
  const [selectedOption, setSeletedOptions] = useState('');
  const [quizNumber, setQuizNumber] = useState(0);

  function handleSelectAnswer(answer, number){
    setSeletedOptions(answer);
    isSelected.forEach((el, i) => {
        isSelected[i] = false;
    } );
    isSelected[number] = true;
  }
  
  function handleNextQuizBtn(){
    setQuizNumber((num) => num === 4 ? 0 : ++num);
    isSelected.forEach((el, i) => {
      isSelected[i] = false;
    } );
    
  }
  function handleBackQuizBtn(){
    setQuizNumber((num) => num === 0 ? 4 : --num);
    isSelected.forEach((el, i) => {
      isSelected[i] = false;
  } );
  
}

  return (
    <div className="quiz"> 
        <QuizQuestionAndOptions 
        questionData={questionData[quizNumber]} 
        isSelected={isSelected} 
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

function QuizBtns({onBackQuizBtn, onNextQuizBtn, quizNumber}){
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

function QuizQuestionAndOptions({questionData, onSelectAnswer, isSelected}){
  return(
    <div>
        <h1 className="question">Question: <span>{questionData.question}</span></h1>
        <div>
            <p className="question-option" onClick={() => onSelectAnswer(questionData.option1, 0)}> <span className={`question-check-box ${isSelected[0] ? 'active-option' : ''}`}></span> {questionData.option1.toUpperCase()}</p>
            <p className="question-option" onClick={() => onSelectAnswer(questionData.option2, 1)}> <span className={`question-check-box ${isSelected[1] ? 'active-option' : ''}`}></span> {questionData.option2.toUpperCase()}</p>
            <p className="question-option" onClick={() => onSelectAnswer(questionData.option3, 2)}> <span className={`question-check-box ${isSelected[2] ? 'active-option' : ''}`}></span> {questionData.option3.toUpperCase()}</p>
            <p className="question-option" onClick={() => onSelectAnswer(questionData.option4, 3)}> <span className={`question-check-box ${isSelected[3] ? 'active-option' : ''}`}></span> {questionData.option4.toUpperCase()}</p>
        </div>
    </div>
  );
}


*/
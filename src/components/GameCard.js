import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import{Row,Col} from 'react-bootstrap'
import { Buttons } from './Buttons';
import { AnswerBox } from './AnswerBox';
import Question from './Question'
import Form from 'react-bootstrap/Form'
import {CardFooter} from './CardFooter'
const GameCard = ()=>{
  let fetchedWord="" //the word fetched from the random words api
  const [wordDefinition,setWordDefinition]= useState(); //the real word definition
  const [correctAnswer, setCorrectAnswer] = useState(""); //the read word
  const [score,setScore] = useState(0) //user score
  const [footerText,setFooterText]=useState("Click me to start");
  const [displayAnswer,setDisplayAnswer] =useState("");
  let userAnswer=""; //userAnswer
  const fetchDefinition = async ()=>{
 
    const wordUrl = 'https://random-words-api.vercel.app/word';
    await fetch(wordUrl)
    .then(res=>res.json())
    .then(data=>{
      fetchedWord=data[0];
    })
    getWord(fetchedWord)
  }
const getWord = (fetchedWord)=>{
 setWordDefinition(fetchedWord.definition)
  setCorrectAnswer(fetchedWord.word)
}
const submitted = (event)=>{
  event.preventDefault();
  if(event.target[0].value==="" ){
   return
  }else{
    let x = event.target[0].value
    x=x.charAt(0).toUpperCase()+x.slice(1) // making the first letter capital
    tallyAnswers(x);
  }
  fetchDefinition();
  event.target[0].value=""; //reseting the text box
}
const tallyAnswers=(ax)=>{
  userAnswer = ax;
  if(ax===correctAnswer){
    setScore(score+1);
    setDisplayAnswer(correctAnswer)
  }else{
    setScore(score-1)
    setDisplayAnswer(correctAnswer)
  }
}
const updateScore=()=>{
  setScore(0);
}

  return(
    <div>
    <Card>
    <Card.Body>
      <Row>
        <Col className="scoreboard">
        <p> Score : {score}</p>
        <Buttons btnText="Reset" handleOnClick={()=>updateScore} score={score}></Buttons>
        </Col>
        <Col className="col-9 text-center">
        <Form onSubmit={submitted}>
          <Question wordDefinition={wordDefinition}></Question>
          <AnswerBox></AnswerBox>
          <Buttons btnText="Submit"></Buttons>
          </Form>
        </Col>
        </Row> 
       
        <Card.Footer>
        {/* <p className="text-center" onClick={()=>fetchDefinition(score)}>{footerText}</p> */}
        <CardFooter score={score} handleOnClick={()=>fetchDefinition()} answer={displayAnswer}></CardFooter>
        </Card.Footer> 
  </Card.Body>
</Card>
    </div>
  
  )
}
export default GameCard;
import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import{Row,Col} from 'react-bootstrap'
import { Buttons } from './Buttons';
import { AnswerBox } from './AnswerBox';
import Question from './Question'
import Form from 'react-bootstrap/Form'
const GameCard = ()=>{
  let fetchedWord="" //the word fetched from the random words api
  const [wordDefinition,setWordDefinition]= useState(); //the real word definition
  const [correctAnswer, setCorrectAnswer] = useState(""); //the read word
  const [score,setScore] = useState(0) //user score
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
  tallyAnswers(event.target[0].value)
  fetchDefinition();
}
const tallyAnswers=(ax)=>{
  const userans = ax;
  if(userans===correctAnswer){
    setScore(score+1);
  }
}

  return(
    <div>
      <p className="text-center" onClick={()=>fetchDefinition()}>Click here to get Started</p>
    <Card>
    <Card.Body>
      <Row>
        <Col className="scoreboard">
        <p> Score : {score}</p>
        <p>{correctAnswer}</p>
        <Buttons btnText="Reset"></Buttons>
        </Col>
        <Col className="col-9 text-center">
          <Form onSubmit={submitted}>
          <Question wordDefinition={wordDefinition}></Question>
          <AnswerBox></AnswerBox>
          <Buttons btnText="Submit"></Buttons>
          </Form>
        </Col>
        </Row>  
  </Card.Body>
</Card>
    </div>
  
  )
}
export default GameCard;
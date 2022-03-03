import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import{Row,Col} from 'react-bootstrap'
import { Buttons } from './Buttons';
import { AnswerBox } from './AnswerBox';
import Question from './Question'

const GameCard = ()=>{
  const [wordDefinition,setWordDefinition]= useState();
  const wordsURL = 'https://random-word-api.herokuapp.com/word?number=20&swear=0'
  let wordsList=[];

const getWords =()=>{
  const fetchWords= async ()=>{
    wordsList = await fetch(wordsURL)
    .then(res=>{return res.json()})
    .then(data=>wordsList.push(data));
    getWords(wordsList)
  }
  fetchWords();
}

const getData=(x)=>{
  const randomNumber = Math.ceil(Math.random()*(10-1)+1);
  console.log(x)
}
const getDefintion=()=>{
  const randomWord= "" || "hello";
  const definitionURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`
  const fetchDefinition= async ()=>{
   await fetch(definitionURL)
    .then(res=>res.json())
    .then(data=>{
    setWordDefinition(data[0].meanings[0].definitions[0].definition)
    })
    }
}
getData();
  return(
    <Card>
    <Card.Body>
      <Row>
        <Col className="scoreboard">
        <p> Score : 0.00</p>
        <Buttons btnText="Reset"></Buttons>
        </Col>
        <Col className="col-9 text-center">
          <Question wordDefinition={wordDefinition}></Question>
          <AnswerBox></AnswerBox>
          <Buttons btnText="Submit"></Buttons>
        </Col>
        </Row>  
  </Card.Body>
</Card>
  )
}
export default GameCard;
import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import{Row,Col} from 'react-bootstrap'
import { Buttons } from './Buttons';
import { AnswerBox } from './AnswerBox';
import Question from './Question'

const GameCard = ()=>{
  const [wordDefinition,setWordDefinition]= useState();
  const wordsURL = 'https://random-word-api.herokuapp.com/word?number=20&swear=0'

  const fetchWords= async ()=>{
      await fetch(wordsURL)
    .then(res=>{return res.json()})
    .then(data=>{
      let wordsList=[];
      wordsList.push(data[0]);
        getData(wordsList)
    })
  }


const getData=(x)=>{
const generateRandomNumber = ()=>{
  return (Math.ceil(Math.random()*(x.length-1)+1)); //assumming that there is atleast one data coming back 
}
  getDefintion(x[generateRandomNumber()])
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
fetchWords();
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
import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import{Row,Col} from 'react-bootstrap'
import { Buttons } from './Buttons';
import { AnswerBox } from './AnswerBox';
import Question from './Question'

const GameCard = ()=>{
  let fetchedWord="" //the word fetched from the random words api
  const [wordDefinition,setWordDefinition]= useState();
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
 console.log(fetchedWord);
}
  return(
    <div>
      <p className="text-center" onClick={()=>fetchDefinition()}>Click here to get Started</p>
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
          <Buttons btnText="Submit" handleOnClick={getWord}></Buttons>
        </Col>
        </Row>  
  </Card.Body>
</Card>
    </div>
  
  )
}
export default GameCard;
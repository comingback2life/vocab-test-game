import {useState} from 'react'
import Card from 'react-bootstrap/Card';
import{Row,Col} from 'react-bootstrap'
import { Buttons } from './Buttons';
import { AnswerBox } from './AnswerBox';
import Question from './Question'

const GameCard = ()=>{
  let randomWord="";
  const [wordDefinition,setWordDefinition]= useState();
  const fetchDefinition = ()=>{
    
  }
  return(
    <Card>
    <Card.Body>
      <Row>
        <Col className="scoreboard">
        <p> Score : 0.00</p>
        <Buttons btnText="Reset"></Buttons>
        </Col>
        <Col className="col-9 text-center">
          <Question wordDefinition={wordDefinition || "Click here to get started."}></Question>
          <AnswerBox></AnswerBox>
          <Buttons btnText="Submit"></Buttons>
        </Col>
        </Row>  
  </Card.Body>
</Card>
  )
}
export default GameCard;
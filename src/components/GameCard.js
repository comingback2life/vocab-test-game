import Card from 'react-bootstrap/Card';
import Title from './Title';
import{Row,Col} from 'react-bootstrap'
import { Buttons } from './Buttons';
import { AnswerBox } from './AnswerBox';
const GameCard = ()=>{
  return(
    <Card>
  <Card.Body>
      <Row>
        <Col className="scoreboard">
        <p> Score : 0.00</p>
        </Col>
        <Col className="col-9 text-center">
          <AnswerBox></AnswerBox>
          <Buttons value="Submit"></Buttons>
          <Buttons value="Reset"></Buttons>
        </Col>
        </Row>  
  </Card.Body>
</Card>
  )
}
export default GameCard;
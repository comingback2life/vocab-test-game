import Card from 'react-bootstrap/Card';
import Title from './Title';
import{Row,Col} from 'react-bootstrap'
import { Buttons } from './Buttons';
const GameCard = ()=>{
  return(
    <Card>
  <Card.Body>
      <Row>
        <Col>
        <p> Score : 0.00</p>
        </Col>
        <Col className="col-10">
          <Buttons></Buttons>
        </Col>
        </Row>  
  </Card.Body>
</Card>
  )
}
export default GameCard;
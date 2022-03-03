import Card from 'react-bootstrap/Card';
import Title from './Title';
import{Row,Col} from 'react-bootstrap'
const GameCard = ()=>{
  return(
    <Card>
  <Card.Body>
    <Row>
      <Col>
      <Title></Title>
      </Col>
    <Col>
    <p>Welcome</p>
    </Col>
    </Row>
   
  </Card.Body>
</Card>
  )
}
export default GameCard;
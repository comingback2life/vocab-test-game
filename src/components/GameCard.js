import Card from 'react-bootstrap/Card';
import Title from './Title';
import{Row,Col} from 'react-bootstrap'
const GameCard = ()=>{
  return(
    <Card>
  <Card.Body>
      <Row>
        <Col>
       <p>My Name is Anthony G</p> 
        </Col>
        </Row>  
  </Card.Body>
</Card>
  )
}
export default GameCard;
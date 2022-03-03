
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameCard from './components/GameCard';
import {Container,Row,Col} from 'react-bootstrap'
function App() {
  return (
    <div className="wrapper">
      <Container>
        <Row>
       <GameCard></GameCard>
     
        </Row>

      </Container>
      
      
    </div>
  );
}

export default App;

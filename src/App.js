
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameCard from './components/GameCard';
import {Container,Row,Col} from 'react-bootstrap'
import Footer from './components/Footer'
import Title from './components/Title';
function App() {
  return (
    <div>
    <div className="wrapper">
        <Title/>
      <Container>
        <Row>
       <GameCard></GameCard>
        </Row>

      </Container>
    </div>
    <Footer/>
    </div>
    
    
  );
}

export default App;

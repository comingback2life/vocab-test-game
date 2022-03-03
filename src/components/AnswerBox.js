import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
export const AnswerBox = ()=>{
  return(
    <InputGroup className="mb-3">
    <Form.Control type="text" placeholder="Enter your answer here" name="answer"/>
  </InputGroup>
  )
}
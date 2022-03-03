import Button from 'react-bootstrap/Button'

export const Buttons =({btnText})=>{
  {
    if(btnText==="Submit"){
     return <Button variant="success" className='m-2' type="Submit">{btnText}</Button>
    }else{
      return <Button variant="danger" className='m-2'>{btnText}</Button>
    }
  }
}
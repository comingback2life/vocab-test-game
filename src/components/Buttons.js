import Button from 'react-bootstrap/Button'

export const Buttons =({value})=>{
  {
    if(value==="Submit"){
     return <Button variant="success" className='m-2'>{value}</Button>
    }else{
      return <Button variant="danger" className='m-2'>{value}</Button>
    }
  }
}
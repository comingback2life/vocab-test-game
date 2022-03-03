import {useState} from 'react'
const Question = ({wordDefinition})=>{
  
  return(
    <blockquote className="blockquote mb-3">
    <p>
      {wordDefinition}
    </p>
  </blockquote>
  )
}
export default Question;
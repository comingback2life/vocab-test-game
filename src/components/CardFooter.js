import React from 'react'

export const CardFooter = ({handleOnClick,score,answer}) => {
  if(score===0){
    return (
      <p className="text-center" onClick={handleOnClick}>Click me to start</p>
    )
  }else{
      return (
        <p className="text-center">The correct answer is {answer}</p>
      )
    
  
  }

}

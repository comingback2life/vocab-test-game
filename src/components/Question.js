import {useState} from 'react'
const Question = ()=>{
  const wordsURL = 'https://random-word-api.herokuapp.com/word?number=10&swear=0'
  let wordsList=[];
  const fetchWords= async ()=>{
    wordsList = await fetch(wordsURL)
    .then(res=>res.json())
    .then(data=>wordsList=data);
    getData(wordsList)
  }
const getData=(x)=>{
  console.log(x)
}
fetchWords();
  return(
    <blockquote className="blockquote mb-3">
    <p>
    </p>
  </blockquote>
  )
}
export default Question;
const Question = ()=>{
  const wordsURL = 'https://random-word-api.herokuapp.com/word?number=10&swear=0'
  let wordsList=[];
  const [listOfWords,setListOfWords] = useState(0)
  const fetchWords= async ()=>{
    wordsList = await fetch(wordsURL)
    .then(data=>wordsList=data);

    getData(wordsList)
  }
const getData=(x)=>{
  const newWord = x[2];
  console.log(newWord)
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
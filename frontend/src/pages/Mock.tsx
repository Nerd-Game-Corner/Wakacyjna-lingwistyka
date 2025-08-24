import { useEffect, useState } from "react";

interface word {
  eng: string;
  pl: string;
}
interface MockData {
  name: string;
  words: word[];
}
interface Answer{
  text: string;
  correct: boolean;
}

export default function Mock() {
  const [data, setData] = useState<MockData | null> (null);
  const [answers, setAnswers] = useState<Answer[]> ([]);

  useEffect(() => {
    fetch("/mock.JSON")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load JSON", err));
  }, []);
  
  useEffect( () => {
    if(data){
        setAnswers(data.words.map( () => ({ text: "", correct: false })));
      }
  }, [data]);

  if(!data) return <div> Loading... </div>;


  function handleChange(index: number, value: any){
    setAnswers( (prev) => 
      prev.map( (a, i) => {
        if (i === index) {
          const isCorrect = (data!.words[i].pl === value.trim());
          return { text: value, correct: isCorrect };
        }
        return a;
      })
    );
  }

  return (
    <>
    <header>exercise is: {data.name}</header>
     {data.words.map( (word, index) => (
        <div key={word.eng}>
            {word.eng} to jest po polsku: 
            <input
              type="text"
              value={answers[index]?.text ?? ""}
              onChange={ (e) => handleChange(index, e.target.value)}
            />
            {(answers[index]?.correct ?? "" ) ? <span style={{color:"green"}}>✔</span> : <span style={{color:"red"}}>✖</span> }
        </div>
     ))}
    </>
  );
}
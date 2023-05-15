import { useState } from 'react';
import './exercises.css'

const Alternative = ({ letter, alternative, id }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div className='alternative'>
      <button
        className={id === selectedButton ? 'clickedLetter' : 'letter'}
        onClick={() => id === selectedButton ? setSelectedButton(null) : setSelectedButton(id)}>
        {letter}
      </button>
      <p className='alternatives'>{alternative}</p>
    </div>
  )
};

export const Question = ({ mensagem, id }) => {

  const alterntives = mensagem["exercicio 1"]["alternativas"]
  const alterntivesObj = Object.entries(alterntives);

  return (
    <>
      <div className='question'>
        <p className='statement'> {mensagem["exercicio 1"]["enunciado"]} </p>
        {alterntivesObj.map(([key, value]) => (
          <Alternative letter={key} alternative={value} id={id} />
        ))}
      </div>
    </>
  );
};

export default Question;

import { useState } from 'react';
import './exercises.css'

const Alternative = ({ letter, alternative }) => {

  const [style, setStyle] = useState('letter');

  return (
    <div className='alternative'>
      <button className={style} onClick={() => setStyle(style === 'letter' ? 'clickedLetter' : 'letter')}>
        {letter}
      </button>
      <p className='alternatives'>{alternative}</p>
    </div>
  )
};

export const Question = ({ mensagem }) => {

  const alterntives = Object.entries(mensagem["alternativas"]);

  return (
    <>
      <div className='question'>
        <p className='statement'> {mensagem["enunciado"]} </p>

        {alterntives.map(([key, value]) => (
          <Alternative letter={key} alternative={value} />
        ))}
      </div>
    </>
  );
};

export default Question;

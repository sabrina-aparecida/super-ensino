import React, { useState } from 'react';
import Exercices from '../exercices';
import Question from '../exercices/exercise';
import '../matters/matters.css'

export const Matters = ({ questions, matterTitle }) => {

  const [showExercises, setShowExercises] = useState(false);
  const [chamamodal, setchama] = useState(false);
  const [style, setStyle] = useState('button');
  const [mensagem, setMensagem] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (id) => {
    if (id === selectedButton) {
      setSelectedButton(null);
    } else {
      setSelectedButton(id);
    }
  };

  return (
    <div className='matter-title-div'>
      <p className='matter-title'>{matterTitle}</p>

      <div className='open-exercises'>

        <button
          className={style} onClick={() => {
            setStyle(style === 'button' ? 'buttonSelectedStyle' : 'button');
            setShowExercises(showExercises ? false : true)
          }}
        />
      </div>

      <div className='all-exercises'>
        <div className='show-exercises'>
          {showExercises &&

            questions.map((item) => (
              <>
                {console.log(item)}
                <Exercices
                  key={item.id}
                  style={item.id === selectedButton ? 'exercise-selected' : 'exercise'}
                  exercise={item["exercicio 1"]["numero"]}
                  onClick={() => {
                    handleButtonClick(item.id)
                    setchama(chamamodal && item.id === selectedButton ? false : true)
                    setMensagem(item["exercicio 1"])
                  }} />
              </>
            )
            )}
        </div>

        {chamamodal && showExercises &&
          <div className='questions-component'>
            <Question mensagem={mensagem} />
          </div>}
      </div>

    </div>
  );
};

export default Matters;

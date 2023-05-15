import React, { useState } from 'react';
import Exercices from '../exercices';
import Question from '../exercices/exercise';
import '../matters/matters.css'

export const Matters = ({ questions, matterTitle }) => {

  const [showExercises, setShowExercises] = useState(false);
  const [callModal, setchama] = useState(false);
  const [style, setStyle] = useState('button');
  const [message, setMessage] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (id) => {
    id === selectedButton ? setSelectedButton(null) : setSelectedButton(id);
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
                <Exercices
                  key={item.id}
                  style={item.id === selectedButton ? 'exercise-selected' : 'exercise'}
                  exercise={item["exercicio 1"]["numero"]}
                  onClick={() => {
                    handleButtonClick(item.id)
                    setchama(callModal && item.id === selectedButton ? false : true)
                    setMessage(item)
                  }} />
              </>
            )
            )}
        </div>

        {callModal && showExercises &&
          <div className='questions-component'>
            <Question message={message} id={selectedButton} />
          </div>}
      </div>

    </div>
  );
};

export default Matters;

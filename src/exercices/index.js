import './exercises.css'

export const Exercices = ({ exercise, onClick, style, key }) => {

  return (
    <div className='exercise-button'>
      <button className={style} onClick={onClick} key={key}>
        {exercise}
      </button>
    </div>

  );
};

export default Exercices;
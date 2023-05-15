import React from 'react';
import Matters from './matters';
import ALL_MATTERS from './matters/all_matters.js'
import './App.css';

function App() {

  return (
    <>
      <div className="app">
        {ALL_MATTERS.map(item => {
          return (
            <div >
              <Matters
                matterTitle={item["materia"]}
                questions={item["questoes"]}
                info={item} />
            </div>
          )
        })}
      </div>
    </>
  );
};

export default App;

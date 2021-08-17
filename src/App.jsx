import React, { useState } from 'react';
import './App.scss';
import { ModalWindow } from './components/ModalWindow';
import { ScoreBoard } from './components/ScoreBoard/ScoreBoard';
import { TicTacToe } from './components/TicTacToe';

const App = () => {
  const [firstPlayerName, setFirstPlayerName] = useState('');
  const [secondPlayerName, setSecondPlayerName] = useState('');
  const [firstPlayerWinsCounter, setFirstPlayerWinsCounter] = useState(0);
  const [secondPlayerWinsCounter, setSecondPlayerWinsCounter] = useState(0);

  const addNames = (firstName, secondName) => {
    setFirstPlayerName(firstName);
    setSecondPlayerName(secondName);
  };

  const updateScore = (player) => {
    const playerName = (player === 'X')
      ? firstPlayerName
      : secondPlayerName;

    if (player === 'X') {
      setFirstPlayerWinsCounter(count => count + 1);
    } else {
      setSecondPlayerWinsCounter(count => count + 1);
    }

    alert(`${playerName} won!`);
  };

  return (
    <div className="section">
      {
        (!firstPlayerName || !secondPlayerName)
        && <ModalWindow addNames={addNames} />
      }

      <TicTacToe
        updateScore={updateScore}
      />

      <ScoreBoard
        firstPlayerName={firstPlayerName}
        secondPlayerName={secondPlayerName}
        firstPlayerWinsCounter={firstPlayerWinsCounter}
        secondPlayerWinsCounter={secondPlayerWinsCounter}
      />
    </div>
  );
};

export default App;

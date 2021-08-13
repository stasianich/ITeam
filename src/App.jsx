import React from 'react';
import './App.scss';
import { ModalWindow } from './components/ModalWindow';
import { ScoreBoard } from './components/ScoreBoard/ScoreBoard';
import { TicTacToe } from './components/TicTacToe';

class App extends React.PureComponent {
  state = {
    firstPlayerName: 'p1',
    secondPlayerName: 'p2',
    firstPlayerWins: 0,
    secondPlayerWins: 0,
  };

  addNames = (firstPlayerName, secondPlayerName) => {
    this.setState({
      firstPlayerName,
      secondPlayerName,
    });
  }

  updateScore = (player) => {
    const {
      firstPlayerName,
      secondPlayerName,
    } = this.state;

    const playerName = (player === 'X')
      ? firstPlayerName
      : secondPlayerName;

    const playerCount = (player === 'X')
      ? 'firstPlayerWins'
      : 'secondPlayerWins';

    alert(`${playerName} won!`);

    this.setState(state => ({
      [playerCount]: state[playerCount] + 1,
    }));
  }

  render() {
    const {
      firstPlayerName,
      secondPlayerName,
      firstPlayerWins,
      secondPlayerWins,
    } = this.state;

    return (
      <div className="section">
        {
          (!firstPlayerName || !secondPlayerName)
          && <ModalWindow addNames={this.addNames} />
        }

        <TicTacToe
          updateScore={this.updateScore}
        />

        <ScoreBoard
          firstPlayerName={firstPlayerName}
          secondPlayerName={secondPlayerName}
          firstPlayerWins={firstPlayerWins}
          secondPlayerWins={secondPlayerWins}
        />
      </div>
    );
  }
}

export default App;

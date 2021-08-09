import React from 'react';
import PropTypes from 'prop-types';
import './TicTacToe.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

export class TicTacToe extends React.PureComponent {
  state = {
    field: Array(9).fill(null),
    count: 0,
    winningCombination: null,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.field !== this.state.field) {
      setTimeout(() => (this.isWinner()), 0);
    }
  }

  clickCell = (event) => {
    const { name: position } = event.target;
    const { field, count } = this.state;

    const updatedField = [...field];

    if (updatedField[position] === null) {
      updatedField[position] = (count % 2 === 0 ? 'X' : 'O');

      this.setState((state) => {
        return {
          count: state.count + 1,
          field: updatedField,
        };
      });
    }
  }

  isWinner = () => {
    const { field, count } = this.state;

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const player = (count % 2 === 0 ? 'O' : 'X');

    for (let i = 0; i < 8; i += 1) {
      const line = winningCombinations[i];

      if (field[line[0]] === player
        && field[line[1]] === player
        && field[line[2]] === player) {
        this.setState({ winningCombination: i + 1 });

        setTimeout(() => {
          this.props.updateScore(player);
          this.clearBoard();
        }, 200);

        return;
      }
    }

    if (!field.includes(null)) {
      alert('Draw');
      this.clearBoard();
    }
  }

  clearBoard = () => {
    this.setState({
      field: Array(9).fill(null),
      count: 0,
      winningCombination: null,
    });
  }

  render() {
    const {
      field,
      winningCombination,
    } = this.state;

    return (
      <div className="tic-tac-toe">
        {field.map((cell, i) => {
          return (
            <button
              type="button"
              name={i}
              onClick={this.clickCell}
              className="tic-tac-toe__cell"
              key={uuidv4()}
            >
              {field[i]}
            </button>
          );
        })}
        {
          winningCombination
          && (
          <div className={
            classNames(
              'winning-line',
              {
                firstCombination: winningCombination === 1,
                secondCombination: winningCombination === 2,
                thirdCombination: winningCombination === 3,
                fourthCombination: winningCombination === 4,
                fifthCombination: winningCombination === 5,
                sixthCombination: winningCombination === 6,
                seventhCombination: winningCombination === 7,
                eighthCombination: winningCombination === 8,
              },
            )
          }
          />
          )
        }
      </div>
    );
  }
}

TicTacToe.propTypes = {
  updateScore: PropTypes.func.isRequired,
};

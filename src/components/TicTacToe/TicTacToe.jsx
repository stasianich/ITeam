import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TicTacToe.scss';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

export const TicTacToe = ({ updateScore }) => {
  const [field, updateField] = useState(Array(9).fill(null));
  const [count, setCount] = useState(0);
  const [winningCombination, setWinningCombination] = useState(null);

  const clickCell = (event) => {
    const { name: position } = event.target;

    const updatedField = [...field];

    if (updatedField[position] === null) {
      updatedField[position] = (count % 2 === 0 ? 'X' : 'O');

      setCount(count + 1);
      updateField(updatedField);
    }
  };

  const isWinner = () => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const currentPlayer = (count % 2 === 0 ? 'O' : 'X');

    let winnerFound = false;

    combinations.forEach((line, i) => {
      if (field[line[0]] === currentPlayer
        && field[line[1]] === currentPlayer
        && field[line[2]] === currentPlayer) {
        setWinningCombination(i + 1);
        winnerFound = true;

        setTimeout(() => {
          updateScore(currentPlayer);
          clearBoard();
        }, 200);
      }
    });

    if (!winnerFound) {
      checkDraw();
    }
  };

  const checkDraw = () => {
    if (!field.includes(null)) {
      alert('Draw');
      clearBoard();
    }
  };

  const clearBoard = () => {
    updateField(Array(9).fill(null));
    setCount(0);
    setWinningCombination(null);
  };

  useEffect(() => {
    isWinner();
  }, [field]);

  return (
    <div className="tic-tac-toe">
      {field.map((cell, i) => {
        return (
          <button
            type="button"
            name={i}
            onClick={clickCell}
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
};

TicTacToe.propTypes = {
  updateScore: PropTypes.func.isRequired,
};

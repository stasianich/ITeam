import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './TicTacToe.scss';
import classNames from 'classnames';

export const TicTacToe = ({ updateScore }) => {
  const [board, updateBoard] = useState([
    {
      id: 0,
      value: null,
    },
    {
      id: 1,
      value: null,
    },
    {
      id: 2,
      value: null,
    },
    {
      id: 3,
      value: null,
    },
    {
      id: 4,
      value: null,
    },
    {
      id: 5,
      value: null,
    },
    {
      id: 6,
      value: null,
    },
    {
      id: 7,
      value: null,
    },
    {
      id: 8,
      value: null,
    },
  ]);
  const [count, setCount] = useState(0);
  const [winningCombination, setWinningCombination] = useState(null);

  const clickCell = (event) => {
    const { name: position } = event.target;

    updateBoard(board.map((cell) => {
      if (cell.id === +position && cell.value === null) {
        return {
          id: +position, value: (count % 2 === 0 ? 'X' : 'O'),
        };
      }

      return cell;
    }));

    setCount(value => value + 1);
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
      if (board[line[0]].value === currentPlayer
        && board[line[1]].value === currentPlayer
        && board[line[2]].value === currentPlayer) {
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
    if (board.every(cell => cell.value !== null)) {
      alert('Draw');
      clearBoard();
    }
  };

  const clearBoard = () => {
    updateBoard([
      {
        id: 0,
        value: null,
      },
      {
        id: 1,
        value: null,
      },
      {
        id: 2,
        value: null,
      },
      {
        id: 3,
        value: null,
      },
      {
        id: 4,
        value: null,
      },
      {
        id: 5,
        value: null,
      },
      {
        id: 6,
        value: null,
      },
      {
        id: 7,
        value: null,
      },
      {
        id: 8,
        value: null,
      },
    ]);
    setCount(0);
    setWinningCombination(null);
  };

  useEffect(() => {
    isWinner();
    clearInterval();
  }, [board]);

  return (
    <div className="tic-tac-toe">
      {board.map((cell, i) => {
        return (
          <button
            type="button"
            name={i}
            onClick={event => clickCell(event)}
            className="tic-tac-toe__cell"
            key={cell.id}
          >
            {cell.value}
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

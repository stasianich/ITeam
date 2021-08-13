import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

export const ModalWindow = ({ addNames }) => {
  const [firstPlayerName, setFirstPlayerName] = useState('');
  const [secondPlayerName, setSecondPlayerName] = useState('');

  const updateName = (event) => {
    const { name, value } = event.target;

    if (name === 'firstPlayerName') {
      setFirstPlayerName(value);
    } else if (name === 'secondPlayerName') {
      setSecondPlayerName(value);
    }
  };

  return (
    <div className="modalContainer">
      <div className="modalWindow window">
        <form
          className="enter-nicknames-form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="enter-nicknames-form__title">
            Please, enter nicknames
          </div>
          <input
            type="text"
            name="firstPlayerName"
            className="enter-nicknames-form__first-player-name"
            placeholder="Enter first player name"
            value={firstPlayerName}
            onChange={updateName}
          />
          <input
            type="text"
            name="secondPlayerName"
            className="enter-nicknames-form__second-player-name"
            placeholder="Enter second player name"
            value={secondPlayerName}
            onChange={updateName}
          />
          <button
            type="submit"
            className="enter-nicknames-form__submit-button"
            onClick={() => addNames(firstPlayerName, secondPlayerName)}
          >
            Add names
          </button>
        </form>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  addNames: PropTypes.func.isRequired,
};

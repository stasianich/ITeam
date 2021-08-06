import React from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.scss';

export class ModalWindow extends React.PureComponent {
  state = {
    firstPlayerName: '',
    secondPlayerName: '',
  };

  updateName = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { addNames } = this.props;

    const {
      firstPlayerName,
      secondPlayerName,
    } = this.state;

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
              onChange={this.updateName}
            />
            <input
              type="text"
              name="secondPlayerName"
              className="enter-nicknames-form__second-player-name"
              placeholder="Enter second player name"
              value={secondPlayerName}
              onChange={this.updateName}
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
  }
}

ModalWindow.propTypes = {
  addNames: PropTypes.func.isRequired,
};

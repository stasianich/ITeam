import React from 'react';
import './ScoreBoard.scss';
import PropTypes from 'prop-types';

export const ScoreBoard = ({
  firstPlayerName,
  secondPlayerName,
  firstPlayerWins,
  secondPlayerWins,
}) => (
  <div className="score">
    <div className="score__title">
      Score:
    </div>
    <div className="score__first-player">
      {`${firstPlayerName}: ${firstPlayerWins}`}
    </div>
    <div className="score__second-player">
      {`${secondPlayerName}: ${secondPlayerWins}`}
    </div>
  </div>
);

ScoreBoard.propTypes = {
  firstPlayerName: PropTypes.string.isRequired,
  firstPlayerWins: PropTypes.number.isRequired,
  secondPlayerName: PropTypes.string.isRequired,
  secondPlayerWins: PropTypes.number.isRequired,
};

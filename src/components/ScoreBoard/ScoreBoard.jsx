import React from 'react';
import './ScoreBoard.scss';
import PropTypes from 'prop-types';

export const ScoreBoard = React.memo(({
  firstPlayerName,
  secondPlayerName,
  firstPlayerWinsCounter,
  secondPlayerWinsCounter,
}) => (
  <div className="score">
    <div className="score__title">
      Score:
    </div>
    <div className="score__first-player">
      {`${firstPlayerName}: ${firstPlayerWinsCounter}`}
    </div>
    <div className="score__second-player">
      {`${secondPlayerName}: ${secondPlayerWinsCounter}`}
    </div>
  </div>
));

ScoreBoard.propTypes = {
  firstPlayerName: PropTypes.string.isRequired,
  firstPlayerWinsCounter: PropTypes.number.isRequired,
  secondPlayerName: PropTypes.string.isRequired,
  secondPlayerWinsCounter: PropTypes.number.isRequired,
};

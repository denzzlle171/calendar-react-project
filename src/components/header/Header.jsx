import React from 'react';
import './header.scss';
import PropTypes from 'prop-types';

const Header = ({
  clickBack,
  clickAhead,
  clickToday,
  curentMonth,
  setActiv,
  activ,
}) => {
  return (
    <header className="header">
      <button
        onClick={() => setActiv((activ = true))}
        className="button create-event-btn"
      >
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button onClick={clickToday} className="navigation__today-btn button">
          Today
        </button>
        <button
          onClick={clickBack}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={clickAhead}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{curentMonth}</span>
      </div>
    </header>
  );
};


Header.propTypes = {
  clickBack: PropTypes.func.isRequired,
  clickAhead: PropTypes.func.isRequired,
  clickToday: PropTypes.func.isRequired,
  curentMonth: PropTypes.string.isRequired,
  setActiv: PropTypes.func.isRequired,
  activ: PropTypes.bool.isRequired,
};
export default Header;



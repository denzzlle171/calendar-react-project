import React from 'react';
import './popUp.scss';
import { deleteEventItem } from '../../gateway/events';
import PropTypes from 'prop-types';

const PopUp = ({
  popupActiv,
  setPopupActiv,
  coordinates,
  changeId,
  fetchEvents,
}) => {
  const deleteEvent = () => {
    deleteEventItem(changeId).then((res) => fetchEvents(res));
    setPopupActiv(( false));
  };

  return (
    <div className={popupActiv ? 'popup' : 'popup-hiden'}>
      <div
        className="popup__overlay"
        onClick={() => setPopupActiv((false))}
      ></div>
      <div
        style={{ left: coordinates.x, top: coordinates.y }}
        className="popup__content"
      >
        <button onClick={deleteEvent} className="delete-event-btn">
          <i className="fas fa-trash"></i> Delete
        </button>
      </div>
    </div>
  );
};

PopUp.propTypes = {
  popupActiv: PropTypes.bool,
  setPopupActiv: PropTypes.func,
  coordinates: PropTypes.object,
  changeId: PropTypes.string,
  fetchEvents: PropTypes.func,
};

export default PopUp;



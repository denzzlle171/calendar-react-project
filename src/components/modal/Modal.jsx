import React, { useState} from 'react';
import './modal.scss';
import { creteEvent } from '../../gateway/events';

const Modal = ({ activ, setActiv, fetchEvents }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: title,
      description: description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };

    creteEvent(newEvent).then(res=>fetchEvents(res))

    e.target.title.value = '';
    e.target.date.value = '';
    e.target.startTime.value = '';
    e.target.endTime.value = '';
    e.target.description.value = '';
   
    setActiv((activ = false));
  };

  return (
    <div className={activ ? 'modal-wraper' : 'modal-wraper modal-hiden'}>
      <div className="modal overlay ">
        <div className="modal__content">
          <div className="create-event">
            <button
              onClick={() => setActiv((activ = false))}
              className="create-event__close-btn"
            >
              +
            </button>
            <form onSubmit={onSubmit} className="event-form">
              <input
                values={title}
                onChange={(e) => setTitle(e.target.value)} //
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field title"
              />
              <div className="event-form__time">
                <input
                  values={date}
                  onChange={(e) => setDate(e.target.value)} //
                  type="date"
                  name="date"
                  className="event-form__field time"
                />
                <input
                  values={startTime}
                  onChange={(e) => setStartTime(e.target.value)} //
                  type="time"
                  name="startTime"
                  className="event-form__field "
                />
                <span>-</span>
                <input
                  values={endTime}
                  onChange={(e) => setEndTime(e.target.value)} //
                  type="time"
                  name="endTime"
                  className="event-form__field"
                />
              </div>
              <textarea
                values={description}
                onChange={(e) => setDescription(e.target.value)} //
                name="description"
                placeholder="Description"
                className="event-form__field description"
              ></textarea>
              <button type="submit" className="event-form__submit-btn ">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};;


export default Modal;

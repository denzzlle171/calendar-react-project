import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Calendar from './components/calendar/Calendar';
import {
  getWeekStartDate,
  generateWeekRange,
  getDisplayedMonth,
} from '../src/utils/dateUtils.js';
import moment from 'moment';
import './common.scss';
import Modal from './components/modal/Modal';
import { getEventList } from './gateway/events'; //

const App = () => {
  let [weekStartDate, setWeekStartDate] = useState(new Date());

  const [modalActiv, setModalActiv] = useState(false);

  const [eventList, setEventList] = useState([]); //

  const fetchEvents = () => getEventList().then(setEventList);

  useEffect(() => {
    fetchEvents();
  }, []);

  const backwardWeek = () => {
    setWeekStartDate(moment(weekStartDate).subtract(7, 'days')._d);
  };
  const forwardWeek = () => {
    setWeekStartDate(moment(weekStartDate).add(7, 'days')._d);
  };
  const curentWeek = () => {
    setWeekStartDate(new Date());
  };

  const curentMonth = getDisplayedMonth(weekStartDate);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const newEventList = eventList.map((ev) => {
    const { title, id, description, dateFrom, dateTo } = ev;
    return {
      title,
      id,
      description,
      dateFrom: new Date(dateFrom),
      dateTo: new Date(dateTo),
    };
  });

  return (
    <>
      <Header
        clickBack={backwardWeek}
        clickAhead={forwardWeek}
        clickToday={curentWeek}
        curentMonth={curentMonth}
        setActiv={setModalActiv}
        activ={modalActiv}
      />
      <Calendar
        weekDates={weekDates}
        events={newEventList}
        setEvent={setEventList}
        fetchEvents={fetchEvents}
      />
      <Modal
        activ={modalActiv}
        setActiv={setModalActiv}
        fetchEvents={fetchEvents}
      />
    </>
  );
};

export default App;

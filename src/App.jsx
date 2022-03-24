import React, {useState} from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import {
  getWeekStartDate,
  generateWeekRange,
  getDisplayedMonth,
} from '../src/utils/dateUtils.js';
import moment from 'moment';
import './common.scss';
import Modal from './components/Modal/Modal.jsx';
// import PopUp from './components/popup/PopUp.jsx';



const App =()=> {

  let [weekStartDate, setWeekStartDate] = useState(new Date());
 
  const [modalActiv, setModalActiv] = useState(false)
  

  const backwardWeek = () => {
    setWeekStartDate(weekStartDate = (moment(weekStartDate).subtract(7, 'days'))._d);
  }
  const forwardWeek = () => {
    setWeekStartDate((weekStartDate = moment(weekStartDate).add(7, 'days')._d));
  };
  const curentWeek = () => {
    setWeekStartDate(weekStartDate = new Date())
  }

  const curentMonth =  getDisplayedMonth(weekStartDate);
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

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
        <Calendar weekDates={weekDates} />
        <Modal activ={modalActiv} setActiv={setModalActiv} />
      </>
    );
  }


export default App;



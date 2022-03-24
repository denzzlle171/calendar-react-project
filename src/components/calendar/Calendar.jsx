import React, {useState} from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';
import PopUp from '../popUp/PopUp';
import './calendar.scss';

const Calendar = ({ weekDates }) => {
  const [event, setEvent] = useState(events);
  const [popupActiv, setPopupActiv] = useState(false);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  
// console.log(coordinates);
  
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />

      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <PopUp
            popupActiv={popupActiv}
            setPopupActiv={setPopupActiv}
            coordinates={coordinates}
          />
          <Week
            weekDates={weekDates}
            events={event}
            popupActiv={popupActiv}
            setPopupActiv={setPopupActiv}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
        </div>
      </div>
    </section>
  );
};


export default Calendar;

// class Calendar extends Component {
//   state = {
//     events,
//   };

//   render() {
//     const { weekDates } = this.props;

//     return (
//       <section className="calendar">
//         <Navigation weekDates={weekDates} />
//         <div className="calendar__body">
//           <div className="calendar__week-container">
//             <Sidebar />
//             <Week weekDates={weekDates} events={this.state.events} />
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Calendar;

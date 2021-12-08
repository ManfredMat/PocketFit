import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./Styles/CalendarStyled";
import moment from 'moment';
import { getEvents } from "../../redux/Actions/actions-Activities"



function Calendar({ year, month }) {
  const events = useSelector(state => state.activities.events)
  const dispatch = useDispatch();
  var daysMonth = parseInt(moment(month, "M").endOf("month").format("D"));
  var StartName = parseInt(moment(month, "M").startOf("month").format("d"));
  let firstDay = parseInt(moment(month, "M").startOf("month").format("D"));
  //Function to create an array with all the days of the month

  function range(start, end, nameDay) {
    return [...Array((nameDay - 1) - 1 + 1).fill().map((_, idx) => 1 + idx), ...Array(end - start + 1).fill().map((_, idx) => start + idx)]
  }
  var weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  useEffect(() => {
    dispatch(getEvents())
  }, []);

  console.log(events)
  console.log("Filtrados",events.filter((event)=> event.month === parseInt(month)))
  return (
    <Styles.StyledContainer>
      <Styles.GlobalStyle />
      <Styles.StyledGrid>
        {weekDays.map((day) => (
          <Styles.StyledDaysContainers>{day}</Styles.StyledDaysContainers>
        ))}

        {range(firstDay, daysMonth, StartName).map((day, index) => index >= StartName - 1 ? <Styles.StyledCalendarContainers>
          <Styles.eventsContainer name="Eventos">
          {events.filter((event)=> event.month === parseInt(month))
         .map((event)=> event.day === day && <Styles.EventeInCalendarContainer>
           <p style={{hyphens: "auto"}}>{event.name}</p>
           </Styles.EventeInCalendarContainer>)
          }
          </Styles.eventsContainer>

          <Styles.NumContainer>
            <Styles.Num>{day}</Styles.Num>
          </Styles.NumContainer>
        </Styles.StyledCalendarContainers> : <div></div>)
        }
      </Styles.StyledGrid>
    </Styles.StyledContainer>
  );
}

export default Calendar;

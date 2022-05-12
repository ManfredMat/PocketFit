import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Styles from "./Styles/CalendarStyled";
import moment from "moment";
import { getEvents } from "../../redux/Actions/actions-Activities";
import EventDetail from "../Activities/EventDetail";

function Calendar({ year, month, big }) {
  const events = useSelector((state) => state.activities.events);
  const dispatch = useDispatch();
  const [eventoDetalle, setEventoDetalle] = React.useState(false);
  const [eventoId, setEventoId] = useState("");
  var daysMonth = parseInt(moment(month, "M").endOf("month").format("D"));
  var StartName = parseInt(moment(month, "M").startOf("month").format("D"));
  let firstDay = parseInt(moment(month, "M").startOf("month").format("D"));
  //Function to create an array with all the days of the month

  function range(start, end, nameDay) {
    return [
      ...Array(nameDay - 1 - 1 + 1)
        .fill()
        .map((_, idx) => 1 + idx),
      ...Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx),
    ];
  }
  var weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  //console.log(events)
  //console.log("Filtrados",events.filter((event)=> event.month === parseInt(month)))
  return (
    <Styles.StyledContainer>
      <Styles.GlobalStyle />
      <Styles.StyledGrid>
        {weekDays.map((day) => (
          <Styles.StyledDaysContainers>{day}</Styles.StyledDaysContainers>
        ))}

        {range(firstDay, daysMonth, StartName).map((day, index) =>
          index >= StartName - 1 ? (
            <Styles.StyledCalendarContainers>
              <Styles.EventsContainer name="Eventos">
                {events &&
                  events
                    .filter((event) => event.month === parseInt(month))
                    .map(
                      (event) =>
                        event.day === day && (
                          <Styles.EventeInCalendarContainer>
                            <Styles.EventParaghrap
                              onClick={() => {
                                setEventoId(event.id);
                                setEventoDetalle(!eventoDetalle);
                              }}
                            >
                              {big ? 
                                event.name
                              : event.name.length >= 11
                                ? event.name.substr(0, 8) + "..."
                                : event.name}
                            </Styles.EventParaghrap>
                          </Styles.EventeInCalendarContainer>
                        )
                    )}
              </Styles.EventsContainer>

              <Styles.NumContainer>
                <Styles.Num>{day}</Styles.Num>
              </Styles.NumContainer>
            </Styles.StyledCalendarContainers>
          ) : (
            <div></div>
          )
        )}
      </Styles.StyledGrid>
      {eventoDetalle && (
        <EventDetail id={eventoId} display={setEventoDetalle} />
      )}
    </Styles.StyledContainer>
  );
}

export default Calendar;

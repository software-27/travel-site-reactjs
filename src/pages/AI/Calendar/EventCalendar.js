import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Col, Row } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Alert from "sweetalert2";

class EventCalendar extends Component {
   state = {
      calendarEvents: [
         {
            title: "KL Tower",
            start: new Date("2023-04-04 10:00"),
            slotDuration: '00:30:00',
            id: "99999998",
         },
         {
            title: "Visit Mosque",
            start: new Date("2023-04-05 12:00"),
            id: "99999999",
         },
      ],
      // events: [
      //    { title: "Tour KLCC", id: "1" },
      //    { title: "Lunch at Kenny Hills", id: "2" },
      //    { title: "Petrosains", id: "3" },
      //    { title: "Dinner in KLCC", id: "4" },
      //    { title: "Bus Tour in KL", id: "5" },
      // ],
   };

   /**
    * adding dragable properties to external events through javascript
    */
   componentDidMount() {
      let draggableEl = document.getElementById("external-events");
      new Draggable(draggableEl, {
         itemSelector: ".fc-event",
         eventData: function (eventEl) {
            let title = eventEl.getAttribute("title");
            let id = eventEl.getAttribute("data");
            return {
               title: title,
               id: id,
            };
         },
      });
   }

   /**
    * when we click on event we are displaying event details
    */
   eventClick = (eventClick) => {
      Alert.fire({
         title: eventClick.event.title,
         html:
            `<div className="table-responsive">
      <table className="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
            eventClick.event.title +
            `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
            eventClick.event.start +
            `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

         showCancelButton: true,
         confirmButtonColor: "#d33",
         cancelButtonColor: "#3085d6",
         confirmButtonText: "Remove Event",
         cancelButtonText: "Close",
      }).then((result) => {
         if (result.value) {
            eventClick.event.remove(); // It will remove event from the calendar
            Alert.fire("Deleted!", "Your Event has been deleted.", "success");
         }
      });
   };

   render() {
     
      const { events, calendarEvents1 } = this.props;
      return (
         <div className="animated fadeIn p-4 demo-app">
            <Row>
               <Col lg={3} sm={3} md={3}>
                  <div
                     id="external-events"
                     style={{
                        padding: "10px",
                        width: "80%",
                        height: "auto",
                        maxHeight: "-webkit-fill-available",
                     }}
                  >
                     <p>
                        <strong> Events</strong>
                     </p>
                     {this.state.events.map((event) => (
                        <div
                           className="fc-event btn btn-primary"
                           title={event.title}
                           data={event.id}
                           key={event.id}
                        >
                           {event.title}
                        </div>
                     ))}
                  </div>
               </Col>

                  <div className="app-fullcalendar" id="calendar">
                     <FullCalendar
                        default="timeGridWeek"
                        headerToolbar={{
                           left: "prev,next today",
                           center: "title",
                           right: "timeGridWeek,timeGridDay"
                        }}
                        slotEventOverlap= {true}
                        slotDuration= '00:30:00'
                        rerenderDelay={10}
                        eventDurationEditable={true}
                        editable={true}
                        droppable={true}
                        plugins={[
                           timeGridPlugin,
                           interactionPlugin,
                        ]}
                        ref={this.calendarComponentRef}
                        weekends={this.state.calendarWeekends}
                        events={calendarEvents1}
                        eventDrop={this.drop}
                        // drop={this.drop}
                        eventReceive={this.eventReceive}
                        eventClick={this.eventClick}
                        //selectable={true}
                     />
                  </div>
            </Row>
         </div>
      );
   }
}

export default EventCalendar;

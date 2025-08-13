import React from "react";

import EventCalendar from "./EventCalendar";


const Calendar1 = () => {
   return (
      <div className="h-80">
         <pagetitle activeMenu="Calerdar" motherMenu="App" />

         <div className="row">
            <EventCalendar />
         </div>
      </div>
   );
};

export default Calendar1;

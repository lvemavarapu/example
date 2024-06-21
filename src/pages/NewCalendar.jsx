import React from 'react';
import ReactDOM from "react-dom";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import {CgCalendarToday} from "react-icons/cg";

const localizer = momentLocalizer(moment)

function NewCalendar() {
    const events = [
        {
            id: 0,
            name: "Holiday",
            description: "Travel & Explore",
            allDay: true,
            start: new Date(2024,2,29),
            end: new Date(2024, 2, 29)
        },
        {
            id: 1,
            name: "Holiday",
            description: "Travel & Explore",
            allDay: true,
            start: new Date(2024,2,26),
            end: new Date(2024, 2, 26)
        },
        {
            id: 2,
            name: "Holiday",
            description: "Travel & Explore",
            allDay: true,
            start: new Date(2024,1,25),
            end: new Date(2024, 1, 29)
        },
    ];
    const event = ({ event }) => {
        return (
            <div>
                {event.name} <br /> <small>{event.description}</small>{" "}
            </div>
        );
    };

       return (
        <div className="" style={{ minHeight: 580 }}>
            <Calendar
                events={events}
               localizer={localizer}
                step={60}
                showMultiDayTimes
                defaultDate={new Date()}
                style={{ maxWidth: 1000, marginLeft: 390, minHeight:1000}}
                components={{
                    event: event
                }}
            />
        </div>
    );
}

export default NewCalendar;
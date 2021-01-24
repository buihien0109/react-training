import React, { useState } from 'react';
import '../assets/css/calendar.css';

function Calendar() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());

    const getMonthName = () => {
        let monthName = new Date(year, month).toLocaleString('en-us', {
            month: 'long',
        });
        return monthName;
    };

    const getDaysInMonth = () => {
        return new Date(year, month + 1, 0).getDate();
    };

    const startDayInMonth = () => {
        return new Date(year, month, 1).getDay();
    };

    const convertNumberToArr = (number) => {
        let newArr = [];
        for (let i = 1; i <= number; i++) {
            newArr.push(i);
        }
        return newArr;
    };

    const nextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    const prevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const activeCurrentDay = (num) => {
        const calenderFullDate = new Date(year, month, num).toDateString();
        const currentFullDate = new Date().toDateString();
        return calenderFullDate === currentFullDate ? 'day active' : 'day';
    };

    return (
        <div>
            <div className="container">
                <button className="btn btn-prev" onClick={() => prevMonth()}>
                    <span>
                        <i
                            className="fa fa-chevron-left"
                            aria-hidden="true"
                        ></i>
                    </span>
                </button>
                <div className="calendar">
                    <h1>Calendar</h1>
                    <div className="info">
                        <p className="month">{getMonthName()}</p>
                        <p className="year">{year}</p>
                    </div>
                    <div className="date">
                        <div className="day-name">Sun</div>
                        <div className="day-name">Mon</div>
                        <div className="day-name">Tue</div>
                        <div className="day-name">Wen</div>
                        <div className="day-name">Thu</div>
                        <div className="day-name">Fri</div>
                        <div className="day-name">Sat</div>
                    </div>
                    <div className="date date-container">
                        {convertNumberToArr(startDayInMonth()).map((ele, index) => {
                            return <div className="day" key={ele}></div>;
                        })}
                        {convertNumberToArr(getDaysInMonth()).map(
                            (ele, index) => {
                                return (
                                    <div
                                        className={activeCurrentDay(index + 1)}
                                        key={ele}
                                    >
                                        {ele}
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
                <button className="btn btn-next" onClick={() => nextMonth()}>
                    <span>
                        <i
                            className="fa fa-chevron-right"
                            aria-hidden="true"
                        ></i>
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Calendar;

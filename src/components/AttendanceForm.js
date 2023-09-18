import React, { useState, useEffect } from 'react';
import './AttendanceForm.css';

const AttendanceForm = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleAttendanceMark = () => {
    // Handle attendance marking logic here
  };

  return (
    <div className="attendance-form">
      <h2>Mark Attendance</h2>
      <p>Date: {currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      <p>Day: {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}</p>
      <p>Time: {currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}</p>
      <button onClick={handleAttendanceMark} className="attendance-button">Mark Attendance</button>
    </div>
  );
};

export default AttendanceForm;

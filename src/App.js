import React from 'react';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import AttendanceForm from './components/AttendanceForm';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <StudentForm />
        <AttendanceForm />
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './StudentForm.css';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [classValue, setClass] = useState('');
  const [section, setSection] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', name, classValue, section, rollNumber);
  };

  return (
    <div className="student-form">
      <h2>Enter Student Details</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Class (enter only numeric value)"
          value={classValue}
          onChange={(e) => setClass(e.target.value)}
        />
        <input
          type="text"
          placeholder="Section (enter block letter)"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;

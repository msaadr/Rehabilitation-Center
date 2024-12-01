import React, { useEffect } from 'react';
import patients from './assets/Patients';
import './Patient.css';

const Patient = () => {
useEffect(()=>{
  window.scrollTo(0,0)
},[])
  return (
    <div className="patient">
      <h3>Patients</h3>
      <div className='patient-container'>
        {patients && patients.length > 0 ? (
          patients.map((elem) => (
            <div className="patient-card" key={elem.id}>
              <p><strong>ID:</strong> {elem.id}</p>
              <p><strong>Name:</strong> {elem.name}</p>
              <p><strong>Age:</strong> {elem.age}</p>
              <p><strong>Gender:</strong> {elem.gender}</p>
              <p><strong>Blood Type:</strong> {elem.bloodType}</p>
              <p><strong>Diagnosis:</strong> {elem.diagnosis}</p>
              <p><strong>Hospital:</strong> {elem.hospital}</p>
              <p><strong>Room Number:</strong> {elem.roomNumber}</p>
              <p><strong>Notes:</strong> {elem.notes}</p>
            </div>
          ))
        ) : (
          <p>No patient data available</p>
        )}
      </div>
    </div>
  );
};

export default Patient;

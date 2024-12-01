import React, { useEffect } from 'react'
import doctors from './assets/Doctors';
const Doctor = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='doctor'>
       <div className="patient">
      <h3>Doctors</h3>
      <div className='patient-container'>
        {doctors && doctors.length > 0 ? (
          doctors.map((elem) => (
            <div className="patient-card" key={elem.id}>
              <p><strong>ID:</strong> {elem.id}</p>
              <p><strong>Name:</strong> {elem.name}</p>
              <p><strong>Age:</strong> {elem.age}</p>
              <p><strong>Gender:</strong> {elem.gender}</p>
              <p><strong>Specialization:</strong> {elem.specialization}</p>
              <p><strong>Experience:</strong> {elem.experience}</p>
              <p><strong>ContactNumber:</strong> {elem.contactNumber}</p>
              <p><strong>Email:</strong> {elem.email}</p>
              <p><strong>Hospital:</strong> {elem.hospital}</p>
              <p><strong>WorkingHours:</strong> {elem.workingHours}</p>
              <p><strong>Notes:</strong> {elem.notes}</p>

            </div>
          ))
        ) : (
          <p>No patient data available</p>
        )}
      </div>
    </div>
    </div>
  )
}

export default Doctor

import React from 'react';
import photo_placeholder from '../../assets/images/Portrait_Placeholder.png';

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule__person">
        <img src={photo_placeholder} className="schedule__person__photo"/>
        <div className="schedule__person__name">Karol Kowalski</div>
        <div className="schedule__person__login">karkow</div>
      </div>
    </div>
  )
}

export default Schedule

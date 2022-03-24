import React from 'react';
import photo_placeholder from '../../assets/images/Portrait_Placeholder.png';

const Schedule = () => {
  return (
    <div className="schedule">
      {[1, 2, 3, 4, 5].map(i => (
        <div className="schedule__person" key={i}>
          <div className="schedule__person__container">
            <img src={photo_placeholder} className="schedule__person__photo" />
            <div className="schedule__person__name">Karol Kowalski</div>
            <div className="schedule__person__login">karkow</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Schedule

import React from 'react';
import photo_placeholder from '../../assets/images/Portrait_Placeholder.png';

const Schedule = () => {
  return (
    <div className="schedule">
      <div className="schedule__shift">
        <div className="schedule__shift__title">
          Day Shift (6:00 - 16:30)
        </div>
        <div className="schedule__shift__crew">
        {[1, 2, 3, 4].map(i => (
          <div className="schedule__person" key={i}>
            <div className="schedule__person__container">
              <img src={photo_placeholder} className="schedule__person__photo" />
              <div className="schedule__person__name">Karol Kowalski</div>
              <div className="schedule__person__login">karkow</div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="schedule__shift">
        <div className="schedule__shift__title">
          Middle Shift (12:30 - 23:00)
        </div>
        <div className="schedule__shift__crew">
          {[1, 2, 3, 4].map(i => (
            <div className="schedule__person" key={i}>
              <div className="schedule__person__container">
                <img src={photo_placeholder} className="schedule__person__photo" />
                <div className="schedule__person__name">Karol Kowalski</div>
                <div className="schedule__person__login">karkow</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="schedule__shift">
        <div className="schedule__shift__title">
          Night Shift (18:00 - 04:30)
        </div>
        <div className="schedule__shift__crew">
          {[1, 2, 3, 4].map(i => (
            <div className="schedule__person" key={i}>
              <div className="schedule__person__container">
                <img src={photo_placeholder} className="schedule__person__photo" />
                <div className="schedule__person__name">Karol Kowalski</div>
                <div className="schedule__person__login">karkow</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Schedule

import React from 'react';
import './Streak.css';

const Streak = ({ streakDays, frozenDays }) => {
  return (
    <div className="streak">
      <h3>Your Streak</h3>
      <div className="streak-days">
        {streakDays.map((day, index) => (
          <div key={index} className={frozenDays.includes(index) ? 'frozen' : 'active'}>
            {frozenDays.includes(index) ? '❄️' : '🔥'}
            <span>DAY {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Streak;


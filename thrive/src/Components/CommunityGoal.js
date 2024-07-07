import React, { useState } from 'react';

const CommunityGoal = ({ user, addXp }) => {
  const [joinedUsers, setJoinedUsers] = useState([]);
  const [isJoined, setIsJoined] = useState(false);

  const joinGoal = () => {
    setJoinedUsers([...joinedUsers, user]);
    setIsJoined(true);
  };

  const unjoinGoal = () => {
    if (window.confirm("Are you sure you don't want to give it a try?")) {
      setJoinedUsers(joinedUsers.filter(u => u !== user));
      setIsJoined(false);
    }
  };

  const completeGoal = () => {
    alert('Congratulations! You earned 1000 XP.');
    addXp(1000);
    setIsJoined(false);
    setJoinedUsers(joinedUsers.filter(u => u !== user));
  };

  return (
    <div className="community-goal">
      <h3>Community Goal</h3>
      <p>Run 5km this week</p>
      <p>Joined: {joinedUsers.length}</p>
      {isJoined ? (
        <div>
          <button onClick={unjoinGoal}>Unjoin</button>
          <button onClick={completeGoal}>Complete Goal</button>
        </div>
      ) : (
        <button onClick={joinGoal}>Join</button>
      )}
    </div>
  );
};

export default CommunityGoal;

import React, { useState } from 'react';
import styles from "./Homepage.module.css"
import Navbar from '../Components/Navbar.jsx';


function Homepage() {

  const [goals, setGoals] = useState([
    'Daily stretches',
    '15 mins meditation',
    '10k steps a day'
  ]);

  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals([...goals, newGoal]);
      setNewGoal('');
    }
  };

  return(
      <><Navbar /><div className={styles.container}>
        <div className={styles.header}>
      <div>
        <p>🥳 Good job for keeping your streak,
        look at you go! </p>
        <h1>Your streak</h1>
      </div>
      <div>
        <p>10 days</p>
      </div>
      </div><div className={styles.homepageContainer}>
        <h1>Your goals</h1>
        <ul className={styles.ul}>
          {goals.map((goal, index) => (
            <div key={index} className={styles.listContainer}>
              <li>✅{goal}</li>
            </div>
          ))}
        </ul>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Add a new goal"
            className={styles.input} />
          <button onClick={addGoal} className={styles.addButton}>Add Goal</button>
        </div>
      </div>
    </div></>
  );
}
export default Homepage;

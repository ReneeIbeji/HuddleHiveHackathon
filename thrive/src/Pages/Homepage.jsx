import React, { useState } from 'react';
import styles from "./Homepage.module.css"
import Navbar from '../Components/Navbar.jsx';
import { Link } from "react-router-dom"


function Homepage() {

  const [goals, setGoals] = useState([
    'Tidy room',
    'Go for a run',
    'Read a book a week',
    'Stretching daily'
  ]);

  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals([...goals, newGoal]);
      setNewGoal('');
    }
  };


  return(
      <><Navbar /><div>
        <div>
      <h1>Your streak</h1>
    </div><div className={styles.homepageContainer}>
        <h1>Your Goals</h1>
        <ul>
          {goals.map((goal, index) => (
            <div key={index} className={styles.listContainer}>
              <li>{goal}</li>
            </div>
          ))}
        </ul>
        <div className={styles.inputContainer}>
          <Link to="/newGoal"><button className={styles.addButton}>Add Goal</button></Link>
        </div>
      </div>
    </div></>
  );
}

export default Homepage;

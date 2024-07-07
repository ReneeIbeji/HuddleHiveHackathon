import React, { useState } from 'react';
import styles from "./Homepage.module.css";
import Navbar from '../Components/Navbar.jsx';
import Streak from '../Components/Streak.jsx'; // Import Streak component
import { Link } from "react-router-dom";

function Homepage() {
  const [goals, setGoals] = useState([
    'Daily stretches',
    '15 mins meditation',
    '10k steps a day'
  ]);
  const [newGoal, setNewGoal] = useState('');
  const [streakDays, setStreakDays] = useState(Array(7).fill(true)); // 7-day streak initialized to true (active)
  const [frozenDays, setFrozenDays] = useState([]); // Array to store frozen days
  const [streak, setStreak] = useState(10); // Example initial streak
  const [xp, setXP] = useState(0);
  const [completedGoals, setCompletedGoals] = useState([]);

  const addGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals([...goals, newGoal]);
      setNewGoal('');
      // Increase XP on adding a new goal
      setXP(prevXP => prevXP + 10); // Example XP increment per goal
    }
  };

  const completeTask = (index) => {
    // Placeholder for future functionality, update XP, etc.
    // For now, let's just move goal to completed goals
    const completedGoal = goals[index];
    setCompletedGoals(prevCompletedGoals => [...prevCompletedGoals, completedGoal]);
    // Remove goal from active goals
    const updatedGoals = [...goals];
    updatedGoals.splice(index, 1);
    setGoals(updatedGoals);
    // Update streak logic will go here
    // Show congratulations pop-up
    alert('Congratulations! Your XP goes up by 10 points.');
    // Increase XP
    setXP(prevXP => prevXP + 10); // Example XP increment per goal
  };

  const missStreak = () => {
    // Simulating missing streak logic
    setFrozenDays(prevFrozenDays => {
      const lastActiveIndex = streakDays.findIndex(day => day);
      if (lastActiveIndex !== -1 && prevFrozenDays.length < 3) {
        const updatedFrozenDays = [...prevFrozenDays, lastActiveIndex];
        return updatedFrozenDays;
      }
      return prevFrozenDays;
    });

    setStreakDays(streakDays.map((day, index) => {
      if (day && !frozenDays.includes(index)) {
        return false;
      }
      return day;
    }));

    // Decrease streak logic will go here
    // Example: setStreak(prevStreak => prevStreak - 1);
  };

  // Function to check if all goals are completed
  const allGoalsCompleted = () => goals.length === 0;

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Streak streakDays={streakDays} frozenDays={frozenDays} /> {/* Display Streak component */}
        <div className={styles.header}>
          <div>
            <p>🥳 Good job for keeping your streak, look at you go!</p>
            <h1>Your streak</h1>
          </div>
          <div>
            <p>{streak} days</p>
          </div>
        </div>
        <div className={styles.homepageContainer}>
          <h1>Your goals</h1>
          <ul className={styles.ul}>
            {goals.map((goal, index) => (
              <div key={index} className={styles.listContainer}>
                <li>
                  <span role="img" aria-label="goal">✅</span>
                  {goal}
                  <button onClick={() => completeTask(index)}>Complete</button>
                </li>
              </div>
            ))}
          </ul>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="Enter new goal"
            />
            <button className={styles.addButton} onClick={addGoal}>Add Goal</button>
          </div>
          <button onClick={missStreak}>Simulate Missed Streak</button>
        </div>
        <div className={styles.xpContainer}>
          <div className={styles.xpBar} style={{ width: `${xp}%`, background: `linear-gradient(to right, yellow, orange, green)` }}></div>
          <p>{xp} XP</p>
        </div>
        <div className={styles.completedGoals}>
          <h2>Completed Goals</h2>
          <ul>
            {completedGoals.map((goal, index) => (
              <div key={index} className={styles.completedGoal}>
                <li>
                  <span role="img" aria-label="goal">☑️</span>
                  {goal}
                </li>
              </div>
            ))}
          </ul>
          {allGoalsCompleted() && (
            <div className={styles.congratulations}>
              <p>Congratulations! You finished all your tasks, you're on fire! 🔥</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Homepage;


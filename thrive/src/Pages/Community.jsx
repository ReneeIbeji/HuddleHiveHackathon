import React, { useState } from 'react';
import Navbar from '../Components/Navbar.jsx';
import TextBox from '../Components/textBox.jsx';
import "../CSS/CommunityPage.css";

const Community = () => {
  const [challenges, setChallenges] = useState([]);
  const emojiOptions = ["👍", "❤️", "😄", "🔥", "👏"];

  const addChallenge = (text) => {
    const newChallenge = {
      id: Date.now(),
      text,
      reactions: { "👍": 0, "❤️": 0, "😄": 0, "🔥": 0, "👏": 0 },
      userReacted: false,
      userEmoji: '',
      joinedUsers: 0,
      joined: false,
    };
    setChallenges([...challenges, newChallenge]);
  };

  const reactToChallenge = (challengeId, emoji) => {
    setChallenges(challenges.map((challenge) => {
      if (challenge.id === challengeId) {
        const newReactions = { ...challenge.reactions };
        if (challenge.userReacted) {
          // Decrease count of the previous reaction
          newReactions[challenge.userEmoji] -= 1;
        }
        // Increase count of the new reaction
        newReactions[emoji] += 1;
        return {
          ...challenge,
          reactions: newReactions,
          userReacted: true,
          userEmoji: emoji
        };
      }
      return challenge;
    }));
  };

  const joinChallenge = (challengeId) => {
    setChallenges(challenges.map((challenge) => {
      if (challenge.id === challengeId && !challenge.joined) {
        return {
          ...challenge,
          joined: true,
          joinedUsers: challenge.joinedUsers + 1
        };
      }
      return challenge;
    }));
  };

  return (
    <><Navbar /><div id ="communityPage">
      <h1>Exercise Community</h1>
      <div id="leaderboard">
        <h2>Exercise Leaderboard</h2>
        <img src= "./Assets/ranking.png" width="500"/>
      </div>
      <div id="chatboard">
        <h2>Chat board</h2>
        <p>
          <TextBox placeholder="Share a goal"></TextBox>
        </p>
        <div class="post">
          <p>
          This week I discovered a super cool hack for cleaning! A bucket! Sometimes I can’t tidy and put things away immediately, so I have my basket where I put things. Then I tidy things from the basket when I have time another day.
          </p>
        </div>
        <p>✨  7 sparks | Send a spark</p>
        <div class="post">
          <p>
          This week I discovered a super cool hack for cleaning! A bucket! Sometimes I can’t tidy and put things away immediately, so I have my basket where I put things. Then I tidy things from the basket when I have time another day.
          </p>
        </div>
        <p>✨  7 sparks | Send a spark</p>
        <div class="post">
          <p>
          This week I discovered a super cool hack for cleaning! A bucket! Sometimes I can’t tidy and put things away immediately, so I have my basket where I put things. Then I tidy things from the basket when I have time another day.
          </p>
        </div>
        <p>✨  7 sparks | Send a spark</p>
        <div class="post">
          <p>
          This week I discovered a super cool hack for cleaning! A bucket! Sometimes I can’t tidy and put things away immediately, so I have my basket where I put things. Then I tidy things from the basket when I have time another day.
          </p>
        </div>
        <p>✨  7 sparks | Send a spark</p>
      </div>
      <h2>Community Challenges</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.elements.challengeText.value;
        if (text) {
          addChallenge(text);
          e.target.elements.challengeText.value = '';
        }
      } }>
        <input type="text" name="challengeText" placeholder="Enter your challenge" />
        <button type="submit">Create Challenge</button>
      </form>
      {challenges.map((challenge) => (
        <div key={challenge.id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <p>{challenge.text}</p>
          {/* Emoji Reactions */}
          <div className="react-button-container">
            <button>
              {challenge.userReacted ? challenge.userEmoji : 'React'}
            </button>
            <div className="emoji-options">
              {emojiOptions.map((emoji) => (
                <button key={emoji} onClick={() => reactToChallenge(challenge.id, emoji)}>
                  {emoji} {challenge.reactions[emoji]}
                </button>
              ))}
            </div>
          </div>
          {/* Join Challenge */}
          {!challenge.joined ? (
            <button onClick={() => joinChallenge(challenge.id)}>
              Join Challenge ({challenge.joinedUsers})
            </button>
          ) : (
            <span> 🎉 Joined ({challenge.joinedUsers})</span>
          )}
        </div>
      ))}
    </div></>
  );
};

export default Community;

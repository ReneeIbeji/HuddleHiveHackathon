import React, { useState } from 'react';

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
    <div>
      <h1>Community Challenges</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.elements.challengeText.value;
        if (text) {
          addChallenge(text);
          e.target.elements.challengeText.value = '';
        }
      }}>
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
    </div>
  );
};

export default Community;

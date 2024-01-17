import React, { useState, useEffect } from 'react';

export function Game1() {
  const [lyrics, setLyrics] = useState({});
  const [userDetails, setUserDetails] = useState({ answer: '' });
  const [audioPlayer, setAudioPlayer] = useState(null);

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await fetch('http://localhost:5001/SongApi/getLyricsGame');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLyrics(data);

        // Play the song when lyrics are fetched
        if (audioPlayer) {
          audioPlayer.src = data.song; // Set the audio source
          audioPlayer.play(); // Start playing the song
        }
      } catch (err) {
        console.error(err);
        alert('Something went wrong while fetching lyrics!');
      }
    };

    fetchLyrics();
  }, [audioPlayer]); // Add audioPlayer as a dependency to useEffect

  const onFormUpdate = (category, value) => {
    setUserDetails({
      ...userDetails,
      [category]: value,
    });
  };

  const Check = (e) => {
    e.preventDefault();
    if (userDetails.answer.toLowerCase() === lyrics.ans.toLowerCase()) {
      alert('Correct Answer!');
    } else {
      alert('Incorrect Answer! Try again.');
    }
  };

  return (
    <div>
      <h1>Hello!! Welcome to the Lyrical Enigma Decipher !!</h1>
      {lyrics && lyrics.lyrics && <p>{lyrics.lyrics}</p>}
      <input
        type="text"
        value={userDetails.answer}
        placeholder="Write your answer"
        onChange={(e) => onFormUpdate('answer', e.target.value)}
      />
      <button onClick={(e) => Check(e)}>Submit</button>

      {/* Audio Player */}
      <audio ref={(ref) => setAudioPlayer(ref)} controls>
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

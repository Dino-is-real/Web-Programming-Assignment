// Content.jsx
import React, { useState } from "react";

const jokes = [
  "Why don’t skeletons fight each other? They don’t have the guts.",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
];

const Content = () => {
  const [joke, setJoke] = useState("");

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setJoke(jokes[randomIndex]);
  };

  return (
    <div className="content">
      <button onClick={getRandomJoke}>Get a Random Joke</button>
      <p>{joke}</p>
    </div>
  );
};

export default Content;

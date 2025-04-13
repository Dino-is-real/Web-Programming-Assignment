import React, { useState, useEffect } from "react";

const JokeFetcher = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error) {
      setJoke("Failed to fetch joke.");
    }
  };

  return (
    <div className="joke-container">
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get Joke</button>
    </div>
  );
  
};

export default JokeFetcher;

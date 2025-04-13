import React from 'react';

interface GreetingProps {
  isMorning: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ isMorning }) => {
  return <h2>{isMorning ? "Good Morning" : "Good Evening"}</h2>;
};

export default Greeting;

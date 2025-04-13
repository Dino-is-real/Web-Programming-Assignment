import React from 'react';

interface UserProps {
  firstName: string;
  lastName: string;
}

const UserGreeting: React.FC<UserProps> = ({ firstName, lastName }) => {
  return <h1>Hello, {firstName} {lastName}!</h1>;
};

export default UserGreeting;

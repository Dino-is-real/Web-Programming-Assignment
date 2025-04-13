import React from 'react';

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function Prime({ number }) {
  return <p>{number} is {isPrime(number) ? "a prime" : "not a prime"} number.</p>;
}

export default Prime;

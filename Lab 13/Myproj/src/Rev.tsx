import React, { useState } from 'react';

const Reverse: React.FC = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const cleanText = text.toLowerCase().replace(/\s+/g, ''); // Remove spaces and lowercase
  const reversed = cleanText.split('').reverse().join('');
  const isPalindrome = cleanText === reversed && text.length > 0;

  return (
    <div>
      <h2>Enter a Word:</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      />
      {text && (
        <>
          <p>Reversed: {reversed}</p>
          <p>{isPalindrome ? 'It is a palindrome' : 'It is not a palindrome'}</p>
        </>
      )}
    </div>
  );
};

export default Reverse;

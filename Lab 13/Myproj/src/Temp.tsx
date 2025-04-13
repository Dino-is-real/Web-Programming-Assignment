import React, { useState } from 'react';

const Temperature: React.FC = () => {
  const [temp, setTemp] = useState<string>('');
  const [isCelsius, setIsCelsius] = useState<boolean>(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(e.target.value);
  };

  const toggleUnit = () => {
    setIsCelsius((prev) => !prev);
  };

  const convertedTemp = temp
    ? isCelsius
      ? `${((parseFloat(temp) * 9) / 5 + 32).toFixed(2)} °F`
      : `${(((parseFloat(temp) - 32) * 5) / 9).toFixed(2)} °C`
    : 'Enter a valid temperature';

  return (
    <div>
      <h2>Temperature Converter</h2>
      <input
        type="number"
        value={temp}
        onChange={handleChange}
        placeholder="Enter temperature"
      />
      <button onClick={toggleUnit}>
        Convert to {isCelsius ? 'Fahrenheit' : 'Celsius'}
      </button>
      <p>Converted Temperature: {convertedTemp}</p>
    </div>
  );
};

export default Temperature;

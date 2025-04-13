// FormWithUseRef.jsx
import React, { useRef, useState } from "react";

const Form2 = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    setSubmittedData({ name, email });
  };

  return (
    <div>
      <h3>Form with useRef</h3>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Name" />
        <br />
        <input ref={emailRef} type="email" placeholder="Email" />
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <p>Submitted Name: {submittedData.name}</p>
          <p>Submitted Email: {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default Form2;

import React from "react";

const Btn2 = () => {
  return (
    <>
      <style>{`
        .btn {
          background-color: green;
          padding: 10px;
          font-size: 16px;
          color: white;
          border-radius: 6px;
        }

        .btn:hover {
          background-color: lightgreen;
          color: black;
        }
      `}</style>
      <button className="btn">Click Me</button>

    </>
  );
};

export default Btn2;

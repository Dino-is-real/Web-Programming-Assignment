import React, { useState } from "react";
import LifecycleDemo from "./LifeCycleDemo";
import "./index.css";

const LifecycleWrapper = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div className="lifecycle-wrapper">
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? "Unmount Component" : "Mount Component"}
      </button>
      {showComponent && <LifecycleDemo />}
    </div>
  );
};

export default LifecycleWrapper;

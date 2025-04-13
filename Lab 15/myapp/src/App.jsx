// App.jsx
import React from "react";
import Header from "./Header";
import Content from "./Content"; // Q2
import Footer from "./Footer";
import StyledButton from "./btn1"; // Q3 - Inline
import StyledButtonInternal from "./btn2"; // Q3 - Internal
import StyledButtonExternal from "./btn3"; // Q3 - External
import LifecycleWrapper from "./LifecycleWrapper"; // Q5 mount/unmount
import Counter from "./Counter"; // Q6
import JokeFetcher from "./JokeFetcher"; // Q7
import RefForm from "./RefForm"; // Q8
import { ThemeProvider, ThemedComponent } from "./ThemeContext";
import Parent from "./Parent"; // Q10
import Form1 from './Form1'
import Form2 from './Form2'


import "./styles.css";

const App = () => (
  <ThemeProvider>
  
  <div className="app-container">
    <Header title="My React App" />

    <div className="box">
      <h3>Q1: Random Joke</h3>
      <Content />
    </div>

    <div className="box">
      <h3>Q2, 3, 4: Buttons with Different CSS</h3>
      <StyledButton />
      <StyledButtonInternal />
      <StyledButtonExternal />
    </div>

    <div className="box">
      <h3>Q5: Class Lifecycle Logs (Check Console)</h3>
      <LifecycleWrapper />
    </div>

    <div className="box">
      <h3>Q6: Counter using useReducer</h3>
      <Counter />
    </div>

    <div className="box">
      <h3>Q7: Fetch Joke with useEffect</h3>
      <JokeFetcher />
    </div>

    <div className="box">
      <h3>Q8: Focus Input using useRef</h3>
      <RefForm />
    </div>

    <div className="box">
        <h3>Q9: Context API - Theme Toggle</h3>
        <ThemedComponent />
      </div>

    <div className="box">
        <h3>Q10 - 11: Parent Child</h3>
        <Parent />
      </div>


    <div className="form-container">
        <h3>Q12: Form with UseState()</h3>
        <Form1 />
      </div>
    <div className="form-container">
        <h3>Q12: Form with UseRef()</h3>
        <Form2 />
      </div>


    <Footer />
  </div>
  </ThemeProvider>
);

export default App;



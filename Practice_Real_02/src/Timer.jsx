import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const timerRef = useRef(null); // Timer ka reference
  const [time, setTime] = useState(0); // Displayed time

  const startTimer = () => {
    if (!timerRef.current) { // Agar timer already na chal raha ho
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null; // Timer reset
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div>
      <h1>Time: {time}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Stopwatch;

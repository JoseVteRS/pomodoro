'use client'

import { Break } from "@/components/Break";
import { ProgressBar } from "@/components/ProgressBar";
import { Session } from "@/components/Session";
import { Timer } from "@/components/Timer";
import { useEffect, useState } from "react";


export default function Home() {
  const [breakLength, setBreakLength] = useState(5 * 60);
  const [sessionLength, setSessionLength] = useState(25 * 60);
  const [mode, setMode] = useState("session");
  const [timeLeft, setTimeLeft] = useState();
  const [isActive, setIsActive] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  // const [beep] = useState(
  //   new Audio("https://freesound.org/data/previews/523/523960_350703-lq.mp3")
  // );
  const [beepPlaying, setBeepPlaying] = useState(false);

  /* ########## USE EFFECT HOOKS ########## */
  useEffect(() => {
    setTimeLeft(mode == "session" ? sessionLength * 1000 : breakLength * 1000);
  }, [sessionLength, breakLength]);

  useEffect(() => {
    let interval = null;

    if (isActive && timeLeft > 1) {
      setTimeLeft(
        mode == "session"
          ? sessionLength * 1000 - timeSpent
          : breakLength * 1000 - timeSpent
      );

      interval = setInterval(() => {
        setTimeSpent((timeSpent) => timeSpent + 1000);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (timeLeft === 0) {
      // beep.play();
      setBeepPlaying(true);
      setTimeSpent(0);
      setMode((mode) => (mode == "session" ? "break" : "session"));
      setTimeLeft(
        mode == "session" ? sessionLength * 1000 : breakLength * 1000
      );
    }
    return () => clearInterval(interval);
  }, [isActive, timeSpent]);

  // useEffect(() => {
  //   beep.addEventListener("ended", () => setBeepPlaying(false));
  //   return () => {
  //     beep.addEventListener("ended", () => setBeepPlaying(false));
  //   };
  // }, []);

  /* ########## FUNCTIONS ########## */
  function decrementBreakLength() {
    const decreasedBreakLength = breakLength - 60 > 60 ? breakLength - 60 : 60;
    setBreakLength(decreasedBreakLength);
  }

  function incrementBreakLength() {
    const incrementedBreakLength =
      breakLength + 60 <= 60 * 60 ? breakLength + 60 : 60 * 60;
    setBreakLength(incrementedBreakLength);
  }

  function decrementSessionLength() {
    const decreasedSessionLength =
      sessionLength - 60 > 60 ? sessionLength - 60 : 60;

    setSessionLength(decreasedSessionLength);
  }

  function incrementSessionLength() {
    const incrementedSessionLength =
      sessionLength + 60 <= 60 * 60 ? sessionLength + 60 : 60;
    setSessionLength(incrementedSessionLength);
  }

  function reset() {
    setBreakLength(5 * 60);
    setSessionLength(25 * 60);
    setTimeLeft(mode == "session" ? sessionLength * 1000 : breakLength * 1000);

    if (isActive) {
      setIsActive(false);
      setTimeSpent(0);
    }

    if (beepPlaying) {
      // beep.pause();
      // beep.currentTime = 0;
      setBeepPlaying(false);
    }
  }

  function toggleIsActive() {
    setIsActive(!isActive);
  }

  return (
    <main className="w-screen h-screen  bg-neutral-900">
      

      <div className="buttons">
        <button onClick={toggleIsActive} id="start_stop" className="bg-yellow-500 py-4 px-6 text-black font-bold rounded">
          {isActive ? "Pause" : "Start"}
        </button>
        <button onClick={reset} id="reset" className="bg-red-500 py-4 px-6 text-white font-bold rounded">
          Reset
        </button>
      </div>

      <ProgressBar time={timeLeft} totalTime={sessionLength }>
        <Timer time={timeLeft} mode={mode} />
      </ProgressBar>

      <Break
        increment={incrementBreakLength}
        decrement={decrementBreakLength}
        length={breakLength}
      />
      <Session
        increment={incrementSessionLength}
        decrement={decrementSessionLength}
        length={sessionLength}
      />
    </main>
  )
}

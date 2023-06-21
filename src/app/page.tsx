'use client'

import Alarm from "@/components/Alarm";
import ModalSettings from "@/components/ModalSettings";
import Navigation from "@/components/Navigation";
import { Timer } from "@/components/Timer";
import { useEffect, useRef, useState } from "react";



export default function Home() {


  const [pomodoro, setPomodoro] = useState(25)
  const [shortBreak, setshortBreak] = useState(5)
  const [longBreak, setLongBreak] = useState(10)
  const [stage, setStage] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [consumedSeconds, setConsumedSeconds] = useState(0)
  const [ticking, setTicking] = useState(false)
  const [isTimeUp, setIsTimeUp] = useState(false)

  const [openSettings, setOpenSettings] = useState(false)


  const alarmRef = useRef()
  const pomodoroRef = useRef()
  const shortBreakRef = useRef()
  const longBreakRef = useRef()

  const updateTimeDefaultValue = () => {
    setPomodoro(pomodoroRef.current.value)
    setshortBreak(shortBreakRef.current.value)
    setLongBreak(longBreakRef.current.value)
    setOpenSettings(false)
    setSeconds(0)
    setConsumedSeconds(0)
  }


  const switchStage = (index: number) => {
    const isYes = consumedSeconds && stage !== index
      ? confirm('Are you sure you want to switch stage?')
      : false

    if (isYes) {
      reset()
      setStage(index)
    } else if (!consumedSeconds) {
      setStage(index)
    }

  }

  const getTickingTime = () => {

    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak
    }

    return timeStage[stage]
  }

  const updateMinute = () => {
    const updateStage = {
      0: setPomodoro,
      1: setshortBreak,
      2: setLongBreak
    }

    return updateStage[stage]
  }

  const reset = () => {
    setConsumedSeconds(0)
    setTicking(false)
    setSeconds(0)
    updateTimeDefaultValue()
  }

  const timeUp = () => {
    reset()
    setIsTimeUp(true)
    alarmRef.current.play()
  }

  const clockTicking = () => {
    const minutes = getTickingTime()
    const setMinutes = updateMinute()

    if (minutes === 0 && seconds === 0) {
      timeUp()
    } else if (seconds === 0) {
      setMinutes((minute: number) => minute - 1)
      setSeconds(59)
    } else {
      setSeconds((seconds: number) => seconds - 1)
    }
  }


  const muteAlarm = () => {
    alarmRef.current.pause()
    alarmRef.current.currentTime = 0
  }

  const startTimer = () => {
    setIsTimeUp(false)
    muteAlarm()
    setTicking((ticking) => !ticking)
  }

  useEffect(() => {

    window.onbeforeunload = () => {
      return consumedSeconds ? 'Show warning' : null
    }

    const timer = setInterval(() => {
      if (ticking) {
        setConsumedSeconds((seconds: number) => seconds + 1)
        clockTicking()
      }
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [seconds, pomodoro, shortBreak, longBreak, ticking])




  return (
    <main className=" min-h-screen bg-gray-dark">

      <div className="max-w-2xl mx-auto" >
        <Navigation setOpenSettings={setOpenSettings} />
        <Timer
          stage={stage}
          switchStage={switchStage}
          getTickingTime={getTickingTime}
          seconds={seconds}
          ticking={ticking}
          startTimer={startTimer}
          muteAlarm={muteAlarm}
          isTimeUp={isTimeUp}
          reset={reset}
        />
      </div>


      <Alarm ref={alarmRef} />
      {
        openSettings && (
          <ModalSettings
            openSettings={openSettings}
            setOpenSettings={setOpenSettings}
            pomodoroRef={pomodoroRef}
            shortBreakRef={shortBreakRef}
            longBreakRef={longBreakRef}
            updateTimeDefaultValue={updateTimeDefaultValue}
          />
        )}

    </main>
  )
}

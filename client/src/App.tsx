import React, { useEffect, useState } from 'react';

import { useCountdown } from "./hooks/useCountdown";

import { BaseButton } from "./components/BaseButton/BaseButton";
import { BaseInput } from './components/BaseInput/BaseInput'
import { Display } from "./components/Display/Display";

import './App.scss'

function App() {
  const [ time, setTime ] = useState('');
  const [ countdown, setCountdown ] = useState('0:0')

  const { timeLeft, startCountdown, pauseCountdown, resumeCountdown } = useCountdown();

  const handleStartCountdown = (e: React.FormEvent) => {
    e.preventDefault();

    setCountdown(time);
  }
  useEffect(() => {
    startCountdown(countdown);
  }, [countdown, startCountdown]);

  return (
    <div className='container'>
      <form className='form' onSubmit={handleStartCountdown}>
        Countdown: &nbsp;
        <BaseInput placeholder="(Min)" value={time} onChange={e => setTime(e.target.value)} />&nbsp;
        <BaseButton>START</BaseButton>
      </form>
      <Display minutes={timeLeft.minutes} seconds={timeLeft.seconds} />
      <BaseButton onClick={() => pauseCountdown()}>PAUSE</BaseButton>
      <BaseButton onClick={() => resumeCountdown()}>RESUME</BaseButton>
    </div>
  );
};

export { App };

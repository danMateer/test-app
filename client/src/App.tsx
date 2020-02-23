import React, { useEffect, useState } from 'react';

import { useCountdown } from "./hooks/useCountdown";

import { BaseButton } from "./components/BaseButton/BaseButton";
import { BaseInput } from './components/BaseInput/BaseInput'
import { Display } from "./components/Display/Display";
import { RateGroup } from "./components/RateGroup/RateGroup";

import resume from './assets/img/resume.svg'
import pause from './assets/img/pause.svg'

import './App.scss'

function App() {
  const [ time, setTime ] = useState('');
  const [countdownRate, setCountdownRate] = useState(1)
  const [ countdown, setCountdown ] = useState('0:0')

  const {
    timeLeft,
    startCountdown,
    pauseCountdown,
    isPaused,
    resumeCountdown
  } = useCountdown(countdownRate);

  const handleStartCountdown = (e: React.FormEvent) => {
    e.preventDefault();

    setCountdown(time);
    setTime('');
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
      <div className="display__wrapper">
        <Display minutes={timeLeft.minutes} seconds={timeLeft.seconds} />
        <div className="display__controllers">
          {isPaused
            ? <BaseButton rounded theme='neutral' onClick={resumeCountdown}><img width='100%' src={resume} alt="Resume"/></BaseButton>
            : <BaseButton rounded theme='neutral' onClick={pauseCountdown}><img width='100%' src={pause} alt="Pause"/></BaseButton>
          }
        </div>
      </div>
      Active rate: {countdownRate}
      <RateGroup
        rate={countdownRate}
        rates={[1, 1.5, 2]}
        onChange={rate => setCountdownRate(rate)}
      />
    </div>
  );
};

export { App };

import React, { useState } from 'react';

import { BaseButton } from "./components/BaseButton/BaseButton";
import { BaseInput } from './components/BaseInput/BaseInput'
import { Form, Container } from "./App.style";

function App() {
  const [timer, setTimer] = useState('');

  const startCountdown = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(timer)
  }

  return (
    <Container>
      <Form onSubmit={startCountdown}>
        Countdown: &nbsp;
        <BaseInput value={timer} onChange={e => setTimer(e.target.value)} />&nbsp;
        <BaseButton>START</BaseButton>
      </Form>
    </Container>
  );
};

export { App };

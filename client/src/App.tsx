import React from 'react';

import { BaseButton } from "./components/BaseButton/BaseButton";
import { Container } from "./App.style";

function App() {
  return (
    <Container>
      <BaseButton>Click me!</BaseButton>
    </Container>
  );
}

export { App };

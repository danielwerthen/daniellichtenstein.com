import React from 'react';
import { StilrenProvider } from 'stilren/react';
import { Client } from 'styletron-engine-atomic';
import Frontpage from './pages/Frontpage';
const styletron = new Client();

const pseudos = ['hover', 'focus'];
const breakpoints = {
  mobile: '(min-width: 768px)',
  desktop: '(max-width: 769px)',
};

export default function App() {
  return (
    <StilrenProvider
      styletron={styletron}
      breakpoints={breakpoints}
      pseudos={pseudos}
    >
      <Frontpage />
    </StilrenProvider>
  );
}

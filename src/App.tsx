import React from 'react';

import Background from './components/Background';
import Header from './components/Header';
import TextInput from './components/TextInput';
import './assets/css/reset.css'

function App() {
  return (
    <Background>
      <Header text="Charser" />

      <TextInput />
    </Background>
  );
}

export default App;

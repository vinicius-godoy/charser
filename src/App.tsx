import React from 'react';

import Background from './components/Background';
import Header from './components/Header';
import TextInput from './components/TextInput';
import TextOutput from './components/TextOutput';
import CharLegend from './components/CharLegend';
import Footer from './components/Footer';
import './assets/css/reset.css'

function App() {
  return (
    <Background>
      <Header text="Charser" />

      <TextInput />
      <TextOutput />
      <CharLegend />

      <Footer />
    </Background>
  );
}

export default App;

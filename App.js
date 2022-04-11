import React from 'react';
import { StatusBar } from 'react-native';
import { DripsyProvider } from 'dripsy'
import Routing from './src/navigations/Routing.js';

const App = () => {
  return (
    <DripsyProvider>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>
      <Routing/>
    </DripsyProvider>
  );
}

export default App;
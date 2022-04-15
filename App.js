import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { DripsyProvider } from 'dripsy'
import Routing from './src/navigations/Routing.js';
import AppLoading from 'expo-app-loading';
import useFonts from './src/hooks/useFonts.js'

const App = () => {
  const [IsReady, SetIsReady] = useState(false);   
  const LoadFonts = async () => {
    await useFonts();
  };
    
  if (!IsReady) {
    return (
      <AppLoading startAsync={LoadFonts} onFinish={() => SetIsReady(true)} onError={() => {}}/>
    );
  }

  return (
    <DripsyProvider>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>
      <Routing/>
    </DripsyProvider>
  );
}

export default App;
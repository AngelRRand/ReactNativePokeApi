import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import AppStack from './src/wrapper/AppStack';

function App() {


  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;

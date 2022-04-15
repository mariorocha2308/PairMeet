import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import useStorage from '../hooks/useStorage.js';
import OnBoarding from '../pages/OnBoarding.js';
import Login from '../pages/Login.js'
import Register from '../pages/Register.js'

const Stack = createNativeStackNavigator()

const Routing = () => {

  const auth = useStorage('@isSkipBoarding')

  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        {
          auth ? 
          <Stack.Screen name='Login' component={Login}/> : 
          <Stack.Screen name='onBoarding' component={OnBoarding}/>
        }
        <Stack.Screen name='Register' component={Register}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
import React, {useEffect, useState} from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import OnBoarding from '../pages/OnBoarding.js';
import Login from '../pages/Login.js'

const Stack = createNativeStackNavigator()

const Routing = () => {

  const [data, setData] = useState(null)

  //TODO: CUSTOM HOOK
  useEffect(()=> {

    const getStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@isSkipBoarding')
        setData(jsonValue != null ? JSON.parse(jsonValue) : null)
      } catch(e) {
      }
    }
    getStorage()
  })

  return ( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        {
          data ? 
          <Stack.Screen name='Login' component={Login}/> :
          <Stack.Screen name='onBoarding' component={OnBoarding}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
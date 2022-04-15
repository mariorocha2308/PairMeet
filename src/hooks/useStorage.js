import React, { useState, useEffect } from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';

export default function useStorage(key) {
  const [data, setData] = useState(null)

  useEffect(()=> {

    const getStorage = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(key)
        setData(jsonValue != null ? JSON.parse(jsonValue) : null)
      } catch(e) {
      }
    }
    getStorage()
  })

  return data
}
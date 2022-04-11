import React, {useState, useRef} from 'react'
import { View, FlatList, Text} from 'dripsy'
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoardingItems from '../components/OnboardingItems.js'
import slides from '../utils/slides.js';
import Paginator from '../components/Paginator.js'

const OnBoarding = ({navigation}) => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const viewableItemsChanged = useRef(({_,viewableItems}) => {
    setCurrentIndex(viewableItems[0]?.index)
  }).current
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current

  const skipBoarding = async () => {
    try {
      const jsonValue = JSON.stringify(true)
      await AsyncStorage.setItem('@isSkipBoarding', jsonValue)
      navigation.navigate('Login')
    } catch (e) {
      console.log('Error in SkipBoarding');
    }
  };

  return (
    <View sx={{flex: 1, backgroundColor: 'white'}}>
      <View sx={{flex: 0.1, alignItems: 'flex-end', justifyContent: 'center'}}>
        <Text sx={{color: 'rgb(160, 160, 160)', marginRight: 30, fontWeight: '700', fontSize: 15}} onPress={skipBoarding}>Continuar</Text>
      </View>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnBoardingItems item={item}/>}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
      />
      <Paginator data={slides} currentIdx={currentIndex}/>
    </View>
  );
}

export default OnBoarding;
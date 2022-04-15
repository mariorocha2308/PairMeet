import React from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Text, Image} from 'dripsy';

const OnBoardingItems = ({item}) => {

  const { width } = useWindowDimensions();

  return ( 
    <View style={[{ width }]}
      sx={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

      <Image source={item.image} sx={{flex: [0.6]}} style={{width, resizeMode: 'contain'}}/>

      <View>
        <Text
          sx={{fontSize: [30, 40], color: 'rgb(62, 62, 62)', marginBottom: 10, textAlign: 'center', fontFamily: 'Poppins-Bold'}}>
          {item.title}
        </Text>
        <Text 
          sx={{fontSize: [15, 30], color: 'rgb(82, 82, 82)', paddingX: 3, textAlign: 'center', fontFamily: 'Poppins-Medium'}}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

export default OnBoardingItems;
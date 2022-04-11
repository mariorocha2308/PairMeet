import * as Font from 'expo-font';

export default useFonts = async() => {

    await Font.loadAsync({
      'Poppins-ExtraBold': require('../assets/fonts/Poppins/Poppins-ExtraBold.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
      'Poppins-Regular': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
      'Poppins-Light': require('../assets/fonts/Poppins/Poppins-Light.ttf'),
      'Poppins-ExtraLight': require('../assets/fonts/Poppins/Poppins-ExtraLight.ttf'),
    });
}


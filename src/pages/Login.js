import React from 'react';
import { useWindowDimensions, Pressable, KeyboardAvoidingView, Platform, ScrollView} from 'react-native'
import TextInputField from '../components/TextInputField.js'
import { Image, Text, View } from "dripsy"

const Login = ({navigation}) => {

  const { width }= useWindowDimensions()

  return (
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex: 1, backgroundColor: 'white'}} >
    <ScrollView showsVerticalScrollIndicator={false}>
      <View sx={{flex: 1}}>

        <View>
          <Image source={require('../assets/images/Login-bro.png')} 
            style={{flex: 1, width, resizeMode: 'contain', height: 320}}/>
          <View sx={{alignSelf: 'center', position: 'absolute', bottom: -3}}>
            <Text 
              sx={{fontFamily: 'Poppins-Bold', fontSize: 38, color: 'rgb(70, 70, 70)', lineHeight: 52}}>Iniciar sesión
            </Text>
          </View> 
        </View>

        <View sx={{flex: 0.25, justifyContent: 'space-between', marginTop: 45}}>
          <TextInputField placeholder='Usuario' iconTittle='account-box-fill' marginDown='3'/>
          <TextInputField placeholder='Contraseña' iconTittle='key-fill' isSecure={true}/>
        </View>

        <Text 
          sx={{fontFamily: 'Poppins-Bold', color: '#2666CF', alignSelf: 'flex-end', marginRight: 3, marginTop: 3}}>
          ¿La has olvidado?
        </Text>

        <Pressable style={{backgroundColor: '#2666CF', padding: 10, marginHorizontal: 15, marginTop: 40, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}} onPress={() => console.log('Hola')}>
          <Text style={{fontSize: 20, color: 'white', fontFamily: 'Poppins-Medium'}}>Iniciar sesión</Text>
        </Pressable>

        <Text sx={{fontFamily: 'Poppins-Medium', alignSelf: 'flex-end', marginRight: 3, marginTop: 20}}>
          ¿Aún no estás registrado?  
          <Text sx={{color: '#2666CF', fontFamily: 'Poppins-Bold'}} onPress={() => navigation.navigate('Register')}> Registrarse
          </Text>
        </Text>

      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Login;
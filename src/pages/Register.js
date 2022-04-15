import React, { useState } from 'react';
import { useWindowDimensions, Pressable, KeyboardAvoidingView, Platform, ScrollView} from 'react-native'
import TextInputField from '../components/TextInputField.js'
import { Image, Text, View } from "dripsy"

const Register = ({navigation}) => {
  const { width }= useWindowDimensions()

  return (
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex: 1, backgroundColor: 'white'}} >
    <ScrollView showsVerticalScrollIndicator={false}>
      <View sx={{flex: 1}}>

        <View>
          <Image source={require('../assets/images/Profile-Interface-bro.png')} 
            style={{flex: 1, width, resizeMode: 'contain', height: 270}}/>
          <View sx={{alignSelf: 'center', position: 'absolute', bottom: -4}}>
            <Text 
              sx={{fontFamily: 'Poppins-Bold', fontSize: 38, color: 'rgb(70, 70, 70)', lineHeight: 52}}>Registrarse
            </Text>
          </View> 
        </View>

        <View sx={{flex: 0.25, justifyContent: 'space-between', marginTop: 70}}>
          <TextInputField placeholder='Usuario' iconTittle='account-box-fill' marginDown='3'/>
          <TextInputField placeholder='Correo' iconTittle='at-line' marginDown='3'/>
          <TextInputField placeholder='Contraseña' iconTittle='key-fill' isSecure={true} marginDown='3'/>
          <TextInputField placeholder='Repetir contraseña' iconTittle='key-fill' isSecure={true}/>
        </View>

        <Pressable style={{backgroundColor: '#2666CF', padding: 10, marginHorizontal: 15, marginTop: 40, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}} onPress={() => console.log('Hola')}>
          <Text style={{fontSize: 20, color: 'white', fontFamily: 'Poppins-Medium'}}>Registrarse</Text>
        </Pressable>

        <Text sx={{fontFamily: 'Poppins-Medium', alignSelf: 'flex-end', marginRight: 3, marginTop: 20}}>
          ¿Tienes una cuenta?  
          <Text sx={{color: '#2666CF', fontFamily: 'Poppins-Bold'}} onPress={() => navigation.navigate('Login')}> Iniciar sesión
          </Text>
        </Text>

      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Register;
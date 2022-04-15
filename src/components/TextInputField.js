import React from'react';
import { View, TextInput } from 'dripsy';
import Icon from 'react-native-remix-icon';

const TextInputField = (props) => {

  return ( 
    <View 
      sx={{flexDirection: 'row', marginBottom: props.marginDown, backgroundColor: 'rgb(245, 245, 245)', padding: 3, marginX: 3, borderRadius: 10, alignItems: 'center', justifyContent: 'center'}}>

      <Icon name={props.iconTittle} size="24" color="rgb(120, 120, 120)"/>
      <TextInput placeholder={props.placeholder} sx={{width: '90%', marginLeft: 3, fontSize: 14, fontWeight: '700', height: 30}} secureTextEntry={props.isSecure} multiline={false}/>

    </View>
  );
}

export default TextInputField;
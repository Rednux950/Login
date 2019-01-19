import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput } from 'react-native';

import BgImage from './assets/Background.png'
import Logo from './assets/Logo2.png'
import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH} = Dimensions.get("window")

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={BgImage} style={styles.backgroundContainer}>
      <View style={styles.LogoContain}>
        <Image source={Logo} style={styles.logo}/>
        <Text style={styles.logoText}>Cedro</Text>
        <Text style={styles.logoTextSub}>tecnologies</Text>
      </View>   

      <View>
        <Icon name={'md-person'} size={28} color={'rgb(255,255,255)'}  style={styles.inputIcon}/> 
        <TextInput
        style={styles.input}
        placeholder={'username'}
        placeholderTextColor={'rgb(255,255,255)'} 
        underlineColorAndroid='transparent'></TextInput>
      
      </View>    
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width:null,
    height:null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  LogoContain:{
    alignItems: 'center'    
  },
  logoText:{
    color: 'rgb(160,197,86)',
    fontSize: 38,
    fontWeight: '500',    
    opacity: 0.8
  },
  logoTextSub:{
    color: 'rgb(81,74,122)',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 12,
    opacity: 0.8
  },
  input:{
    width: WIDTH -55,    
    height: 45,
    borderRadius:25,
    paddingLeft:50,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
  inputIcon:{
    position: 'absolute',
    top: 8,
    left:40
  },
  logo:{
    width:150,
    height:150,
    opacity: 0.9
  },
});

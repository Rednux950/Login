import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import Login from './screens/Login.js'
import BgImage from './assets/Background.png'
import Logo from './assets/Logo.png'
import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH} = Dimensions.get("window")

export default class App extends React.Component {
  
  constructor(){
    super()
    this.state={
      showPass:true,
      press:false
    }
  }

  showPass = () =>{
    if(this.state.press == false){
      this.setState({showPass:false,press:true})      
    } else{
      this.setState({showPass:true,press:false})
    }
  }


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
        placeholder={'Username'}
        placeholderTextColor={'rgb(255,255,255)'} 
        underlineColorAndroid='transparent'></TextInput>
      </View>

      <View style={styles.InputCont}>
        <Icon name={'md-lock'} size={28} color={'rgb(255,255,255)'}  style={styles.inputIcon}/> 
          <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={this.state.showPass}
          placeholderTextColor={'rgb(255,255,255)'} 
          underlineColorAndroid='transparent'></TextInput>  

        <TouchableOpacity style={styles.EyeBtn} onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'md-eye' : 'md-eye-off' } size={26} color={'rgb(255,255,255)'}/>
        </TouchableOpacity>   
      </View>    

      <TouchableOpacity style={styles.LoginBtn}>
          <Text style={styles.text}>Login</Text>
      </TouchableOpacity> 

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
    alignItems: 'center',
    marginBottom:50    
  },
  logoText:{
    color: 'white',
    fontSize: 38,
    fontWeight: '500',    
    opacity: 0.8
  },
  logoTextSub:{
    color: 'rgba(0,0,0,0.40)',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 12,
    opacity: 0.8
  },
  InputCont:{
    marginTop:10,
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
  EyeBtn:{
    position: 'absolute',
    top: 8,
    right:37
  },
  LoginBtn:{
    width: WIDTH -55,    
    height: 45,
    borderRadius:25,
    backgroundColor: '#DF6772',
    justifyContent: 'center',
    marginTop:20
  },
  text:{
    color: 'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'

  },
  logo:{
    width:150,
    height:150,
    opacity: 0.9
  },
});

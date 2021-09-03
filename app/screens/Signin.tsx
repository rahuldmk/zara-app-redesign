import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, View, ImageBackground, Dimensions, TextInput } from 'react-native';
import { AuthStackParamList } from '../../types';
import { StatusBar } from 'expo-status-bar';
import { Button, Text } from '../components';
import colors from '../constants/Colors';
import sizes from '../constants/Size';
const { width, height } = Dimensions.get('window');
export default function Signin({ navigation }: StackScreenProps<AuthStackParamList, 'Signin'>) {

  function Signup() {
    navigation.navigate('Signup')
  }

  const login = ()=>{
    //navigation.
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/22125.png')} resizeMode="cover" style={styles.bgimage}>
        <View style={styles.welcomeContainer}>
          <Text h1 color="#000000">Welcome back!</Text>
          <Text color="#9A9595">Keep yourself stylish always</Text>
        </View>
        <View>
          <View style={{marginBottom:30}}>
            <Text placeholder color="#9A9595" style={{marginLeft:2}}>Email</Text>
            <TextInput placeholder="Email" style={{ borderBottomColor: '#9A9595', height: 42, borderBottomWidth: 1 }} />
          </View>
          <View>
            <Text placeholder color="#9A9595">Password</Text>
            <TextInput placeholder="Password" style={{ borderBottomColor: '#9A9595', height: 42, borderBottomWidth: 1 }} />
          </View>
          <View style={{alignItems:'center',marginTop:40}}>
            <Text>Forgot Password?</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={()=> Signup()} ><Text button color="#FFFFFF">Login</Text></Button>
          <Button onPress={()=> Signup()} style={{ backgroundColor: colors.dark.fb, marginTop: 20 }}><Text button color="#FFFFFF">Login With Facebook</Text></Button>
        </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text placeholder color="#9A9595">Don't have an account?</Text><Text> Signup</Text>
          </View>
        </View>
      </ImageBackground>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFCFF',

  },
  buttonText: {
    color: colors.light.buttonText,
    fontSize: sizes.size.button,
    fontFamily: 'Muli'
  },
  welcomeContainer: {
    marginTop: 70,
    flex: 0.4
  },
  bgimage: {
    flex: 1,
    width,
    padding: 20,
  },
  buttonContainer:{
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 0.5
  }

});

import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { ImageBackground, StyleSheet, View,TextInput, StatusBar, Dimensions } from 'react-native';
import { Text,Button } from '../components';
import { AuthStackParamList } from '../../types';
import colors from '../constants/Colors';
import sizes from '../constants/Size';
const { width, height } = Dimensions.get('window');

export default function Signup({
  navigation,
}: StackScreenProps<AuthStackParamList, 'Signup'>) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/22125.png')} resizeMode="cover" style={styles.bgimage}>
        <View style={styles.welcomeContainer}>
          <Text h1 color="#000000">Personal details</Text>
        </View>
        <View>
          <View style={{ marginBottom: 30 }}>
            <Text placeholder color="#9A9595" style={{ marginLeft: 2 }}>Email</Text>
            <TextInput placeholder="Email" style={{ borderBottomColor: '#9A9595', height: 42, borderBottomWidth: 1 }} />
          </View>
      
          <View style={{ marginBottom: 30 }}> 
            <Text placeholder color="#9A9595">Password</Text>
            <TextInput placeholder="Password" style={{ borderBottomColor: '#9A9595', height: 42, borderBottomWidth: 1 }} />
          </View>
         
          <View style={{ marginBottom: 30 }}> 
            <Text placeholder color="#9A9595">Name</Text>
            <TextInput placeholder="Name" style={{ borderBottomColor: '#9A9595', height: 42, borderBottomWidth: 1 }} />
          </View>
          <View style={{ marginBottom: 30 }}>
            <Text placeholder color="#9A9595">Phone No.</Text>
            <TextInput placeholder="Phone No." style={{ borderBottomColor: '#9A9595', height: 42, borderBottomWidth: 1 }} />
          </View>

          <View>
            <Text placeholder color="#9A9595">Address</Text>
            <TextInput placeholder="Address" style={{ borderBottomColor: '#9A9595', height: 42, borderBottomWidth: 1 }} />
          </View>

          
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => console.log('register')} ><Text button color="#FFFFFF">Signup</Text></Button>
        </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text placeholder color="#9A9595">Don't have an account?</Text><Text onPress={()=>console.log('register')}> Signup</Text>
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5
  }

});

/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Home from '../screens/Home';
import Details from '../screens/Details';
import List from '../screens/List';
import Category from '../screens/Category';
import Clothing from '../screens/Clothing';
import Onboarding from '../screens/Onboarding';
import Signin from '../screens/Signin';
import Signup from '../screens/Signup';

import { AuthStackParamList, RootStackParamList } from '../../types';

import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const isAutheticate: boolean = false;
function RootNavigator() {


  if (isAutheticate) {
    return (
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Home" component={Home} options={{ title: 'Oops!' }} />
        <RootStack.Screen name="Category" component={Category} options={{ title: 'Oops!' }} />
        <RootStack.Screen name="Details" component={Details} options={{ title: 'Oops!' }} />
        <RootStack.Screen name="List" component={List} options={{ title: 'Oops!' }} />
        <RootStack.Screen name="Clothing" component={Clothing} options={{ title: 'Oops!' }} />
      </RootStack.Navigator >
    )
  }
  else {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Onboarding" component={Onboarding} options={{ title: 'Oops!' }} />
        <AuthStack.Screen name="Signin" component={Signin} options={{ title: 'Oops!' }} />
        <AuthStack.Screen name="Signup" component={Signup} options={{ title: 'Oops!' }} />
      </AuthStack.Navigator>
    )
  }
}

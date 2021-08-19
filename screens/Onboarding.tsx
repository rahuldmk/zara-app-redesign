import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Animated } from 'react-native';

import { AuthStackParamList } from '../types';
import { onboarding } from '../constants/Data';
import { OnboardingItem } from '../components/OnboardingItem';
import { StatusBar } from 'expo-status-bar';
import { Indicator } from '../components/Indicator';
export default function Onboarding({
  navigation,
}: StackScreenProps<AuthStackParamList, 'Onboarding'>) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  function onStart() {
    navigation.navigate('Signin');
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList
        style={{ flex: 1 }}
        data={onboarding}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        keyExtractor={(_, index) => 'on_' + index}
        renderItem={({ item, index }) => <OnboardingItem onPress={onStart} letstart={item.lestStar} title={item.heading} image={item.image} subtitle={item.subtitle} key={index} />}
      />
      <Indicator scrollX={scrollX} />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  dotcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    margin: 5
  }
});

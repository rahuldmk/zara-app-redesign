import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

type IOnboardingItem = {
    title: string,
    image: number,
    subtitle: string,
    letstart: boolean,
    onPress(): void
}

const { width, height } = Dimensions.get('window');

export const OnboardingItem = ({ title, image, subtitle, letstart, onPress }: IOnboardingItem) => {
    return (
        <View style={{ backgroundColor: '#222', flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image} >
                <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>

                    <View style={styles.bottomContainer}>
                        {
                            letstart &&
                            <TouchableOpacity onPress={onPress} style={styles.letStartButton}>
                                <View><Text style={styles.buttonText}>Let's Start</Text></View>
                            </TouchableOpacity>
                        }
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.subtitle}>{subtitle}</Text>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomContainer: {
        position: 'absolute',
        bottom: 100,
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width
    },
    title: {
        fontFamily: 'Muli',
        color: '#FFF',
        fontSize: 28,
        lineHeight: 40,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        lineHeight: 20,
        color: '#fff',
        textAlign: 'center',
    },
    letStartButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        width: 100,
        height: 40,
        borderRadius:5,
        borderColor:'#FFEEEE',
        borderWidth:1
    },
    buttonText:{
        color:'#fff'
    }
})
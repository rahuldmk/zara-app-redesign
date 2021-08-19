import React from 'react';
import { View, Animated, Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');
import { onboarding } from '../constants/Data';

type IScollX = {
    scrollX: any
}

export const Indicator = ({ scrollX }: IScollX) => {

    return (

        <View style={{ position: 'absolute', bottom: 50, flexDirection: 'row' }}>
            {
                onboarding.map((_, i) => {

                    const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.8, 1.2, 0.8],
                        extrapolate: 'clamp'
                    })

                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.4, 1, 0.4],
                        extrapolate: 'clamp'
                    })

                    return (
                        <Animated.View
                            key={`indicator-${i}`}
                            style={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                backgroundColor: '#FFF',
                                margin: 5,
                                transform: [{
                                    scale
                                }],
                                opacity
                            }}
                        >

                        </Animated.View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
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
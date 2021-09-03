import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

type ThemeProps = {
    onPress(): void,
}

type IButtonProps =  TouchableOpacity['props'];

export const Button = ({ onPress, children,style }: IButtonProps) => {
    
    const buttonStyle = [
        styles.button,
        style,
    ]
    
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 52,
        width: width-50,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:9
    }
})
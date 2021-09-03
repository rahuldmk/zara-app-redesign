import React from 'react';
import { Text as DefaultText, StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import textSize from '../constants/Size';

type ThemeProps = {
    h1?: boolean,
    h2?: boolean,
    placeholder?: boolean,
    button?: boolean,
    big?: boolean,
    toptread?: boolean,
    fulldetails?: boolean,
    color?: string
}

type ITextProps = ThemeProps & DefaultText['props'];

export const Text = ({ h1, color, h2, placeholder, button, big, toptread, fulldetails, style, ...otherProps }: ITextProps) => {

    const textStyle = [
        styles.defaultText,
        h1 && styles.h1,
        h2 && { fontSize: textSize.size.h2 },
        placeholder && { fontSize: textSize.size.placeholder },
        button && { fontSize: textSize.size.button },
        big && { fontSize: textSize.size.big },
        toptread && { fontSize: textSize.size.toptread },
        fulldetails && { fontSize: textSize.size.fullDetails },
        { color: color || '#000' },
        style,
    ]

    return <DefaultText style={textStyle} {...otherProps} />

}

const styles = StyleSheet.create({
    defaultText: {
        color: '#000',
        fontFamily: 'Muli',
        fontSize: 14
    },
    h1:{
        fontFamily:'Muli-Bold',
        fontSize:textSize.size.h1
    }
})
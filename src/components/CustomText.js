

import React from 'react';
import { StyleSheet, Text, useColorScheme } from 'react-native'
import { darkThemeColor, lightColors } from '../globalStyles/globalStyles';


const CustomText = ({
    children, bold, size = 16,
    color = lightColors.primary, title = "", extraStyles = {}, invertedColor, ...rest
}) => {
    const theme = useColorScheme()
    return (
        <Text style={[styles.container,
        {
            fontWeight: bold ? "bold" : 'normal', fontSize: size,
            // color
            color: theme === "light" ? color : invertedColor ? invertedColor : darkThemeColor.primary,

        }, { ...extraStyles }
        ]}{...rest} >
            {title}
        </Text>
    )
}


const styles = StyleSheet.create({
    container: {
    }
})
export default CustomText;
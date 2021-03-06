import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { darkThemeColor, generalSizes, lightColors } from '../globalStyles/globalStyles';
import CustomText from './CustomText';


const Button = ({ onPress, title = "", titleSize = 12, boldTitle = false, pill, active,
    bg = lightColors.bg_pink, ml = 0, mr = 0, mt = 0, mb = 0, mv = 0, mh = 0, pv = 0, ph = 0, br = 0 }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                {
                    marginTop: mt, marginBottom: mb, marginVertical: mv, marginHorizontal: mh, marginLeft: ml, marginRight: mr, paddingHorizontal: ph, paddingVertical: pv, borderRadius: br,
                    backgroundColor: bg
                },
                pill ? styles.pill : null,
            ]}>
            <CustomText title={title} bold={boldTitle} size={titleSize} invertedColor={active ? lightColors.secondary : darkThemeColor.primary} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    pill: { paddingVertical: generalSizes.size_md, paddingHorizontal: generalSizes.size_lg, borderRadius: generalSizes.size_lg, }
})
export default Button;
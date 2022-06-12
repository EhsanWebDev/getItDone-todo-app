import React from 'react';
import { StyleSheet, SafeAreaView, useColorScheme } from 'react-native'
import CustomText from '../CustomText';
import IonIcons from "react-native-vector-icons/Ionicons"
import Container from '../Container';
import { darkThemeColor, lightColors } from '../../globalStyles/globalStyles';
import { useSelector } from 'react-redux';

const NavHeader = ({ title, boldTitle, onBackPress, backBtnColor = "#fff" }) => {
    const state = useSelector(state => state)
    const { theme: reduxTheme, themeSource } = state.settings || {}
    const theme = reduxTheme

    return (
        <SafeAreaView style={styles.container}>
            <Container withoutGeneralMargin rowSb extraStyles={{ borderBottomWidth: 1, borderBottomColor: lightColors.secondary, paddingVertical: 12, }}>
                <Container withoutGeneralMargin extraStyles={{ flex: 0 }}>
                    {onBackPress && <IonIcons name="chevron-back" size={24} color={backBtnColor} onPress={onBackPress} style={{ flex: 0 }} />}
                </Container>
                <Container withoutGeneralMargin extraStyles={{ justifyContent: "center", alignItems: "center", paddingRight: 24, flex: 1, }} >
                    <CustomText title={title} bold={boldTitle} size={20} color={theme === "light" ? darkThemeColor.bg_dark : lightColors.bg_light} />
                </Container>
            </Container>


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {}
})
export default NavHeader;
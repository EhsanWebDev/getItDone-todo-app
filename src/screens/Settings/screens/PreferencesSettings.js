import React from 'react';
import { StyleSheet, SafeAreaView, useColorScheme } from 'react-native'
import Container from '../../../components/Container';
import CustomText from '../../../components/CustomText';
import HorBtnWithIcon from '../../../components/HorBtnWithIcon/HorBtnWithIcon';
import { darkThemeColor, generalSizes, lightColors } from '../../../globalStyles/globalStyles';
import NavHeader from "../../../components/NavHeader/NavHeader"
import { useSelector } from 'react-redux';

const PreferencesSettings = ({ navigation }) => {
    const state = useSelector(state => state)
    const { theme: reduxTheme, themeSource } = state.settings || {}
    const theme = reduxTheme


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme === "light" ? lightColors.bg_light : darkThemeColor.bg_dark }}>
            <NavHeader title={"Preferences Settings"} onBackPress={() => navigation.goBack()} backBtnColor={theme === "light" ? darkThemeColor.bg_dark : lightColors.bg_light} />
            <Container mt={generalSizes.size_lg}>
                <HorBtnWithIcon titleColor={theme === "light" ? lightColors.solidGray : lightColors.bg_light} title={"Dark mode"} icon='ios-contrast' onPress={() => navigation.navigate("DarkMode")} />
                <HorBtnWithIcon titleColor={theme === "light" ? lightColors.solidGray : lightColors.bg_light} title={"Fonts"} icon="ios-text" />
            </Container>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {}
})
export default PreferencesSettings;
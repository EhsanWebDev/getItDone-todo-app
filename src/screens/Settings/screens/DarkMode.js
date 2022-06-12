import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, useColorScheme, TouchableOpacity, StatusBar } from 'react-native'
import NavHeader from '../../../components/NavHeader/NavHeader';
import { darkThemeColor, generalSizes, lightColors } from '../../../globalStyles/globalStyles';
import Icon from "react-native-vector-icons/AntDesign"
import Container from '../../../components/Container';
import CustomText from '../../../components/CustomText';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../redux/settingsSlice';
import useCurrentTheme from '../../../hooks/useCurrentTheme';

const DarkMode = ({ navigation }) => {
    // const theme = useColorScheme()


    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const { theme, themeSource } = state.settings || {}
    // const sysTheme = useColorScheme()


    // const theme = useCurrentTheme(themeSource, reduxTheme)
    const [mode, setMode] = useState(theme)
    // console.log({ theme, themeSource, reduxTheme })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme === "light" ? lightColors.bg_light : darkThemeColor.bg_dark }}>
            <StatusBar barStyle={theme === "light" ? "dark-content" : "light-content"} />
            <NavHeader title={"Dark mode"} onBackPress={() => navigation.goBack()} backBtnColor={theme === "light" ? darkThemeColor.bg_dark : lightColors.bg_light} />
            <Container mt={generalSizes.size_lg} rowSb>
                <CustomText title='Light' color={theme === "light" ? darkThemeColor.bg_dark : lightColors.bg_light} />
                <TouchableOpacity onPress={() => {
                    setMode("light")
                    dispatch(setTheme({
                        themeSource: "local",
                        theme: "light"
                    }))
                }}>
                    {mode === "light" ? <Icon style={{ borderRadius: 20 }} name='checkcircle' color={theme === "light" ? lightColors.secondary : lightColors.bg_pink} size={16} /> : <Container bg={theme === "dark" ? '#ECECEC' : lightColors.mutedGray} width={16} withoutGeneralMargin height={16} br={11} />}
                </TouchableOpacity>
            </Container>
            <Container mt={generalSizes.size_lg} rowSb>
                <CustomText title='Dark' color={theme === "light" ? darkThemeColor.bg_dark : lightColors.bg_light} />
                <TouchableOpacity onPress={() => {
                    setMode("dark")
                    dispatch(setTheme({
                        themeSource: "local",
                        theme: "dark"
                    }))
                }}>
                    {mode === "dark" ? <Icon style={{ borderRadius: 20 }} name='checkcircle' color={theme === "light" ? lightColors.secondary : lightColors.bg_pink} size={16} /> : <Container bg={theme === "dark" ? '#ECECEC' : lightColors.mutedGray} width={16} withoutGeneralMargin height={16} br={11} />}
                </TouchableOpacity>
            </Container>
            {/* <Container mt={generalSizes.size_lg} rowSb>
                <CustomText title='Follow system' color={theme === "light" ? darkThemeColor.bg_dark : lightColors.bg_light} />
                <TouchableOpacity
                    onPress={() => {
                        setMode("system")
                        dispatch(setTheme({
                            themeSource: "system",
                            theme: ""
                        }))
                    }}>
                    {mode === "system" ? <Icon style={{ borderRadius: 20 }} name='checkcircle' color={theme === "light" ? lightColors.secondary : lightColors.bg_pink} size={16} /> : <Container bg={theme === "dark" ? '#ECECEC' : lightColors.mutedGray} width={16} withoutGeneralMargin height={16} br={11} />}
                </TouchableOpacity>
            </Container> */}


        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {}
})
export default DarkMode;
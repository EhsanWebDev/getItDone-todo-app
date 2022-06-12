import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, useColorScheme, StatusBar } from 'react-native'
import IconButton from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import Avatar from '../../components/Avatar';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import HorBtnWithIcon from '../../components/HorBtnWithIcon/HorBtnWithIcon';
import { darkThemeColor, generalSizes, lightColors } from '../../globalStyles/globalStyles';


const Settings = ({ navigation }) => {
    const state = useSelector(state => state)
    const { theme, themeSource } = state.settings || {}

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme === "light" ? lightColors.bg_light : darkThemeColor.bg_dark }}>
            <StatusBar barStyle={theme === "light" ? "dark-content" : "light-content"} />
            <Container rowSb withoutGeneralMargin>
                <Container row mt={generalSizes.size_lg}>
                    <Avatar size={40} withIcon imageSource={require("../../../assets/images/mypic2.jpeg")} />
                    <Container>
                        <CustomText title='Ehsan Ahmad' bold size={20} />
                        <CustomText title='View Profile' size={10} color={lightColors.muted} />
                    </Container>
                </Container>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: lightColors.bg_pink, borderRadius: 14, width: 28, height: 28, justifyContent: 'center', alignItems: 'center', marginRight: 16 }}>
                    <IconButton name='close-outline' size={20} />
                </TouchableOpacity>
            </Container>

            <Container mt={generalSizes.size_lg} extraStyles={{ borderWidth: 0.8, borderColor: lightColors.lightGray }} />
            <Container mt={generalSizes.size_lg}>
                <CustomText title='Manage' bold size={14} color={lightColors.primary} />
                <HorBtnWithIcon title={"Preferences"} icon='settings-outline' onPress={() => navigation.navigate("PreferencesSettings")} />
                <HorBtnWithIcon title={"About"} icon="information-circle-outline" />
            </Container>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {}
})
export default Settings;
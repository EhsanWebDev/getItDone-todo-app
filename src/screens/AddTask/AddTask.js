import React from 'react';
import { StyleSheet, SafeAreaView, useColorScheme } from 'react-native'
import CustomText from '../../components/CustomText';
import { darkThemeColor, lightColors } from '../../globalStyles/globalStyles';


const AddTask = (props) => {
    const theme = useColorScheme()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme === "light" ? lightColors.bg_light : darkThemeColor.bg_dark }}>
            <CustomText title='Add task' color='black' />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1 }
})
export default AddTask;
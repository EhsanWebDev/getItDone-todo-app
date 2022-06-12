import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import CustomText from '../components/CustomText';


const DummyScreen1 = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <CustomText title='Dummy1' color='black' />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {}
})
export default DummyScreen1;    
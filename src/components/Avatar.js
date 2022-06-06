import React from 'react';
import { StyleSheet, SafeAreaView, Image } from 'react-native'


const Avatar = ({ imageSource, size = 10, rounded = false }) => {
    return (
        < >
            <Image source={imageSource} style={[{ width: size, height: size, }, rounded ? { borderRadius: size / 2 } : null]} />
        </>
    )
}


const styles = StyleSheet.create({
    container: {},
    rounded: { borderRadius: "50%" }
})
export default Avatar;
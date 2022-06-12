import React from 'react';
import { StyleSheet, SafeAreaView, Image, View, TouchableOpacity } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { shadow } from '../globalStyles/commonStyles';
import { lightColors } from '../globalStyles/globalStyles';
import Container from './Container';

const Avatar = ({ imageSource, size = 10, rounded = false, withIcon = false }) => {

    if (withIcon) {
        return (
            <View style={{ position: 'relative', }}>
                <Image source={imageSource} style={[{ width: size, height: size, borderRadius: 6 },
                rounded ? { borderRadius: size / 2 } : null,]} />
                <TouchableOpacity style={[styles.editIcon, {
                    ...shadow
                }]}>
                    <MaterialIcons name='edit' color={lightColors.light} />
                </TouchableOpacity>


            </View>
        )
    }

    return (
        < >
            <Image source={imageSource} style={[{ width: size, height: size, },
            rounded ? { borderRadius: size / 2 } : null]} />

        </>
    )
}


const styles = StyleSheet.create({
    container: {},
    editIcon: {
        width: 20, height: 20, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: lightColors.bg_light, position: "absolute", top: -8, right: -8,
    }

})
export default Avatar;
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import Container from '../Container';
import IonIcons from "react-native-vector-icons/Ionicons"
import CustomText from '../CustomText';
import { lightColors } from '../../globalStyles/globalStyles';

const HorBtnWithIcon = ({ title, icon, onPress, titleColor }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}>
            <Container withoutGeneralMargin row>
                <IonIcons name={icon} size={18} color={lightColors.mutedGray} />
                <CustomText title={title} color={titleColor} extraStyles={{ marginLeft: 6 }} />
            </Container>


            <IonIcons name='arrow-forward' size={18} color={titleColor} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12, borderBottomColor: lightColors.lightGray, borderBottomWidth: 1
    }
})
export default HorBtnWithIcon;
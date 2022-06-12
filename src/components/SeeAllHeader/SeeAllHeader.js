import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import Button from '../Button';
import Container from '../Container';
import CustomText from '../CustomText';


const SeeAllHeader = ({ mainTitle = "", subTitle = "", onPress }) => {
    return (
        <Container style={styles.container} rowSb withoutGeneralMargin>
            <Container row withoutGeneralMargin>
                <CustomText size={20} bold title={mainTitle} />
                {subTitle ? <CustomText extraStyles={{ marginTop: 4 }} size={14} bold title={` (${subTitle})`} /> : null}
            </Container>


            <Container withoutGeneralMargin>
                <Button title='See All >' titleSize={13} onPress={onPress} boldTitle bg='transparent' />
            </Container>
        </Container>
    )
}


const styles = StyleSheet.create({
    container: {}
})
export default SeeAllHeader;
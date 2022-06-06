import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native'
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import { generalSizes, lightColors } from '../../globalStyles/globalStyles';


const Home = () => {
    return (
        <SafeAreaView>
            <Container rowSb mt={generalSizes.size_lg}>
                <Container withoutGeneralMargin>
                    <CustomText title='Hello, Ehsan Ahmad' bold size={20} />
                    <CustomText title='Here are your tasks!' size={10} color={lightColors.muted} />
                </Container>
                <Avatar size={40} rounded imageSource={require("../../../assets/images/mypic2.jpeg")} />
            </Container>

            <Container>
                <CustomTextInput placeholder='Search your task...' label='Search' />
            </Container>

            <Container row mt={generalSizes.size_lg}>
                <Button pill title="Today's" boldTitle />
                <Button pill bg='transparent' title="Calender" ml={generalSizes.size_lg} boldTitle />
                <Button pill bg='transparent' title="Profile" ml={generalSizes.size_lg} boldTitle />
            </Container>
            <Container mt={generalSizes.size_lg}>
                <CustomText title='Pending' bold size={20} />
                <Container withoutGeneralMargin rowSb shadow_sm br={generalSizes.size_lg} bg='white' mt={generalSizes.size_md} pv={generalSizes.size_lg - 4} ph={generalSizes.size_lg}>
                    <Container withoutGeneralMargin row>
                        <Button bg='#ECECEC' pv={4} ph={11} br={20} />
                        <Container withoutGeneralMargin>
                            <CustomText extraStyles={{ marginLeft: 12 }} title='Take a nap.' size={12} color={lightColors.primary} />
                        </Container>
                    </Container>
                    <Container width={12} height={12} bg="red" br={6} />
                </Container>

            </Container>

        </SafeAreaView>
    )
}

export default Home;
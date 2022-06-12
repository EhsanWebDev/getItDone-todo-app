import React, { useState } from 'react';
import { SafeAreaView, FlatList, useColorScheme, StatusBar } from 'react-native'
import { useSelector } from 'react-redux';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Container from '../../components/Container';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import SeeAllHeader from '../../components/SeeAllHeader/SeeAllHeader';
import { darkThemeColor, generalSizes, lightColors } from '../../globalStyles/globalStyles';
import TaskItem from './components/TaskItem';

const Home = ({ navigation }) => {
    const [items, setItems] = useState([
        { id: 1, title: "Take a nap now.", isCompleted: false, priority: "low" },
        { id: 2, title: "Learn something new.", isCompleted: false, priority: "medium" },
        { id: 3, title: "Go for a walk.", isCompleted: false, priority: "high" },
    ])
    const state = useSelector(state => state)
    const { theme: reduxTheme, themeSource } = state.settings || {}
    const theme = reduxTheme

    const handleItemClick = (item) => {
        const updatedList = (items || []).map(itm => {
            const { id } = itm || {}
            if (id === item?.id) {
                return {
                    ...itm,
                    isCompleted: !itm?.isCompleted
                }
            }
            return itm
        })
        setItems(updatedList)
    }

    console.log({ state })
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme === "light" ? lightColors.bg_light : darkThemeColor.bg_dark }}>
            <StatusBar barStyle={theme === "light" ? "dark-content" : "light-content"} />
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
                <Button pill title="Today's" boldTitle active />
                <Button pill bg='transparent' title="Calender" ml={generalSizes.size_lg} boldTitle onPress={() => navigation.navigate("AddTaskStack")} />
            </Container>
            <Container mt={generalSizes.size_lg}>
                <SeeAllHeader mainTitle='Pending' subTitle='6' />

                <FlatList
                    data={items}
                    renderItem={({ item }) => <TaskItem item={item} onPress={handleItemClick} />}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ paddingBottom: generalSizes.size_lg, marginTop: generalSizes.size_md }}
                />


            </Container>

        </SafeAreaView>
    )
}

export default Home;
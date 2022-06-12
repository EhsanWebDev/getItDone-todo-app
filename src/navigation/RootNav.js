import React from 'react';
import { StyleSheet, SafeAreaView, useColorScheme, TouchableOpacity, View, Text } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Home from '../screens/Home/Home';
import AddTask from '../screens/AddTask/AddTask';
import Settings from '../screens/Settings/Settings';
import { darkThemeColor, lightColors } from '../globalStyles/globalStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DummyScreen1 from '../dummy/DummyScreen1';
import PreferencesSettings from '../screens/Settings/screens/PreferencesSettings';
import DarkMode from '../screens/Settings/screens/DarkMode';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const HStack = createNativeStackNavigator()
const AddTaskStack = createNativeStackNavigator()
const SettingsStack = createNativeStackNavigator()


const HomeStack = () => (
    <HStack.Navigator>
        <HStack.Screen options={{ headerShown: false }} name="Home" component={Home} />
    </HStack.Navigator>
)
const AddNewTaskStack = () => (
    <AddTaskStack.Navigator>
        <AddTaskStack.Group screenOptions={{ presentation: "modal" }}>
            <AddTaskStack.Screen options={{ headerShown: false }} name="AddTask" component={AddTask} />
        </AddTaskStack.Group>
        <AddTaskStack.Group >
            <AddTaskStack.Screen options={{ headerShown: false }} name="Dummy1" component={DummyScreen1} />
        </AddTaskStack.Group>
    </AddTaskStack.Navigator>
)
const SettingsStackScreens = () => (
    <SettingsStack.Navigator>
        <SettingsStack.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
        <SettingsStack.Screen options={{ headerShown: false }} name="PreferencesSettings" component={PreferencesSettings} />
        <SettingsStack.Screen options={{ headerShown: false }} name="DarkMode" component={DarkMode} />
    </SettingsStack.Navigator>
)


const RootNav = (props) => {
    const state = useSelector(state => state)
    const { theme: reduxTheme, themeSource } = state.settings || {}
    const theme = reduxTheme

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeStack') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'SettingsStack') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme === "light" ? darkThemeColor.bg_dark : lightColors.bg_light,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: theme === "light" ? lightColors.bg_light : darkThemeColor.bg_dark,
                    position: 'absolute',
                    bottom: 0,
                    borderRadius: 15,
                    padding: 10,
                    height: 84,
                    ...styles.shadow
                }
            })}>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name="AddTaskStack" component={AddNewTaskStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <Ionicons name={'add-circle'} size={60} color={theme === "light" ? darkThemeColor.bg_dark : lightColors.bg_pink} style={{ alignSelf: 'center', padding: 0, margin: 0 }} />
                    ),
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            onPress={props.onPress}
                            style={{
                                top: -20,
                                justifyContent: 'center',
                                alignItems: 'center',
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.5,
                                elevation: 5,
                            }}>
                            <View style={{
                                width: 60, height: 60,
                                borderRadius: 30
                            }}>
                                {props.children}
                            </View>

                        </TouchableOpacity>
                    ),
                }} />
            <Tab.Screen name="SettingsStack" component={SettingsStackScreens} options={{
                tabBarStyle: { display: 'none' },
            }} />
        </Tab.Navigator>

    )
}


const styles = StyleSheet.create({
    container: {},
    shadow: {
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 12.5,
        elevation: 5,
    }
})
export default RootNav;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native';
import { darkThemeColor, lightColors } from './src/globalStyles/globalStyles';
import Home from './src/screens/Home/Home';

const App = () => {
  const theme = useColorScheme()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme === "light" ? lightColors.bg_light : darkThemeColor.bg_dark }}>
      <Home />
    </SafeAreaView>
  );
};


export default App;

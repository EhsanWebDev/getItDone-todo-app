import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import RootNav from './src/navigation/RootNav';
import { store } from './src/redux/store';
import { useColorScheme } from "react-native";


const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </Provider>



  );
};


export default App;

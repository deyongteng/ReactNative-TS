import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'styled-components';
import LobbyScene from '../scene/Lobby/LobbyScene';
import MineScene from '../scene/Mine/MineScene';
import HomeRoutes from './HomeRoutes';

const Stack = createStackNavigator();

const MainRoutes =()=> {
    const themeContext = useContext(ThemeContext); // 目前主題

    return <Stack.Navigator initialRouteName="Loading"
    screenOptions={{
        headerStyle: { backgroundColor: themeContext.COLORS.THEME_MAIN_1, shadowColor: 'transparent', elevation: 0 },
        headerTitleStyle: { alignItems: 'center' },
    }}>
        <Stack.Screen name="Home" component={HomeRoutes} options={{ headerShown: false }} />
    </Stack.Navigator>
}

export default MainRoutes;
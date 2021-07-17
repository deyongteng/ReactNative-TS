import React, { useContext } from 'react';
import { Platform } from 'react-native';
import CommonStyles from '../styles/common';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components';
import NoHeaderHoc from '../components/NoHeaderHoc';
import LobbyScene from '../scene/Lobby/LobbyScene';
import MineScene from '../scene/Mine/MineScene';
import { HomeTabProvider, useHomeTab } from '../context/HomeTabContext';

const Tab = createBottomTabNavigator();

const Routes = () => {

    const themeContext = useContext(ThemeContext); // 不使用styled-components的條件下取得目前主題配色
    const routes = [
        { name: 'Lobby', displayName: '大厅', component: LobbyScene, icon: themeContext.IMAGES.HOME_BOTTOM_TAB_LOBBY_NORMAL, iconActive: themeContext.IMAGES.HOME_BOTTOM_TAB_LOBBY_ACTIVE, unmountOnBlur: false },
        { name: 'Mine', displayName: '我的', component: MineScene, icon: themeContext.IMAGES.HOME_BOTTOM_TAB_MINE_NORMAL, iconActive: themeContext.IMAGES.HOME_BOTTOM_TAB_MINE_ACTIVE, unmountOnBlur: true },
    ];
    
    const { visible } = useHomeTab(); // Tab是否顯示
    let platformStyle;

    if (Platform.OS === 'android') {
        platformStyle = visible ? { height: 62, paddingTop: 15, paddingBottom: 9 } : {}
    } else {
        // 針對ios下方control bar做調整
        platformStyle = visible ? { height: 68, paddingTop: 15, paddingBottom: 18 } : {}
    }

    return <Tab.Navigator
        initialRouteName="LobbyScene"
        tabBarOptions={{
            tabStyle: {},
            style: { ...platformStyle, backgroundColor: themeContext.COLORS.COMPONENT_BG, borderTopWidth: 1, borderTopColor: themeContext.COLORS.BORDER_COMMON },
            inactiveTintColor: themeContext.COLORS.TEXT_DISABLED,
            activeTintColor: themeContext.COLORS.THEME_MAIN_1,
            labelStyle: { marginTop: 4 }
        }}>
        {/** 生成常規tab screen */}
        {routes.map((item, index) => (
            <Tab.Screen key={`home_tab_${index}`} name={item.name} component={item.component}
                options={{
                    tabBarVisible: visible,
                    unmountOnBlur: item.unmountOnBlur,
                    tabBarIcon: ({ focused }: { focused: boolean }) => (<CommonStyles.Image.Square size={22} source={focused ? item.iconActive : item.icon} />),
                    tabBarLabel: item.displayName,
                }}
            />
        ))}
    </Tab.Navigator>
}

const HomeRoutes = () => (
    <NoHeaderHoc>
        <HomeTabProvider>
            <Routes />
        </HomeTabProvider>
    </NoHeaderHoc>
)

export default HomeRoutes;
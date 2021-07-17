import { ImageSourcePropType } from 'react-native';
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        // 所有顏色
        COLORS: {
            THEME_MAIN_1: string; 
            COMPONENT_BG: string;
            BORDER_COMMON: string;
            TEXT_DISABLED: string;
        },
        IMAGES: {
            HOME_BOTTOM_TAB_LOBBY_NORMAL: ImageSourcePropType; // 底部主選單-首頁
            HOME_BOTTOM_TAB_LOBBY_ACTIVE: ImageSourcePropType;
            HOME_BOTTOM_TAB_MINE_NORMAL: ImageSourcePropType; // 底部主選單-我的
            HOME_BOTTOM_TAB_MINE_ACTIVE: ImageSourcePropType;
        }
    }
}

const LightTheme: DefaultTheme = {
    COLORS: {
        THEME_MAIN_1: 'rgb(248, 86, 91)',
        COMPONENT_BG: 'rgb(255, 255, 255)',
        BORDER_COMMON: 'rgb(192, 192, 192)',
        TEXT_DISABLED: 'rgb(202, 198, 202)',
    },
    IMAGES: {
        HOME_BOTTOM_TAB_LOBBY_NORMAL: require('../assets/img/icon/home_tab/lobby.png'),
        HOME_BOTTOM_TAB_LOBBY_ACTIVE: require('../assets/img/icon/home_tab/lobby_active.png'), 
        HOME_BOTTOM_TAB_MINE_NORMAL: require('../assets/img/icon/home_tab/mine.png'),
        HOME_BOTTOM_TAB_MINE_ACTIVE: require('../assets/img/icon/home_tab/mine_active.png'),
    }
}

export const Themes = {
    LightTheme,
}
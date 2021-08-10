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
            SCENE_BG_2: string;
            SCENE_BG: string;
            FORM_TAB_LINE: string;
            BORDER_SHADOW: string;
            TRANSPARENT: string;
            MASK_BG: string;
            TEXT_WITH_BG: string;
            LINE_START_COLOR: string;
            LINE_END_COLOR: string;
            TEXTINPUT_BG: string;
        },
        IMAGES: {
            HOME_BOTTOM_TAB_LOBBY_NORMAL: ImageSourcePropType; // 底部主選單-首頁
            HOME_BOTTOM_TAB_LOBBY_ACTIVE: ImageSourcePropType;
            HOME_BOTTOM_TAB_MINE_NORMAL: ImageSourcePropType; // 底部主選單-我的
            HOME_BOTTOM_TAB_MINE_ACTIVE: ImageSourcePropType;
            COMMON_ICON_CATEGORY: ImageSourcePropType;
            BANNER_IMG1: ImageSourcePropType;
            BANNER_IMG2: ImageSourcePropType;
            BANNER_IMG3: ImageSourcePropType;
            BANNER_IMG4: ImageSourcePropType;
        }
    }
}

const LightTheme: DefaultTheme = {
    COLORS: {
        THEME_MAIN_1: 'rgb(248, 86, 91)',
        COMPONENT_BG: 'rgb(255, 255, 255)',
        BORDER_COMMON: 'rgb(192, 192, 192)',
        TEXT_DISABLED: 'rgb(202, 198, 202)',
        SCENE_BG_2: 'rgb(245, 243, 247)',
        SCENE_BG: 'rgb(255, 255, 255)',
        FORM_TAB_LINE: 'rgb(238, 233, 233)',
        BORDER_SHADOW: 'rgba(189, 176, 154, 0.33)',
        TRANSPARENT: 'rgba(0, 0, 0, 0)',
        MASK_BG: 'rgba(0, 0, 0, 0.5)',
        TEXT_WITH_BG: 'rgb(255, 255, 255)',
        LINE_START_COLOR: '#FF8F0D',
        LINE_END_COLOR: '#FF5114',
        TEXTINPUT_BG: 'rgb(255, 255, 255)',
    },
    IMAGES: {
        HOME_BOTTOM_TAB_LOBBY_NORMAL: require('../assets/img/icon/home_tab/lobby.png'),
        HOME_BOTTOM_TAB_LOBBY_ACTIVE: require('../assets/img/icon/home_tab/lobby_active.png'), 
        HOME_BOTTOM_TAB_MINE_NORMAL: require('../assets/img/icon/home_tab/mine.png'),
        HOME_BOTTOM_TAB_MINE_ACTIVE: require('../assets/img/icon/home_tab/mine_active.png'),
        COMMON_ICON_CATEGORY: require('../assets/img/icon/common/icon_category.png'),
        BANNER_IMG1: require('../assets/img/banner/banner1.jpeg'),
        BANNER_IMG2: require('../assets/img/banner/banner2.jpeg'),
        BANNER_IMG3: require('../assets/img/banner/banner3.jpeg'),
        BANNER_IMG4: require('../assets/img/banner/banner4.jpeg'),
    }
}

export const Themes = {
    LightTheme,
}
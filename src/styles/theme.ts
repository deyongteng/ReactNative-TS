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
            HOME_SCROLL_VIEW: string;
        },
        IMAGES: {
            HOME_BOTTOM_TAB_LOBBY_NORMAL: ImageSourcePropType; // 底部主選單-首頁
            HOME_BOTTOM_TAB_LOBBY_ACTIVE: ImageSourcePropType;
            HOME_BOTTOM_TAB_MINE_NORMAL: ImageSourcePropType; // 底部主選單-我的
            HOME_BOTTOM_TAB_MINE_ACTIVE: ImageSourcePropType;
            HOMME_LINE: ImageSourcePropType; // 首页banner遮罩线
            COMMON_ICON_CATEGORY: ImageSourcePropType;
            BANNER_IMG1: ImageSourcePropType;
            BANNER_IMG2: ImageSourcePropType;
            BANNER_IMG3: ImageSourcePropType;
            BANNER_IMG4: ImageSourcePropType;
            NAVS_ALPM: ImageSourcePropType;
            NAVS_CZZX: ImageSourcePropType;
            NAVS_FL: ImageSourcePropType;
            NAVS_HWJY: ImageSourcePropType;
            NAVS_HYZX: ImageSourcePropType;
            NAVS_ALJK: ImageSourcePropType;
            NAVS_JPZY: ImageSourcePropType;
            NAVS_JPJD: ImageSourcePropType;
            NAVS_JRBK: ImageSourcePropType;
            NAVS_KPSH: ImageSourcePropType;
            NAVS_TBCH: ImageSourcePropType;
            NAVS_THXS: ImageSourcePropType;
            NAVS_TMCS: ImageSourcePropType;
            NAVS_TMGJ: ImageSourcePropType;
            NAVS_TMMS: ImageSourcePropType;
            NAVS_TMXP: ImageSourcePropType;
            NAVS_XY: ImageSourcePropType;
            NAVS_ZDXH: ImageSourcePropType;
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
        HOME_SCROLL_VIEW: "#f4f4f4"
    },
    IMAGES: {
        HOME_BOTTOM_TAB_LOBBY_NORMAL: require('../assets/img/icon/home_tab/lobby.png'),
        HOME_BOTTOM_TAB_LOBBY_ACTIVE: require('../assets/img/icon/home_tab/lobby_active.png'), 
        HOME_BOTTOM_TAB_MINE_NORMAL: require('../assets/img/icon/home_tab/mine.png'),
        HOME_BOTTOM_TAB_MINE_ACTIVE: require('../assets/img/icon/home_tab/mine_active.png'),
        COMMON_ICON_CATEGORY: require('../assets/img/icon/common/icon_category.png'),
        HOMME_LINE: require('../assets/img/home/line.png'),
        BANNER_IMG1: require('../assets/img/banner/banner1.jpeg'),
        BANNER_IMG2: require('../assets/img/banner/banner2.jpeg'),
        BANNER_IMG3: require('../assets/img/banner/banner3.jpeg'),
        BANNER_IMG4: require('../assets/img/banner/banner4.jpeg'),
        NAVS_ALPM: require('../assets/img/navs/alpm.png'),
        NAVS_CZZX: require('../assets/img/navs/czzx.png'),
        NAVS_FL: require('../assets/img/navs/fl.png'),
        NAVS_HWJY: require('../assets/img/navs/hwjy.png'),
        NAVS_HYZX: require('../assets/img/navs/hyzx.png'),
        NAVS_ALJK: require('../assets/img/navs/aljk.png'),
        NAVS_JPZY: require('../assets/img/navs/jpzy.png'),
        NAVS_JPJD: require('../assets/img/navs/jpjd.png'),
        NAVS_JRBK: require('../assets/img/navs/jrbk.png'),
        NAVS_KPSH: require('../assets/img/navs/kpsh.png'),
        NAVS_TBCH: require('../assets/img/navs/tbch.png'),
        NAVS_THXS: require('../assets/img/navs/thxs.png'),
        NAVS_TMCS: require('../assets/img/navs/tmcs.png'),
        NAVS_TMGJ: require('../assets/img/navs/tmgj.png'),
        NAVS_TMMS: require('../assets/img/navs/tmms.png'),
        NAVS_TMXP: require('../assets/img/navs/tmxp.png'),
        NAVS_XY: require('../assets/img/navs/xy.png'),
        NAVS_ZDXH: require('../assets/img/navs/zdxh.png'),
    }
}

export const Themes = {
    LightTheme,
}
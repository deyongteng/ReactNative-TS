import React, { useMemo, useContext } from 'react';
import { View } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from 'styled-components';

/** 給無header的畫面使用的HOC，用SafeAreaView包住組件 */
const NoHeaderHoc = (props: { children: React.ReactNode, safeAreaColor?: string }) => {
    const themeContext = useContext(ThemeContext); // 目前主題
    // const color = useMemo(() => {
    //     if (props.safeAreaColor) return props.safeAreaColor;
    //     return themeContext.COLORS.STATUSBAR_BG;
    // }, [props.safeAreaColor])
    // children內容佔滿版，不管瀏海的影響
    return (
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    )
    // 原版：children內容不受瀏海影響
    // return (
    //     <SafeAreaView style={{ flex: 1, backgroundColor: color }}>
    //         {/** 多包一層View使child組件能正常使用position absolute */}
    //         <View style={{ flex: 1 }}>
    //             {props.children}
    //         </View>
    //     </SafeAreaView>
    // )
}

export default NoHeaderHoc;
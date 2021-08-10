import React, { useState, useEffect, useContext, useLayoutEffect, useRef, useMemo, useCallback } from 'react';
import { Dimensions, AppState, AppStateStatus, Text, View, ImageSourcePropType} from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
import CommonStyles from '../../styles/common';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderSearch from '../../components/HeaderSearch';
import { ThemeContext } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-banner-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 144;

interface BannerProps {
    image: ImageSourcePropType;
    id: number;
}

type data = {
    id: number;
    image: ImageSourcePropType;
}

const LobbyScene =()=> {

    // 获取主题上下文
    const themeContext = useContext(ThemeContext); 
    const images: BannerProps[] = [
        { id: 1, image: themeContext.IMAGES.BANNER_IMG1 },
        { id: 2, image: themeContext.IMAGES.BANNER_IMG2 },
        { id: 3, image: themeContext.IMAGES.BANNER_IMG3 },
        { id: 4, image: themeContext.IMAGES.BANNER_IMG4 },
    ];
    
    // 加载banner图
    const renderPage = (data: data)=> {
        const { id, image } = data;

        return <View>
            <CommonStyles.Image.Square size={BannerWidth} source={image} style={{height: BannerHeight}}/>
        </View>
    }

    // 主题结构
    return <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[themeContext.COLORS.LINE_START_COLOR, themeContext.COLORS.LINE_END_COLOR]}
            style={{width: wp('100%'), height: hp('100%')}}
        >
        <CommonStyles.View.SafeArea>
            <HeaderSearch/>
            <View style={{width: wp('100%'), height: 144, backgroundColor: themeContext.COLORS.COMPONENT_BG, marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                    activePageIndicatorStyle={{backgroundColor: themeContext.COLORS.COMPONENT_BG}}
                >
                    {images.map((itme) => renderPage({image: itme.image, id: itme.id}))}
                </Carousel>
            </View>
        </CommonStyles.View.SafeArea>
    </LinearGradient>

}
export default LobbyScene;
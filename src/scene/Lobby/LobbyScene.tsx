import React, { useState, useEffect, useContext, useLayoutEffect, useRef, useMemo, useCallback } from 'react';
import { Dimensions, ScrollView, Text, View, ImageSourcePropType, StyleSheet} from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
import CommonStyles from '../../styles/common';
import { useNavigation, useRoute } from '@react-navigation/native';
import HeaderSearch from '../../components/HeaderSearch';
import { ThemeContext } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-banner-carousel';
import Navs from './Navs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';

const Width = Dimensions.get('window').width;
const BannerHeight = 144;

interface BannerProps {
    image: ImageSourcePropType;
    id: number;
}

interface NavProps {
    image: ImageSourcePropType;
    id: number;
    name: string;
}

const formantNavsData =(data: NavProps[])=> {
    let list: NavProps[][] = [];
    let navItemList: NavProps[] = [];
    if( !data || data.length <= 0 ) return data;

    data.forEach((item)=> {

        navItemList.push(item);
        if( navItemList.length >= 2 ){
            list.push(navItemList);
            navItemList = [];
        }
    });

    return list;
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
    
    const navs: NavProps[] = [
        {id: 1, name: '天猫新品', image: themeContext.IMAGES.NAVS_TMXP},
        {id: 2, name: '充值中心', image: themeContext.IMAGES.NAVS_CZZX},
        {id: 3, name: '今日爆款', image: themeContext.IMAGES.NAVS_JRBK},
        {id: 4, name: '机票酒店', image: themeContext.IMAGES.NAVS_JPJD},
        {id: 5, name: '天猫国际', image: themeContext.IMAGES.NAVS_TMGJ},
        {id: 6, name: '金币庄园', image: themeContext.IMAGES.NAVS_JPZY},
        {id: 7, name: '海外集运', image: themeContext.IMAGES.NAVS_HWJY},
        {id: 8, name: '阿里拍卖', image: themeContext.IMAGES.NAVS_ALPM},
        {id: 9, name: '天猫超市', image: themeContext.IMAGES.NAVS_TMCS},
        {id: 10, name: '淘宝吃货', image: themeContext.IMAGES.NAVS_TBCH},
        {id: 11, name: '分类', image: themeContext.IMAGES.NAVS_FL},
        {id: 12, name: '闲鱼', image: themeContext.IMAGES.NAVS_XY},
        {id: 13, name: '天猫美食', image: themeContext.IMAGES.NAVS_TMMS},
        {id: 14, name: '会员中心', image: themeContext.IMAGES.NAVS_HYZX},
        {id: 15, name: '阿里健康', image: themeContext.IMAGES.NAVS_ALJK},
        {id: 16, name: '造点新货', image: themeContext.IMAGES.NAVS_ZDXH},
        {id: 17, name: '口碑生活', image: themeContext.IMAGES.NAVS_KPSH},
        {id: 18, name: '土货鲜食', image: themeContext.IMAGES.NAVS_THXS},
    ];

    // 加载banner图
    const renderPage = (data: BannerProps)=> {
        const { id, image } = data;

        return <View key={id}>
            <CommonStyles.Image.Square size={Width} source={image} style={{height: BannerHeight}}/>
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
            {/* 顶部搜索框 */}
            <HeaderSearch/>
            {/* 滚动内容 */}
            <ScrollView style={{flex: 1, backgroundColor: themeContext.COLORS.HOME_SCROLL_VIEW, marginTop: 10}}>
                {/* banner 区块 */}
                <View style={{width: wp('100%'), height: 144, backgroundColor: themeContext.COLORS.COMPONENT_BG, justifyContent: 'center', alignItems: 'center'}}>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={Width}
                        activePageIndicatorStyle={{backgroundColor: themeContext.COLORS.COMPONENT_BG}}
                    >
                        {images.map((itme) => renderPage({image: itme.image, id: itme.id}))}
                    </Carousel>
                </View>
                {/* 遮挡线 */}
                <View style={{marginTop: -10}}>
                    <CommonStyles.Image.Square size={Width} source={themeContext.IMAGES.HOMME_LINE} style={{height: 10}}/>
                </View>
                {/* 导航列表 */}
                <View style={{...styles.NanContent, backgroundColor: themeContext.COLORS.COMPONENT_BG}}>
                    <Navs navs={formantNavsData(navs)}/>
                </View>
                {/* 市场区域 */}
                <View style={styles.MarketContent}>
                    <Text style={{fontSize: 20}}>商品区域待开发</Text>
                </View>
            </ScrollView>
        </CommonStyles.View.SafeArea>
    </LinearGradient>

}

const styles = StyleSheet.create({
    NanContent: {
        width: Width,
        height: 196,
    },
    MarketContent: {
        width: wp('95%'),
        height: 402,
        backgroundColor: '#ffffff',
        marginLeft: wp('2.5%'),
        marginRight: wp('2.5%'),
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });


export default LobbyScene;
import { types } from '@babel/core';
import React, { useState, useEffect, useContext, useLayoutEffect, useRef, useMemo, useCallback } from 'react';
import { Dimensions, ScrollView, Text, View, ImageSourcePropType, StyleSheet, Image} from 'react-native';
import { ThemeContext } from 'styled-components';
import CommonStyles from '../../styles/common';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';

interface Market {
    image: ImageSourcePropType;
    level1Title?: string;
    title: string;
}

const Width = (wp('100%') - 20 - 46) / 4;

const MarketItme =(props: {data: Market})=> {
    const { data: {image, title, level1Title} } = props;
    const themeContext = useContext(ThemeContext); 

    return <View style={styles.View}>
        {
            level1Title? <View style={styles.Level1TitleTextVide}><Text style={{...styles.Level1TitleText, color: themeContext.COLORS.MARKET_TITLE_COLOR}}>{level1Title}</Text></View> : <View style={styles.Level1TitleTextVide}/>
        }
        <View style={styles.ContentView}>
            <Text style={{...styles.TitleText, color: themeContext.COLORS.THEME_FONT_COLOR}}>{title}</Text>
            <CommonStyles.Image.Square size={68} source={image}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    View: {
        width: Width,
        height: 133,
    },
    Level1TitleTextVide: {
        marginTop: 10,
        marginBottom: 5,
        height: 22
    },
    Level1TitleText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    ContentView: {
        width: Width,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TitleText: {
        fontSize: 12,
        marginBottom: 6
    },
    ContentImage: {
        width: 68,
        height: 68
    }
});

export default MarketItme;
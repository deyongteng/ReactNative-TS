import { types } from '@babel/core';
import React, { useState, useEffect, useContext, useLayoutEffect, useRef, useMemo, useCallback } from 'react';
import { Dimensions, ScrollView, Text, View, ImageSourcePropType, StyleSheet} from 'react-native';
import { ThemeContext } from 'styled-components';
import CommonStyles from '../../styles/common';

const Width = Dimensions.get('window').width;

interface itmeNav {
    image: ImageSourcePropType;
    id: number;
    name: string;
}

const Navs =(props: {navs: any[]})=>{
    const { navs } = props;
    // 获取主题上下文
    const themeContext = useContext(ThemeContext); 
    
    const itemNavList =(data: [], index: number)=> {
      
        return (
            <View 
                key={index}
                style={{marginLeft: 12}}
            >
                {data.map((item, itmeIndex)=>(itmeNav(item, itmeIndex)))}
            </View>
        )
    }

    const itmeNav =(data: itmeNav, index: number)=> {
        const { id, image, name } = data;
      
        return (
            <View 
                key={id}
                style={{width: 61, height: 67, marginTop: index === 1? 20 : 3}}
            >
                <CommonStyles.Image.Square size={61} source={image} />
                <Text style={{textAlign: 'center', fontSize: 12, marginTop: 4}}>{name}</Text>
            </View>
        )
    }

    return (
        <ScrollView 
            style={{flex: 1}} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            { navs.map((item, index)=>(itemNavList(item, index))) }
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    NanContent: {
        width: Width,
        height: 156,
    },
    
});

export default Navs;
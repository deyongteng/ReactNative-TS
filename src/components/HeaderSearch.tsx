import React, { useState, useEffect, useContext } from 'react';
import { Alert, BackHandler, Text, View, StyleSheet  } from 'react-native';
import CommonStyles from '../styles/common';
import { ThemeContext } from 'styled-components';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HeaderSearch =()=> {
    const themeContext = useContext(ThemeContext);

    return <CommonStyles.View.Row width={wp('100%')} style={styles.View}>
        <CommonStyles.Image.Icon source={themeContext.IMAGES.COMMON_ICON_CATEGORY} size={35}/>
        <View style={styles.TextInput}>
            <Text>请输入关键词!</Text>
        </View>
    </CommonStyles.View.Row>
}

const styles = StyleSheet.create({
    View: {
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingTop: 6
    },
    TextInput: {
        backgroundColor: '#ffffff', 
        flex: 1, 
        height: 30, 
        borderRadius: 6, 
        justifyContent: 'center', 
        paddingLeft: 10
    }
  });

export default HeaderSearch
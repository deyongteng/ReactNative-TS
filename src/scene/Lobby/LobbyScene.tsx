import React, { useState, useEffect, useContext, useLayoutEffect, useRef, useMemo, useCallback } from 'react';
import { Dimensions, AppState, AppStateStatus, Text, View, StyleSheet} from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
import CommonStyles from '../../styles/common';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import HeaderSearch from '../../components/HeaderSearch';
import { ThemeContext } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';

const LobbyScene =()=> {

    const themeContext = useContext(ThemeContext); 
    return <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[themeContext.COLORS.LINE_START_COLOR, themeContext.COLORS.LINE_END_COLOR]}
            style={{width: wp('100%'), height: hp('100%')}}
        >
         <CommonStyles.View.SafeArea>
            <HeaderSearch/>
            <View style={{width: wp('100%'), height: 144, backgroundColor: '#ffffff', marginTop: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Banner图</Text>
            </View>
        </CommonStyles.View.SafeArea>
    </LinearGradient>
}
export default LobbyScene;
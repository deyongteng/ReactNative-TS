import React, { useState, useEffect, useRef } from 'react';
import { StatusBar, Platform, KeyboardAvoidingView, AppState, AppStateStatus, TextInput } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';
import MainRoutes from '../router/MainRoutes';

const RootScene =()=> {
    const navigationRef = useRef<NavigationContainerRef>(null);
    
    return <React.Fragment>
        {
            Platform.OS === "android"? 
            <StatusBar translucent backgroundColor="transparent" /> : 
            <StatusBar translucent barStyle="light-content" />
        }
         <NavigationContainer ref={navigationRef}>
            <KeyboardAvoidingView behavior={Platform.OS === "android" ? undefined : "padding"} style={{ flex: 1 }} keyboardVerticalOffset={Platform.OS === 'android' ? -30 : 10}>
                {<MainRoutes />}
            </KeyboardAvoidingView>
        </NavigationContainer>
    </React.Fragment>
}

export default RootScene;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootScene from './src/scene/RootScene';
import { Themes } from './src/styles/theme';
// 
const App = () => {
   return (
	//    <Provider store>
			<SafeAreaProvider>
				<ThemeProvider theme={Themes.LightTheme}>
					<RootScene/>
				</ThemeProvider>
			</SafeAreaProvider>
		// </Provider>
   	);
};

export default App;

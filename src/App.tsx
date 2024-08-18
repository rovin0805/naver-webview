/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigations/rootNavigation';
import {WebViewProvider} from './shared/context/webview';

function App(): React.JSX.Element {
  return (
    <WebViewProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </WebViewProvider>
  );
}

export default App;

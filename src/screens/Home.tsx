import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import {NativeStackScreenPropsType} from '@/navigations/types';
import {ROUTES_NAME} from '@/navigations/routes';

const MAIN_URL = 'https://m.naver.com';

const HomeScreen = ({navigation}: NativeStackScreenPropsType) => {
  return (
    <SafeAreaView edges={['top']} style={{flexGrow: 1}}>
      <WebView
        source={{uri: MAIN_URL}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onShouldStartLoadWithRequest={request => {
          const isMainUrl =
            request.url.startsWith(MAIN_URL) ||
            request.mainDocumentURL?.startsWith(MAIN_URL);
          if (isMainUrl) {
            return true;
          }

          if (request.url.startsWith('https://')) {
            navigation.navigate(ROUTES_NAME.BROWSER, {url: request.url});
            return false;
          }

          return true;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

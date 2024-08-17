import React from 'react';
import WebView from 'react-native-webview';
import {NativeStackScreenPropsType} from '@/navigations/types';
import {ROUTES_NAME} from '@/navigations/routes';
import SafeAreaWrapper from '@/shared/components/SafeAreaWrapper';

const MAIN_URL = 'https://m.naver.com';

const HomeScreen = ({navigation}: NativeStackScreenPropsType) => {
  return (
    <SafeAreaWrapper edges={[]}>
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
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

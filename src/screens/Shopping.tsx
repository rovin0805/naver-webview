import React from 'react';
import SafeAreaWrapper from '@/shared/components/SafeAreaWrapper';
import WebView from 'react-native-webview';
import {ROUTES_NAME} from '@/navigations/routes';
import {NativeStackScreenPropsType} from '../navigations/types';

const SHOPPING_URL = 'https://shopping.naver.com/home';

const ShoppingScreen = ({navigation}: NativeStackScreenPropsType) => {
  return (
    <SafeAreaWrapper edges={['top']}>
      <WebView
        source={{uri: 'https://m.shopping.naver.com/home'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onShouldStartLoadWithRequest={request => {
          const isMainUrl =
            request.url.startsWith(SHOPPING_URL) ||
            request.mainDocumentURL?.startsWith(SHOPPING_URL);
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

export default ShoppingScreen;

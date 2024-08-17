import React, {useCallback, useRef, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';
import WebView from 'react-native-webview';
import SafeAreaWrapper from '@/shared/components/SafeAreaWrapper';
import {ROUTES_NAME} from '@/navigations/routes';
import {NativeStackScreenPropsType} from '../navigations/types';

const SHOPPING_URL = 'https://shopping.naver.com/home';

const ShoppingScreen = ({navigation}: NativeStackScreenPropsType) => {
  const webviewRef = useRef<WebView>(null);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    webviewRef.current?.reload();
  }, []);

  return (
    <SafeAreaWrapper edges={['top']}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={'white'}
          />
        }>
        <WebView
          ref={webviewRef}
          source={{uri: SHOPPING_URL}}
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
          onLoad={() => setRefreshing(false)}
          renderLoading={() => <></>}
          startInLoadingState
        />
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default ShoppingScreen;

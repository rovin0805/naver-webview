import {NativeStackScreenPropsType} from '@/navigations/types';
import SafeAreaWrapper from '@/shared/components/SafeAreaWrapper';
import React from 'react';
import WebView from 'react-native-webview';

const LOGIN_URL = 'https://nid.naver.com/nidlogin.login';

const LoginScreen = ({navigation}: NativeStackScreenPropsType) => {
  return (
    <SafeAreaWrapper edges={['bottom']}>
      <WebView
        source={{uri: LOGIN_URL}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onNavigationStateChange={navState => {
          if (navState.url === 'https://www.naver.com/') {
            navigation.goBack();
          }
        }}
      />
    </SafeAreaWrapper>
  );
};

export default LoginScreen;

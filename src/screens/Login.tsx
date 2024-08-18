import React, {useContext} from 'react';
import WebView from 'react-native-webview';
import {NativeStackScreenPropsType} from '@/navigations/types';
import SafeAreaWrapper from '@/shared/components/SafeAreaWrapper';
import {WebViewContext} from '@/shared/context/webview';

const LOGIN_URL = 'https://nid.naver.com/nidlogin.login';

const LoginScreen = ({navigation}: NativeStackScreenPropsType) => {
  const context = useContext(WebViewContext);

  return (
    <SafeAreaWrapper edges={['bottom']}>
      <WebView
        source={{uri: LOGIN_URL}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onNavigationStateChange={navState => {
          // Login Success
          if (navState.url === 'https://www.naver.com/') {
            if (context?.webViewRefs?.current) {
              context.webViewRefs.current.forEach(webView => {
                webView.reload();
              });
            }
            navigation.goBack();
          }
        }}
      />
    </SafeAreaWrapper>
  );
};

export default LoginScreen;

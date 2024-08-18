import React, {useContext, useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/navigations/types';
import WebView from 'react-native-webview';
import SafeAreaWrapper from '@/shared/components/SafeAreaWrapper';
import UrlBox from '@/modules/broswer/components/UrlBox';
import LoadingBar from '@/shared/components/LoadingBar';
import Nav from '@/modules/broswer/components/Nav';
import {WebViewContext} from '@/shared/context/webview';

type Props = NativeStackScreenProps<RootStackParamList, 'Browser'>;

const DISABLE_PINCH_ZOOM_AND_TEXT_LONG_PRESS = `
  (function() {
    var metaTag = document.createElement('meta');
    metaTag.name = 'viewport';
    metaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    document.getElementsByTagName('head')[0].appendChild(metaTag);

    document.body.style['user-select'] = 'none';
    document.body.style['-webkit-user-select'] = 'none';
  })();
`;

const BrowserScreen = ({route}: Props) => {
  const uri = route.params.url;
  const [currentUrl, setCurrentUrl] = useState(uri);
  const formattedUrl = useMemo(
    () => currentUrl.replace('https://', '').split('/')[0],
    [currentUrl],
  );

  const animatedProgress = useRef(new Animated.Value(0)).current;

  const webViewRef = useRef<WebView | null>(null);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const context = useContext(WebViewContext);

  return (
    <SafeAreaWrapper>
      <UrlBox url={formattedUrl} />
      <LoadingBar progress={animatedProgress} />
      <WebView
        ref={ref => {
          webViewRef.current = ref;
          if (ref) {
            context?.addWebView(ref);
          }
        }}
        source={{uri}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onNavigationStateChange={navState => {
          setCurrentUrl(navState.url);
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
        }}
        onLoadProgress={({nativeEvent}) => {
          animatedProgress.setValue(nativeEvent.progress);
        }}
        onLoadEnd={() => {
          animatedProgress.setValue(0);
        }}
        injectedJavaScript={DISABLE_PINCH_ZOOM_AND_TEXT_LONG_PRESS}
        onMessage={event => {}}
        allowsLinkPreview={false}
      />
      <Nav
        webViewRef={webViewRef}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        currentUrl={currentUrl}
      />
    </SafeAreaWrapper>
  );
};

export default BrowserScreen;

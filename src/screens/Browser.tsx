import React, {useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/navigations/types';
import WebView from 'react-native-webview';
import SafeAreaWrapper from '@/shared/components/SafeAreaWrapper';
import UrlBox from '@/modules/broswer/components/UrlBox';
import LoadingBar from '@/shared/components/LoadingBar';
import Nav from '@/modules/broswer/components/Nav';

type Props = NativeStackScreenProps<RootStackParamList, 'Browser'>;

const BrowserScreen = ({route}: Props) => {
  const uri = route.params.url;
  const [currentUrl, setCurrentUrl] = useState(uri);
  const formattedUrl = useMemo(
    () => currentUrl.replace('https://', '').split('/')[0],
    [currentUrl],
  );

  const animatedProgress = useRef(new Animated.Value(0)).current;

  const webViewRef = useRef<WebView>(null);

  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  return (
    <SafeAreaWrapper>
      <UrlBox url={formattedUrl} />
      <LoadingBar progress={animatedProgress} />
      <WebView
        ref={webViewRef}
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
      />
      <Nav
        webViewRef={webViewRef}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
      />
    </SafeAreaWrapper>
  );
};

export default BrowserScreen;

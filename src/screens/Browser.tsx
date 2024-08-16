import React, {useMemo, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/navigations/types';
import WebView from 'react-native-webview';
import SafeAreaWrapper from '@/shared/components/SafeAreaWrapper';
import UrlBox from '@/modules/broswer/components/UrlBox';
import LoadingBar from '@/shared/components/LoadingBar';

type Props = NativeStackScreenProps<RootStackParamList, 'Browser'>;

const BrowserScreen = ({route}: Props) => {
  const uri = route.params.url;
  const [currentUrl, setCurrentUrl] = useState(uri);
  const formattedUrl = useMemo(
    () => currentUrl.replace('https://', '').split('/')[0],
    [currentUrl],
  );

  const animatedProgress = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaWrapper>
      <UrlBox url={formattedUrl} />
      <LoadingBar progress={animatedProgress} />
      <WebView
        source={{uri}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onNavigationStateChange={navState => {
          setCurrentUrl(navState.url);
        }}
        onLoadProgress={({nativeEvent}) => {
          animatedProgress.setValue(nativeEvent.progress);
        }}
        onLoadEnd={() => {
          animatedProgress.setValue(0);
        }}
      />
    </SafeAreaWrapper>
  );
};

export default BrowserScreen;

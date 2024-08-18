import {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CookieManager from '@react-native-cookies/cookies';
import {RootStackParamList} from '@/navigations/types';
import {ROUTES_NAME} from '@/navigations/routes';
import {WebViewContext} from '@/shared/context/webview';

type Props = NativeStackNavigationProp<RootStackParamList>;

const LoginBtn = () => {
  const navigation = useNavigation<Props>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const context = useContext(WebViewContext);

  useFocusEffect(() => {
    CookieManager.get('https://.naver.com', true).then(cookie => {
      setIsLoggedIn(!!cookie.NID_SES);
    });
  });

  const onPressLogin = () => {
    navigation.navigate(ROUTES_NAME.LOGIN);
  };

  const onPressLogout = () => {
    CookieManager.clearAll(true).then(() => {
      setIsLoggedIn(false);
      if (context?.webViewRefs?.current) {
        context.webViewRefs.current.forEach(webView => {
          webView.reload();
        });
      }
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => (isLoggedIn ? onPressLogout() : onPressLogin())}>
      <MaterialCommunityIcons
        name={isLoggedIn ? 'exit-run' : 'account-arrow-right'}
        color={'white'}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default LoginBtn;

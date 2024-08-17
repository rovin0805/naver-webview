import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '@/navigations/types';
import {ROUTES_NAME} from '@/navigations/routes';

type Props = NativeStackNavigationProp<RootStackParamList>;

const LoginBtn = () => {
  const navigation = useNavigation<Props>();
  const isLoggedIn = false;

  const onPressLogin = () => {
    navigation.navigate(ROUTES_NAME.LOGIN);
  };

  const onPressLogout = () => {};

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => (isLoggedIn ? onPressLogout() : onPressLogin())}>
      <MaterialCommunityIcons
        name={isLoggedIn ? 'logout' : 'login'}
        color={'white'}
        size={24}
      />
    </TouchableOpacity>
  );
};

export default LoginBtn;

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ROUTES_NAME} from './routes';

export type RootStackParamList = {
  [ROUTES_NAME.HOME_TAB]: undefined;
  [ROUTES_NAME.BROWSER]: {
    url: string;
  };
};

export type NativeStackScreenPropsType =
  NativeStackScreenProps<RootStackParamList>;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES_NAME} from './routes';
import {RootStackParamList} from './types';
import TabNavigation from './bottomTabs/TabNavigation';
import Browser from '@/screens/Browser';
import LoginBtn from '@/modules/login/components/LoginBtn';
import LoginScreen from '@/screens/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES_NAME.HOME_TAB}
        component={TabNavigation}
        options={{
          title: '',
          headerStyle: {backgroundColor: 'black'},
          headerRight: LoginBtn,
        }}
      />
      <Stack.Screen
        name={ROUTES_NAME.BROWSER}
        component={Browser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ROUTES_NAME.LOGIN}
        component={LoginScreen}
        options={{
          title: '',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

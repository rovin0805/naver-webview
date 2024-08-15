import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES_NAME} from '../routes';
import HomeScreen from '@/screens/Home';
import ShoppingScreen from '@/screens/Shopping';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES_NAME.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES_NAME.SHOPPING} component={ShoppingScreen} />
    </Tab.Navigator>
  );
}

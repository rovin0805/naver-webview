import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ROUTES_NAME} from '../routes';
import HomeScreen from '@/screens/Home';
import ShoppingScreen from '@/screens/Shopping';

const Tab = createBottomTabNavigator();

const TabIcon = ({
  name,
  color,
  size,
}: {
  name: string;
  color: string;
  size: number;
}) => <MaterialCommunityIcons name={name} color={color} size={size} />;

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        headerShown: false,
      }}>
      <Tab.Screen
        name={ROUTES_NAME.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color, size, focused}) => (
            <TabIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES_NAME.SHOPPING}
        component={ShoppingScreen}
        options={{
          tabBarLabel: '쇼핑',
          tabBarIcon: ({color, size, focused}) => (
            <TabIcon
              name={focused ? 'shopping' : 'shopping-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

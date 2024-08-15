import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ROUTES_NAME} from '../navigations/routes';
import {NativeStackScreenPropsType} from '../navigations/types';

const ShoppingScreen = ({navigation}: NativeStackScreenPropsType) => {
  const goToBrowser = () => {
    navigation.navigate(ROUTES_NAME.BROWSER, {url: ''});
  };

  return (
    <>
      <TouchableOpacity onPress={goToBrowser}>
        <Text>Go to Browser</Text>
      </TouchableOpacity>
    </>
  );
};

export default ShoppingScreen;

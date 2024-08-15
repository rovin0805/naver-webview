import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ROUTES_NAME} from '../navigations/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigations/types';

type Props = NativeStackScreenProps<RootStackParamList>;

const ShoppingScreen = ({navigation}: Props) => {
  const goToBrowser = () => {
    navigation.navigate(ROUTES_NAME.BROWSER);
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

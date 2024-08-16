import React from 'react';
import {Text, View} from 'react-native';

const UrlBox = ({url}: {url: string}) => {
  return (
    <View
      style={{
        width: '100%',
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text style={{color: 'white'}}>{url}</Text>
    </View>
  );
};

export default UrlBox;

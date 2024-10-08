import React from 'react';
import {Share, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import WebView from 'react-native-webview';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useBackHandler} from '@react-native-community/hooks';

interface NavProps {
  webViewRef: React.RefObject<WebView>;
  canGoBack: boolean;
  canGoForward: boolean;
  currentUrl: string;
}

const Nav = ({webViewRef, canGoBack, canGoForward, currentUrl}: NavProps) => {
  const navigation = useNavigation();

  useBackHandler(() => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
      return true;
    }
    return false; // default behavior
  });

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            paddingVertical: 5,
            paddingHorizontal: 7,
          }}>
          <Text style={{color: 'white'}}>N</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          webViewRef.current?.goBack();
        }}
        disabled={!canGoBack}>
        <MaterialCommunityIcons
          name="arrow-left"
          color={canGoBack ? 'white' : 'gray'}
          size={24}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          webViewRef.current?.goForward();
        }}
        disabled={!canGoForward}>
        <MaterialCommunityIcons
          name="arrow-right"
          color={canGoForward ? 'white' : 'gray'}
          size={24}
        />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          webViewRef.current?.reload();
        }}>
        <MaterialCommunityIcons name="refresh" color={'white'} size={24} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          Share.share({message: currentUrl});
        }}>
        <MaterialCommunityIcons name="share" color={'white'} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default Nav;

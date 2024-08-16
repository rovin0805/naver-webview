import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SafeAreaWrapper = ({children}: PropsWithChildren) => (
  <SafeAreaView
    edges={['top', 'bottom']}
    style={{flexGrow: 1, backgroundColor: 'black'}}>
    {children}
  </SafeAreaView>
);

export default SafeAreaWrapper;

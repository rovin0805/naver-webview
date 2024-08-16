import React, {PropsWithChildren} from 'react';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';

const SafeAreaWrapper = ({
  children,
  edges = ['top', 'bottom'],
}: PropsWithChildren<{edges?: Edges}>) => (
  <SafeAreaView edges={edges} style={{flexGrow: 1, backgroundColor: 'black'}}>
    {children}
  </SafeAreaView>
);

export default SafeAreaWrapper;

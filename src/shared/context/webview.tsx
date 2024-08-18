import React, {
  MutableRefObject,
  PropsWithChildren,
  createContext,
  useRef,
} from 'react';
import WebView from 'react-native-webview';

interface WebViewContextValue {
  webViewRefs: MutableRefObject<WebView[]>;
  addWebView: (webView: WebView) => void;
}

export const WebViewContext = createContext<WebViewContextValue | null>(null);

export const WebViewProvider = ({children}: PropsWithChildren) => {
  const webViewRefs = useRef<WebView[]>([]);
  const addWebView = (webView: WebView) => {
    webViewRefs.current.push(webView);
  };

  return (
    <WebViewContext.Provider value={{webViewRefs, addWebView}}>
      {children}
    </WebViewContext.Provider>
  );
};

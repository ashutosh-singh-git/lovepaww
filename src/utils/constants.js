import { Dimensions, NativeModules, PixelRatio, Platform } from 'react-native';

export const isDebug = true;
const { StatusBarManager } = NativeModules;

export const GlobalDimensions = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Platform.select({
        ios: Dimensions.get('window').height,
        android: Dimensions.get('window').height + StatusBarManager.HEIGHT,
    }),
    devicePixelRatio: PixelRatio.get(),
};

export const abc = '';
export const axiosBaseUrl = isDebug ? 'http://192.168.0.214:8080' : 'http://192.168.0.214:8080';

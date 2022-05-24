import { Dimensions, NativeModules, PixelRatio, Platform } from 'react-native';

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

import 'react-native-gesture-handler';
import React from "react";
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import CodePushHandler from './src/utils/codepush';

const index = () => (
        <>
            <App/>
            <CodePushHandler/>
        </>
    )

AppRegistry.registerComponent(appName, () => index);

// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import codePush from 'react-native-code-push';
import { ToastAndroid } from 'react-native';

const SYNC_OPTIONS = {
    installMode: codePush.InstallMode.ON_NEXT_RESTART,
    updateDialog: true,
};

function CodePushHandler() {
    useEffect(() => {
        codePush
            .notifyAppReady()
            .then(() => {
                codePush.sync(SYNC_OPTIONS);
            })
            .catch((error) => {
                ToastAndroid.showWithGravityAndOffset(
                    `Error updating app: ${error}`,
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    130
                );
            });
    }, []);

    return null;
}

export default codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_START })(CodePushHandler);

import 'react-native-gesture-handler';

import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import store from './redux';
import RootNavigator from './navigation';

function App() {
    return (
        <StoreProvider store={store}>
            <RootNavigator/>
        </StoreProvider>
    );
}

export default App;

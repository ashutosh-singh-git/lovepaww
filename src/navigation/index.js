import {NavigationContainer, StackActions} from '@react-navigation/native';
import React,{createRef, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {hide} from 'react-native-bootsplash';
import {StatusBar, Text} from 'react-native';
import {Dog, Home} from "../screens";

export const navigationRef = createRef();

export function navigate(name, params = {}) {
    navigationRef.current?.navigate(name, params);
}

export function replace(name, params = {}) {
    navigationRef.current.dispatch(StackActions.replace(name, params));
}

export function push(name, params = {}) {
    navigationRef.current.dispatch(StackActions.push(name, params));
}

export function pop(count) {
    navigationRef.current.dispatch(StackActions.pop(count));
}

const Stack = createStackNavigator();

function RootNavigator() {

    useEffect(() =>{

    },[]);

    return (
        <NavigationContainer
            // onReady={() => hide({fade: true})}
            ref={navigationRef}
            fallback={<Text>Loading...</Text>}
        >
            <StatusBar translucent backgroundColor="transparent"/>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Dog"
                    component={Dog}
                    options={{
                        title: 'Dog',
                        // headerLeftLabelVisible: false,
                        // headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;

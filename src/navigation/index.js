import { NavigationContainer, StackActions } from '@react-navigation/native';
import React, { createRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { hide } from 'react-native-bootsplash';
import { StatusBar, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Fosters, Login, Profile, Rescue } from '../screens';

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
const Tab = createBottomTabNavigator();

function RootNavigator() {
    const { isLoggedIn } = useSelector((state) => state.auth);

    return (
        <NavigationContainer
            onReady={() => hide({ fade: true })}
            ref={navigationRef}
            fallback={<Text>Loading...</Text>}
        >
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#c9963b"
                hidden={false}
                animated
            />
            {isLoggedIn ? (
                <Tab.Navigator
                    initialRouteName="Fosters"
                    backBehavior="order"
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: { backgroundColor: '#c9963b', height: 60 },
                        tabBarActiveTintColor: '#000',
                        tabBarInactiveTintColor: '#fff',
                        tabBarActiveBackgroundColor: '#fff',
                        tabBarLabelStyle: { fontWeight: '700', fontSize: 16 },
                    }}
                >
                    <Tab.Screen
                        name="Fosters"
                        component={Fosters}
                        options={{
                            tabBarLabel: 'Fosters',
                            // eslint-disable-next-line react/no-unstable-nested-components
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons
                                    name="dog-service"
                                    color={color}
                                    size={40}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Rescue"
                        component={Rescue}
                        options={{
                            tabBarLabel: 'Rescue',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="doctor" color={color} size={40} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="SettingsStack"
                        component={Profile}
                        options={{
                            headerShown: false,
                            tabBarLabel: 'Profile',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="dog" color={color} size={40} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator initialRouteName="Login">
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

// function HomeStack() {
//     return (
//         <Stack.Navigator initialRouteName="DogFosters">
//             <Stack.Screen
//                 name="DogFosters"
//                 component={Home}
//                 options={{
//                     title: 'DogFosters',
//                     headerShown: false,
//                 }}
//             />
//             <Stack.Screen
//                 name="Dog"
//                 component={Dog}
//                 options={{
//                     title: 'Dog',
//                     headerShown: false,
//                     // headerLeftLabelVisible: false,
//                     // headerShown: false
//                 }}
//             />
//         </Stack.Navigator>
//     );
// }

export default RootNavigator;

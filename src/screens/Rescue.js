import React from 'react';
import {Button, Text, View} from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Rescue () {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'OpenSans-Light'}}>DOG Screen</Text>
        </View>
    );
};

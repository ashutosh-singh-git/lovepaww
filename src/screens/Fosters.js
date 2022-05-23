import React from 'react';
import {Button, Text, View} from "react-native";
import {useNavigation} from '@react-navigation/native';

export default function Fosters () {
    const navigation = useNavigation();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'OpenSans-Light'}}>Demo Screen</Text>
        </View>
    );
};

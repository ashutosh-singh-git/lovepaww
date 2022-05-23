import React,{useState} from 'react';
import {Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Login () {

    const [number, setChangeNumber] = useState(null);

    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{
                fontFamily: 'OpenSans-Light',
                fontSize: 50,
                fontWeight:'bold',
                marginVertical: 100
            }}>#lovedogs</Text>
            <LottieView source={require('../../assets/lottie/75980-licking-dog.json')} autoPlay loop />
            <TextInput
                onChangeText={setChangeNumber}
                value={number}
                style={{
                    position: 'absolute',
                    bottom: 110,
                    fontSize: 20,
                    borderColor: "#c9963b",
                    borderBottomWidth: 3,
                }}
                placeholder="Enter 10 digit Mobile Number"
                keyboardType="numeric"
            />
            <TouchableWithoutFeedback style={{
                position: 'absolute',
                bottom: 90,
                fontSize: 14,
            }}>
                <Text>Verify</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

import React,{useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';
import * as yup from 'yup';

export default function Login () {

    const [number, setChangeNumber] = useState(null);
    const [otp, setOtp] = useState(null);
    const [valid, setValid] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [sendOtp, setSendOtp] = useState(true);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const msisdn = yup
        .string()
        .required("Phone Number is required")
        .matches(phoneRegExp, {
            message: "Invalid Indian number",
            excludeEmptyString: false,
        })
        .min(10)
        .max(10)

    const sentOtp = async () => {
        setDisabled(true);
        if(await msisdn.isValid(number)){
            setValid(true);
            setSendOtp(false);
        } else setValid(false);
        setDisabled(false);
    }

    const verifyOtp = () => {

    }




    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{
                fontFamily: 'OpenSans-Light',
                fontSize: 50,
                fontWeight:'bold',
                marginVertical: 100
            }}>#lovedogs</Text>
            <LottieView source={require('../../assets/lottie/75980-licking-dog.json')} autoPlay loop style={{
                height: 350
            }} />
            <View style={{
                position: 'absolute',
                bottom: 80,
                alignItems: 'center',
                justifyContent:'center'
            }}>
                {
                    sendOtp ? <TextInput
                        onChangeText={setChangeNumber}
                        value={number}
                        style={{
                            fontSize: 20,
                            borderColor: valid ? "#c9963b" : "#f50707",
                            borderBottomWidth: 3,
                        }}
                        placeholder="Enter 10 digit Mobile Number"
                        keyboardType="numeric"
                    /> : <TextInput
                        onChangeText={setOtp}
                        value={otp}
                        style={{
                            fontSize: 20,
                            borderColor: valid ? "#c9963b" : "#f50707",
                            borderBottomWidth: 3,
                        }}
                        placeholder="Verify Otp"
                        keyboardType="numeric"
                    />
                }
                <TouchableOpacity disabled={disabled} activeOpacity={0.7}  onPress={sentOtp}>
                    <Text style={{
                        paddingHorizontal: 40,
                        paddingVertical: 6,
                        backgroundColor: '#c9963b',
                        fontSize: 20,
                        fontWeight: '700',
                        color: 'white',
                        borderRadius: 6,
                        marginTop: 30
                    }}>
                        {
                            sendOtp ? "SEND OTP" : "VERIFY"
                        }
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

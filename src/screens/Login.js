import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import doggyAnimation from '../../assets/lottie/75980-licking-dog.json';
import { GlobalDimensions } from '../utils';
import { login } from '../redux/reducers';

export default function Login() {
    const dispatch = useDispatch();

    const [number, setChangeNumber] = useState(null);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [valid, setValid] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [sendOtp, setSendOtp] = useState(true);

    const otpRef = useRef([]);
    const intervalRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            otpRef[0] && otpRef[0].focus();
        }, 500);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    const onChangeText = ({ value, idx }) => {
        const OTP = [...otp];
        OTP[idx] = value;
        setOtp(OTP);
        if (value !== '') {
            if (idx < 5) {
                otpRef[idx + 1].focus();
            } else {
                const checkOtp = otp.join('');
                console.log(checkOtp);
            }
        }
    };

    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const msisdn = yup
        .string()
        .required('Phone Number is required')
        .matches(phoneRegExp, {
            message: 'Invalid Indian number',
            excludeEmptyString: false,
        })
        .min(10)
        .max(10);

    const sentOtp = async () => {
        setDisabled(true);
        if (await msisdn.isValid(number)) {
            setValid(true);
            setSendOtp(false);
        } else setValid(false);
        setDisabled(false);
    };

    const verifyOtp = async () => {
        dispatch(login(true));
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>
            <Text
                style={{
                    fontFamily: 'OpenSans-Light',
                    fontSize: 50,
                    fontWeight: 'bold',
                    marginVertical: GlobalDimensions.screenHeight / 15,
                    color: '#c9963b',
                }}
            >
                #lovedogs
            </Text>
            <KeyboardAvoidingView
                style={{
                    position: 'absolute',
                    bottom: GlobalDimensions.screenHeight / 1.5
                }}
                behavior="position"
                contentContainerStyle={{ position: 'absolute', alignItems: 'center' }}
                keyboardVerticalOffset={GlobalDimensions.screenHeight / 1.6}
            >
                <View
                    style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <LottieView
                        source={doggyAnimation}
                        autoPlay
                        loop
                        style={{
                            height: 350
                        }}
                    />
                    {sendOtp ? (
                        <TextInput
                            onChangeText={setChangeNumber}
                            value={number}
                            style={{
                                fontSize: 20,
                                borderColor: valid ? '#c9963b' : '#f50707',
                                borderBottomWidth: 2,
                                backgroundColor: '#fff',
                                color: '#000',
                                letterSpacing: 10,
                                width: GlobalDimensions.screenWidth - 100,
                                textAlign: 'center',
                            }}
                            placeholder="Phone Number"
                            placeholderTextColor={
                                valid ? 'rgba(201,150,59,0.31)' : 'rgba(245,7,7,0.33)'
                            }
                            maxLength={10}
                            keyboardType="numeric"
                        />
                    ) : (
                        <View
                            style={{
                                flexDirection: 'row',
                                width: GlobalDimensions.screenWidth - 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff',
                            }}
                        >
                            {otp?.map((item, idx) => (
                                <TextInput
                                    key={idx}
                                    keyboardType="number-pad"
                                    ref={(ref) => {
                                        otpRef[idx] = ref;
                                    }}
                                    onChangeText={(value) => onChangeText({ value, idx })}
                                    textContentType="oneTimeCode"
                                    maxLength={1}
                                    placeholder={item}
                                    style={{
                                        fontFamily: 'OpenSans-SemiBold',
                                        fontSize: 18,
                                        width: 32.5,
                                        padding: 10,
                                        marginVertical: 5,
                                        marginHorizontal: 5,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'rgba(0,0,0,0.2)',
                                        borderRadius: 2.5,
                                        color: '#000',
                                        textAlign: 'center',
                                    }}
                                    value={item === '' ? '' : item}
                                    onKeyPress={({ nativeEvent }) => {
                                        if (nativeEvent.key === 'Backspace') {
                                            if (idx > 0) otpRef[idx - 1].focus();
                                        }
                                    }}
                                />
                            ))}
                        </View>
                    )}
                    <TouchableOpacity
                        disabled={disabled}
                        activeOpacity={0.7}
                        onPress={sendOtp ? sentOtp : verifyOtp}
                    >
                        <Text
                            style={{
                                paddingHorizontal: 40,
                                paddingVertical: 6,
                                backgroundColor: '#c9963b',
                                fontSize: 20,
                                fontWeight: '700',
                                color: 'white',
                                borderRadius: 6,
                                marginTop: 30
                            }}
                        >
                            {sendOtp ? 'SEND OTP' : 'VERIFY'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>

            {/* <KeyboardAvoidingView */}
            {/*     style={{ */}
            {/*         position: 'absolute', */}
            {/*         bottom: GlobalDimensions.screenHeight / 16, */}
            {/*         alignItems: 'center', */}
            {/*         justifyContent: 'center', */}
            {/*     }} */}
            {/*     behavior="position" */}
            {/*     contentContainerStyle={{ position: 'absolute', alignItems: 'center' }} */}
            {/*     keyboardVerticalOffset={GlobalDimensions.screenHeight / 20} */}
            {/* > */}
            {/*      */}
            {/* </KeyboardAvoidingView> */}
        </View>
    );
}

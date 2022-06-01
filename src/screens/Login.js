import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import doggyAnimation from '../../assets/lottie/75980-licking-dog.json';
import { GlobalDimensions, Theme } from '../utils';
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
            // eslint-disable-next-line no-unused-expressions
            otpRef[0] && otpRef[0].focus();
        }, 500);

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <View
            style={{ flex: 1, alignItems: 'center', backgroundColor: Theme.palette.common.white }}
        >
            <Text
                style={{
                    fontFamily: 'OpenSans-Light',
                    fontSize: 50,
                    fontWeight: 'bold',
                    marginVertical: GlobalDimensions.screenHeight / 15,
                    color: Theme.palette.secondary.main,
                }}
            >
                #lovedogs
            </Text>
            <KeyboardAvoidingView
                style={{
                    position: 'absolute',
                    bottom: GlobalDimensions.screenHeight / 1.5,
                }}
                behavior="position"
                contentContainerStyle={{ position: 'absolute', alignItems: 'center' }}
                keyboardVerticalOffset={GlobalDimensions.screenHeight / 1.5}
            >
                <View
                    style={{
                        position: 'absolute',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <LottieView
                        source={doggyAnimation}
                        autoPlay
                        loop
                        style={{
                            height: 350,
                        }}
                    />
                    {sendOtp ? (
                        <TextInput
                            onChangeText={setChangeNumber}
                            value={number}
                            style={{
                                fontSize: 20,
                                borderColor: valid
                                    ? Theme.palette.secondary.main
                                    : Theme.palette.error.main,
                                borderBottomWidth: 2,
                                backgroundColor: Theme.palette.common.white,
                                color: Theme.palette.text.dark,
                                letterSpacing: 10,
                                width: GlobalDimensions.screenWidth - 100,
                                marginTop: 40,
                            }}
                            placeholder="Phone Number"
                            placeholderTextColor={
                                valid
                                    ? Theme.palette.secondary.lighter
                                    : Theme.palette.error.lighter
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
                                backgroundColor: Theme.palette.common.white,
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
                                        color: Theme.palette.text.dark,
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
                                backgroundColor: Theme.palette.secondary.main,
                                fontSize: 20,
                                fontWeight: '700',
                                color: Theme.palette.text.light,
                                borderRadius: 6,
                                marginTop: 30,
                            }}
                        >
                            {sendOtp ? 'SEND OTP' : 'VERIFY'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

import React, { useRef } from 'react';
import { Animated, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { GlobalDimensions } from '../utils';

export default function Profile() {
    const scrollY = useRef(new Animated.Value(0)).current;

    const handleHeaderPosition = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ['50%', '0%'],
        extrapolate: 'clamp',
    });

    const handleHeaderPictureSize = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [100, 90],
        extrapolate: 'clamp',
    });

    return (
        <SafeAreaView
            style={{
                flex: 1,
                alignItems: 'center',
                backgroundColor: 'rgba(201,150,59,0.15)',
            }}
        >
            <View
                style={{
                    height: 195,
                    width: GlobalDimensions.screenWidth,
                    backgroundColor: '#c9963b',
                    alignItems: 'center',
                }}
            >
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: handleHeaderPosition,
                        zIndex: 1,
                        height: 185,
                        width: GlobalDimensions.screenWidth - 30,
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        marginVertical: 5,
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '-50%',
                            transform: [{ translateX: -50 }, { translateY: 35 }],
                            alignItems: 'center',
                        }}
                    >
                        <Animated.View
                            style={{
                                position: 'relative',
                                left: scrollY.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: ['0%', '-130%'],
                                    extrapolate: 'clamp',
                                }),
                                top: scrollY.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: ['0%', '45%'],
                                    extrapolate: 'clamp',
                                }),
                                borderRadius: 50,
                                height: handleHeaderPictureSize,
                                width: handleHeaderPictureSize,
                                backgroundColor: '#fff',
                                overflow: 'hidden',
                                borderStyle: 'solid',
                                borderColor: '#000',
                                borderWidth: 2,
                            }}
                        />
                        <Animated.View
                            style={{
                                position: 'relative',
                                top: scrollY.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: ['0%', '-5%'],
                                    extrapolate: 'clamp',
                                }),
                                marginVertical: 5,
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    marginVertical: 3,
                                    fontWeight: 'bold',
                                }}
                            >
                                User Name
                            </Text>
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 12,
                                    textAlign: 'center',
                                    marginVertical: 3,
                                }}
                            >
                                Abohar
                            </Text>
                        </Animated.View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            flexDirection: 'row',
                            width: GlobalDimensions.screenWidth - 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottomEndRadius: 10,
                            borderBottomStartRadius: 10,
                            overflow: 'hidden',
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginVertical: 15,
                                paddingVertical: 5,
                                width: (GlobalDimensions.screenWidth - 30) / 3,
                                alignItems: 'center',
                                borderRightWidth: 1,
                                borderColor: 'rgba(0,0,0,0.68)',
                            }}
                            onPress={() => {}}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 14,
                                    paddingVertical: 5,
                                }}
                            >
                                1200
                            </Text>
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 11,
                                    fontWeight: 'bold',
                                }}
                            >
                                Reviews
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                marginVertical: 15,
                                paddingVertical: 5,
                                width: (GlobalDimensions.screenWidth - 30) / 3,
                                alignItems: 'center',
                                borderLeftWidth: 1,
                                borderRightWidth: 1,
                                borderColor: 'rgba(0,0,0,0.68)',
                            }}
                            onPress={() => {}}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 14,
                                    paddingVertical: 5,
                                }}
                            >
                                1200
                            </Text>
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 11,
                                    fontWeight: 'bold',
                                }}
                            >
                                Reviews
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                marginVertical: 15,
                                paddingVertical: 5,
                                width: (GlobalDimensions.screenWidth - 30) / 3,
                                alignItems: 'center',
                                borderLeftWidth: 1,
                                borderColor: 'rgba(0,0,0,0.68)',
                            }}
                            onPress={() => {}}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 14,
                                    paddingVertical: 5,
                                }}
                            >
                                1200
                            </Text>
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 11,
                                    fontWeight: 'bold',
                                }}
                            >
                                Reviews
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
            <View
                style={{
                    position: 'relative',
                    alignItems: 'center',
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
                        useNativeDriver: false,
                    })}
                    style={{
                        width: GlobalDimensions.screenWidth - 30,
                        marginBottom: GlobalDimensions.screenHeight / 4.1,
                    }}
                >
                    <View
                        style={{
                            marginTop: GlobalDimensions.screenHeight / 8.25,
                            position: 'relative',
                            height: GlobalDimensions.screenHeight / 10,
                            width: '100%',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            marginBottom: 5,
                        }}
                    />
                    <View
                        style={{
                            position: 'relative',
                            width: '100%',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            marginVertical: 5,
                            padding: 15,
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 12,
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi,
                            doloribus expedita facere laborum odit tenetur? Aliquid autem beatae,
                            illo ipsam maiores mollitia nesciunt non provident quis, ratione
                            reiciendis suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ad animi, doloribus expedita facere laborum odit tenetur? Aliquid
                            autem beatae, illo ipsam maiores mollitia nesciunt non provident quis,
                            ratione reiciendis suscipit.
                        </Text>
                    </View>
                    <View
                        style={{
                            position: 'relative',
                            height: GlobalDimensions.screenHeight / 5,
                            width: '100%',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            marginVertical: 5,
                            padding: 15,
                        }}
                    >
                        <Text
                            style={{
                                color: '#000',
                                fontSize: 12,
                            }}
                        >
                            Total Distance
                        </Text>
                        {/* <MapView */}
                        {/*     provider={PROVIDER_GOOGLE} */}
                        {/*     region={{ */}
                        {/*         latitude: 37.78825, */}
                        {/*         longitude: -122.4324, */}
                        {/*         latitudeDelta: 0.015, */}
                        {/*         longitudeDelta: 0.0121, */}
                        {/*     }} */}
                        {/*  /> */}
                    </View>
                    <View
                        style={{
                            position: 'relative',
                            height: GlobalDimensions.screenHeight / 5,
                            width: '100%',
                            backgroundColor: '#fff',
                            borderRadius: 10,
                            marginVertical: 5,
                            padding: 15,
                        }}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

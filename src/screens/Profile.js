import React, { useRef } from 'react';
import { Animated, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { GlobalDimensions } from '../utils';

export default function Profile() {
    const scrollY = useRef(new Animated.Value(0)).current;

    const changePositionTop = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: ['-13%', '-27.5%'],
        extrapolate: 'clamp',
    });

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(201,150,59,0.15)',
            }}
        >
            <View
                style={{
                    height: GlobalDimensions.screenHeight / 2.1,
                    width: GlobalDimensions.screenWidth,
                    backgroundColor: '#c9963b',
                    alignItems: 'center',
                }}
            />
            <SafeAreaView>
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: changePositionTop,
                        zIndex: 1,
                        height: GlobalDimensions.screenHeight / 4.5,
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
                        <View
                            style={{
                                borderRadius: 50,
                                height: 100,
                                width: 100,
                                backgroundColor: '#fff',
                                overflow: 'hidden',
                                borderStyle: 'solid',
                                borderColor: '#000',
                                borderWidth: 2
                            }}
                        />
                        <View style={{ marginVertical: 5 }}>
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 14,
                                    textAlign: 'center',
                                    marginVertical: 3,
                                    fontWeight: 'bold',
                                }}
                            >
                                Prince Midha
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
                        </View>
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
                <View
                    style={{
                        position: 'relative',
                        alignItems: 'center'
                    }}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            {
                                useNativeDriver: false,
                            }
                        )}
                        style={{
                            width: GlobalDimensions.screenWidth - 30,
                            marginBottom: GlobalDimensions.screenHeight / 4.1,
                        }}
                    >
                        <View
                            style={{
                                marginTop: GlobalDimensions.screenHeight / 7.75,
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
                                alignItems: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    color: '#000',
                                    fontSize: 12,
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi,
                                doloribus expedita facere laborum odit tenetur? Aliquid autem
                                beatae, illo ipsam maiores mollitia nesciunt non provident quis,
                                ratione reiciendis suscipit. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ad animi, doloribus expedita facere laborum odit
                                tenetur? Aliquid autem beatae, illo ipsam maiores mollitia nesciunt
                                non provident quis, ratione reiciendis suscipit.
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
                                padding: 15
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
                        </View>
                        <View
                            style={{
                                position: 'relative',
                                height: GlobalDimensions.screenHeight / 5,
                                width: '100%',
                                backgroundColor: '#fff',
                                borderRadius: 10,
                                marginVertical: 5,
                                padding: 15
                            }}
                        />
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
}

import React, { useEffect, useState } from 'react';
import {
    Image,
    LayoutAnimation,
    Platform,
    Text,
    TouchableOpacity,
    UIManager,
    View,
} from 'react-native';
import { GlobalDimensions } from '../utils';
import Dog from '../../assets/images/dog.jpg';

export default function RescueCard({ item }) {
    const [layoutHeight, setLayoutHeight] = useState(0);

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }, []);

    const updateLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    useEffect(() => {
        if (expanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(135);
        }
    }, [expanded]);

    return (
        <View
            style={{
                width: GlobalDimensions.screenWidth - 26,
                backgroundColor: '#c9963b99',
                marginVertical: 10,
                borderRadius: 10,
            }}
        >
            <View
                style={{
                    height: GlobalDimensions.screenHeight / 12,
                    backgroundColor: '#c9963b99',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                }}
            >
                <Image
                    source={Dog}
                    style={{
                        height: GlobalDimensions.screenHeight / 12 - 16,
                        width: GlobalDimensions.screenHeight / 12 - 14,
                        borderRadius: 40,
                    }}
                />
                <View
                    style={{
                        paddingLeft: 20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: 'white',
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: 'white',
                        }}
                    >
                        {item.title}
                    </Text>
                </View>
            </View>
            <Image
                source={Dog}
                style={{
                    height: GlobalDimensions.screenHeight / 4,
                    width: '100%',
                }}
            />
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden',
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '700',
                    }}
                >
                    lorem ipsum lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv
                    lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv
                    lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={updateLayout}
                        style={{
                            // height: 50,
                            // width: '100%',
                            backgroundColor: 'red',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '700',
                                color: 'yellow',
                            }}
                        >
                            see more
                        </Text>
                    </TouchableOpacity>
                    lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv
                    lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv lorem ipsumv
                    lorem ipsumv
                </Text>
            </View>
        </View>
    );
}

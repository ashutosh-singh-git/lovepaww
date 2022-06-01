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
import { GlobalDimensions, Theme } from '../utils';
import Dog from '../../assets/images/dog.jpg';
import cardOverlay from '../../assets/images/bg_cyan_trans.png';

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
            setLayoutHeight(90);
        }
    }, [expanded]);

    return (
        <View
            style={{
                width: GlobalDimensions.screenWidth - 26,
                backgroundColor: Theme.palette.primary.main,
                marginVertical: 10,
                borderRadius: 10,
            }}
        >
            <View
                style={{
                    height: GlobalDimensions.screenHeight / 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    borderRadius: 10,
                }}
            >
                <TouchableOpacity>
                    <Image
                        source={Dog}
                        style={{
                            height: GlobalDimensions.screenHeight / 12 - 16,
                            width: GlobalDimensions.screenHeight / 12 - 14,
                            borderRadius: 40,
                        }}
                    />
                </TouchableOpacity>
                <View
                    style={{
                        paddingLeft: 20,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '700',
                            color: Theme.palette.text.light,
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: '600',
                            color: Theme.palette.text.light,
                        }}
                    >
                        {item.subTitle}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    height: GlobalDimensions.screenHeight / 2.5,
                    width: '100%',
                    position: 'relative',
                }}
            >
                <Image
                    source={Dog}
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                />
                <Image
                    source={cardOverlay}
                    resizeMode="stretch"
                    style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                    }}
                />
                <View
                    style={{
                        top: '-30%',
                        width: '50%',
                        marginLeft: '60%',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: Theme.palette.text.light,
                        }}
                    >
                        NAME: LUFFY
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: Theme.palette.text.light,
                        }}
                    >
                        AGE: 10 years
                    </Text>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '700',
                            color: Theme.palette.text.light,
                        }}
                    >
                        BREED: HUSKY
                    </Text>
                </View>
            </View>
            <View
                style={{
                    height: layoutHeight,
                    width: '100%',
                    alignItems: 'center',
                    overflow: 'hidden',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '500',
                        color: Theme.palette.text.light,
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, eos
                    laudantium maiores quod rerum vel. Adipisci aperiam at consectetur, culpa illum
                    modi odio odit pariatur, perspiciatis placeat quisquam reiciendis sapiente.
                </Text>
            </View>
            <View
                style={{
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={updateLayout}
                    style={{
                        width: '25%',
                        backgroundColor: Theme.palette.primary.dark,
                        padding: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: '500',
                            color: Theme.palette.common.white,
                        }}
                    >
                        {!expanded ? 'show more' : 'show less'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

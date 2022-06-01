import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { TileFactory } from '../../helpers/factory';

export default function Horizontal({ tileType, tiles }) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'OpenSans-Light' }}>HORIZONTAL</Text>
            <FlatList
                data={tiles}
                renderItem={(tile) => TileFactory(tileType, tile)}
                keyExtractor={(item, index) => `${item.id}_${index}`}
                horizontal
                contentContainerStyle={{
                    paddingHorizontal: 12,
                }}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
            />
        </View>
    );
}

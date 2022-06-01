import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {TileFactory} from "../../helpers/factory";

export default function Grid({tileType, tiles}) {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'OpenSans-Light'}}>GRID</Text>
            <FlatList
                data={tiles}
                renderItem={(tile) => TileFactory(tileType, tile)}
                keyExtractor={(item, index) => `${item.id}_${index}`}
                ItemSeparatorComponent={() => <View style={{height: 15}}/>}
            />
        </View>
    );
}

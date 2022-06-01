import React from 'react';
import {Grid, RescueCard,Horizontal} from "../components";

export function LayoutFactory({layoutType, tileType, tiles}) {
    switch (layoutType) {
        case 'GRID':
            return <Grid {...{tileType, tiles }} />;
        case 'HORIZONTAL':
            return <Horizontal {...{tileType, tiles }}/>;
        default:
            return null;
    }
}

export function TileFactory(tileType,tile) {
    const item = {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Title',
            subTitle: 'First SubTitle',
        }
    switch (tileType) {
        case 'CIRCULAR':
            return <RescueCard item={item} />;
        case 'SQUARE':
            return <RescueCard item={item}/>;
        default:
            return null;
    }
}

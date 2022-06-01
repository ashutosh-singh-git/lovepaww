import React from 'react';
import {FlatList, View} from 'react-native';
import {RescueCard} from '../components';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Title',
        subTitle: 'First SubTitle',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Title',
        subTitle: 'Second SubTitle',
    },
    {
        id: '58694a0f-3da1-471f-bd945571e29d72',
        title: 'Third Title',
        subTitle: 'Third SubTitle',
    },
];

export default function Rescue() {
    // const [data, setData] = useState(DATA);

    return (
        <FlatList
            data={DATA}
            renderItem={({item, index}) => <RescueCard key={index} item={item}/>}
            contentContainerStyle={{
                alignItems: 'center',
                paddingBottom: 40
            }}
            ItemSeparatorComponent={() => <View style={{height: 15}}/>}
        />
    );
}

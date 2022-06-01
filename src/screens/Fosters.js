import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import axiosApi from '../services/axios-api';
import { LayoutFactory } from '../helpers/factory';

export default function Fosters() {
    const [layout, setLayout] = useState([]);

    useEffect(() => {
        axiosApi({
            url: '/paw?page=0&pageId=628908b771e836384ab41000&size=10',
            method: 'get',
        })
            .then((response) => {
                setLayout(response?.contents?.map((content) => LayoutFactory(content)));
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <ScrollView
            nestedScrollEnabled
            contentContainerStyle={{
                paddingBottom: 40,
            }}
        >
            {layout && layout?.length > 0 && layout?.map((item) => item)}
        </ScrollView>
    );
}

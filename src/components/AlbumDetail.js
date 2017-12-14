import React from 'react';
import { View, Text } from 'react-native';

// only need to present data to user
// no lifecycle method, no need to access state
// so this component can be a functional component

const AlbumDetail = (props) => {
    return (
        <View>
            <Text>{props.album.title}</Text>
        </View>
    );
};

export default AlbumDetail;

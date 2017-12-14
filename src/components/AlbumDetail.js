import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

// only need to present data to user
// no lifecycle method, no need to access state
// so this component can be a functional component

const AlbumDetail = (props) => {
    return (
        <Card>
            <Text>{props.album.title}</Text>
        </Card>
    );
};

export default AlbumDetail;

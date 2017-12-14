import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// only need to present data to user
// no lifecycle method, no need to access state
// so this component can be a functional component

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <Text>{props.album.title}</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;

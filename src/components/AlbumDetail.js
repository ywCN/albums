import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// only need to present data to user
// no lifecycle method, no need to access state
// so this component can be a functional component

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View></View>
                <View style={styles.headerContentStyle}>
                <Text>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;

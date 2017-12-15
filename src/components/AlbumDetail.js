import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// only need to present data to user
// no lifecycle method, no need to access state
// so this component can be a functional component

const AlbumDetail = ({ album }) => {
    const {title, artist, thumnail_image } = album;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image source={{ uri: thumnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
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

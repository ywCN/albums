import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    // this method will be called automatically
    componentWillMount() {
        console.log('componentWillMount in AlbumList is called!!!!');
        // debugger;
    }

    render() {
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }
}

export default AlbumList;

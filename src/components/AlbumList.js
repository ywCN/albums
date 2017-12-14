import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    // state property of component
    state = { alnums: [] };

    // this lifecycle method will be called automatically
    // like init()
    componentWillMount() {
        // this call is async, so we need to know when it is completed
        // then() is for things after the AJAX request is completed
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
        
        // console.log('componentWillMount in AlbumList is called!!!!');
        // debugger;
    }

    render() {
        console.log(this.state); // will be called twice

        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }
}

export default AlbumList;

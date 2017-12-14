import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    // state property of component
    state = { albums: [] };

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

    // helper method
    renderAlbums() {
        return this.state.albums.map(album => 
            <Text key={album.title}>{album.title}</Text>)
        ;
    }

    render() {
        console.log(this.state); // will be called twice

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;

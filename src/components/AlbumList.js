import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

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
            <AlbumDetail key={album.title} album={album} />)
        ;
    }

    render() {
        console.log(this.state); // will be called twice

        return ( // this view should be scrollable
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;

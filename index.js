// import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component
const App = () => (
    // use view to wrap things, without wrapper, 
    // it is like mutiple return statements, 
    // which means only the first return will be exectuted
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);


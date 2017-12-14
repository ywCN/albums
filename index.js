// import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/Header';

// create a component
const App = () => (
    // <Header></Header>
    <Header headerText={'Albums'} />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);


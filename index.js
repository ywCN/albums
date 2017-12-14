// import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/Header';

// create a component
const App = () => (
    <Text>Some Text</Text>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);


import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//TouchableOpacity is just a button

const Button = () => {
    return (
        <TouchableOpacity>
            <Text>Click me!!!</Text>
        </TouchableOpacity>
    );
};

export default Button;

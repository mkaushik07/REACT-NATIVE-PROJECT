import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from './signup/FirstScreen.js';
import SignupScreen from './signup/SignupScreen';
import SigninScreen from './signup/SigninScreen';

const RootStack=createStackNavigator();

const RootStackScreen =({navigation}) =>{
    return(
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="FirstScreen" component={FirstScreen} />
            <RootStack.Screen name="SignupScreen" component={SignupScreen} />
            <RootStack.Screen name="SigninScreen" component={SigninScreen} />

        </RootStack.Navigator>
    );
}

export default RootStackScreen;
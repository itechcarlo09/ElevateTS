import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{header: () => null}}/>
                <Stack.Screen
                    name='Splash' 
                    component={SplashScreen}
                    options={ {header: () => null}}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;
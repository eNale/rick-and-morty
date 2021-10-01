/**
 * Rick and Morty App
 * https://github.com/eNale/rick-and-morty
 *
 * @format
 */

// Base imports
import * as React from 'react';
import { connect } from 'react-redux';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import * as Screens from './screens/index';

// Styles
import { colors, fonts } from './styles/index';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LandingScreen'>
                <Stack.Screen
                    name='LandingScreen'
                    component={Screens.LandingScreen}
                    options={{ headerShown: false }}/>
                <Stack.Screen
                    name='CharacterDetailsScreen'
                    component={Screens.CharaterDetailsScreen}
                    options={{
                        title: 'Details',
                        headerBackTitleVisible: false,
                        headerTintColor: colors.app_title,
                        headerTitleStyle: {
                            fontSize: fonts.size.large,
                            fontFamily: fonts.Roboto.Bold,
                            color: colors.app_title,
                        }
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default connect(null, null)(App);

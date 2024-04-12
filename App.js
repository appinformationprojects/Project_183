import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/Main';

const Stack = createStackNavigator();

function App() {
	return (
    <Main/>
	);
}

export default App;
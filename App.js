import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainNav from './src/navigation/mainNav';
import 'react-native-gesture-handler';
function HomeScreen({navigation}) {
  return <MainNav />;
}
export default HomeScreen;

// ... other code from the previous section

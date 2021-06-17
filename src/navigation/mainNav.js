import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, View, Text} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  useTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import Scanner1 from '../screens/setting';
import Scanner2 from '../screens/Scanner2';

const Stack = createStackNavigator();

const navigationOptionHandler = () => ({
  headerShown: false,
});
// You can import Ionicons from @expo/vector-icons/Ionicons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.

// (...)

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tab">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={navigationOptionHandler}
        />
        <Stack.Screen name="scanner1" component={Scanner1} />
        <Stack.Screen name="scanner2" component={Scanner2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ... other code from the previous section

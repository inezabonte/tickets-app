import React from 'react';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomNavigationBar from './screens/CustomNavigationBar';
import LoginScreen from './screens/LoginScreen';
import VerificationScreen from './screens/VerificationScreen'
import TicketScreen from './screens/TicketScreen'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen name='Ticket' component={TicketScreen}/>
        <Stack.Screen name='Verification' component={VerificationScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

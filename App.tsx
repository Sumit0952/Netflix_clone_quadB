import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import DetailsScreen from './Screens/DetailScreen';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Search: undefined;
  Details: { movie: any };
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Movies',
            headerStyle: {
              backgroundColor: 'black', // Set the background color of the header
            },
            headerTintColor: 'red', // Set the text color of the header title
            headerTitleStyle: {
              fontWeight: 'bold', // Optionally make the title bold
            },
           }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Search Movies',
            headerStyle: {
              backgroundColor: 'black', // Set the background color of the header
            },
            headerTintColor: 'red', // Set the text color of the header title
            headerTitleStyle: {
              fontWeight: 'bold', // Optionally make the title bold
            },
           }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Movie Details',
            headerStyle: {
              backgroundColor: 'black', // Set the background color of the header
            },
            headerTintColor: 'red', // Set the text color of the header title
            headerTitleStyle: {
              fontWeight: 'bold', // Optionally make the title bold
            },
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

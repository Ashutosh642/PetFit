import * as React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminPage from './AdminPage';
import PetMedicine from './PetMedicine';

const Tab = createBottomTabNavigator();



const AdminMenu = () => {
  return (
    
    <Tab.Navigator
     screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'petmedicine') {
            iconName = focused ? 'md-medkit':'md-medkit'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
         name="Home" component={AdminPage} />
      <Tab.Screen 
         name="petmedicine" component={PetMedicine} />
    </Tab.Navigator>
   
  );
}

export default AdminMenu;
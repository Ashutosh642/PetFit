import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  createDrawerNavigator
} from '@react-navigation/drawer';

import { DrawerContentAdmin } from './DrawerContentAdmin';
import AdminHeaderMenu from './AdminHeaderMenu';
import ViewFeedback from './ViewFeedback';


const Drawer = createDrawerNavigator();

export default function AdminPage() {
  return (

    <Drawer.Navigator drawerContent={props => <DrawerContentAdmin {...props} />}>
      <Drawer.Screen name="adminmenu" component={AdminHeaderMenu} />
    </Drawer.Navigator>

  );
}

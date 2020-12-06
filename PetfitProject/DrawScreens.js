import * as React from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
import HeaderMenu from './HeaderMenu';
import { DrawerContent } from './DrawerContent'

const Drawer = createDrawerNavigator();

export default function DrawScreens() {
  return (

    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen

        name="headermenu" component={HeaderMenu} />
    </Drawer.Navigator>

  );
}

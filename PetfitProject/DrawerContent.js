import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';


export function DrawerContent(props) {


    return (
        <View style={{ flex: 1, color: 'white' }}>
            <DrawerContentScrollView {...props}>
                <View style={{ padding: 25, backgroundColor: 'grey', height: 200 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQB7jGiopJa1xiZEXbGJtigF8f3zjLi9lCFBA&usqp=CAU'
                        }}
                        size={150}
                    />
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        label="User Profile"
                        style={styles.menuitems}
                        onPress={() => { props.navigation.navigate('UserProfile') }}
                    />
                    <DrawerItem
                        label="Add Pet"
                        style={styles.menuitems}
                        onPress={() => { props.navigation.navigate('AddPet') }}
                    />
                    <DrawerItem
                        label="Help"
                        style={styles.menuitems}
                        onPress={() => { props.navigation.navigate('Help') }}
                    />
                    <DrawerItem
                        label="Support"
                        style={styles.menuitems}
                        onPress={() => { props.navigation.navigate('Support') }}
                    />
                    <DrawerItem
                        label="About"
                        style={styles.menuitems}
                        onPress={() => { props.navigation.navigate('About') }}
                    />
                    <DrawerItem
                        label="Logout"
                        style={styles.menuitems}
                        onPress={() => { props.navigation.navigate('Logout') }}
                    />
                </Drawer.Section>

            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({

    drawerSection: {
        marginTop: 15,
        backgroundColor: "#d3d3d3"
    },

    menuitems: {
        backgroundColor: '#696969',
        color: 'white',
        width: '100%',
        marginLeft: 0,
        borderRadius: 0
    },
});
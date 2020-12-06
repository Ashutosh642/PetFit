import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Drawer
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';


export function DrawerContentAdmin(props) {


    return (
        <View style={{ flex: 1, color: 'white',backgroundColor:'#d3d3d3' }}>
            <DrawerContentScrollView {...props}>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        label="All Products"
                        style={styles.menuitems}
                        onPress={() => { props.navigation.navigate('All Products') }}
                    />
                    <DrawerItem
                        label="Add Products"
                        style={styles.menuitems}
                        onPress={() => { props.navigation.navigate('Add Products') }}
                    />
                    <DrawerItem
                        label="View Feedback"
                        style={styles.menuitems}
                        onPress={() => { props.navigation.navigate('View Feedback') }}
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
     
    },

    menuitems: {
        backgroundColor: '#696969',
        color: 'white',
        marginLeft: 9,
        borderRadius: 3,
        backgroundColor:'grey',
        color:'white'
    },
});
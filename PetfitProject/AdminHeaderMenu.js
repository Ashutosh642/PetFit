import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import AboutpetCarousel from './AboutpetCarousel';



function AdminHeaderMenu({ navigation }) {
    return (
        <View>
            <Header
                 leftComponent={{
                    icon: 'menu',
                    color: 'white',
                    onPress: () => navigation.toggleDrawer()
                }}
                centerComponent={{ text: 'PetFit', style: { color: 'white', fontSize: 23 } }}
                containerStyle={{
                    backgroundColor: '#006699'
                }}
            />
           <AboutpetCarousel />
        </View>
    );
}
export default AdminHeaderMenu;


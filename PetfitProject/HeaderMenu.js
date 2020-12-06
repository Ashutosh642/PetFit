import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import CarouselView from './CarouselView';
import PetfitDetails from './PetfitDetails';


function HeaderMenu({ navigation }) {
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
                    backgroundColor: 'black'
                }}
            />
            <CarouselView navigation={navigation} />
            <PetfitDetails navigation={navigation}/>
        </View>
    );
}
export default HeaderMenu;


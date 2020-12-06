import * as React from 'react';
import { View, Text, Button, TouchableOpacity,TextInput, StyleSheet } from 'react-native';
import AboutpetCarousel from './AboutpetCarousel';

export default function About({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center',backgroundColor:'lightgrey' }}>
        <View style={{width:'100%',padding:18,marginTop:100,marginBottom:28}}>
        <Text style={{fontSize:24,fontFamily:'sans-serif',color:'black',marginBottom:20}}>About PetFit</Text>
        <Text style={{marginBottom:29,fontSize:20}}
        >
          You Can Find Desired One across breeds</Text>
          <AboutpetCarousel />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('headermenu')}>
          <Text style={styles.textstyle}>
            HOME
               </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  
const styles=StyleSheet.create({
    textstyle:
    {
      fontSize: 23,
      backgroundColor: '#1e90ff',
      color: 'white',
      textAlign: 'center',
      padding: 8,
      borderRadius: 5,
      height: 48
    }
     
  })
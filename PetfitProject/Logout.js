import * as React from 'react';
import { View, Text, Button, TouchableOpacity,TextInput, StyleSheet } from 'react-native';



export default function Logout({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'lightgrey' }}>
       
        <TouchableOpacity
          onPress={() => navigation.navigate('loginpage')}>
          <Text style={styles.textstyle}>
             LOGOUT
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
      fontWeight:'bold',
      textAlign: 'center',
      padding: 8,
      borderRadius: 5,
      height: 48
    }
     
  })
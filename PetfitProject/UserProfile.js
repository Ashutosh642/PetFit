import * as React from 'react';
import { View, Text, Button, TouchableOpacity,TextInput, StyleSheet } from 'react-native';

function UserProfile({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View>
           <Text style={{fontSize:20}}>UserProfile</Text>
         </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('headermenu')}>
          <Text style={styles.textstyle}>
            Home
               </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  export default UserProfile;

  const styles= StyleSheet.create({
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
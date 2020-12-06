import * as React from 'react';
import { View, Text, Button, TouchableOpacity,TextInput, StyleSheet } from 'react-native';


function AddProducts({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'lightgrey' }}>
            <Text style={{fontSize:25,marginBottom:15}}>Add Products</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('adminmenu')}>
          <Text style={styles.textstyle}>
            HOME
               </Text>
        </TouchableOpacity>
      </View>
    );
  }
  

  export default AddProducts;
  
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
  
  
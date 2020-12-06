import * as React from 'react';
import { View, Text, Button, TouchableOpacity,TextInput, StyleSheet } from 'react-native';
import { exp } from 'react-native-reanimated';
 
function AllProducts({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>   
         <Text style={{fontSize:25,marginBottom:15}}>All Products</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('adminmenu')}>
          <Text style={styles.textstyle}>
            HOME
               </Text>
        </TouchableOpacity>
      </View>
    );
  }

  export default AllProducts;
  
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
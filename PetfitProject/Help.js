import * as React from 'react';
import { View, Text, Button, TouchableOpacity,TextInput, StyleSheet } from 'react-native';

function Help({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>   
        <View>
                <Text style={{
                  fontSize:22,
                  fontWeight:'500',
                  marginBottom:20,
  
                }}>CustomerCare Number</Text>
              <Text style={styles.custnum}>08572028282</Text>
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

  export default Help;
  
const styles=StyleSheet.create({
    custnum:
    {
      fontSize:22,
      width:280,
      height:50,
      borderColor:'#a9a9a9',
      borderWidth:3,
      borderRadius:5,
      borderBottomColor: 'black',
      marginBottom:30,
      backgroundColor:'lightgrey',
      color:'black',
      fontWeight:"500",
      textAlign:'center'
    },
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
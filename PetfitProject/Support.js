
import * as React from 'react';
import { View, Text, Button, TouchableOpacity,TextInput, StyleSheet } from 'react-native';



export default function Support({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'lightgrey' }}>
              <View>
                <Text style={{
                  fontSize:22,
                  fontWeight:'bold',
                  marginBottom:20,
  
                }}>Feel Free to Write Over Mail</Text>
              <Text style={styles.textbox}>petfit2020@support.com</Text>
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
    textbox:
    {
      fontSize:22,
      width:280,
      height:50,
      borderColor:'#a9a9a9',
      borderWidth:3,
      borderRadius:5,
      borderBottomColor: 'black',
      marginBottom:30,
      backgroundColor:'green',
      color:'white'
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
import * as React from 'react';
import { Text, View, ScrollView, Image, StyleSheet,TouchableOpacity, Alert } from 'react-native';

const PetView = ({route}) => {


    const handleOwner = () =>
    {
        alert("You called the owner.");
    }
    const handleDelete = () =>
    {
        alert("You have deleted the pet.");
    }
    return (
        <>
            
                <View  style={styles.content}>
                    <Image
                        style={{ width: 320, height:170}}
                        source={{ uri: route.params.details[0]}}
                    />
                    <ScrollView style={styles.details}>
                    <Text style={{fontSize:17,marginBottom:7}}>Pet Name      :  {route.params.details[1]}​​​​​​​​ </Text>
                    <Text style={{fontSize:17,marginBottom:7}}>Pet Age         :    {route.params.details[2]}​​​​​​​​</Text>
                    <Text style={{fontSize:17,marginBottom:7}}>Pet Location  :   {route.params.details[3]}​​​​​​​​</Text>
                    <Text style={{fontSize:17,marginBottom:7}}>Pet Breed       :   {route.params.details[4]}​​​​​​​​</Text>
                    <Text style={{fontSize:17,marginBottom:10}}>Owner Details :</Text>
                    <Text style={{backgroundColor:'white',color:'black'}}>{route.params.details[5]}</Text>
                    </ScrollView>
                    <View style={{flexDirection:'row',marginBottom:40,padding:10,justifyContent:'space-between'}}>

                    <TouchableOpacity
                    onPress={handleOwner}
                     style={styles.buttons}>
                       Call to Owner
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={handleDelete}
                        style={styles.buttons}>
                       Delete
                        </TouchableOpacity>
                    </View>
                </View>
        </>
    );
}

export default PetView;

const styles=StyleSheet.create({
    content:{
        padding:23,
        backgroundColor:'#a9a9a9',
        color:'black',
        height:'100%',
        fontFamily:'Calibri'
    },
    details:{
        margin:12
    },
    buttons:{
        backgroundColor:'white',
      color:'black',
      fontSize:22,
      padding:12
    }
})
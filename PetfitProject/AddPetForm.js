import  React, {useState} from 'react';
import { Text, TextInput,StyleSheet, View,Image,TouchableOpacity } from 'react-native';


const AddPetForm = ({navigation}) => {
  const [petname,setPetName] =useState('');
  const [petDob,setPetDob] =useState('');
  const [petLoc,setPetLoc] =useState('');
  const [petBreed,setPetBreed] =useState('');
  const [ownerdetails,setOwnerDetails] =useState('');



  const handleClick = () =>{
       alert("Added")
  }
  return (
      <>
 
      <View style={{backgroundColor:"#a9a9a9",height:'100%'}} > 
          <View style={{flexDirection:"row"}}>
      
      <View style={{flexDirection:"column"}}>
    <Text style={{marginLeft:10,fontWeight:"bold",fontSize:19}}>Pet Name:
    <TextInput
      style={{ height: 40, marginTop:15, borderColor: 'white',borderRadius:4,width:200,
               borderWidth: 1 ,color:"black",marginLeft:49,marginBottom:5,backgroundColor:"#fff"}}
      onChangeText={text => setPetName(text)}
      placeholder=" Enter Pet Name"
      value={petname}
    />
    </Text>
    <Text style={{marginLeft:10,fontWeight:"bold",fontSize:19}}>
    Pet DOB:
    <TextInput
      style={{ height: 40, borderColor: 'white', borderWidth: 1,borderRadius:4,width:200,
      color:"black",marginLeft:61,marginBottom:5,backgroundColor:"#fff"}}
      onChangeText={text => setPetDob(text)}
      placeholder=" Date of Birth"
      value={petDob}
    /></Text>
     <Text style={{marginLeft:10,fontWeight:"bold",fontSize:19}}>
    Pet Location:
    <TextInput
      style={{ height: 40, borderColor: 'white', borderWidth: 1,borderRadius:4,width:200,
      color:"black",marginLeft:26,marginBottom:5,backgroundColor:"#fff"}}
      onChangeText={text => setPetLoc(text)}
      placeholder=" Enter Pet Location"
      value={petLoc}
    /></Text>
     <Text style={{marginLeft:10,fontWeight:"bold",fontSize:19}}>
    Pet Breed:
    <TextInput
      style={{ height: 40, borderColor: 'white', borderWidth: 1,borderRadius:4,width:200,
      color:"black",marginLeft:50,marginBottom:5,backgroundColor:"#fff"}}
      onChangeText={text => setPetBreed(text)}
      placeholder=" Enter Pet Breed"
      value={petBreed}
    /></Text>
    
     <Text style={{marginLeft:10,fontWeight:"bold",fontSize:19}}>Owner Details:</Text>
     <TextInput style={{
            padding:20,
            height:120,
            width:340,
            margin:10,
            borderRadius:4,
            backgroundColor:'#fff'
         }}
         onChangeText={text => setOwnerDetails(text)}
         placeholder="Enter Owner Details"
         value={ownerdetails} 
         />
         <View style={{flexDirection:"row"}}>
         <Text style={{marginLeft:35,fontWeight:"bold",fontSize:19}}>Add Pet's Photo/<br />Video:</Text>
        
     
         <Image source = {{uri:'https://www.pngitem.com/pimgs/m/33-330111_album-icon-png-transparent-png.png'}} 
         style={{width: 30, height: 30,marginLeft:70 }} /></View>
         <View>
     
         <TouchableOpacity
           onPress={() => navigation.navigate('headermenu')}
          style={styles.button}>
                <Text style={{fontWeight:"bold"}}>Add</Text>
             </TouchableOpacity></View>
    </View>
    
    </View>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
   
    button: {
        width:80,
       alignItems: "center",
       backgroundColor: "#fff",
      marginLeft:150,
       padding: 10,
       marginTop:20,
       marginBottom:42
     },
     textinputstyle:{
        height: 30, 
        borderColor: 'white', 
        borderWidth: 1 ,
        color:"black",
        marginLeft:5,
        marginBottom:5,
        backgroundColor:"#fff"
     }
    
    
    })

export default AddPetForm;


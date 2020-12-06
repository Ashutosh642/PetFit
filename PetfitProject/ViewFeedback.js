
import * as React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, TextInput ,TouchableOpacity} from 'react-native';

const ViewFeedback = () => {


    const handleButtonClick = () => {
        alert("Thanks For Your Feedback.");
    }
    return (
        <View style={styles.container}>
            <Text
                style={styles.logo}>
                    <Text style={{color:'green'}}>Pet</Text><Text style={{color:'red'}}>Fit</Text>
                </Text>
            <Text style={styles.titleText}>Welcome New User</Text>
            <Text style={styles.midtitleText}>we would like your feedback to Improve our app</Text>
            <Text style={styles.ratingText}>How do you feel about the features of the app</Text>
        


            <View style={styles.content}>
         <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
            <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/emoji-10/24/96-512.png' }}
               style={{ width: 50, height: 50, justifyContent: "space-between" }} />
         </View>
         <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
            <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/emoji-10/24/96-512.png' }}
               style={{ width: 50, height: 50 }} />
         </View>
         <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
            <Image source={{ uri: 'https://image.flaticon.com/icons/png/512/250/250123.png' }}
               style={{ width: 50, height: 50 }} />
         </View>
         <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
            <Image source={{ uri: 'https://cdn1.iconfinder.com/data/icons/emoji-10/24/96-512.png' }}
               style={{ width: 50, height: 50 }} />
         </View>
         <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between', marginBottom: 10 }}>
            <Image source={{ uri: 'https://icon-library.com/images/1-512_58150.png' }}
               style={{ width: 50, height: 50 }} />
         </View>
      </View>

            <Text style={styles.ratingText}>Please select any feedback category</Text>

            <View style={styles.feedbackContainer}>
            <View style={styles.feedtype}>
                  <TouchableOpacity style={styles.feedkind}>SUGGESTIONS</TouchableOpacity>
            </View>
            <View style={styles.feedtype}>
                 <TouchableOpacity style={styles.feedkind}>COMPLAINTS</TouchableOpacity>
            </View>

            <View style={styles.feedtype}>
                   <TouchableOpacity style={styles.feedkind}>COMPLEMENTS</TouchableOpacity>
            </View>
            </View>
            <Text style={styles.midtitleText}>Please leave your feedback below:</Text>

            <TextInput
                style={{
                    height: 150,
                    width: 300,
                    margin: 20,
                    padding: 10,
                    backgroundColor:'white',
                    borderRadius:5
                }}
                multiline={true}
            />
           
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handleButtonClick}>
                    Send
                </TouchableOpacity>
           

        </View>
    );
}

export default ViewFeedback;


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#a9a9a9',
        height:'100%'
    },
    logo: {
       fontSize:29,
       fontWeight:'bold',
       backgroundColor:'white',
       padding:8,
       marginTop:4,
       borderRadius:8,
       height:47,
       width:140,
       textAlign:'center'
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        lineHeight: 50,
    },
    midtitleText: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop:7
    },
    ratingText: {
        fontStyle: 'normal',
        fontSize: 14,
        marginBottom:6
    },

    buttonStyle: {
        backgroundColor: 'black',
        borderRadius: 7,
        width:93,
        height:58,
        padding:17,
        color:'white',
        textAlign:'center',
        marginBottom:20
    },
    content:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:5,
        width:'80%',
        height:80
     },
     feedbackContainer:
     {
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     width:'100%',
     fontSize:12,
     fontFamily:'Calibri'
     },
     feedtype:{
       flex:1,
       alignItems:'center',
       borderRadius:7,
       borderColor:'#fff',
       backgroundColor:'blue',
       width:68,
       marginLeft:5,
       height:60,
       justifyContent:'center'
     },
     feedkind:{
          color:'white',
          fontWeight:'bold'
     }
});

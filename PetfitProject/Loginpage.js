import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet, Image ,TouchableOpacity} from 'react-native';


export default class Loginpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
      const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/736x/cc/4c/22/cc4c228e3d69dcd92f7f99b802cb8d24.jpg' }}
                    style={{ width: 100, height: 100, marginBottom: 20,borderRadius:8 }}
                />
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'New user'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />


                 <View style={{lex:1,flexDirection:'column',justifyContent:'space-between',padding:10,marginTop:20}}>
                     <TouchableOpacity 
                     onPress={() => navigate('Drawscreen')}
                     style={styles.btn1}>Login</TouchableOpacity><br />
                     <TouchableOpacity 
                      onPress={() => navigate('adminmenu')}
                     style={styles.btn2}>Login As Admin</TouchableOpacity>
                 </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#a9a9a9',
    },
    input: {
        width: 279,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderRadius:7,
        borderColor:'white',
        backgroundColor:'white',
        marginBottom: 10,
    },
    btn1:{
        backgroundColor:'black',
        color:'white',
        padding:10,
        textAlign:'center',
        fontFamily:'Calibri',
        textAlign:'center',
        fontSize:20,
        borderRadius:8,
        height:43,
        width:90,
        marginLeft:52

    },
    btn2:{
        backgroundColor:'black',
        color:'white',
        padding:10,
        textAlign:'center',
        fontFamily:'Calibri',
        fontSize:20,
        borderRadius:8,
        height:46,
        width:200

    },


});


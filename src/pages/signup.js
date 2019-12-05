import React, {Component} from 'react';
import {
    StyleSheet, 
    Text,
    View, 
    TextInput, 
    Image, 
    TouchableOpacity,
} from 'react-native';

import * as firebase from 'react-native-firebase';


export default class Login extends React.Component{
    state={
        displayName: ' ',
        email:' ',
        pass:' ',
        errMsg: null,
    };

    cadastrar = async()=>{
        const{ email, pass, displayName} = this.state;
        if(email == ' ' || pass == ' ' || displayName == ' '){
            this.setState({errMsg: 'Preencha todos os campos'});
        }else{

            this.setState({errMsg: 'Sign Up ...'})
                
            await firebase.auth().createUserWithEmailAndPassword(email,pass)
            .then(() =>{
                firebase.auth().currentUser.updateProfile({
                    displayName: displayName
                    }).then(() => {
                    const uid = firebase.auth().currentUser.uid
                    const name = firebase.auth().currentUser.displayName
                    const email = firebase.auth().currentUser.email

                    firebase.database().ref('users/' + uid).set({
                        name,
                        email,
                        uid,
                        
                    })

                    this.props.navigation.navigate('Main');


                }).catch((error) => {
                this.setState({errMsg: error.message})
                })
        
        
            }).catch((error) => {
                this.setState({errMsg: error.message})
            })
        }
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerImg}>
                    <Image
                        source={require('../img/logo.png')}
                    />
                    <Text style={styles.logoTexto}>Sign up</Text>
                </View>
                {this.state.errMsg ? <Text>{this.state.errMsg}</Text> : null}
                <View style={styles.containerForm}>
                    <TextInput
                        style={styles.inputBox}
                        onChangeText={(text) => this.setState({ displayName: text })}
                        autoCapitalize='words'
                        autoCorrect={false}
                        underlineColorAndroid='transparent'
                        placeholder='Nome'
                        placeholderTextColor='rgba(255,255,255,.6)'
                    />
                    <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email"
                    placeholderTextColor = 'rgba(255,255,255,.6)'
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={email => this.setState({email})}
                    />

                    <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = 'rgba(255,255,255,.6)'
                    onChangeText={pass => this.setState({pass})}
                    />

                    <TouchableOpacity style={styles.button} onPress={this.cadastrar}>
                       <Text style={styles.buttonText} >Cadastrar</Text>
                    </TouchableOpacity>
                </View>

                
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Já tenho uma conta</Text>
                    <TouchableOpacity  onPress={() => {this.props.navigation.navigate('Login')}}>
                        <Text style={styles.signupButton}> login</Text>
                    </TouchableOpacity>

            
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        
      backgroundColor: '#455A64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    containerImg: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    containerForm: {
        backgroundColor: '#455A64',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupTextCont: {
       flexGrow: 1,
       alignItems: 'center',
       justifyContent: 'center' ,
       marginVertical: 16,
       flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16
    },
    signupButton: {
        color:'#FFFFFF',
        fontSize: 16,
        fontWeight: '500'
    },
    logoTexto: {
        marginVertical: 15,
        fontSize: 18,
        color:'rgba(255,255,255,0.7)'
    },
    inputBox:{
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    button: {
        width: 300,
        borderRadius: 25,
        backgroundColor: '#1c313a',
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight:'500',
        color:'#FFFFFF',
        textAlign:'center'
    }
  });
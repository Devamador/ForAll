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
        email:' ',
        pass:' ',
        errMsg: null,
    };

    login = () =>{
        const{ email, pass} = this.state;
        if(email == ' ' || pass == ' '){
            this.setState({errMsg: 'Preencha todos os campos'});
        }else{
            this.setState({errMsg: 'Entrando...' });
            firebase.auth().signInWithEmailAndPassword(email,pass)
                .then(() => {
                    this.props.navigation.navigate('Main');
                }).catch((error) => {
                    
                    this.setState({errMsg: error.code});
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
                    <Text style={styles.logoTexto}>Bem-Vindo a For ALL</Text>
                </View>
                {this.state.errMsg ? <Text>{this.state.errMsg}</Text> : null}
                <View style={styles.containerForm}>
                    <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email"
                    placeholderTextColor = "#FFFFFF"
                    selectionColor="#FFF"
                    keyboardType="email-address"
                    //onSubmitEditing={() => this.password.focus()}
                    onChangeText={text => this.setState({email: text})}
                    />

                    <TextInput style={styles.inputBox} 
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor = "#FFFFFF"
                    //ref={(input) => this.password = input}
                    onChangeText={text => this.setState({pass: text})}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.login}>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Esqueceu a senha? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signupButton} onPress={() => {this.props.navigation.navigate('ForgotPass')}}> Recupere aqui</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Não tem uma conta? </Text>
                    <TouchableOpacity>
                        <Text style={styles.signupButton} onPress={() => {this.props.navigation.navigate('SignUp')}}> Inscreva-se</Text>
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
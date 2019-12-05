import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from 'react-native-firebase'; 

import HeaderComponent from './components/header';


export default class UpdatePass extends React.Component{
    state = {
        currentPass: ' ',
        newPass: ' ',
        errMsg: null,
        
    }

    reauthenticate = (currentPass) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPass);

        return user.reauthenticateWithCredential(cred);
    }

    changePassword = () => {
        const { currentPass, newPass } = this.state;
        
        this.reauthenticate(currentPass)
            .then(() => {
                var user = firebase.auth().currentUser;
                user.updatePassword(newPass)
                    .then(() => {
                        this.setState({errMsg: 'Senha atualizada'});
                    }).catch((error) => { 
                        this.setState({errMsg: error.code}); 
                    });
            }).catch((error) => { 
                this.setState({errMsg: error.code}); 
            });
    }


    render(){
        const { currentPass,newPass }  = this.state;
            return(
            <View>
                <HeaderComponent title={this.props.navigation.getParam('title')} navigation={this.props.navigation}/>
                
                <View style={styles.containerForm}>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Senha atual:</Text>
                        <TextInput
                            style={styles.inputBox}
                            //value={this.state.currentPass}
                            onChangeText={(text) => this.setState({ currentPass: text })}
                            autoCapitalize='words'
                            autoCorrect={false}
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            placeholder='Senha Atual'
                            placeholderTextColor='rgba(255,255,255,.6)'
                        />
                    </View>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Nova senha:</Text>
                        <TextInput
                            style={styles.inputBox}
                            //value={this.state.newPass}
                            onChangeText={(text) => this.setState({ newPass: text })}
                            autoCapitalize='words'
                            autoCorrect={false}
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            placeholder='Nova Senha'
                            placeholderTextColor='rgba(255,255,255,.6)'
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.changePassword}>
                       <Text style={styles.buttonText} >Atualizar</Text>
                    </TouchableOpacity>
                    {this.state.errMsg ? <Text>{this.state.errMsg}</Text> : null}
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox:{
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    containerForm: {
        backgroundColor: '#455A64',
        flexGrow: 1,
        alignItems: 'center',
        height: '100%',
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
})
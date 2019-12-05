import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from 'react-native-firebase'; 

import HeaderComponent from './components/header';


export default class UpdateProfile extends React.Component{
    state = {
        displayName: firebase.auth().currentUser.displayName,
        email: firebase.auth().currentUser.email,
        errMsg: null,
        
    }

    atualizar = () => {
       const {displayName} = this.state
        firebase.auth().currentUser.updateProfile({
            displayName: displayName,
            
        }).then(() => {
            const uid = firebase.auth().currentUser.uid;
            const displayName = firebase.auth().currentUser.displayName;
            const email = firebase.auth().currentUser.email;

            firebase.database().ref('users/' + uid).set({
                name: displayName,
                email: email,
                uid: uid,
            })

            this.setState({errMsg: 'Atualizado com sucesso'})
        }).catch((error) => {
            this.setState({errMsg: error.code})
        })
    }

    render(){
        
        return(
            <View>
                <HeaderComponent title={this.props.navigation.getParam('title')} navigation={this.props.navigation}/>
                <View style={styles.containerForm}>
                    <View>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>Nome</Text>
                        <TextInput
                            style={styles.inputBox}
                            value={this.state.displayName}
                            onChangeText={(text) => this.setState({ displayName: text })}
                            autoCapitalize='words'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            placeholder='Your Name'
                            placeholderTextColor='rgba(255,255,255,.6)'
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.atualizar}>
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
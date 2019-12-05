import React from 'react';
import { View, Text, Image } from 'react-native';
import * as firebase from 'react-native-firebase';

import HeaderComponent from './components/header';

export default class Profile extends React.Component{

    render(){
        const user = firebase.auth().currentUser;

        return(
            <View>
                <HeaderComponent title={this.props.navigation.getParam('title')} navigation={this.props.navigation}/>

                <View style={{flexDirection: 'row',alignItems:'center',borderBottomWidth:1,}}>
                    <Image 
                        source={require('../img/avatar.jpg')} 
                        resizeMode="contain" 
                        style={{margin:15, width:60, height:60, borderRadius:30}}
                    />
                    <Text style={{fontSize: 20}}>{user.displayName}</Text>
                    <Text style={{color: 'blue',fontSize: 14, marginLeft:20}} onPress={() => {this.props.navigation.navigate('UpdateProfile',{title: 'Atualizar dados'})}}>Alterar</Text>
                </View>
                <View style={{marginHorizontal: 15}}>
                    <Text style={{fontSize: 20, fontWeight:'bold'}}>{user.displayName}</Text>
                    <Text style={{fontSize: 20}}>{user.email}</Text>
                </View>
                <View style={{marginHorizontal: 15, marginVertical: 10, flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize: 20}} >Senha:*******</Text>
                    <Text style={{color: 'blue',fontSize: 14,  marginLeft: 20}} onPress={() => {this.props.navigation.navigate('UpdatePass',{title: 'Atualizar senha'})}}>Alterar</Text>
                </View>
            </View>
        );
    }
}
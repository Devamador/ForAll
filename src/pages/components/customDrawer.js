import React, { Component } from 'react';
import {View , BackHandler} from 'react-native';

import * as firebase from 'react-native-firebase';

import DrawerItems from './drawerItems'

export default class CustomDrawer extends React.Component{

 

    render(){
        const user = firebase.auth().currentUser;
        
        return(

            <View style={{flex: 1, backgroundColor:'rgba(255,255,255,0.43)'}}>
                {
                    user != null 
                    ?<DrawerItems 
                        navigation={this.props.navigation} 
                        displayName={user.displayName} 
                        email={user.email}
                    />
                    : null
        
                            
              
                }    
            </View>
        );
    }
}

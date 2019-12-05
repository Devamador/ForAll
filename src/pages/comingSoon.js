import React from 'react';
import {View, Text} from 'react-native';
import HeaderComponent from './components/header';

export default class ComingSoon extends React.Component{
    render(){
        const {navigation} = this.props;
        return(
            <View style={{flex: 1}}>
                <HeaderComponent title={'Em Breve'} navigation={navigation}/>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{fontSize: 20,fontWeight:'bold'}}>Em Breve...</Text>
                </View>
            </View>
        );

    }
} 

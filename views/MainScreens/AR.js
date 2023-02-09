import {View, Text, Image, TouchableOpacity, SafeAreaView, Linking} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const AR = () => {
  return (
    
    <View style={{justifyContent:'center', alignItems:'center', marginTop:110}}>
      <Text style={{textAlign:'center', fontSize:30}}>Augmented Reality</Text>
      <Text style={{textAlign:'center', fontSize:18, margin:40}}>
        Events Empire Give a platform to our users for making their future setup true in imaginary reality
      </Text>
      
      <Image
          source={require('../../assets/arimage.png')}
          style={{
            width: '95%',
            height: 200,
            marginTop:10,
            borderRadius: 10,
            
          }}
        />
      <TouchableOpacity onPress={ ()=>{ Linking.openURL('app://events_empire')}} style={{justifyContent:'center', alignItems:'center', backgroundColor:'purple', width:170, height:40, marginTop:70, borderRadius:10}}>
        <Text style={{textAlign:'center',  justifyContent:'center', color:'white', fontWeight:'700'}}>Let's Start a Journey</Text>
      </TouchableOpacity>
    </View>
   
  );
 
};

export default AR;

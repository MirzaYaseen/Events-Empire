import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
const WhishlistItems = ({item, onRemoveItem, onAddtoCart, onRemovewhishlist, onAddWhishList, iswhishlist}) => {
  return (
       
    <View  style={{
      width: '94%',
      height:170,
      elevation: 5,
      borderRadius: 40,
     
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginTop:5,
      marginBottom:10,
      alignSelf:'center',
      flexDirection:'row',
      paddingLeft:5
    }}>
      <Image
          source={{uri: item.images}}
          style={{
            width: 120,
            height: 120,
            borderRadius:10
          }}
        />
        <View >

       <Text style={{fontWeight:'800', fontSize:18, marginLeft:15}}>
        {item.name}
       </Text>
       <Text style={{fontWeight:'700', marginLeft:15}}>
        Pkr. {item.price}
       </Text>
        </View>
    <TouchableOpacity>
      <View style={{width: '100%'}}>
        
          {iswhishlist ? (
            <TouchableOpacity
            style={{
             
              padding: 5,
           
             
              marginLeft:50,
              marginTop:-17,
              marginRight:-6
          
            }}
            onPress={() => {
              onAddtoCart(item);
            }}>
              <Image
          source={require('../../assets/shopping-cartabc.png')}
          style={{
            width: 35,
            height: 35,
            
          }}
        />
          </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                padding: 5,
               
                borderRadius: 10,
              
                marginRight: 5,
                marginTop:80
              }}
              onPress={() => {
                onRemoveItem(item);
              }}>
              <Text>Remove from Cart</Text>
            </TouchableOpacity>
          )}
       
        {iswhishlist ? (
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              elevation: 5,
              backgroundColor: '#fff',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            onPress={() => {
              onRemovewhishlist();
            }}>
            <Image
              source={require('../../assets/heartfilled.png')}
              style={{width: 24, height: 24, tintColor: '#26c6da'}}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              elevation: 5,
              backgroundColor: '#fff',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            onPress={() => {
              onAddWhishList(item);
            }}>
            <Image
              source={require('../../assets/heart.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default WhishlistItems;

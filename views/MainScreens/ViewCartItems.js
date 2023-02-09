import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ViewCartItems = ({item, onRemoveItem, onAddtoCart, onRemovewhishlist, onAddWhishList, iswhishlist}) => {

  return (
       <View>
    <View  style={{
      width: '94%',
      height:140,
      elevation: 1,
      borderRadius: 10,
     
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginTop:10,
      
      alignSelf:'center',
      flexDirection:'row',
      paddingLeft:5
    }}>
      <Image
          source={{uri: item.images}}
          style={{
            width: 100,
            height: 100,
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
              borderWidth: 0.5,
              padding: 5,
           
              borderRadius: 10,
              marginLeft:40,
              marginTop:80
            }}
            onPress={() => {
              onAddtoCart(item);
            }}>
            <Text>Add to Cart</Text>
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
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countBtn: {
    width: 80,
    height: 30,
    backgroundColor: '#90caf9',
    borderRadius: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
export default ViewCartItems;

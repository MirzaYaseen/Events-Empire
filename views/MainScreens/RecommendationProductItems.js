import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const RecommendationProducts= ({ item, onAddtoCart, onAddWhishList}) => {
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity
      style={{
        width: 200,
        height:230,
        elevation: 5,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        backgroundColor: '#fff',
        marginBottom: 40,
      }}
      // onPress={() =>
      //   navigation.navigate('ProductDetails', {
      //     otherParam: item,
      //   })
      // }
      >
      <View style={{width: '100%'}}>
        <Image
          source={{uri: item.images}}
          style={{
            width: '100%',
            height: 130,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            fontSize: 18,
            fontWeight: '600',
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'orange',
            marginLeft: 5,
            marginRight: 20,
          }}>
          <Icon
            style={{marginLeft: 5, marginRight: 8, marginTop: 1}}
            name="star"
            size={15}
          />
          {item.ratings.toFixed(1.5)}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 10,
            }}>
          </Text>
          {/* <TouchableOpacity
            style={{
              borderWidth: 0.5,
              padding: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginRight: 12,
            }}
            onPress={() => {
              onAddtoCart(item);
            }}>
            <Text>Add to Cart</Text>
          </TouchableOpacity> */}
        </View>
        {/* <TouchableOpacity
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
          }}   onPress={() => {
            onAddWhishList(item);
          }}>
          <Image
            source={require('../../assets/heart.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity> */}
      </View>
    </TouchableOpacity>
  );
};

export default RecommendationProducts;

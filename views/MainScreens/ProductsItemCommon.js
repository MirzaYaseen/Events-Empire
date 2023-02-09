import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
import COLORS from '../../consts/colors';
const ProductsItemCommon = ({ item, onAddtoCart, onAddWhishList}) => {
  const navigation = useNavigation(); 
  return (
    
    <TouchableOpacity
    underlayColor={COLORS.white}
    activeOpacity={0.9}
      style={{

      


        // width: 190,
        // elevation: 5,
        // borderRadius: 20,
        // borderWidth: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // marginLeft: 10,
        // backgroundColor: '#fff',
        // marginBottom: 10,
      }}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          otherParam: item,
        })
      }
      >
      {/* <View style={{width: '100%'}}> */}
      <View style={style.card5}>
        <View  style={{ alignItems: 'center', top: -40,  }}>
        <Image
          source={{uri: item.images}}

          style={{ height: 120, width: 120, borderRadius: 30 ,borderWidth:0.5}}


          // style={{
          //   width: '100%',
          //   height: 120,
          //   borderTopLeftRadius: 20,
          //   borderTopRightRadius: 20,
          // }}
        />
        {/* ending view of line 37 */}
        </View>    
        {/* new view adding */}
        <View style={{ marginHorizontal: 20 }}>
         <Text
          style={{
            marginTop: 15,
            marginLeft: 5,
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
           
            // justifyContent: 'space-between',
            // alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '700',
              marginBottom: 10,
              
            }}>
            Pkr. {item.price}
          </Text>
          <TouchableOpacity
            style={{
              // borderWidth: 0.5,
              padding: 5,
              // justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              marginRight: 12,
              marginLeft:100,
              marginBottom:20
            }}
            onPress={() => {
              onAddtoCart(item);
            }}>
         <Image
            source={require('../../assets/shoppingcart.png')}
            style={{width: 30, height: 30, }}
          />
          </TouchableOpacity>
        </View>
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
            marginLeft:100,
            top: -30,
            right: 10,
          }}   onPress={() => {
            onAddWhishList(item);
          }}>
          <Image
            source={require('../../assets/heart.png')}
            style={{width: 24, height: 24}}
          />
        </TouchableOpacity>
        </View>
        </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card: {
   
    marginHorizontal: 10,
   
    marginTop: 40,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
   TextStyle1: {
    color: "orange",
    fontSize: 15,
    marginLeft: 15,
    display:'flex',
    marginBottom: 10,

  },
  TextStyle2: {
    color: "black",
    fontSize: 21,
    marginLeft:10,
    
  },
  TextStyle3: {
    color: "purple",
    fontSize: 12,
    marginLeft: 20,

  
  },
   TextStyle4: {
    color: "purple",
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginTop:5
   },
    inputContainer: {
    flex: 1,
    height: 40,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  sortBtn: {
    width: 40,
    height: 40,
    marginTop: 1,
    marginLeft: 10,
    backgroundColor: 'brown',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
    card5: {
   height: 280,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,

  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
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




export default ProductsItemCommon;

import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import MainOne from '../MainScreens/MainOne';

import HomeScreen from '../MainScreens/HomeScreen';
import SearchProducts from '../MainScreens/SearchApp';
import SearchandServices from '../MainScreens/CreateAppointment';
import AR from '../MainScreens/AR';
import CartScreen from '../MainScreens/CartScreen';
import ViewPhotographer from '../MainScreens/ViewPhotographers';
import ViewSaloon from '../MainScreens/ViewSalons';
import MarqueeDetails from '../MainScreens/MarqueeDetails';
import SearchandServices1 from '../MainScreens/ViewMarquees';
import {useSelector} from 'react-redux';
import ProductsWishList from '../MainScreens/ProductsWhishList';

const BottomNew = () => {
  const [selected, setSelected] = React.useState(0);
  const data = useSelector(state => state);

  return (
    <View style={{flex: 1}}>
      {selected == 0 ? (
        <HomeScreen />
      ) : selected == 1 ? (
        <MainOne />
      ) : selected == 2 ? (
        <ProductsWishList />
      ) : selected == 3 ? (
        <SearchProducts />
      ) : selected == 4 ? (
        <SearchandServices />
      ) : selected == 5 ? (
        <AR />
      ) : (
        <CartScreen />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 70,
          flexDirection: 'row',
          backgroundColor: '#f2f2f2',
          elevation: 7,
        }}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          
          }}
          onPress={() => {
            setSelected(0);
          }}>
          <Image
            source={require('../../assets/home.png')}
            style={{
              width: 30,
              height: 30,
              
              
              tintColor: selected == 0 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelected(1);
          }}>
          <Image
            source={require('../../assets/brandidentity.png')}
            style={{
              width: 30,
              height: 30,
              tintColor: selected == 1 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelected(2);
          }}>
          <Image
            source={require('../../assets/heart.png')}
            style={{
              width: 28,
              height: 28,
              tintColor: selected == 2 ? '#000' : '#8e8e8e',
            }}
          />
          <View
            style={{
              position: 'absolute',
              top: 4,
              right: 3,
              width: 18,
              height: 20,
              backgroundColor: 'black',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              {data.Reducers2.length}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 60,
            height: 60,
            
            justifyContent: 'center',
          
            borderRadius:20,
            alignItems: 'center',
          }}
          onPress={() => {
            setSelected(3);
          }}>
          <Image
            source={require('../../assets/shoppingbag.png')}
            style={{
              width: 40,
              height: 40,
             
              tintColor: selected == 3 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelected(4);
          }}>
          <Image
            source={require('../../assets/exchange.png')}
            style={{
              width: 35,
              height: 35,
              tintColor: selected == 4 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelected(5);
          }}>
          <Image
            source={require('../../assets/augmentedreality.png')}
            style={{
              width: 35,
              height: 35,
              tintColor: selected == 5 ? '#000' : '#8e8e8e',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            justifyContent: 'center',
            backgroundColor: selected == 1 ? '#26c6da' : 'black',
            borderRadius: 25,
            alignItems: 'center',
          }} onPress={() => {
            setSelected(6);
          }}>
          <Image
            source={require('../../assets/shoppingcart.png')}
            style={{width: 24, height: 24, tintColor: 'white'}}
          />
          <View
            style={{
              position: 'absolute',
              top: -5,
              right: -5,
              width: 18,
              height: 19,
              backgroundColor: 'red',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#000', fontWeight: '600'}}>
              {data.Reducers.length}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNew;

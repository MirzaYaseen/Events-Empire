import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {View, Button, TouchableHighlight, Text} from 'react-native';
import HomeScreen from '../MainScreens/HomeScreen';
import AR from '../MainScreens/AR';
import AddtoCart from '../MainScreens/AddtoCart';
import CartScreen from '../MainScreens/CartScreen';
import CreateAppointment from '../MainScreens/CreateAppointment';
import MainOne from '../MainScreens/MainOne';
import ProductsWhishList from '../MainScreens/ProductsWhishList';
import Products from '../MainScreens/Products';
import SearchApp from '../MainScreens/SearchApp';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {height: 55, borderTopWidth: 0, elevation: 0},
        showLabel: false,
        activeTintColor: '#90caf9',
      }}>
      <Tab.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={28} />,
        }}
        
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" color={color} size={28}  />
          ),
        }}
      />
      
       <Tab.Screen
        name="WhishList"
        component={ProductsWhishList}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="AddtoCart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="store" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchApp}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.light,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
              }}>
              <Icon name="search" color="lightgrey" size={28} />
            </View>
          ),
        }}
      />
        <Tab.Screen
        name="Main"
        component={MainOne}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="camera" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="AR"
        component={AR}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="camera" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Services"
        component={CreateAppointment}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="dashboard" color={color} size={28} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={AddtoCart}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

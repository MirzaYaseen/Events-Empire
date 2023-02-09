import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import choosenProducts from '../../consts/cartItems';

const PaymentPersonal = ({navigation, route}) => {
  const data = route.params.otherParams;
  console.log("Cart: ", data)
  const [name, onChangeName] = React.useState(null);
  const [mob, onChangeMob] = React.useState('+92');
  const [city, onChangeCity] = React.useState('Islamabad');
  const [address, onChangeAddress] = React.useState(null);

  const FIREBASE_API_ENDPOINT =
    'https://eventspayments-10b22-default-rtdb.firebaseio.com/';
  console.log(name, city, address, mob);
  const postData = dataxx => {
    console.log(dataxx);
    if (!name || !mob || !city || !address) {
      alert('Please fill all Details');
    } else if (name.length > 15) {
      alert('Your Name is too long');
    } else if (name.length < 3) {
      alert('Please Enter Full Name');
    } else if (city.length < 3) {
      alert('Enter Valid City');
    } else if (city.length > 10) {
      alert('Enter valid city Name');
    } else if (address.length < 5) {
      alert('Enter Full Address');
    } else if (address.length > 60) {
      alert('Address is too long, Enter postal address only');
    } else if (mob.length < 11 || mob.length > 13) {
      alert('Enter Correct Receiver Mobile Number without any space');
    } else {
      navigation.navigate('ProductPayment', {data, shippingInfo: {name, city, address, mob}});
      var requestOptions = {
        method: 'POST',
        body: JSON.stringify(dataxx),
      };

      fetch(`${FIREBASE_API_ENDPOINT}/CartPersonalInfo.json`, requestOptions)
        .then(response => response.json())
        .then(result => alert(address))
        .catch(error => console.log('error', error));
    }
  };

  return (
    <View style={{marginTop: 50}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginBottom: 60,
          marginTop: 40,
          color: 'purple',
        }}>
        Personal Details
      </Text>

      <Text style={{marginLeft:25, marginTop:10, marginBottom:5,color:'black'}}>Name</Text>

      <TextInput
        style={{
          width: '85%',
          height: 40,
          marginTop: 10,
          borderWidth:1,
          borderRadius: 10,
          marginLeft: 25,
          marginRight: 10,
          marginBottom: 10,
        }}
        onChangeText={onChangeName}
        value={name}
        name="name"
        keyboardType={'default'}
        placeholder="Name"
      />
  <Text style={{marginLeft:25, marginTop:10, marginBottom:5,color:'black'}}>City</Text>
      <TextInput
        style={{
          width: '85%',
          height: 40,
          marginTop: 10,
          borderWidth:1,
          borderRadius: 10,
          marginLeft: 25,
          marginRight: 10,
          marginBottom: 10,
        }}
        onChangeText={onChangeCity}
        value={city}
        name="city"
        keyboardType={'default'}
        placeholder="City"
      />
  <Text style={{marginLeft:25, marginTop:10, marginBottom:5,color:'black'}}>Postal Address</Text>
      <TextInput
        style={{
          width: '85%',
          height: 40,
          marginTop: 10,
          borderWidth:1,
          borderRadius: 10,
          marginLeft: 25,
          marginRight: 10,
          marginBottom: 10,
        }}
        onChangeText={onChangeAddress}
        value={address}
        name="address"
        keyboardType={'default'}
        placeholder="Postal Address"
      />
  <Text style={{marginLeft:25, marginTop:10, marginBottom:5, color:'black'}}>Mobile #</Text>
      <TextInput
        style={{
          width: '85%',
          height: 40,
          borderWidth:1,
          marginTop: 10,
          borderRadius: 10,
          marginLeft: 25,
          marginRight: 10,
          marginBottom: 10,
        }}
        onChangeText={onChangeMob}
        value={mob}
        name="phone"
        keyboardType={'number-pad'}
        placeholder="Phone Number"
      />

      <TouchableOpacity
        onPress={() => {
          // Function to upload data to firebase
          let obj = {
            Name: name,
            Mobile_Number: mob,
            Address: address,
            City: city,
          };
          postData(obj);
        }}
        style={{
          backgroundColor: 'purple',
          alignItems: 'center',
          alignContent: 'center',
          borderRadius: 50,
          justifyContent: 'center',
          display: 'flex',
          width: 100,
          height: 40,
          marginLeft: 130,
          marginBottom: 20,

          marginTop: 40,
        }}>
        <Text
          style={{
            color: 'white',
            alignItems: 'center',
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentPersonal;

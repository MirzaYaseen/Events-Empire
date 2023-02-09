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
import Country from './CountryDropDown';

const PaymentDetails = ({navigation}) => {
  const [orders, setOrders] = React.useState([]);
  const [quantity, onChangeQuantity] = React.useState(null);
  const [cartItems, setCartItems] = React.useState([...choosenProducts]);
  const [cond, setcond] = React.useState(true);
  const [cardno, onChangeCardno] = React.useState(null);
  const [expirydate, onChangeExpiryDate] = React.useState(null);
  const [cvc, onChangeCvc] = React.useState(null);
  const [country, onChangeCountry] = React.useState('Pakistan');
  const [pro, onChangePro] = React.useState(null);

  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [advice, setAdvice] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [emailValidError, setEmailValidError] = React.useState('');

  const FIREBASE_API_ENDPOINT =
    'https://eventspayments-10b22-default-rtdb.firebaseio.com/';
  console.log(cardno, expirydate, cvc, country);
  const postData = dataxx => {
    if (!cardno || !expirydate || !cvc || !country) {
      alert('Please Fill all fields');
    } else {
      navigation.navigate('Home');
      var requestOptions = {
        method: 'POST',
        body: JSON.stringify(dataxx),
      };

      fetch(`${FIREBASE_API_ENDPOINT}/PaymentDetails.json`, requestOptions)
        .then(response => response.json())
        .then(result =>
          alert('Thanks! Your order has been placed Successfully'),
        )
        .catch(error => console.log('error', error));
    }
  };

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 30,
          marginBottom: 40,
          marginTop: 170,
          color: 'purple',
        }}>
        Payment Details
      </Text>

      <Text style={{marginTop: 5, marginLeft: 30}}>Card number</Text>
      <TextInput
        style={{
          width: '100%',
          height: 40,
          marginTop: 10,
          marginBottom: 5,
          borderRadius: 10,
          marginLeft: 30,
          marginRight: 10,
        }}
        onChangeText={onChangeCardno}
        value={cardno}
        name="card"
        keyboardType={'number-pad'}
        placeholder="1234 1234 1234 1234"
      />

      <View style={{flexDirection: 'row'}}>
        <Text style={{marginTop: 5, marginLeft: 30}}>Expiration</Text>
        <Text style={{marginTop: 5, marginLeft: 150}}>CVC</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={{
            width: '40%',
            height: 40,
            marginTop: 10,
            borderRadius: 10,
            marginLeft: 30,
            marginBottom: 20,
          }}
          onChangeText={onChangeExpiryDate}
          value={expirydate}
          name="expirydate"
          keyboardType={'number-pad'}
          placeholder="01-22"
        />

        <TextInput
          style={{
            width: '20%',
            height: 40,
            marginTop: 10,
            borderRadius: 10,
            marginLeft: 80,
          }}
          onChangeText={onChangeCvc}
          value={cvc}
          name="cvc"
          keyboardType={'number-pad'}
          placeholder="697"
        />
      </View>
      <Text style={{marginLeft: 30, marginBottom: 10}}>Country</Text>
      <Country onChangeText={onChangeCountry} value={country} />

      <TouchableOpacity
        onPress={() => {
          // Function to upload data to firebase
          let obj = {
            Card_No: cardno,
            Expiry_Date: expirydate,
            CVC: cvc,
            Country: country,
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
          Pay
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentDetails;

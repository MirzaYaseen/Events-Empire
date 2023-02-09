import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import {
  CardField,
  createToken,
  confirmPayment,
} from '@stripe/stripe-react-native';
import createPaymentIntent from '../StripeAPI/StripeApi';
import {Button} from 'react-native-elements';
import axios from 'axios';
import AuthContext from '../../contexts/authContext';
import {useNavigation} from '@react-navigation/native';
const PaymentScreen = props => {
  const navigation = useNavigation();
  const {token} = React.useContext(AuthContext);
  const {user} = React.useContext(AuthContext);
  console.log('User: ', user._id);

  console.log(props.data);
  const [cardInfo, setCardInfo] = useState(null);
  const fetchCardDetails = cardDetail => {
    console.log('my card details:', cardDetail);
    if (cardDetail.complete) {
      setCardInfo(cardDetail);
    } else {
      setCardInfo(null);
    }
  };
  const onDone = async () => {
    const res = await axios.post(
      'https://backendserver.onrender.com/order/addMarqueeOrder',
      {
        shippingInfo: props.data.dataxx,
        name: props.data.Name,
        time: props.data.params.otherParam.selected,
        orderItems: props.data.params.otherParam.orderItems,
        price: props.data.params.otherParam.menu,
        venue: props.data.params.otherParam.venues,
        date: props.data.params.otherParam.date,
        seller: props.data.params.otherParam.seller,
        user: user._id,
      },
    );
    console.log('Response: ', res.data);
    alert('Booking Succesfull');
    navigation.navigate('Marquees');
    // let apiData = {
    //   amount: 250,
    //   currency: 'eur',
    // }

    // try {
    //   const res = await createPaymentIntent(apiData)
    //   console.log('Payment Intent Create Successfully', res)
    //   if(res?.data?.paymentIntent){
    //     confirmPaymentIntentRes =await confirmPayment(res?.data?.paymentIntent, {paymentMethodType:'Card'})
    //     console.log("ConfirmPaymentIntent is ", confirmPaymentIntentRes)
    //     const res = await axios.post('https://backendserver.onrender.com/order/addMarqueeOrder', {shippingInfo: props.data.dataxx, name: props.data.Name, time: props.data.params.otherParam.selected, orderItems: props.data.params.otherParam.orderItems, price: props.data.params.otherParam.menu, venue: props.data.params.otherParam.venues, date: props.data.params.otherParam.date, seller: props.data.params.otherParam.seller, user: user._id})
    //     console.log(res.data);
    //     alert('Payment Successfully')
    //   }
    // }
    // catch (error) {
    //   console.log('Error hai intent mai', error)
    // }

    // console.log("cardinfocardinfocardinfo", cardInfo)
    // if(!!cardInfo){
    //     try{
    //         const resToken = createToken({...cardInfo, type:'Card'})
    //         console.log("res Token", resToken)
    //     } catch{
    //            console.log("Error during create toekn")
    //     }
    // }
  };

  const ButtonComp = ({
    text = 'Done',
    onPress = () => {},
    disabled = false,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={{
          ...style.container,
          backgroundColor: !disabled ? 'black' : 'grey',
        }}>
        <Text style={style.text}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginTop: 70,
          color: 'black',
        }}>
        Made Payment
      </Text>
      <SafeAreaView style={{flex: 1}}>
        <Image
          source={require('../../assets/visa.png')}
          style={{
            width: '90%',
            height: 200,
            borderRadius: 10,
            marginTop: 60,
            alignSelf: 'center',
          }}
        />

        <View>
          <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '95%',
              height: 120,
              marginVertical: 30,
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 50,
            }}
            onCardChange={cardDetails => {
              fetchCardDetails(cardDetails);
            }}
            onFocus={focusedField => {
              console.log('focusField', focusedField);
            }}
          />

          <ButtonComp onPress={onDone} disabled={!cardInfo} />
        </View>
      </SafeAreaView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    height: 42,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});

export default PaymentScreen;

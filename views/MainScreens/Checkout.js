// import { View, Text, Image} from 'react-native'
// import React from 'react'

// const Checkout = () => {
//   return (
//     <View style={{justifyContent:'center', alignItems:'center', margin:20}}>
//       <Text style={{fontSize:30, justifyContent:"center", alignItems:'center', alignSelf:'center', marginTop:50}}>Checkout</Text>
//       <View style={{ justifyContent:'center', alignItems:'center', marginTop:80,  borderRadius:10}}>
//       <Image
//             source={require('../../assets/stripeimage.png')}
//             style={{
//               width: 380,
//               height: 120,
              
              
//               alignSelf: 'center',
//             }}
//           />
//       </View>
//     </View> 
//   )
// }

// export default Checkout














import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native';
import React from 'react';
import { CardField, useConfirmPayment} from '@stripe/stripe-react-native';

const API_URL = "http://localhost:3000"

const Checkout = props => {

const [email, setEmail]= React.useState();
const [cardDetails, setCarDetails]= React.useState();
const {confirmPayment, loading} = useConfirmPayment();


 const fetchPaymentIntentClientSecret = async () =>{
  const response = await fetch(`${API_URL}/create-payment-intent`, {
    method:"POST",
    headers: {
      "Content-Type": "application/json",

    },
  });
  const {clientSecret, error} = await response.json();
  return {clientSecret,error};
 }


const handlePayPress = async () => {

  if(!cardDetails?.complete || !email){
    Alert.alert("Plese Enter Complete Card Details and Email");
    return;
  }
  const billingDetails ={
    email: email,
  };

  try{
       const {clientSecret, error} = await 
       fetchPaymentIntentClientSecret();

       if(error){
        console.log('Unable to process payment');
       }
       else{
        const {paymentIntent, error} = await confirmPayment(clientSecret, {
          type:"Card", 
          billingDetails: billingDetails,
        });

        if(error){
          alert(`Payment Confirmation Error ${error.message}`);
        }
        else if (paymentIntent) {
          alert("Payment Successfull");
          console.log("Payment Succeddfull", paymentIntent);
        }
       }
  }
  catch(e){
      console.log(e);
  }
};
  return (
    
    <SafeAreaView style={style.screen}>
      <View>
        <Text>Checkout with stripe</Text>
        <TextInput
        autoCapitalize='none'
        placeholder='E-mail'
        keyboardType='email-address'
        onChange={value => setEmail(value.nativeEvent.text)}

        style={{backgroundColor:"#efefefef", borderColor:'#000000', borderRadius:8, fontSize:20, height:50, padding:10}}
        />
        <CardField
        postalCodeEnabled={true}
        placeholders={{number: "4242 4242 4242 4242"}}

        cardStyle={style.card}
        style={style.cardContainer}
        onCardChange={cardDetails => {
          setCarDetails(cardDetails);
        }}
        />
        <Button title='Pay' onPress={handlePayPress}
        disabled={loading}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  screen: {
    flex:1,
    justifyContent:'center',
    margin:20
  },
  card:{
    backgroundColor:'#efefefef'
  },
  cardContainer:{
    height:50,
    marginVertical:30,
  }
});

export default Checkout;

import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
// import SP_KEY from '@env'
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './views/MainScreens/PaymentScreen';
const Stripe = ({navigation, route}) => {
  const params = route.params;
  console.log(route.params)
  
  return (
    <View>
      
      <StripeProvider
      // publishableKey={SP_KEY}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    >
      <PaymentScreen data = {params} />
    </StripeProvider>
      
  
    </View>
  )
}

export default Stripe
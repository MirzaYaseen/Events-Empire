import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from '../../consts/colors';
import ClientLogin from '../MainScreens/Login';
import OrderDirectlyScreen from '../MainScreens/OrderDirectlyScreen';
// import BottomNavigator from '../ScreensNavigation/BottomTabsNavigator';
import DrawerNavigator from '../ScreensNavigation/Drawer';
import ClientSignup from '../MainScreens/ClientSignup';
// import Checkout from '../MainScreens/Checkout';
import StripeABC from '../../Stripe'
import AR from '../MainScreens/AR';
import SplashScreenAbc from '../MainScreens/SplashScreen2';
import InsideStore from '../MainScreens/InsideStore';
import DateandTime from '../MainScreens/DateandTime';
import PaymentPersonal from '../MainScreens/PaymentPersonal';
import MarqueeDetails from '../MainScreens/MarqueeDetails';
import PaymentDetails from '../MainScreens/PaymentDetails';
import SearchDash from '../MainScreens/SearchDash';
import Photographers from '../MainScreens/ViewPhotographers';
import Salons from '../MainScreens/ViewSalons';
import Marquees from '../MainScreens/ViewMarquees';
import ProductDetails from '../MainScreens/ProductDetails';
// import AddtoCart from '../MainScreens/AddtoCart';
import SearchApp from '../MainScreens/SearchApp';
import CountryDropDown from '../MainScreens/CountryDropDown';
import Splash from '../MainScreens/Splash';
import MainOne from '../MainScreens/MainOne'
import BottomNew from './BottomNew';
import CheckoutPaymentInfo from '../MainScreens/CheckoutPersonalInfo';
import ProductsWhishList from '../MainScreens/ProductsWhishList';
import MarqueeBookingDetails from '../MainScreens/MarqueeBookingDetails';
import PaymentScreen from '../MainScreens/PaymentScreen'
import PhotographerPayment from '../MainScreens/PhotographerPayment';
import ProductPayment from '../MainScreens/ProductPayment';

// import Abc from '../MainScreens/Abc'



import AuthContext from '../../contexts/authContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);

  const getUser = async token1 => {
    axios
      .get('https://backendserver.onrender.com/user/detail', {
        headers: {Authorization: token1},
      })

      .then(response => {
        setUser(response.data);
        // Navigation will be here
        // await AsyncStorage.setItem('token', 'abc');
      })

      .then(result)
      .catch(function (error) {
        console.log(error);
      });
  };

  const login = (email, password) => {
    axios
      .post('https://backendserver.onrender.com/user/login', {
        email,
        password,
      })

      .then(response => {
        setToken(response.data.token);
        getUser(response.data.token);
        // Navigation will be here
        // await AsyncStorage.setItem('token', 'abc');
      })

      .then(result => alert('Login Successfully'))
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(token);
  return (
    <AuthContext.Provider
      value={{
        user: user,
        token: token,
        login: login,
      }}>
      <NavigationContainer>
        <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
        
        <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="PaymentScreen" component={PaymentScreen} /> */}
        
      
      
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SplashScreenAbc" component={SplashScreenAbc} />
        <Stack.Screen name="Login" component={ClientLogin} />
        <Stack.Screen name="ClientSignup" component={ClientSignup} />
        
        <Stack.Screen name="StripeABC" component={StripeABC} />
        <Stack.Screen name="CheckoutPaymentInfo" component={CheckoutPaymentInfo} />
        <Stack.Screen name="PhotographerPayment" component={PhotographerPayment} />
        <Stack.Screen name="ProductPayment" component={ProductPayment} />
        <Stack.Screen name="BottomNew" component={BottomNew} />
       
       
        {/* <Stack.Screen name="Abc" component={Abc} />
         */}
         {/* <Stack.Screen name="BottomNew" component={BottomNew} /> */}
          
          
          {/* <Stack.Screen name="Home" component={BottomNavigator} /> */}
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="Main" component={MainOne} />
          <Stack.Screen name="Whishlist" component={ProductsWhishList} />
          <Stack.Screen name="MarqueeBooking" component={MarqueeBookingDetails} />
        
          <Stack.Screen
            name="OrderDirectlyScreen"
            component={OrderDirectlyScreen}
          />
          <Stack.Screen name="InsideStore" component={InsideStore} />
          <Stack.Screen name="DateTime" component={DateandTime} />
          <Stack.Screen name="PaymentPersonal" component={PaymentPersonal} />
          <Stack.Screen name="PaymentDetails" component={PaymentDetails} />

          <Stack.Screen name="SearchDash" component={SearchDash} />
          <Stack.Screen name="Photographers" component={Photographers} />
          <Stack.Screen name="Salons" component={Salons} />
          <Stack.Screen name="MarqueeDetails" component={MarqueeDetails} />
          <Stack.Screen name="Marquees" component={Marquees} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="AR" component={AR} />
          {/* <Stack.Screen name="AddtoCart" component={AddtoCart} /> */}
          <Stack.Screen name="Search" component={SearchApp} />
          <Stack.Screen name="Country" component={CountryDropDown} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
 
export default App;

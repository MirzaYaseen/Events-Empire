import {View, Text, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import ViewCartItems from './ViewCartItems';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToWhishList, removeFromCart} from '../redux/actions/Actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const CartScreen = () => {
  const navigation = useNavigation();
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  console.log(cartData)
  const dispatch = useDispatch();



  const [name, onChangeName] = React.useState(null);
  const [mob, onChangeMob] = React.useState('+92');
  const [city, onChangeCity] = React.useState('Islamabad');
  const [address, onChangeAddress] = React.useState(null);

  const FIREBASE_API_ENDPOINT =
    'https://eventspayments-10b22-default-rtdb.firebaseio.com/';
  const postData = dataxx => {
      navigation.navigate('CheckoutPaymentInfo', {otherParams: cartData});
  }
    //   var requestOptions = {
    //     method: 'POST',
    //     body: JSON.stringify(dataxx),
    //   };
    //   fetch(`${FIREBASE_API_ENDPOINT}/UserCartItems.json`, requestOptions)
    //     .then(response => response.json())
    //     .catch(error => console.log('error', error));
    // }
  

    

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection:'row',width:"100%", height:80, backgroundColor:'#F5EBE0', alignItems:'center', justifyContent:'center'}}>
      <Image
          source={require('../../assets/shoppingcart.png')}
          style={{
            width: 35,
            height: 35,
            
          }}
        />
        <Text style={{fontSize:30, fontWeight:'700', marginLeft:10}}> Cart </Text>

      </View>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({item, index}) => {
            return (
              <ViewCartItems
                onAddWhishList={x => {
                  dispatch(addItemToWhishList(x));
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No Products in Cart</Text>
        </View>
      )}
      {cartData.length>0?( <View style={{marginBottom:120, alignSelf:'center'}}>
      <TouchableOpacity onPress={() => {
           
           
           postData()}} style={{justifyContent:'center', alignContent:'center',alignItems:'center', borderRadius:10, backgroundColor:'purple', width:150,height:40, marginTop:20}}>
        <Text style={{color:'white', textAlign:'center'}}>
          Checkout
        </Text>
      </TouchableOpacity>
      </View>):null}
     
    </View>
  );
};

export default CartScreen;

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TextInput,
//   Button,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';

// import {FlatList} from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import COLORS from '../../consts/colors';
// import choosenProducts from '../../consts/cartItems';
// import {SecondaryButton} from '../components/GeneralButtons';

// const FIREBASE_API_ENDPOINT = 'https://eear-d36f7-default-rtdb.firebaseio.com/';

// const postData = dataxx => {
//   var requestOptions = {
//     method: 'POST',
//     body: JSON.stringify(dataxx),
//   };

//   fetch(`${FIREBASE_API_ENDPOINT}/CART.json`, requestOptions)
//     .then(response => response.json())
//     .then(result =>
//       alert(
//         "Thank u Sir! Your Order has been Placed, Within 24 hours, we'll deliever your item",
//       ),
//     )
//     .catch(error => console.log('error', error));
// };

// const CartScreen = ({navigation}) => {
//   const [cartItems, setCartItems] = React.useState([...choosenProducts]);
//   const [cond, setcond] = React.useState(true);
//   const [name, onChangeName] = React.useState(null);
//   const [mob, onChangeMob] = React.useState(null);
//   const [credit, onChangeCredit] = React.useState(null);
//   const [quantity, onChangeQuantity] = React.useState(null);
//   const [cnic, onChangeCnic] = React.useState(null);
//   const [pro, onChangePro] = React.useState(null);
//   const [address, onChangeAddress] = React.useState(null);
//   const [checked, setChecked] = React.useState('first');
//   const [names, setNames] = React.useState([]);

//   const [totalAmount, setTotalAmount] = React.useState(
//     choosenProducts.reduce(function (accumulator, currentValue) {
//       let num =
//         parseFloat(accumulator) +
//         parseFloat(currentValue.price) * currentValue.quantity;
//       return num.toFixed(2);
//     }, 0),
//   );

//   const addItemToCart = async value => {
//     try {
//       const jsonValue = await AsyncStorage.getItem('@storage_Key');
//       let values = [];
//       if (jsonValue != null) {
//         console.log('async storage value', jsonValue);
//         values = JSON.parse(jsonValue);
//       }

//       values.push(value);
//       console.log('valuessss', values);
//       await AsyncStorage.setItem('@storage_Key', JSON.stringify(values));
//       alert(`item added to cart, ${value}`);
//     } catch (e) {
//       alert('error occured');
//       console.log(e);
//     }
//   };

//   const CartCard = ({item}) => {
//     return (
//       <View style={style.cartCard}>
//         <Image
//           source={item.image}
//           style={{height: 80, width: 80, borderRadius: 20}}
//         />
//         <View
//           style={{height: 100, marginLeft: 10, paddingVertical: 20, flex: 1}}>
//           <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>

//           <Text
//             style={{
//               fontSize: 17,
//               fontWeight: 'bold',
//               marginTop: 8,
//               color: 'purple',
//             }}>
//             Rs.{item.price}
//           </Text>
//         </View>
//         <View style={{marginRight: 20, alignItems: 'center'}}>
//           <Text style={{fontWeight: 'bold', fontSize: 18}}>
//             {item.quantity}
//           </Text>
//           <View style={style.countBtn}>
//             <Icon
//               onPress={() => {
//                 const quantity = choosenProducts.find(
//                   e => e.id == item.id,
//                 ).quantity;
//                 if (quantity > 0) {
//                   choosenProducts.find(e => e.id == item.id).quantity--;

//                   setCartItems(() => {
//                     return [...choosenProducts];
//                   });
//                   setTotalAmount(
//                     choosenProducts.reduce(function (
//                       accumulator,
//                       currentValue,
//                     ) {
//                       let num =
//                         parseFloat(accumulator) +
//                         parseFloat(currentValue.price) * currentValue.quantity;
//                       return num.toFixed(2);
//                     },
//                     0),
//                   );
//                 }
//               }}
//               name="remove"
//               size={25}
//               color={COLORS.white}
//             />
//             <Icon
//               onPress={() => {
//                 const quantity = choosenProducts.filter(e => e.id == item.id)[0]
//                   .quantity++;
//                 setCartItems(() => {
//                   return [...choosenProducts];
//                 });
//                 setTotalAmount(
//                   choosenProducts.reduce(function (accumulator, currentValue) {
//                     let num =
//                       parseFloat(accumulator) +
//                       parseFloat(currentValue.price) * currentValue.quantity;
//                     return num.toFixed(2);
//                   }, 0),
//                 );
//               }}
//               name="add"
//               size={25}
//               color={COLORS.white}
//             />
//           </View>
//         </View>
//       </View>
//     );
//   };
//   if (cond) {
//     return (
//       <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
//         <View style={style.header}>
//           <Icon name="arrow-back" size={28} onPress={navigation.goBack} />
//           <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 80}}>
//             Rs.{totalAmount}
//           </Text>
//           <View style={{marginLeft: 25, fontWeight: 'bold'}}>
//             <SecondaryButton
//               title="CHECKOUT"
//               onPress={() => {
//                 setcond(false);
//               }}
//             />
//           </View>
//         </View>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{paddingBottom: 80}}
//           data={cartItems}
//           renderItem={({item}) => <CartCard item={item} />}
//           ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
//           ListFooterComponent={() => (
//             <View>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   marginVertical: 15,
//                 }}>
//                 <Text style={{fontSize: 18, fontWeight: 'bold'}}>
//                   Total Price
//                 </Text>
//                 <Text style={{fontSize: 18, fontWeight: 'bold'}}>
//                   Rs.{totalAmount}
//                 </Text>
//               </View>
//               <View style={{marginHorizontal: 30}}>
//                 <SecondaryButton
//                   title="CHECKOUT"
//                   onPress={() => {
//                     setcond(false);
//                   }}
//                 />
//               </View>
//             </View>
//           )}
//         />
//       </SafeAreaView>
//     );
//   } else {
//     const submit = () => {
//       if (!name || !mob || !address || !cnic || !quantity) {
//         alert('Please Fill all Fields');
//       }
//       // Function to upload data to firebase
//       else {
//         let obj = {
//           Full_Name: name,
//           Mobile_Number: mob,
//           Address: address,
//           CNIC_Number: cnic,
//           Product_Quantity: quantity,

//           Total_Price: totalAmount,
//         };
//         postData(obj);
//       }
//     };
//     return (
//       <ScrollView>
//         <View>
//           <View
//             style={{
//               flexDirection: 'row',
//               marginTop: 20,
//               marginBottom: 20,
//               marginLeft: 5,
//             }}>
//             <Icon
//               name="arrow-back"
//               size={30}
//               onPress={() => {
//                 setcond(true);
//               }}
//             />
//           </View>

//           <View style={{marginLeft: 20, padding: 20}}>
//             <Text style={{marginTop: 5, marginBottom: 10, fontSize: 16}}>
//               <Icon
//                 style={{marginRight: 5}}
//                 name="drive-file-rename-outline"
//                 size={20}
//               />
//               <Text style={{marginLeft: 5}}>Enter name</Text>
//             </Text>

//             <TextInput
//               style={{padding: 15}}
//               onChangeText={onChangeName}
//               value={name}
//               name="Full Name"
//               placeholder="Muahmmad Yaseen"
//             />

//             <Text style={{marginTop: 5, marginBottom: 10, fontSize: 16}}>
//               <Icon style={{marginRight: 5}} name="phone" size={20} />
//               <Text style={{marginLeft: 5}}>Mobile</Text>
//             </Text>
//             <TextInput
//               style={{padding: 15}}
//               onChangeText={onChangeMob}
//               value={mob}
//               name="phone"
//               keyboardType={'number-pad'}
//               placeholder="0321-xxxxxxx"
//             />

//             <Text style={{marginTop: 5, marginBottom: 10, fontSize: 16}}>
//               <Text style={{marginRight: 5}}>
//                 <Icon style={{marginRight: 5}} name="map" size={20} />
//               </Text>
//               Address
//             </Text>
//             <TextInput
//               style={{padding: 15}}
//               onChangeText={onChangeAddress}
//               value={address}
//               name="address"
//               placeholder="Current Home Address"
//             />

//             <Text style={{marginTop: 5, marginBottom: 10, fontSize: 16}}>
//               <Icon style={{marginRight: 5}} name="perm-identity" size={20} />
//               <Text style={{marginLeft: 5}}>CNIC</Text>
//             </Text>
//             <TextInput
//               style={{padding: 15}}
//               onChangeText={onChangeCnic}
//               value={cnic}
//               keyboardType={'number-pad'}
//               name="card"
//               placeholder="34603-xxxxxx-x"
//             />
//           </View>

//           <TouchableOpacity
//             onPress={submit}
//             style={{
//               backgroundColor: 'orange',
//               marginTop: 5,
//               color: 'white',
//               borderRadius: 20,
//               padding: 10,
//               alignItems: 'center',
//               width: 220,
//               marginLeft: 65,
//             }}>
//             <Text style={{color: 'white', fontSize: 15}}>Proceed</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     );
//   }
// };

// const style = StyleSheet.create({
//   header: {
//     paddingVertical: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 20,
//   },
//   cartCard: {
//     height: 100,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     marginVertical: 10,
//     marginHorizontal: 20,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   countBtn: {
//     width: 80,
//     height: 30,
//     backgroundColor: '#90caf9',
//     borderRadius: 5,
//     paddingHorizontal: 5,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignContent: 'center',
//   },
// });

// export default CartScreen;

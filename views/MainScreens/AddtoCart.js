// import * as React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   FlatList,
//   ActivityIndicator,
// } from 'react-native';

// import {Card} from 'react-native-paper';
// import COLORS from '../../consts/colors';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export default function App({navigation}) {
//   const [isLoading, setisLoading] = React.useState(true);
//   const [cartData, setcartData] = React.useState([]);
//   const [refreshing, setrefreshing] = React.useState(false);
//   const [getcondition, setcondition] = React.useState(true);

//   const getData = async () => {
//     setisLoading(true);
//     try {
//       const jsonValue = await AsyncStorage.getItem('@storage_Key');
//       if (jsonValue != null) {
//         setcartData(JSON.parse(jsonValue));
//       } else {
//         return null;
//       }
//     } catch (e) {
//       alert('error');
//     }
//   };
//   React.useEffect(() => {
//     getData();
//     console.log('Data = ', cartData);
//   }, []);

//   const deleteItem = async index => {
//     let res = await AsyncStorage.getItem('@storage_Key');
//     let data = JSON.parse(res);
//     let newdata = data.filter((item, ind) => {
//       return ind != index;
//     });

//     AsyncStorage.setItem('@storage_Key', JSON.stringify(newdata)).then(() => {
//       const tempData = cartData;
//       const selectedData = tempData.filter((item, ind) => {
//         return ind != index;
//       });
//       setcartData(selectedData);
//     });
//   };

//   return (
//     <ScrollView>
//       <SafeAreaView style={{backgroundColor: '#36454F', height: '100%'}}>
//         <View
//           style={{
//             alignItems: 'center',
//             marginBottom: 5,
//             paddingBottom: 5,
//             borderBottomWidth: 0.5,
//             borderColor: 'white',
//           }}>
//           <Text style={{fontSize: 24, fontWeight: '600', color: 'white'}}>
//             My Cart{' '}
//             <Icon
//               style={{
//                 justifyContent: 'center',
//                 color: '#1DA1F2',
//                 marginRight: 5,
//               }}
//               name="shopping-cart"
//               size={25}
//             />
//           </Text>
//         </View>

//         <View style={{flex: 1}}>
//           <View style={{margin: 10, flex: 1}}>
//             <FlatList
//               refreshing={refreshing}
//               onRefresh={() => getData()}
//               data={cartData}
//               renderItem={({item, index}) => {
//                 return (
//                   <View
//                     elevation={5}
//                     style={{
//                       flexDirection: 'row',
//                       backgroundColor: 'white',
//                       borderRadius: 15,
//                       marginBottom: 15,
//                       shadowColor: 'black',
//                       shadowOpacity: 2,
//                       shadowRadius: 5,
//                       shadowOffset: {
//                         height: 1,
//                         width: 1,
//                       },
//                     }}>
//                     <View
//                       style={{
//                         width: '45%',
//                         borderRightWidth: 1,
//                         borderColor: '#36454F',
//                       }}>
//                       <Image
//                         source={{
//                           uri: item.images,
//                         }}
//                         style={{
//                           width: 100,
//                           height: 100,
//                           borderRadius: 10,
//                           margin: 10,
//                         }}
//                       />
//                     </View>
//                     <View style={{width: '55%'}}>
//                       <TouchableOpacity
//                         onPress={() => {
//                           console.log('jjvjv');
//                           deleteItem(index);
//                         }}
//                         style={{
//                           alignSelf: 'flex-end',
//                           marginTop: 5,
//                           zIndex: 999,
//                           marginRight: 10,
//                         }}>
//                         <Text>
//                           <Icon
//                             style={{marginTOp: 5}}
//                             name="delete"
//                             size={26}
//                             color="red"
//                           />
//                         </Text>
//                       </TouchableOpacity>

//                       <Text
//                         style={{
//                           fontWeight: '600',
//                           marginTop: 8,
//                           marginLeft: 10,
//                           fontSize: 20,
//                         }}>
//                         {item.name}
//                       </Text>
//                       <Text
//                         style={{
//                           marginTop: 5,
//                           marginLeft: 10,
//                           color: 'grey',
//                         }}>
//                         {item.description}
//                       </Text>
//                       <Text
//                         style={{
//                           fontWeight: 'bold',
//                           fontSize: 18,
//                           marginTop: 5,
//                           marginLeft: 10,
//                           color: '#1DA1F2',
//                         }}>
//                         Rs. {item.price}
//                       </Text>
//                     </View>
//                   </View>
//                 );
//               }}
//               keyExtractor={(item, index) => index.toString()}
//             />
//           </View>
//         </View>
//       </SafeAreaView>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',

//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
import { View, Text } from 'react-native'
import React from 'react'

const AddtoCart = () => {
  return (
    <View>
      <Text>AddtoCart</Text>
    </View>
  )
}

export default AddtoCart
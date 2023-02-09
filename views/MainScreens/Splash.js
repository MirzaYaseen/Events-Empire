import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SplashScreenAbc');
    }, 3000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/EEE.png')}
        style={{width: 120, height: 120, borderRadius: 20, resizeMode: 'cover'}}
      />
      <View style={{marginTop: 30, justifyContent:'center', alignItems:'center'}}>
        <Text style={{color: 'orange', fontSize: 35}}>
          Events <Text style={{color: 'black', fontSize: 35}}>Empire</Text>
        </Text>
      </View>
    </View>
  );
};

export default Splash;

// import React from 'react';
// import {
//   Button,
//   FlatList,
//   ScrollView,
//   TextInput,
//   TouchableHighlight,
//   TouchableOpacity,
//   Dimensions,
//   Image,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   ImageBackground,
//   View,
// } from 'react-native';

// import COLORS from '../../consts/colors';

// import Ionicons from 'react-native-vector-icons/Ionicons';

// const HomeScreen = ({navigation}) => {
//   return (
//     <ScrollView>
//       <View style={{alignItems: 'center'}}>
//         <Image
//           source={require('../../assets/EEE.png')}
//           style={{
//             width: 200,
//             height: 200,
//             borderRadius: 80,
//             marginTop: 150,
//             marginLeft: 5,
//           }}
//         />

//         <View style={{alignItems: 'center', marginTop: 25}}>
//           <Text
//             style={{
//               fontSize: 35,
//               color: 'black',
//               marginTop: 20,
//               marginBottom: 60,
//             }}>
//             Events
//             <Text
//               style={{
//                 fontSize: 35,
//                 color: 'orange',
//                 marginTop: 50,
//                 marginBottom: 60,
//               }}>
//               Empire
//             </Text>
//           </Text>
//         </View>

//         <View style={{alignItems: 'center', marginTop: 100}}>
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Text style={{color: 'purple', fontSize: 25}}>
//               Get Started{' '}
//               <Ionicons
//                 style={{marginLeft: 20}}
//                 size={25}
//                 name="arrow-forward"
//               />
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };
// const style = StyleSheet.create({
//   card: {
//     marginHorizontal: 10,
//     display: 'flex',
//     marginTop: 50,
//     borderRadius: 15,
//     elevation: 13,
//     marginBottom: 10,
//     backgroundColor: COLORS.white,
//   },
//   icon: {
//     marginRight: 3,
//     marginTop: 5,
//     color: 'black',
//   },

//   TextStyle1: {
//     color: 'orange',
//     display: 'flex',
//     fontSize: 13,
//     marginLeft: 100,
//     marginBottom: 20,
//     marginTop: 17,
//   },
// });
// export default HomeScreen;

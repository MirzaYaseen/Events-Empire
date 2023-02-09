import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
const Abc = () => {
  return (
    <View style={{flex:1}}>
    <MapView style={{width:'100%', height:'100%'}}/>
    </View>
  )
}

export default Abc




























































// import React from 'react';
// import { 
//     View, 
//     Text, 
//     Button, 
//     TouchableOpacity, 
//     Dimensions,
//     TextInput,
//     Platform,
//     StyleSheet,
//     ScrollView,
//     StatusBar,
//     Alert
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import axios from 'axios';
// const SignInScreen = ({navigation}) => {
//     const [name, onChangeName] = React.useState(null);
//     const [email, onChangeEmail] = React.useState(null);
//     const [password, onChangePassword] = React.useState(null);
//     const [emailValidError, setEmailValidError] = React.useState('');


//     const getAdvice = () => {
//         console.log(name, email, password);
//         axios
//           .post('https://backendserver.onrender.com/user/register', {
//             name,
//             email,
//             password,
//           })
    
//           .then(function (response) {
//             alert(response.data.msg);
//             if (response.data.msg === 'Account has been created Successfully!') {
//               navigation.navigate('Login');
//             }
//             console.log(response);
//           })
//           .catch(function (error) {
//             console.log(error);
//           });
//       };
    
//       const handleValidEmail = val => {
//         let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
//         if (val.length === 0) {
//           setEmailValidError('email address must be enter');
//         } else if (reg.test(val) === false) {
//           setEmailValidError('enter valid email address');
//         } else if (reg.test(val) === true) {
//           setEmailValidError('');
//         }
//       };


//     const [data, setData] = React.useState({
//         username: '',
//         password: '',
//         confirm_password: '',
//         check_textInputChange: false,
//         secureTextEntry: true,
//         confirm_secureTextEntry: true,
//     });

//     // const textInputChange = (val) => {
//     //     if( val.length !== 0 ) {
//     //         setData({
//     //             ...data,
//     //             username: val,
//     //             check_textInputChange: true
//     //         });
//     //     } else {
//     //         setData({
//     //             ...data,
//     //             username: val,
//     //             check_textInputChange: false
//     //         });
//     //     }
//     // }

//     // const handlePasswordChange = (val) => {
//     //     setData({
//     //         ...data,
//     //         password: val
//     //     });
//     // }

//     const handleConfirmPasswordChange = (val) => {
//         setData({
//             ...data,
//             confirm_password: val
//         });
//     }

//     const updateSecureTextEntry = () => {
//         setData({
//             ...data,
//             secureTextEntry: !data.secureTextEntry
//         });
//     }

//     const updateConfirmSecureTextEntry = () => {
//         setData({
//             ...data,
//             confirm_secureTextEntry: !data.confirm_secureTextEntry
          
//         });
//     }

//     return (
//       <View style={styles.container}>
//           <StatusBar backgroundColor='#009387' barStyle="light-content"/>
//         <View style={styles.header}>
//             <Text style={styles.text_header}>Create a Account</Text>
//         </View>
//         <Animatable.View 
//             animation="fadeInUpBig"
//             style={styles.footer}
//         >
//             <ScrollView>
//             <Text style={styles.text_footer}>Username</Text>
//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="user"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Username"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={onChangeName}
//           value={name}
//           require={true}
//           name="user"
          
//                 />
//                 {data.check_textInputChange ? 
//                 <Animatable.View
//                     animation="bounceIn"
//                 >
//                     <Feather 
//                         name="check-circle"
//                         color="green"
//                         size={20}
//                     />
//                 </Animatable.View>
//                 : null}
//             </View>


//             <Text style={styles.text_footera}>Email</Text>
//             <View style={styles.actiona}>
//                 <FontAwesome 
//                     name="envelope"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
                   
//                     style={styles.textInput}
//                     keyboardType={'email-address'}
//           placeholder="Email"
//           require={true}
//           value={email}
//           onChangeText={value => {
//             onChangeEmail(value);
//             handleValidEmail(value);
//           }}
          
//                 />
//                 {data.check_textInputChange ? 
//                 <Animatable.View
//                     animation="bounceIn"
//                 >
//                     <Feather 
//                         name="check-circle"
//                         color="green"
//                         size={20}
//                     />
//                 </Animatable.View>
//                 : null}
//             </View>

//             <Text style={[styles.text_footer, {
//                 marginTop: 35
//             }]}>Password</Text>
//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="lock"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Password"
//                     secureTextEntry={data.secureTextEntry ? true : false}
//                     style={styles.textInput}
//                     onChangeText={onChangePassword}
//                     value={password}
//                     require={true}
//                     name="lock"
                    
//                 />
//                 <TouchableOpacity
//                     onPress={updateSecureTextEntry}
//                 >
//                     {data.secureTextEntry ? 
//                     <Feather 
//                         name="eye-off"
//                         color="grey"
//                         size={20}
//                     />
//                     :
//                     <Feather 
//                         name="eye"
//                         color="grey"
//                         size={20}
//                     />
//                     }
//                 </TouchableOpacity>
//             </View>

            
//             <View style={styles.textPrivate}>
//                 <Text style={styles.color_textPrivate}>
//                     By signing up you agree to our
//                 </Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
//                 <Text style={styles.color_textPrivate}>{" "}and</Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
//             </View>
//             <View style={styles.button}>
//                 <TouchableOpacity
//                     style={styles.signIn}
//                     onPress={getAdvice}
//                 >
//                 <LinearGradient
//                     colors={['#263159', '#01ab9d']}
//                     style={styles.signIn}
//                 >
//                     <Text style={[styles.textSign, {
//                         color:'#fff'
//                     }]}>Sign Up</Text>
//                 </LinearGradient>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                     onPress={() => navigation.navigate('Login')}
//                     style={[styles.signIn, {
//                         borderColor: '#009387',
//                         borderWidth: 1,
//                         marginTop: 15
//                     }]}
//                 >
//                     <Text style={[styles.textSign, {
//                         color: '#009387'
//                     }]}>Sign In</Text>
//                 </TouchableOpacity>
//             </View>
//             </ScrollView>
//         </Animatable.View>
//       </View>
//     );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1, 
//       backgroundColor: '#263159',
      
//     },
//     header: {
//         flex: 0,
//         justifyContent: 'flex-end',
//         paddingHorizontal: 50,
      
//     },
//     footer: {
//         flex: Platform.OS === 'android' ? 3 : 5,
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         paddingHorizontal: 20,
//         paddingVertical: 10,
        
//     },
//     text_header: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 25,
//         marginBottom:30,
//         marginTop:15,
//         alignItems:'center',
//         justifyContent:'center',
//         textAlign:'center'
//     },
//     text_footer: {
//         color: '#05375a',
//         fontSize: 18
//     },
//     text_footera: {
//         color: '#05375a',
//         fontSize: 18,
//         marginTop:30
        
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingBottom: 5
//     },
//     actiona: {
//         flexDirection: 'row',
//         marginTop: 20,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingBottom: 5
//     },
//     textInput: {
//         flex: 1,
//         marginTop: Platform.OS === 'ios' ? 0 : -12,
//         paddingLeft: 10,
//         color: '#05375a',
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 50
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     textPrivate: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 20
//     },
//     color_textPrivate: {
//         color: 'grey'
//     }
//   });
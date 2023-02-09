// import React, {useContext} from 'react';
// import axios from 'axios';
// import {
//   Text,
//   StyleSheet,
//   View,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,

// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import authContext from '../../contexts/authContext';


// // const response = await fetch(
// //   `https://madproject-c2f0c-default-rtdb.firebaseio.com/Appointments.json`
// // );
// // console.log('response = ' + JSON.stringify(response));
// // const res = await JSON.parse(response);
// // console.log('test' + res);
// // setdata(res);
// // console.log('data = ' + data);
// // setLoading(false);

// // Return the function to onFocus from the event so it gets removed on unmount

// // const FIREBASE_API_ENDPOINT = 'https://backendserver.onrender.com/user/register';
// // const postData = (dataxx) => {
// //   var requestOptions = {
// //     method: 'POST',
// //     body: JSON.stringify(dataxx),
// //   };

// //   fetch(`${FIREBASE_API_ENDPOINT}`, requestOptions)
// //     .then((response) => response.json())
// //     .then((result) => alert("Register Successfully"))
// //     .catch((error) => console.log('error', error));
// // };
// export default Login = ({navigation}) => {
//   const [email, onChangeEmail] = React.useState(null);
//   const [password, onChangePassword] = React.useState(null);
//   const [emailValidError, setEmailValidError] = React.useState('');

//   // This is the token what we used to send
//   const {login} = useContext(authContext);
//   const {user} = useContext(authContext);

//   const getAdvice = async () => {
//     login(email, password);
//     // 19/11/22 date ki new navigation here without permission ke ghusne wali

//     console.log(email, password);
//     if (!email || !password) {
//       alert('Please fill all fields');
//     } else {
//       const response = await axios.post(
//         'https://backendserver.onrender.com/user/login',
//         {
//           email,
//           password,
//         },
//       );
//       if (response.data.msg === 'Login Successfull!') {
//         alert(response.data.msg);
//         //working New Navigation 19/11/22
//         navigation.navigate('BottomNew');
//       }



//       // if(token) {
//       //   navigation.navigate('Home')
//       // }
//     }
//   };

//   const handleValidEmail = val => {
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

//     if (val.length === 0) {
//       setEmailValidError('email address must be enter');
//     } else if (reg.test(val) === false) {
//       setEmailValidError('enter valid email address');
//     } else if (reg.test(val) === true) {
//       setEmailValidError('');
//     }
//   };

//   // const checkTextInput = () => {
//   //     //Check for the Name TextInput
//   //     //Check for the Email TextInput
//   //     if (!email.trim()) {
//   //       alert('Please Enter Email');
//   //       return;
//   //     }
//   //     if (!password.trim()) {
//   //       alert('Please Enter password');
//   //       return;
//   //     }
//   //     //Checked Successfully
//   //     //Do whatever you want
//   //     alert('Success');
//   //   };

//   return (
//     <ScrollView>
//       <View
//         style={{flexDirection: 'row', marginTop: 5, marginBottom: 5}}></View>
//       {/* <View style={{height: 310}}> */}
//         <View style={{alignItems: 'center'}}>
//           <Text
//             style={{
//               color: 'orange',
//               fontSize: 50,
//               marginTop: 5,
//               marginBottom: 5,
//             }}>
//             Events <Text style={{fontSize: 50, color: 'black'}}>Empire</Text>
//           </Text>
//         </View>

// {/*        
//       </View> */}
//  {/* <Image
//           style={{
//             width: '100%',
//             resizeMode: 'contain',
//             top: -240,
//             marginTop: 20,
//           }}
//           source={require('../../assets/os.jpg')}
//         /> */}
//       <View style={{marginLeft: 10, padding: 20, marginTop: 20}}>
//         <Text
//           style={{
//             fontSize: 20,
//             marginTop: 5,
//             marginBottom: 10,
//             marginLeft: 20,
//           }}>
//           <Icon style={{marginRight: 5}} name="envelope" size={22} /> Email{' '}
//         </Text>
//         <TextInput
//           style={{
//             padding: 10,
//             borderRadius: 5,
//             alignSelf: 'center',
//             width:'92%',
//             height:50,
//             borderRadius: 10,
//             borderWidth: 0.5,
//             marginLeft:10
//           }}
//           keyboardType={'email-address'}
//           placeholder="Email"
//           require={true}
//           value={email}
//           onChangeText={value => {
//             onChangeEmail(value);
//             handleValidEmail(value);
//           }}
//         />
        

//         <Text
//           style={{
//             fontSize: 20,
//             marginTop: 20,
//             marginBottom: 10,
//             marginLeft: 20,
//           }}>
//           <Icon style={{marginRight: 5}} name="lock" size={22} /> Password
//         </Text>
//         <TextInput
//           style={{
//             padding: 10,
//             borderRadius: 5,
//             alignSelf: 'center',
//             width:'92%',
//             height:50,
//             borderRadius: 10,
//             borderWidth: 0.5,
//             marginLeft:10
//           }}
//           onChangeText={onChangePassword}
//           value={password}
//           require={true}
//           secureTextEntry={true}
//           name="lock"
//           placeholder="Password"
//         />  
//       </View>
//       <View>
//         <TouchableOpacity
//           onPress={getAdvice}
//           style={{
//             backgroundColor: '#26c6da',
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: '80%',
//             height: 50,
//             marginLeft:20,
//             borderRadius: 10,
//             alignSelf: 'center',
//             marginTop: 30,
//           }}>
//           <Text style={{color: 'white', fontSize: 20}}>Login</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={{
//             color: 'white',
//             fontWeight: 'bold',
//             padding: 15,
    
//             alignItems: 'center',
//             justifyContent: 'center',
//             width: 220,

//             alignSelf: 'center',
//           }}
//           onPress={() => {
//             navigation.navigate('ClientSignup');
//           }}>
//           <Text style={{fontSize: 15}}>
//             Have an account?
//             <Text style={{marginLeft: 3, color: 'blue'}}> Register</Text>
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const style = StyleSheet.create({});












import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert, Image
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import axios from 'axios';
import authContext from '../../contexts/authContext';

// import { AuthContext } from '../components/context';

// import Users from '../model/users';

const SignInScreen = ({navigation}) => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [emailValidError, setEmailValidError] = React.useState('');
    const getAdvice = async () => {
        login(email, password);
        // 19/11/22 date ki new navigation here without permission ke ghusne wali
    
        console.log(email, password);
        if (!email || !password) {
          alert('Please fill all fields');
        }
        else if(email.length < 10){
                   alert('Enter Valid Email with valid string @gmail.com')
          }
          else if(password.length < 6){
                alert('Enter Valid Password')
          }
        else {
          const response = await axios.post(
            'https://backendserver.onrender.com/user/login',
            {
              email,
              password,
            },
          );
          if (response.data.msg === 'Login Successfull!') {
            alert(response.data.msg);
            //working New Navigation 19/11/22
            navigation.navigate('BottomNew');
          }
    
    
    
          // if(token) {
          //   navigation.navigate('Home')
          // }
        }
      };

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const {login} = React.useContext(authContext);
    const {user} = React.useContext(authContext);
    const { colors } = useTheme();

   

    // const textInputChange = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             email: val,
    //             check_textInputChange: true,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             email: val,
    //             check_textInputChange: false,
    //             isValidUser: false
    //         });
    //     }
    // }

    // const handlePasswordChange = (val) => {
    //     if( val.trim().length >= 8 ) {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             password: val,
    //             isValidPassword: false
    //         });
    //     }
    // }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    // const handleValidUser = (val) => {
    //     if( val.trim().length >= 4 ) {
    //         setData({
    //             ...data,
    //             isValidUser: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             isValidUser: false
    //         });
    //     }
    // }

    // const loginHandle = (email, password) => {

    //     const foundUser = email.filter( item => {
    //         return email == item.email && password == item.password;
    //     } );

    //     if ( data.email.length == 0 || data.password.length == 0 ) {
    //         Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }

    //     if ( foundUser.length == 0 ) {
    //         Alert.alert('Invalid User!', 'Username or password is incorrect.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }
    //     signIn(foundUser);
    // }

    const handleValidEmail = val => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    
        if (val.length === 0) {
          setEmailValidError('email address must be enter');
        } else if (reg.test(val) === false) {
          setEmailValidError('enter valid email address');
        } else if (reg.test(val) === true) {
          setEmailValidError('');
        }
      };

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
    
            <Text style={styles.text_header}>Events Empire</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
        >
            <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Email</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="envelope"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    keyboardType={'email-address'}
          placeholder="Email"
          require={true}
          value={email}
          onChangeText={value => {
            onChangeEmail(value);
            handleValidEmail(value);
          }}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
            

            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 15
            }]}>Password</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="lock"
                    color={colors.text}
                    size={25}
                />
                <TextInput 
                
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    onChangeText={onChangePassword}
                    value={password}
                    require={true}
                   
                    name="lock"
                    placeholder="Password"
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
            

            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={getAdvice}
                >
                <LinearGradient
                    colors={['#263159', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ClientSignup')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#263159'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#263159'
    },
    header: {
        marginTop:60,
        paddingHorizontal: 20,
        paddingBottom: 80,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40,
        alignItems:'center',
        textAlign:'center'
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });










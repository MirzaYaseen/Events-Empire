import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

const {width} = Dimensions.get('screen');
const cardWidth = width / 1 - 20;

const InsideStore = ({navigation, route}) => {
  const {otherParam} = route.params;
  const [orders, setOrders] = React.useState([]);
  const [dev, setDev] = React.useState([]);
  const [isloading, setloading] = React.useState(false);

  console.log('other', otherParam);
  // const getOrders = async () => {
  //   // setLoading(true);
  //   var axios = require('axios');
  //   setloading(true);
  //   axios
  //     .get(
  //       'https://backendserver.onrender.com/service/viewmarquee'
  //     )
  //     .then((response) => {
  //       console.log('data = ' + JSON.stringify(response.data));
  //       setOrders(response.data);
  //       setloading(false);
  //     });
  // const response = await fetch(
  //   `https://madproject-c2f0c-default-rtdb.firebaseio.com/Appointments.json`
  // );
  // console.log('response = ' + JSON.stringify(response));
  // const res = await JSON.parse(response);
  // console.log('test' + res);
  // setdata(res);
  // console.log('data = ' + data);
  // setLoading(false);
  // };
  // React.useEffect(() => {
  //   const onFocus = navigation.addListener(
  //     'focus',
  //     () => {
  //       getOrders();
  //     },
  //     []
  //   );

  // Return the function to onFocus from the event so it gets removed on unmount
  //   return onFocus;
  // }, [navigation]);

  return (
    <ScrollView>
      <View>
        <View style={styles.card}>
          {console.log(JSON.stringify(Object.entries(orders)))}
          <View>
            <View>
              <Image
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 15,
                }}
                source={{uri: otherParam.images}}
              />
              <Text
                style={{
                  color: 'orange',
                  fontSize: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 15,
                  textAlign: 'center',
                  marginBottom: 5,
                }}>
                {otherParam.name}
              </Text>

              <Text
                style={{
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 5,

                  marginTop: 20,
                }}>
                Price Range
              </Text>
              <Text
                style={{
                  color: 'purple',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 16,
                  textAlign: 'center',
                  marginBottom: 20,
                }}>
                PKR. {otherParam.basicPlan.price} - PKR.{' '}
                {otherParam.platinumPlan.price}
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: 12,
                  marginLeft: 20,

                  marginBottom: 20,
                }}>
                {otherParam.description}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  color: 'purple',
                }}>
                <Icon
                  style={{marginLeft: 15}}
                  name="phone"
                  size={18}
                  color="purple"
                />
                <Text
                  style={{
                    color: 'purple',
                    fontSize: 15,
                    marginLeft: 10,
                    textAlign: 'center',
                    marginBottom: 20,
                  }}>
                  {otherParam.phoneNo}
                </Text>
              </View>

              <Text
                style={{
                  color: 'purple',
                  fontSize: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  marginTop: 25,
                  marginBottom: 5,
                }}>
                WEDDING PLANS
              </Text>

              <View style={styles.cardA}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 20,
                      textAlign: 'center',
                    }}>
                    Basic Plan
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      justifyContent: 'center',
                      textAlign: 'center',
                      alignItems: 'center',
                      marginTop: 5,

                      marginBottom: 30,
                    }}>
                    Pkr. {otherParam.basicPlan.price}
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        width: 220,
                        fontSize: 15,
                        marginLeft: 20,
                        marginBottom: 10,
                        marginTop: 10,
                      }}>
                      {otherParam.basicPlan.addOns.split(',').map(arr => (
                        <>
                          <Image
                            source={require('../../assets/checkmark.png')}
                            style={{
                              width: 30,
                              height: 30,
                              marginRight:20,
                              marginTop: 10,
                            }}
                          />

                          <Text
                            style={{
                              marginLeft: 15,
                              fontSize: 20,
                              marginRight: 10,
                              marginTop:20
                            }}>
                            {arr}{'\n'}
                          </Text>
                          {'\n'}
                        </>
                      ))}
                    </Text>
                  </View>

                 
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'purple',
                      alignItems: 'center',
                      alignContent: 'center',
                      borderRadius: 50,
                      justifyContent: 'center',
                      display: 'flex',
                      width: 100,
                      height: 40,

                      marginBottom: 20,
                      alignSelf: 'center',
                      marginTop: 40,
                    }}
                    onPress={() => {
                      navigation.navigate('DateTime', {
                        otherParam: {
                          price: otherParam.basicPlan.price,
                          name: otherParam.name,
                          seller: otherParam.seller
                        },
                      });
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        alignItems: 'center',
                      }}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.cardB}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      display: 'flex',
                      marginTop: 20,
                    }}>
                    Gold Plan
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      marginTop: 5,
                      textAlign: 'center',

                      marginBottom: 30,
                    }}>
                    Pkr. {otherParam.goldPlan.price}
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        width: 220,
                        fontSize: 15,
                        marginLeft: 20,
                        marginBottom: 10,
                        marginTop: 10,
                      }}>
                      {otherParam.goldPlan.addOns.split(',').map(arr => (
                        <>
                          <Image
                            source={require('../../assets/checkmark.png')}
                            style={{
                              width: 30,
                              height: 30,
                              marginRight:20,
                              marginTop: 10,
                            }}
                          />

                          <Text
                            style={{
                              marginLeft: 15,
                              fontSize: 20,
                              marginRight: 10,
                              marginTop:20
                            }}>
                            {arr}{'\n'}
                          </Text>
                          {'\n'}
                        </>
                      ))}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      backgroundColor: 'purple',
                      alignItems: 'center',
                      alignContent: 'center',
                      borderRadius: 50,
                      justifyContent: 'center',
                      display: 'flex',
                      width: 100,
                      height: 40,

                      marginBottom: 20,
                      alignSelf: 'center',

                      marginTop: 40,
                    }}
                    onPress={() => {
                      navigation.navigate('DateTime', {
                        otherParam: {
                          price: otherParam.goldPlan.price,
                          name: 'Gold Plan',
                        },
                      });
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        alignItems: 'center',
                      }}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.cardC}>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      alignItems: 'center',
                      justifyContent: 'center',
                      display: 'flex',
                      textAlign: 'center',
                      marginTop: 20,
                    }}>
                    Platinum Plan
                  </Text>

                  <Text
                    style={{
                      fontSize: 18,
                      justifyContent: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      textAlign: 'center',
                      marginTop: 5,

                      marginBottom: 30,
                    }}>
                    Pkr. {otherParam.platinumPlan.price}
                  </Text>

                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        width: 220,
                        fontSize: 15,
                        marginLeft: 20,
                        marginBottom: 10,
                        marginTop: 10,
                      }}>
                      {otherParam.platinumPlan.addOns.split(',').map(arr => (
                        <>
                          <Image
                            source={require('../../assets/checkmark.png')}
                            style={{
                              width: 30,
                              height: 30,
                              marginRight:20,
                              marginTop: 10,
                            }}
                          />

                          <Text
                            style={{
                              marginLeft: 15,
                              fontSize: 20,
                              marginRight: 10,
                              marginTop:20
                            }}>
                            {arr}{'\n'}
                          </Text>
                          {'\n'}
                        </>
                      ))}
                    </Text>
                  </View>

                
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'purple',
                      alignItems: 'center',
                      alignContent: 'center',
                      borderRadius: 50,
                      justifyContent: 'center',
                      display: 'flex',
                      width: 100,
                      height: 40,

                      marginBottom: 20,
                      alignSelf: 'center',
                      marginTop: 40,
                    }}
                    onPress={() => {
                      navigation.navigate('DateTime', {
                        otherParam: {
                          price: otherParam.platinumPlan.price,
                          name: 'Platinum Plan',
                        },
                      });
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        alignItems: 'center',
                      }}>
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  cardA: {
    display: 'flex',
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 30,
    shadowColor: 'black',
    elevation: 13,
    backgroundColor: '#EAEDF0',
  },
  cardB: {
    display: 'flex',
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 30,
    shadowColor: 'black',
    elevation: 13,
    backgroundColor: '#EAEDF0',
  },
  cardC: {
    display: 'flex',
    marginHorizontal: 10,
    marginBottom: 40,
    borderRadius: 30,
    shadowColor: 'black',
    elevation: 13,
    backgroundColor: '#EAEDF0',
  },
  TextStyle2: {
    color: 'orange',
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  icon: {
    marginTop: 5,
  },
});

export default InsideStore;

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
  Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
// import { useNavigation } from '@react-navigation/native';
import {DataTable} from 'react-native-paper';
const {width} = Dimensions.get('screen');
const cardWidth = width / 1 - 20;

const MarqueeDetails = ({navigation, route}) => {
  // const navigation = useNavigation();
  const {otherParam} = route.params;
  const [orders, setOrders] = React.useState([]);
  const [dev, setDev] = React.useState([]);

  console.log('other', otherParam.goldPlan[0].addonsList[0].addOns);
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

  const TableVenue2 = () => {
    return (
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Price</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          {otherParam.basicPlan.map(data => (
            <DataTable.Cell>{data.basicPrice}</DataTable.Cell>
          ))}
        </DataTable.Row>

        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Offered Menu</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          {otherParam.basicPlan.map(data => (
            <Text
              style={{
                width: 120,
                marginTop: 10,
                justifyContent: 'space-between',
              }}>
              {data.basicService}
              {'\n'}
            </Text>
          ))}
        </DataTable.Row>
      </DataTable>
    );
  };

  const TableVenue1 = () => {
    return (
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Venue Name</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          {otherParam.goldPlan.map(data => (
            <DataTable.Cell>{data.venueName}</DataTable.Cell>
          ))}
        </DataTable.Row>

        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Venue Capacity</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          {otherParam.goldPlan.map(data => (
            <DataTable.Cell>{data.maxCapacity}</DataTable.Cell>
          ))}
        </DataTable.Row>

        {/* <DataTable.Row>
          {otherParam.goldPlan.map(data => (
            <DataTable.Cell>
              {data.addonsList.map(data2 => (
                <Text style={{width: 400, height:300}}>
                  {data2.addOns}
                 

                </Text>
              ))}
            </DataTable.Cell>
          ))}
        </DataTable.Row> */}
        {/* <DataTable.Row>
          {otherParam.goldPlan.addonsList.split(',').map(data4 => (
            <DataTable.Cell  >
              <Text style={{width: 300}}>{data4}{'\n'}</Text>


              
            </DataTable.Cell>
          ))}
        </DataTable.Row> */}
      </DataTable>
    );
  };

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
                  fontSize: 12,
                  marginLeft: 20,
                  marginTop: 20,
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
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: 'purple',
                      fontSize: 15,
                      marginLeft: 10,
                      textAlign: 'center',
                      marginBottom: 20,
                    }}>
                    {otherParam.phoneNo},
                  </Text>
                  <TouchableOpacity
                    style={{
                      width: 100,
                      height: 40,
                      backgroundColor: 'purple',
                      marginLeft: 100,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => {
                      Linking.openURL('app://events_empire');
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        justifyContent: 'center',
                      }}>
                      View Stage
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 5,
                  color: 'purple',
                }}>
                <Icon
                  style={{marginLeft: 15}}
                  name="home"
                  size={18}
                  color="purple"
                />
                <Text
                  style={{
                    color: 'purple',
                    fontSize: 15,
                    marginLeft: 10,
                    textAlign: 'center',
                    marginBottom: 40,
                  }}>
                  {otherParam.venueType}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 150,
                  height: 40,
                  backgroundColor: 'purple',
                  alignSelf: 'center',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() =>
                  navigation.navigate('MarqueeBooking', {
                    otherParam,
                  })
                }>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    justifyContent: 'center',
                  }}>
                  Book service
                </Text>
              </TouchableOpacity>

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
                      marginBottom:20
                    }}>
                    Venue Details
                  </Text>
                  {otherParam.goldPlan.map(data => (
                    <>
                      <Text
                        style={{
                          fontSize: 20,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign: 'center',
                        }}>
                        {data.venueName}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textAlign:'center',
                          marginBottom:20
                        }}>
                        Max Capacity ({data.maxCapacity})
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
                        {data.addonsList.map(data1 => (
                          <Text style={{color: 'black'}}>
                            {data1.addOns} (PKR {data1.addOnsPrice}){'\n'}
                            {'\n'}
                          </Text>
                        ))}
                      </Text>
                    </>
                  ))}

                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <Text
                      style={{
                        width: 220,
                        fontSize: 15,
                        marginLeft: 20,
                        
                     
                      }}>
                      
                    </Text>
                  </View>
                </View>
              </View>

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
                    Venues
                  </Text>

                  <TableVenue1 />
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
                    Menus
                  </Text>
                  <TableVenue2 />
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
    marginBottom: 10,
    borderRadius: 30,
    marginTop: 20,
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
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});

export default MarqueeDetails;

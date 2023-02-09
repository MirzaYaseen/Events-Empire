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
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../consts/colors';
import { useNavigation } from '@react-navigation/native';
const {width} = Dimensions.get('screen');
const cardWidth = width / 1 - 20;

const ProductDetails = ({route}) => {
  const navigation = useNavigation(); 
  const {otherParam} = route.params;
  const [orders, setOrders] = React.useState([]);
  const [dev, setDev] = React.useState([]);
  const [isloading, setloading] = React.useState(false);

  console.log(otherParam);
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
                  width: 200,
                  height: 180,
                  borderRadius: 15,
                  marginTop: 30,
                  
                  alignContent: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf:'center'
                }}
                source={{uri: otherParam.images}}
              />
              <Text
                style={{
                  color: 'black',
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
                  color: 'purple',
                  fontSize: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 5,
                  textAlign: 'center',
                  marginBottom: 5,
                }}>
                {otherParam.ratings.toFixed(1.5)} /{' '}
                {otherParam.numOfReviews.toFixed(2)}
              </Text>

              <Text
                style={{
                  color: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 18,
                  textAlign: 'center',
                  marginBottom: 20,
                  marginTop: 10,
                }}>
                PKR. {otherParam.price}
              </Text>

              <Text
                style={{
                  color: 'purple',
                  fontSize: 15,
                  marginLeft: 20,
                  marginTop: 15,
                  marginBottom: 5,
                }}>
                <Text style={{color: 'black'}}> Category Type: </Text>{' '}
                {otherParam.category}
              </Text>

              <Text
                style={{
                  color: 'purple',
                  fontSize: 15,
                  marginLeft: 20,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                <Text style={{color: 'black'}}> Available Stock: </Text>{' '}
                {otherParam.stock}
              </Text>

              <Text
                style={{
                  color: 'purple',
                  fontSize: 15,
                  marginLeft: 20,
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <Text style={{color: 'black'}}> Phone#: </Text>
                {otherParam.phoneNo}
              </Text>

              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                  justifyContent: 'center',
                  fontSize: 18,
                }}>
                {' '}
                Product Description
              </Text>

              <Text
                style={{
                  color: 'purple',
                  fontSize: 15,
                  textAlign: 'center',
                  marginTop: 5,
                  marginBottom: 10,
                }}>
                {otherParam.description}
              </Text>

              {/* <TouchableOpacity
                onPress={() => navigation.navigate('PaymentPersonal')}
                style={{
                  backgroundColor: COLORS.primary,
                  height: 60,
                  width: 210,
                  borderRadius: 30,
                  marginTop: 30,
                  marginBottom: 50,
                  alignContent:'center',
                  alignItems:'center',
                  justifyContent:'center',
                  alignSelf:'center'
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                   
                  }}>
                  <Icon
                    style={{marginLeft: 5, marginTop: 15, marginRight: 4}}
                    name="ticket"
                    size={25}
                    color="purple"
                  />{' '}
                  Pay{' '}
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex:1,
    marginHorizontal: 10,
    marginBottom: 20,
    height:750,
    marginTop: 30,
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
    backgroundColor: '#F8F0E3',
  },
  cardB: {
    display: 'flex',
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 30,
    shadowColor: 'black',
    elevation: 13,
    backgroundColor: '#F8F0E3',
  },
  cardC: {
    display: 'flex',
    marginHorizontal: 10,
    marginBottom: 40,
    borderRadius: 30,
    shadowColor: 'black',
    elevation: 13,
    backgroundColor: '#F8F0E3',
  },
  TextStyle2: {
    color: 'orange',
    fontSize: 15,
    marginLeft: 10,
    marginBottom: 20,
    marginTop: 10,
  },
});

export default ProductDetails;

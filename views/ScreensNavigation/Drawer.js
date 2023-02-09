import * as React from 'react';
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  FlatList,
  Modal,
  Linking,
  Dimensions,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import choosenProducts from '../../consts/dealItems';
import {SecondaryButton} from '../components/GeneralButtons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
// import LoginNew from '../MainScreens/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PrimaryButton} from '../components/GeneralButtons';
import DropDownPicker from 'react-native-dropdown-picker';
import authContext from '../../contexts/authContext';
import CreateAppointment from '../MainScreens/CreateAppointment';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecommendationProductItems from '../MainScreens/RecommendationProductItems';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addItemToWhishList} from '../redux/actions/Actions';
import RecommendationProducts from '../MainScreens/RecommendationProductItems';
import AuthContext from '../../contexts/authContext';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const url1 = 'https://web.whatsapp.com/';
const url2 = 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox';
const url3 = 'https://www.instagram.com/';

function UserManual({navigation}) {
  return (
    <ScrollView>
      <View style={{alignContent: 'center', alignItems: 'center'}}>
        {/* <TouchableHighlight
          style={{marginTop: 30, alignItems: 'center', marginBottom: 20}}
          onPress={() => navigation.navigate('BottomNew')}>
          <Text>Go Back to Home Screen</Text>
        </TouchableHighlight> */}

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            marginLeft: 5,
            marginRight: 5,

            marginBottom: 5,
          }}>
          <View style={{marginLeft: 5, marginRight: 5, marginTop: 10}}>
            <Text>
              <Text style={{fontWeight: 'bold', marginLeft: 5, color: 'black'}}>
                Overview:
              </Text>{' '}
              The Events Empire mobile app allows users to track data offline by
              using the custom forms module. Users can Buy different forms
              (Products & Services) depending on their needs, and then track the
              data directly on the field. The synch with the web version of
              Events Empire can be made once the user has a stable internet
              connection. This user manual explains how to download the mobile
              application, how to synch to forms already existing in the Events
              Empire web version and how to add records through the mobile app.
              If you require further instructions on how to create custom forms
              in the web version or how to link these forms to indicators in the
              system, please refer to the Events Empire web version user manual.
              (This is a separate document – if you require a copy please
              contact us info@events_empire.com){' '}
            </Text>
          </View>

          <View style={{marginLeft: 5, marginRight: 5, marginTop: 10}}>
            <Text>
              <Text style={{fontWeight: 'bold', marginLeft: 5, color: 'black'}}>
                How to install the mobile app:{' '}
              </Text>{' '}
              The mobile app must be downloaded via Google Play. In order to
              find the app simply tap Events Empire in the google play search
              bar and download it for free.{' '}
            </Text>
          </View>

          <View style={{marginLeft: 5, marginRight: 5, marginTop: 10}}>
            <Text>
              <Text style={{fontWeight: 'bold', marginLeft: 5, color: 'black'}}>
                Compatible operating systems and devices:{' '}
              </Text>
              The Events Empire mobile app is compatible with most Android
              tablets and cell phones. It is optimized for Events Empire
              user-friendly app is compatible with all mobile devices. Below is
              a condensed list of compatible devices. All Apple products require
              iOS 6.0 or later.
            </Text>
            <Text> • Android phones </Text>
            <Text> • Android tablets </Text>
            <Text> • iPhone </Text>
            <Text> • iPad </Text>
            <Text> • iPod Touch </Text>
          </View>

          <View style={{marginLeft: 5, marginRight: 5, marginTop: 10}}>
            <Text>
              <Text style={{fontWeight: 'bold', marginLeft: 5, color: 'black'}}>
                {' '}
                Help:{' '}
              </Text>{' '}
              Any questions, concerns, or issues regarding the app may be
              resolved by contacting the Events Empire support team. Clicking
              the “Complaint” button on the app will prompt you to send an email
              and message(Your Issue) to Events Empire customer service
              department. Users may also contact our support team by phone or
              direct email
            </Text>
            <Text> • support@eventsempire.com </Text>
            <Text> • +92-321-7755315 </Text>
          </View>

          <View>
            <Text
              style={{
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 10,
                color: 'black',
              }}>
              {' '}
              Home Screen{' '}
            </Text>
            <Text style={{marginLeft: 20, marginTop: 5}}>
              is a basic welcome screen with 'Exploring More' Feature which help
              the people to move on a different navigation screen where people
              can see the UserManual in which all the system details are
              provided by the Platform Owner also their people can see the
              different discounted offers which will be provided by the Store
              Owner from his own store items and people can get this offers
              anytime after Payment, After that there will be a Existing Screen
              where people can do COMPLAINT to Admin, if any uncertainty happen
              with them also people can see the order details.{' '}
            </Text>
          </View>

          <View style={{}}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              {' '}
              Products Screen{' '}
            </Text>
            <Text style={{marginLeft: 20, marginTop: 5}}>
              is our Products Screen where people can get the differnt products
              for their Custom Plan arrangemnet at their doorstep. People can
              view all the products which were be offered by the store sellers,
              this screen will help to users to find the best and desired
              Products from different sellers with many options with complete
              product details, at your doorstep just on few clicks. On this
              screen you can search your favorite product, categorised the
              products with the different provided filters{' '}
            </Text>
          </View>

          <View style={{}}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              {' '}
              Camera Screen{' '}
            </Text>
            <Text style={{marginLeft: 20, marginTop: 5}}>
              is a Camera Screen where people can use this as it a extra feature
              which helps them to view the all custom setup which they want to
              arrange on their desired location with the help of our provided
              different models{' '}
            </Text>
          </View>

          <View style={{}}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              {' '}
              Services Screen{' '}
            </Text>
            <Text style={{marginLeft: 20, marginTop: 5}}>
              is our Services Screen where people can view the all the services
              which were be offered by the store sellers, this screen help you
              to find your desired Marquees with all offered menus, Photographer
              with all service charges and all details, Salon with all services
              packages offered by the seller and help you to reach out and book
              your desired services from your desired seller at your doorstep
              just on few clicks. On this screen you can search your favorite
              service, categorised the services with the different provided
              filters{' '}
            </Text>
          </View>

          <View style={{}}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              {' '}
              Add to Cart Screen{' '}
            </Text>
            <Text style={{marginLeft: 20, marginTop: 5, marginBottom: 10}}>
              is a Cart Screen with the feature of adding desired products into
              cart and it helps to user to buy the many products at a time with
              the desired quantity{' '}
            </Text>
          </View>

          <View style={{}}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 20,
                textAlign: 'center',
                color: 'black',
              }}>
              {' '}
              Store Items Screen{' '}
            </Text>
            <Text style={{marginLeft: 20, marginTop: 5, marginBottom: 10}}>
              is our Store Products Screen where people can get the differnt
              products for their Custom Plan arrangemnet at their doorstep.
              People can view all the products which were be offered by the
              store owner, this screen will help to users to find the best and
              desired Products, at your doorstep just on few clicks.{' '}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function Deals({navigation}) {
  const [cartItems, setCartItems] = React.useState([...choosenProducts]);
  const [cond, setcond] = React.useState(true);
  const [orders, setOrders] = React.useState([]);
  const [quantity, onChangeQuantity] = React.useState(null);
  const [mob, onChangeMob] = React.useState(null);
  const [city, onChangeCity] = React.useState(null);
  const [name, onChangeName] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);
  const [pro, onChangePro] = React.useState(null);

  const [totalAmount, setTotalAmount] = React.useState(
    choosenProducts.reduce(function (accumulator, currentValue) {
      let num =
        parseFloat(accumulator) +
        parseFloat(currentValue.price) * currentValue.quantity;
      return num.toFixed(2);
    }, 0),
  );
  const addItemToCart = async value => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      let values = [];
      if (jsonValue != null) {
        console.log('async storage value', jsonValue);
        values = JSON.parse(jsonValue);
      }

      values.push(value);
      console.log('valuessss', values);
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(values));
      alert(`item added to cart, ${value}`);
    } catch (e) {
      alert('error occured');
      console.log(e);
    }
  };

  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image
          source={item.image}
          style={{height: 80, width: 80, borderRadius: 20}}
        />
        <View
          style={{height: 100, marginLeft: 10, paddingVertical: 20, flex: 1}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 8,
              color: 'red',
            }}>
            Actual Rs.{item.preprice}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginTop: 8,
              color: 'purple',
            }}>
            Rs.{item.price}
          </Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <TouchableOpacity style={{marginTop: 12}}>
            <Icon
              name="shopping-cart"
              color="orange"
              size={25}
              onPress={() => addItemToCart(item)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  if (cond) {
    return (
      <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
          data={cartItems}
          renderItem={({item}) => <CartCard item={item} />}
          ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          ListFooterComponent={() => <View></View>}
        />
      </SafeAreaView>
    );
  }
}

function Contactus({navigation}) {
  const [email, onChangeEmail] = React.useState(null);
  const [query, onChangeQuery] = React.useState(null);

  const FIREBASE_API_ENDPOINT =
    'https://eventspayments-10b22-default-rtdb.firebaseio.com/';
  const postData = dataxx => {
    console.log(dataxx);
    if (!email || !query) {
      alert('Please fill all Details');
    } else {
      fetch(`${FIREBASE_API_ENDPOINT}/ContactUs.json`)
        .then(response => response.json())
        .then(result => alert('Note Submitted Successfully'))
        .catch(error => console.log('error', error));
    }
  };

  const OpenUrl = async url => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't Know: ${url}`);
    }
  };
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 35,
            textAlign: 'center',
            marginTop: 40,
            marginBottom: 5,
            color: 'black',
            fontWeight: '800',
          }}>
          Contact us
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 40,
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
              OpenUrl(url1);
            }}>
            <Image
              source={require('../../assets/whatsapp.png')}
              style={{
                width: 60,
                height: 60,
                marginTop: 20,
                marginLeft: 70,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
              OpenUrl(url2);
            }}>
            <Image
              source={require('../../assets/gmailabc.png')}
              style={{
                width: 60,
                height: 60,

                marginTop: 20,
                alignSelf: 'center',
                marginLeft: 40,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => {
              OpenUrl(url3);
            }}>
            <Image
              source={require('../../assets/instagram.png')}
              style={{
                width: 60,
                height: 60,

                marginTop: 20,
                alignSelf: 'center',
                marginLeft: 40,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginBottom: 5,
            marginTop: 10,
            fontSize: 15,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Email
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderRadius: 5,
            alignSelf: 'center',
            width: '92%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.5,
            marginLeft: 10,
          }}
          placeholder="Email"
          onChangeText={onChangeEmail}
          value={email}
          email="email"
        />

        <Text
          style={{
            marginBottom: 5,
            marginTop: 10,
            fontSize: 15,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Query
        </Text>

        <TextInput
          style={{
            padding: 10,
            borderRadius: 5,
            alignSelf: 'center',
            width: '92%',
            height: 130,
            borderRadius: 10,
            borderWidth: 0.5,
          }}
          onChangeText={onChangeQuery}
          multiline={true}
          value={query}
          name="query"
          placeholder="Type your Query..."
        />

        <TouchableOpacity
          onPress={() => {
            // Function to upload data to firebase
            let obj = {
              Email: email,
              Query: query,
            };
            postData(obj);
          }}
          style={{
            backgroundColor: '#495579',
            alignSelf: 'center',
            width: '85%',
            height: 60,
            borderRadius: 15,
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function Recommendations() {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);
  const [masterDataSource, setMasterDataSource] = React.useState([]);
  const [masterDataSource1, setMasterDataSource1] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    fetch('https://backendserver.onrender.com/product/ratings')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  React.useEffect(() => {
    fetch('https://backendserver.onrender.com/service/ratings')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  React.useEffect(() => {
    fetch('https://backendserver.onrender.com/service/serviceratings')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        setMasterDataSource1(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../assets/os.jpg')}
          style={{
            width: '95%',
            height: 200,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            marginLeft: 20,
            fontWeight: '700',
            color: '#000',
            marginBottom: 20,
          }}>
          Product Recommendations
        </Text>

        <View style={{marginTop: 10}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={filteredDataSource}
            renderItem={({item, index}) => {
              return (
                <RecommendationProducts
                  item={item}
                  onAddWhishList={x => {
                    dispatch(addItemToWhishList(x));
                  }}
                  onAddtoCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            marginLeft: 20,
            fontWeight: '700',
            color: '#000',
            marginBottom: 20,
          }}>
          Marquee Recommendations
        </Text>
        <View style={{marginTop: 10}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={masterDataSource}
            renderItem={({item, index}) => {
              return <RecommendationProducts item={item} />;
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 5,
            fontSize: 20,
            marginLeft: 20,
            fontWeight: '700',
            color: '#000',
            marginBottom: 20,
          }}>
          Photographer Recommendations
        </Text>
        <View style={{marginTop: 10}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={masterDataSource1}
            renderItem={({item, index}) => {
              return <RecommendationProducts item={item} />;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

function Orders({navigation}) {
  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);
  const [masterDataSource, setMasterDataSource] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  const {user} = React.useContext(AuthContext);
  React.useEffect(() => {
    fetch('https://backendserver.onrender.com/order/viewProductOrder')
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();

        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    console.log(item);
    return (
      // Flat List Item

      <ScrollView>
        {item.user._id === user._id ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#CDF0EA',
              width: '95%',
              height: 230,
              justifyContent: 'center',
              alignSelf: 'center',
              borderRadius: 20,
              padding: 10
            }}>
            <View style={{marginHorizontal: 20, marginBottom:10}}>
              <Text style={{fontWeight: 'bold', color: 'black', marginTop:50}}>
                <Text style={{color: 'orange', marginTop: 20}}>
                  Receiver Name:
                </Text>{' '}
                {item.shippingInfo.name} {'\n'}
              </Text>

              <Text style={{fontWeight: 'bold', color: 'black'}}>
                <Text style={{color: 'orange'}}>Address: </Text>{' '}
                {item.shippingInfo.address} {'\n'}
              </Text>

              <Text style={{fontWeight: 'bold', color: 'black'}}>
                <Text style={{color: 'orange'}}>City: </Text>{' '}
                {item.shippingInfo.city} {'\n'}
              </Text>

              <Text style={{fontWeight: 'bold', color: 'black'}}>
                <Text style={{color: 'orange'}}>Phone #: </Text>{' '}
                {item.shippingInfo.phoneNo} {'\n'}
              </Text>

              <Text style={{fontWeight: 'bold', color: 'black'}}>
                <Text style={{color: 'orange'}}>Tracking Id: </Text> {item._id}{' '}
                {'\n'}
              </Text>
            </View><Text>{"\n"}</Text>
        </View>
        ) : null}
      </ScrollView>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          marginBottom:10,
          marginTop:5,
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          marginTop: 20,
      
          paddingHorizontal: 10,
          marginBottom: 30,
        }}>
       <Text style={{textAlign:'center', marginTop:20, fontWeight:'600', fontSize:30, color:'black'}}>Product Orders</Text>
 
      </View>
      <FlatList
       
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    
    </SafeAreaView>
  );
}

function Complaints({navigation}) {
  const {token} = React.useContext(authContext);
  const {user} = React.useContext(authContext);
  const [email, onChangeEmail] = React.useState(null);
  const [msg, onChangeMsg] = React.useState(null);
  const [user1, onChangeUser] = React.useState(null);

  const getComplaint = () => {
    console.log(user._id, msg);
    if (!msg) {
      alert('Please Enter Something');
    } else {
      axios
        .post('https://backendserver.onrender.com/user/complain', {
          user: user._id,
          msg,
        })

        .then(function (response) {
          console.log(response);
        })
        .then(result =>
          alert(
            'Thank you! your Complaint has been submitted Successfully to Admin, Admin will responce shortly to your Email',
          ),
        )
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            marginTop: 60,
            marginBottom: 60,
            color: 'black',
            fontWeight: '800',
          }}>
          Submit Your Complain
        </Text>
        <Text
          style={{
            marginBottom: 5,
            marginTop: 10,
            fontSize: 15,
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Your Email
        </Text>
        <TextInput
          style={{
            padding: 10,
            borderRadius: 5,
            alignSelf: 'center',
            width: '92%',
            height: 50,
            borderRadius: 10,
            borderWidth: 0.5,
            marginLeft: 10,
          }}
          placeholder="Email"
          value={user1}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={value => {
            onChangeUser(value);
          }}
        />

        <Text
          style={{
            marginBottom: 5,
            marginTop: 10,
            fontSize: 15,
            marginLeft: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Complaint
        </Text>

        <TextInput
          style={{
            padding: 10,
            borderRadius: 5,
            alignSelf: 'center',
            width: '92%',
            height: 130,
            borderRadius: 10,
            borderWidth: 0.5,
          }}
          onChangeText={onChangeMsg}
          multiline={true}
          value={msg}
          name="msg"
          placeholder="Type your Complaint..."
        />

        <TouchableOpacity
          onPress={getComplaint}
          style={{
            backgroundColor: '#495579',
            alignSelf: 'center',
            width: '85%',
            height: 60,
            borderRadius: 15,
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="User Manual"
        component={UserManual}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="book-outline" size={22} color={color} />
          ),
        }}
      />
      {/* <Drawer.Screen
        name="Store Deals"
        component={Deals}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cash-outline" size={22} color={color} />
          ),
        }}
      /> */}
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="cart-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Complaints"
        component={Complaints}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="chatbubbles-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Recommendations"
        component={Recommendations}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="ios-color-filter-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact Us"
        component={Contactus}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="call-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 130,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'blue',
  },
  countBtn: {
    width: 80,
    height: 30,
    backgroundColor: '#90caf9',
    borderRadius: 5,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default function App() {
  return <MyDrawer />;
}

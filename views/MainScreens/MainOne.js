import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  Modal,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProductsItemCommon from './ProductsItemCommon';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addItemToWhishList} from '../redux/actions/Actions';
import COLORS from '../../consts/colors';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
const MainOne = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);
  const [masterDataSource, setMasterDataSource] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    fetch('https://backendserver.onrender.com/product/viewProduct')
      .then(response => response.json())
      .then(responseJson => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // const items =useSelector(state => state);
  // console.log(items);

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
    return (
      // Flat List Item
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate('ProductDetails', {
            otherParam: item,
          })
        }>
        <View style={style.card5}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image
              source={{uri: item.images}}
              style={{height: 120, width: 120, borderRadius: 30}}
            />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              {item.name} {'\n'}
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: 'orange',
                marginLeft: 4,
                marginRight: 20,
              }}>
              <Icon
                style={{marginLeft: 4, marginRight: 8, marginTop: 1}}
                name="star"
                size={15}
              />
              {item.ratings.toFixed(1.5)}
            </Text>
            <View
              style={{flexDirection: 'row', marginLeft: 3, marginRight: 10}}>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'purple'}}>
                Rs. {item.price}
              </Text>

              <TouchableOpacity style={{marginLeft: 15}}>
                <Icon
                  name="shopping-cart"
                  color="orange"
                  size={25}
                  onPress={() => addItemToCart(item)}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  return (
    <ScrollView style={{backgroundColor: '#fff', marginBottom:70}}>
      <View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text
          style={{marginLeft: 20, fontSize: 25, marginTop: 30, color: 'black'}}>
          Find the Best{' '}
          <Text style={{fontSize: 25, marginTop: 20, color: 'orange'}}>
            Products
          </Text>
        </Text>

        <Image
            source={require('../../assets/EEE.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 80,
              marginTop:30,
              marginRight:20,

              alignSelf: 'center',
            }}
          />
        </View>
        <Text
          style={{marginLeft: 20, fontSize: 16,  color: 'black'}}>
          For your custom event
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 10,
          marginBottom: 15,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={22} />
          <TextInput
            style={{flex: 1, marginLeft: 10}}
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            placeholder="Search for Products"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}>
          <Image
            source={require('../../assets/filterabc.png')}
            style={{
              width: 30,
              height: 30,

              marginTop: 10,
              marginLeft: 5,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        {/* <Image
          source={require('../../assets/os.jpg')}
          style={{
            width: '95%',
            height: 200,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}
        /> */}

        <Text
          style={{
            marginTop: 20,
            fontSize: 20,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          Wedding Products
        </Text>

        <View style={{marginTop: 15}}>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={true}
            data={filteredDataSource}
            renderItem={({item, index}) => {
              return (
                <ProductsItemCommon
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={() => {
            setVisible(!visible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,.5)',
            }}>
            <View
              style={{
                width: '80%',
                height: 200,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: 'center',
                  paddingLeft: 20,
                }}
                onPress={() => {
                  let temList = filteredDataSource.sort((a, b) =>
                    a.name > b.name ? 1 : -1,
                  );
                  setFilteredDataSource(temList);
                  setVisible(false);
                }}>
                <Text style={{fontSize: 18, color: '#000'}}>Sort By Name</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: 'center',
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setFilteredDataSource(
                    filteredDataSource.sort((a, b) => a.price - b.price),
                  );
                  setVisible(false);
                }}>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Price Low to High
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  justifyContent: 'center',
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setFilteredDataSource(
                    filteredDataSource.sort((a, b) => b.price - a.price),
                  );
                  setVisible(false);
                }}>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Price High to Low
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                  paddingLeft: 20,
                }}
                onPress={() => {
                  setFilteredDataSource(
                    filteredDataSource.sort((a, b) => b.ratings - a.ratings),
                  );
                  setVisible(false);
                }}>
                <Text style={{fontSize: 18, color: '#000'}}>
                  Sort by Rating
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  card: {
    marginHorizontal: 10,

    marginTop: 40,
    borderRadius: 15,
    elevation: 13,
    
  },
  TextStyle1: {
    color: 'orange',
    fontSize: 15,
    marginLeft: 15,
    display: 'flex',
    marginBottom: 10,
  },
  TextStyle2: {
    color: 'black',
    fontSize: 21,
    marginLeft: 10,
  },
  TextStyle3: {
    color: 'purple',
    fontSize: 12,
    marginLeft: 20,
  },
  TextStyle4: {
    color: 'purple',
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  inputContainer: {
    flex: 1,
    height: 40,
    borderRadius: 50,
    flexDirection: 'row',
   
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  sortBtn: {
    width: 40,
    height: 40,
    marginTop: 1,
    marginLeft: 10,
    backgroundColor: 'brown',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  card5: {
    height: 250,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
  
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
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

export default MainOne;

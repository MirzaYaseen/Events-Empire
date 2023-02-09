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
  FlatList,
  Modal,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/threecategories';
import products from '../../consts/products';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

//    const ListCategories = () => {
//     return (
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={true}
//         contentContainerStyle={style.categoriesListContainer}>

//          {categories.map((category) => (
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Marquees')}>
//               <View style={style.categoryBtnImgCon}>
//                 <Image
//                   source={category.image1}
//                   style={{
//                     height: 35,
//                     width: 35,
//                     resizeMode: 'cover',
//                     borderRadius: 25,
//                   }}
//                 />
//               </View>
//               <Text>{category.name1}</Text>
//           </TouchableOpacity>
//         ))}

//  {categories.map((category) => (
//           <TouchableOpacity

//             onPress={() => navigation.navigate('Photographers')}>

//               <View style={style.categoryBtnImgCon}>
//                 <Image
//                   source={category.image2}
//                   style={{
//                     height: 35,
//                     width: 35,
//                     resizeMode: 'cover',
//                     borderRadius: 25,
//                   }}
//                 />
//               </View>

//               <Text>
//                 {category.name2}{' '}
//               </Text>

//           </TouchableOpacity>
//         ))}

//          {categories.map((category) => (
//           <TouchableOpacity

//             onPress={() => navigation.navigate('Salons')}>

//               <View style={style.categoryBtnImgCon}>
//                 <Image
//                   source={category.image3}
//                   style={{
//                     height: 35,
//                     width: 35,
//                     resizeMode: 'cover',
//                     borderRadius: 25,
//                   }}
//                 />
//               </View>

//               <Text>
//                 {category.name3}
//               </Text>

//           </TouchableOpacity>
//         ))}

//       </ScrollView>
//     );
//   };

const SearchProducts = ({navigation}) => {
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

              <TouchableOpacity style={{marginLeft: 40}}>
                <Icon
                  name="shopping-cart"
                  color="orange"
                  size={35}
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
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          paddingHorizontal: 10,
          marginBottom: 30,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={22} />
          <TextInput
            style={{flex: 1, fontSize: 20, marginLeft: 10, marginRight: 10}}
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
            source={require('../../assets/filtericon.jpg')}
            style={{
              width: 26,
              height: 26,

              marginTop: 10,
              marginLeft: 5,
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
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
              <Text style={{fontSize: 18, color: '#000'}}>Sort by Rating</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  card: {
    marginHorizontal: 10,

    marginTop: 40,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,

    // height:140,
    // borderRadius:20,
    // borderWidth:1,
    // width:200,
    // alignItems:'center',
    // justifyContent:'center',
    // marginLeft:10
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
    backgroundColor: 'white',
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
    height: 230,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
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

export default SearchProducts;

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
  TextInput,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

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

  React.useEffect(() => {
    fetch('https://backendserver.onrender.com/product/viewProduct')
      .then(response => response.json())
      .then(responseJson => {
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
    return (
      // Flat List Item
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        >
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
            <View style={{flexDirection: 'row', marginLeft: 5, marginRight: 4}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'purple'}}>
                Rs. {item.price}
              </Text>

              {/* <TouchableOpacity>
                <Text style={{marginLeft: 2}}>
                  <Icon
                    style={{color: 'orange', marginBottom: 5, marginRight: 20}}
                    name="shopping-cart"
                    size={30}
                  />
                </Text>
              </TouchableOpacity> */}
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
            style={{flex: 1,marginLeft: 10}}
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            placeholder="Search for Products"
          />
        </View>
      </View>
      <FlatList
        numColumns={2}
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
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
    borderRadius: 10,
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
    height: 220,
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

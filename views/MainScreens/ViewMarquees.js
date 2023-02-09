import React from 'react';
import axios from 'axios';
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
  Modal,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/threecategories';
import { useNavigation } from '@react-navigation/native';
const {width} = Dimensions.get('screen');
const cardWidth = width / 1 - 20;

const SearchandServices1 = () => {
  const navigation = useNavigation(); 
  const [search, setSearch] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = React.useState([]);
  const [masterDataSource, setMasterDataSource] = React.useState([]);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    fetch('https://backendserver.onrender.com/service/viewmarquee')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
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
    return (
      // Flat List Item

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MarqueeDetails', {
            otherParam: item,
          })
        }>
        <View style={style.card}>
          <Image
            style={{
              width: 120,
              height: 120,
              borderRadius: 25,
              top: -30,
              alignSelf:'center',
              alignItems:'center',
              justifyContent:'center',
              alignContent:'center'
              
            }}
            source={{uri: item.images}}
          />

          <View style={{flexDirection: 'row'}}>
            <Text style={style.TextStyle2}>{item.name}</Text>

            <Text style={style.TextStyle6}>
              <Icon
                style={{marginLeft: 4, marginRight: 8, marginTop: 4}}
                name="star"
                size={15}
              />
              {item.ratings.toFixed(1.5)} /{' '}
              <Text>{item.numOfReviews.toFixed(2)}</Text>
            </Text>
          </View>
          <Text style={style.TextStyle3}>
            <Icon
              style={{marginLeft: 4, marginRight: 8, marginTop: 8}}
              name="map"
              size={18}
            />
            {item.location}
          </Text>

          <Text style={style.TextStyle3}>
            <Icon
              style={{marginLeft: 4, marginRight: 8, marginTop: 8}}
              name="home"
              size={18}
            />
            {item.venueType}
          </Text>
         
        </View>
      </TouchableOpacity>
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

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map(category => (
          <TouchableOpacity onPress={() => navigation.navigate('Salons')}>
            <View style={style.categoryBtnImgCon}>
              <Image
                source={category.image1}
                style={{
                  height: 35,
                  width: 35,
                  resizeMode: 'cover',
                  borderRadius: 25,
                }}
              />
            </View>
            <Text>{category.name1}</Text>
          </TouchableOpacity>
        ))}

        {categories.map(category => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Photographers')}>
            <View style={style.categoryBtnImgCon}>
              <Image
                source={category.image2}
                style={{
                  height: 35,
                  width: 35,
                  resizeMode: 'cover',
                  borderRadius: 25,
                }}
              />
            </View>

            <Text>{category.name2}</Text>
          </TouchableOpacity>
        ))}

        {categories.map(category => (
          <TouchableOpacity onPress={() => navigation.navigate('Marquees')}>
            <View style={style.categoryBtnImgCon}>
              <Image
                source={category.image3}
                style={{
                  height: 35,
                  width: 35,
                  resizeMode: 'cover',
                  borderRadius: 25,
                }}
              />
            </View>

            <Text>{category.name3}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
         <View>
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <Text
          style={{marginLeft: 20, fontSize: 25, marginTop: 30, color: 'black'}}>
          Find the Best{' '}
          <Text style={{fontSize: 25, marginTop: 20, color: 'orange'}}>
            Marquees
          </Text>
        </Text>

        <Image
            source={require('../../assets/EEE.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 80,
              marginTop:30,
              marginRight:20,

              alignSelf: 'center',
            }}
          />
        </View>
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
            style={{flex: 1,  marginLeft: 10}}
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            placeholder="Search for Marquees"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}>
          <Image
            source={require('../../assets/filterabc.png')}
            style={{
              width: 26,
              height: 26,

              marginTop: 30,
              marginLeft: 5,
            }}
          />
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 10, marginBottom: 20}}></View>
      <FlatList
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
              height: 100,
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
    display: 'flex',
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    marginBottom: 10,
    backgroundColor: COLORS.white,
  },
  TextStyle1: {
    color: 'orange',
    display: 'flex',
    fontSize: 13,
    marginLeft: 100,
    marginBottom: 20,
    marginTop: 17,
  },
  TextStyle2: {
    color: 'black',
    fontSize: 23,
    marginLeft: 20,
    marginTop: 10,
  },
  TextStyle3: {
    color: 'orange',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  TextStyle4: {
    color: 'purple',
    fontSize: 18,
    marginLeft: 20,
    marginRight: 3,
    marginBottom: 10,
    marginTop: 5,
  },
  TextStyle5: {
    color: 'orange',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 50,
  },
  TextStyle6: {
    color: 'purple',
    fontSize: 15,
    marginLeft: 20,
    marginRight: 2,
    marginTop: 15,
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    marginTop: 20,
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
    marginTop: 3,
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
    marginTop: 30,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },

  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 200,
    marginBottom: 50,
    margin: 5,
    textAlign: 'left',
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});

export default SearchandServices1;

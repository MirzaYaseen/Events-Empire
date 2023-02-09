import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Linking,
  Alert,
  TextComponent
} from 'react-native';
import Drawer from '../ScreensNavigation/Drawer';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import { color } from 'react-native-reanimated';


const url1 = "http://schemas.android.com/apk";
const HomeScreen = () => {
  const navigation = useNavigation();

    const OpenUrl = async(url)=>{
      const isSupported = await Linking.canOpenURL(url);
      if (isSupported){
        await Linking.openURL(url);
      }
      else{
        Alert.alert(`Don't Know: ${url}`);
      }
    }
  
  return (
    <ScrollView>
      

      <Text style={{fontSize:40, textAlign:'center', marginTop:40, color:'black'}}>Events<Text style={{fontSize:40, textAlign:'center', marginTop:40, color:'orange'}}> Empire</Text></Text>
    
    
      <View style={{alignItems: 'center', marginTop:30}}>
       
        <Image
          source={require('../../assets/FullService.jpg')}
          style={{width: '95%', height: 250, borderRadius:20,alignItems:'center',alignSelf:'center',}}>
           
          
        </Image>
        <TouchableOpacity style={{justifyContent:'center', alignItems:'center', }}  onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/logout.png')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 50,
              marginTop: 10,
              alignSelf: 'center',
            }}
          />
          </TouchableOpacity>

           
      {/* <TouchableOpacity
      // onPress={() => navigation.goBack()}
      >
        <Text
          style={{
     
            marginRight: 10,
            marginTop: 10,
            fontSize: 18,
            color: 'blue',
          }}>
          <Icon name="logout" size={25} />
        </Text>
      </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30, color: 'orange', marginTop: 60}}>
              E-Wedding Store
            </Text>
          </View> */}

          <Text
            style={{
              fontSize: 20,
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 15,
              marginRight: 10,
            }}>
            Events Empire is the pakistan's first & largest E-wedding store
            where people can get their desired Products and Services only on one
            click.
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Drawer')}
              style={{
                borderRadius: 20,
                backgroundColor: 'purple',

                marginTop: 50,
                marginBottom: 20,
                padding: 10,
                width: 150,
                height: 50,

                alignSelf: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 17, textAlign: 'center'}}>
                Explore More
              </Text>
            </TouchableOpacity>
          </View>
      </View>
      
        
    </ScrollView>
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
  icon: {
    marginRight: 3,
    marginTop: 5,
    color: 'black',
  },

  TextStyle1: {
    color: 'orange',
    display: 'flex',
    fontSize: 13,
    marginLeft: 100,
    marginBottom: 20,
    marginTop: 17,
  },
});
export default HomeScreen;

import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import AuthContext from '../../contexts/authContext';

const CustomDrawer = props => {
  const {user} = React.useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'purple'}}>
        <Image
          source={{uri: user.avatar}}
          style={{
            height: 60,
            width: 60,
            borderRadius: 40,
            marginBottom: 10,
            marginLeft: 10,
            marginTop: 10,
          }}
        />

        <Text style={{color: 'white', marginLeft: 10, marginBottom: 15}}>
          {user.name}
        </Text>

        <View style={{flex: 1, backgroundColor: 'white'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>
      <View></View>
    </View>
  );
};
const style = StyleSheet.create({});
export default CustomDrawer;

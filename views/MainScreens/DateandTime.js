import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Picker,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import SelectList from 'react-native-dropdown-select-list';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {add} from 'react-native-reanimated';
import {SelectList} from 'react-native-dropdown-select-list';
import TimePicker from 'react-native-simple-time-picker';
const DateandTime = ({navigation, route}) => {
  const [name, onChangeName] = React.useState(null);
  const [mob, onChangeMob] = React.useState('+92 ');
  const [city, onChangeCity] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);
  const [noofGuests, onChangeNumofGuests] = React.useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [subcategory, subsetCategory] = React.useState('');
  const [selected, setSelected] = React.useState('');
  const [selectedHours, setSelectedHours] = React.useState(0);
  const [selectedMinutes, setSelectedMinutes] = React.useState(0);
  const [date, setDate] = React.useState(0);
  const [time, setTime] = React.useState(0);

  const data = [
    {key: '1', value: 'Day'},
    {key: '2', value: 'Night'},
  ];
  const {otherParam} = route.params;

  const submit = () => {
    if (!name || !mob || !city || !address || !date || !time) {
      alert('Please fill all Details');
    } else if (name.length > 15) {
      alert('Your Name is too long');
    } else if (name.length < 3) {
      alert('Your Full Name');
    } else if (city.length < 3) {
      alert('Enter Valid City');
    } else if (city.length > 10) {
      alert('Enter valid city Name');
    } else if (address.length < 5) {
      alert('Enter Full Address');
    } else if (address.length > 30) {
      alert('Address is too long, Write the main one');
    } else if (mob.length < 11 || mob.length > 13) {
      alert('Enter Correct Receiver Mobile Number without any space');
    } else {
      navigation.navigate('PhotographerPayment', {otherParam, shippingInfo: {name, address, city, mob}, date, time});
    }
  };

  // const onChange = (event, selectedDate) => {
  //     const currentDate = selectedDate || date;
  //     setDate(currentDate);

  //     let tempDate = new Date(currentDate);
  //     let fDate =
  //       tempDate.getDate() +
  //       '/' +
  //       (tempDate.getMonth() + 1) +
  //       '/' +
  //       tempDate.getFullYear();
  //     let fTime =
  //       'Hours:' + tempDate.getHours() + '| Minutes:' + tempDate.getMinutes();
  //     setText(fDate + '\n' + fTime);

  //     console.log(fDate + '(' + fTime + ' ) ');
  //   };

  //   const showMode = (currentMode) => {
  //     setShow(true);
  //     setMode(currentMode);
  //   };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(JSON.stringify(date).split('T')[0])
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmtime = time => {
    setTime(JSON.stringify(time).split('T')[1].split('.')[0])
    console.warn('A date has been picked: ', time);
    hideTimePicker();
  };

  return (
    <ScrollView>
      <View style={{marginTop: 20}}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            marginBottom: 40,
            marginTop: '3%',
            color: 'black',
            fontWeight: '600',
          }}>
          Book Service
        </Text>

        <TouchableOpacity
          style={{
            width: '80%',
            height: 50,
            borderRadius: 30,
            backgroundColor: '#FFFEE9',
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          onPress={showDatePicker}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text
            style={{color: 'black', textAlign: 'center', fontWeight: '600'}}>
            Select Booking Date
          </Text>
        </TouchableOpacity>

        {/* <TimePicker
          selectedHours={selectedHours}
          //initial Hourse value
          selectedMinutes={selectedMinutes}
          //initial Minutes value
          onChange={(hours, minutes) => {
            setSelectedHours(hours);
            setSelectedMinutes(minutes);
          }}
        /> */}

        {/* <SelectList
        search={false}
        defaultOption={{key: '1', value: 'Function Time'}}
        boxStyles={{
          borderRadius: 0,
          marginTop: 20,
          width: '75%',
          alignSelf: 'center',
        }}
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
      /> */}

      
        <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          borderRadius: 30,
          backgroundColor: '#FFFEE9',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}
        onPress={showTimePicker}>
        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmtime}
          onCancel={hideTimePicker}
        />
        <Text style={{color: 'black', textAlign: 'center', fontWeight: '600'}}>
          Select Booking Time
        </Text>
      </TouchableOpacity>
 

        {/* <View style={{alignContent:'center', alignItems:'center', alignSelf:'center', marginTop:20}}>
<TextInput
          style={{
            padding: 10,
            borderRadius: 5,
            alignSelf: 'center',
            width:310,
            height:50,
            borderRadius: 10,
            borderWidth: 0.5,
            
          }}
          onChangeText={onChangeNumofGuests}
          value={noofGuests}
          name="name"
          keyboardType={'number-pad'}
          placeholder="Enter Number of Guests"
        />
        
</View> */}

        {/* 

       <Text style={{marginTop: 20, textAlign: 'center'}}>{text}</Text>
      <View>
        <Button title="Select Date" onPress={() => showMode('date')} />
      </View>
      <View>
        <Button title="Select Time" onPress={() => showMode('time')} />
      </View>

      {show && (
        <DateTimePicker
        testID='dateTimePicker'
        value={date}
        is24Hour={false}
        mode={mode}
        display='default'
        onChange={onChange}
        />
          )}  */}

        <Text
          style={{
            textAlign: 'left',
            fontSize: 20,
            marginLeft: 25,
            marginBottom: 20,
            marginTop: 30,
            color: 'purple',
          }}>
          Personal Details
        </Text>

        <TextInput
          style={{
            width: '100%',
            height: 40,
            marginTop: 10,
            borderRadius: 40,
            marginLeft: 25,
            marginRight: 10,
            marginBottom: 10,
          }}
          onChangeText={onChangeName}
          value={name}
          name="name"
          keyboardType={'default'}
          placeholder="Name"
        />

        <TextInput
          style={{
            width: '100%',
            height: 40,
            marginTop: 10,
            borderRadius: 20,
            marginLeft: 25,
            marginRight: 10,
            marginBottom: 10,
          }}
          onChangeText={onChangeCity}
          value={city}
          name="city"
          keyboardType={'default'}
          placeholder="City"
        />

        <TextInput
          style={{
            width: '100%',
            height: 40,
            marginTop: 10,
            borderRadius: 20,
            marginLeft: 25,
            marginRight: 10,
            marginBottom: 10,
          }}
          onChangeText={onChangeAddress}
          value={address}
          name="address"
          keyboardType={'default'}
          placeholder="Postal Address"
        />

        <TextInput
          style={{
            width: '100%',
            height: 40,
            marginTop: 10,
            borderRadius: 20,
            marginLeft: 25,
            marginRight: 10,
            marginBottom: 10,
          }}
          onChangeText={onChangeMob}
          value={mob}
          name="phone"
          keyboardType={'number-pad'}
          placeholder="Phone Number"
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'purple',
            alignItems: 'center',
            alignContent: 'center',
            borderRadius: 50,
            justifyContent: 'center',
            alignSelf: 'center',
            display: 'flex',
            width: 100,
            height: 40,

            marginBottom: 20,

            marginTop: 40,
          }}
          onPress={submit}>
          <Text
            style={{
              color: 'white',
              alignItems: 'center',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
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

export default DateandTime;

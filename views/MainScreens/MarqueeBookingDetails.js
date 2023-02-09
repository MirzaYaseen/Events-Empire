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
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import SelectList from 'react-native-dropdown-select-list';
// import DateTimePicker from '@react-native-community/datetimepicker';
import {SelectList} from 'react-native-dropdown-select-list';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const DateandTime = ({navigation, route}) => {
  const [name, onChangeName] = React.useState(null);
  const [mob, onChangeMob] = React.useState(null);
  const [city, onChangeCity] = React.useState(null);
  const [address, onChangeAddress] = React.useState(null);
  const [noofGuests, onChangeNumofGuests] = React.useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [subcategory, subsetCategory] = React.useState('');
  // const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState(null);
  const [selected, setSelected] = React.useState('');
  const [venues, setVenues] = React.useState();
  const [menu, setMenu] = React.useState();
  const [maxCapacity, setMaxCapacity] = React.useState();
  const [date, setDate] = React.useState(null);
  const [bookings, setBookings] = React.useState([]);
  const [filterBookings, setFilterBookings] = React.useState([]);

  const data = [
    {key: '1', value: 'Daisy'},
    {key: '2', value: 'Dynasty'},
  ];
  const dataB = [
    {key: '1', value: 'Menu 1'},
    {key: '2', value: 'Menu 2'},
  ];
  const dataC = [
    {key: '1', value: 'Lunch'},
    {key: '2', value: 'Dinner'},
  ];

  const {otherParam} = route.params;
  console.log(otherParam.seller, 'venues');

  const submit = () => {
    console.log(otherParam)
    const data = otherParam.goldPlan.filter((data) => (
      data.venueName === venues
    ))
    setMaxCapacity(data[0].maxCapacity)
    if(noofGuests > maxCapacity){
      alert(`Maximum Capacity is ${maxCapacity}`);
    }
    else if (noofGuests < 100) {
      alert('Minimum Capacity is 100')
    }
    else if (filterBookings.length > 0) {
      alert('Marquee is already booked on this date')
    }
    else {
      navigation.navigate('PaymentPersonal', {otherParam: {venues, menu, date, selected, noofGuests, orderItems: otherParam.name, seller: otherParam.seller}});
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
    console.log(date);
    setDate(JSON.stringify(date).split('T')[0])
    hideDatePicker();
  };

  React.useEffect(() => {
    const getData = async() => {
      const res = await axios.get('https://backendserver.onrender.com/order/orders')
      setBookings(res.data)
    }
    getData()
  }, [])

  React.useEffect(() => {
    const getData = async() => {
      console.log(selected)
      const filterData = bookings.filter((data) => (
        data.date == date.split('"')[1] && data.time === selected
      ))
      setFilterBookings(filterData)
      console.log("Data: ", filterData)
    }
    getData()
  }, [date, selected])



  return (
    <View style={{marginTop: 20}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 35,
          marginBottom: 40,
          marginTop: '15%',
          color: 'black',
          fontWeight: '600',
        }}>
        Book Marquee
      </Text>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderRadius: 5,
          backgroundColor: 'lightwhite',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginBottom: 5,
        }}
        onPress={showDatePicker}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <Text style={{color: 'black', textAlign: 'center', fontWeight: '600'}}>
          Select Booking Date
        </Text>
      </TouchableOpacity>

      {/* <SelectList
        search={false}
        defaultOption={{key: '1', value: 'Venues'}}
        boxStyles={{
          borderRadius: 0,
          marginTop: 20,
          width: '90%',
          alignSelf: 'center',
        }}
        setSelected={val => setSelected(val)}
        data={otherParam.goldPlan}
        save="value"
      /> */}

      <Picker
        selectedValue={venues}
        onValueChange={(itemValue, itemIndex) =>
          setVenues(itemValue)
        }>
          <Picker.Item label={`Select Venue`} value={'Select Venue'} />
          {otherParam?.goldPlan?.map((data) => (
          <Picker.Item label={data?.venueName} value={data?.venueName} />
          ))}
      </Picker>
      {/* <SelectList
        search={false}
        defaultOption={{key: '1', value: 'Menus'}}
        boxStyles={{
          borderRadius: 0,
          marginTop: 40,
          width: '90%',
          alignSelf: 'center',
        }}
        setSelected={val1 => setSelected(val1)}
        data={dataB}
        save="value"
      /> */}

      <Picker
        selectedValue={menu}
        onValueChange={(itemValue, itemIndex) =>
          setMenu(itemValue)
        }>
          <Picker.Item label={`Select Menu`} value={'Select Menu'} />
          {otherParam?.basicPlan?.map((data, index) => (
          <Picker.Item label={`Menu (PKR ${data?.basicPrice})`} value={data?.basicPrice} />
          ))}
      </Picker>
      
      <SelectList
        defaultOption={{key: '1', value: 'Time'}}
        search={false}
        boxStyles={{
          borderRadius: 0,
          marginTop: 40,
          width: '90%',
          alignSelf: 'center',
        }}
        setSelected={val2 => setSelected(val2)}
        data={dataC}
        save="value"
      />
      {/* <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <DropDownPicker
          style={{
            width: '80%',
            height: 50,
            marginTop: 20,
            borderRadius: 25,
            marginBottom:30
          }}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View> */}

      <View
        style={{
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 40,
        }}>
        <TextInput
          style={{
            padding: 10,
            borderRadius: 0,
            alignSelf: 'center',
            width: 355,
            height: 50,

            borderWidth: 0.5,
            marginBottom: 30,
          }}
          onChangeText={onChangeNumofGuests}
          value={noofGuests}
          name="name"
          keyboardType={'number-pad'}
          placeholder="Enter Number of Guests"
        />
      </View>

      {/* <Text style={{marginTop: 20, textAlign: 'center'}}>{text}</Text>
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
          )} */}

      {/* <Text
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
      /> */}

      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          alignItems: 'center',
          alignContent: 'center',
          borderRadius: 20,
          justifyContent: 'center',
          alignSelf: 'center',
          display: 'flex',
          width: 200,
          height: 40,

          marginBottom: 20,

          marginTop: 30,
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

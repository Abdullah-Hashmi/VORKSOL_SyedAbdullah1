import React, {useState} from 'react';
import {contactListData} from '../data/index';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../constants';
import {StatusBar} from 'react-native';

const Recents = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredCalls, setFilteredCalls] = useState(contactListData);

  // Helper function to format time in relative and absolute formats
  const formatCallTime = timestamp => {
    const now = new Date();
    const callTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - callTime) / (1000 * 60));
    const hours = callTime.getHours();
    const minutes = callTime.getMinutes();
    const formattedTime = `${hours % 12 || 12}:${
      minutes < 10 ? `0${minutes}` : minutes
    } ${hours >= 12 ? 'PM' : 'AM'}`;

    if (diffInMinutes < 60) {
      return `${diffInMinutes} mins ago`;
    } else if (diffInMinutes < 1440) {
      return `Today at ${formattedTime}`;
    } else {
      return `on ${callTime.toDateString()} at ${formattedTime}`;
    }
  };

  // Handle search filter based on the contact's name
  const handleSearch = text => {
    setSearch(text);
    const filteredData = contactListData.filter(call =>
      call.fullName.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredCalls(filteredData);
  };

  const renderCallItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetailedContact', {
          userName: item.fullName,
          userImg: item.userImg,
          userPhone: item.phone,
          callDuration: item.duration,
        })
      }
      style={styles.callContainer}>
      <Image source={item.userImg} style={styles.callUserImage} />
      <View style={styles.callInfo}>
        <Text style={styles.callUserName}>{item.fullName}</Text>
        <View style={styles.calling}>
          <Ionicons
            style={styles.callArrow}
            name={
              item.callType === 'incoming'
                ? 'arrow-down-outline'
                : 'arrow-up-outline'
            }
            size={16}
            color={item.callType === 'missed' ? 'red' : 'green'}
          />
          <Text style={styles.callTime}>{formatCallTime(item.callTime)}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.callIcon}
        onPress={() =>
          navigation.navigate('Calling', {
            userName: item.fullName,
            userImg: item.userImg,
          })
        }>
        <Ionicons name="call" size={20} color={COLORS.primary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.area}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.secondaryWhite}
      />
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.gray} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search contacts"
            placeholderTextColor={COLORS.gray}
            value={search}
            onChangeText={handleSearch}
          />
        </View>

        {/* FlatList to show the filtered calls */}
        <FlatList
          data={filteredCalls}
          renderItem={renderCallItem}
          keyExtractor={item => item.id.toString()}
          showVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 60}}
          initialNumToRender={20}
          removeClippedSubviews={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: COLORS.secondaryWhite,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: SIZES.width - 32,
    height: 50,
    marginVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    marginHorizontal: 12,
    backgroundColor: COLORS.white,
    color: COLORS.black,
  },
  callContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: COLORS.secondaryWhite,
    borderBottomWidth: 1,
  },
  callUserImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  callInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  callUserName: {
    fontSize: 16,
    color: COLORS.black,
  },
  calling: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  callTime: {
    fontSize: 14,
    color: COLORS.secondaryGray,
    marginLeft: 8,
  },
  callIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  callArrow: {
    transform: [{rotate: '45deg'}],
  },
});

export default Recents;

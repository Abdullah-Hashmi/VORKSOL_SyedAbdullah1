import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, icons} from '../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {contactListData} from '../data';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Contacts = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(contactListData);

  const handleSearch = text => {
    setSearch(text);

    const filteredData = contactListData.filter(user =>
      user.fullName.toLowerCase().includes(text.toLowerCase()),
    );

    setFilteredUsers(filteredData);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.navigate('DetailedContact', {
            userName: item.fullName,
            userImg: item.userImg,
            userPhone: item.phone,
          })
        }
        style={[
          styles.userContainer,
          index % 2 !== 0 ? styles.oddBackground : null,
        ]}>
        {/* User item content */}
        <View style={styles.userImageContainer}>
          {/* User Image */}
          <Image
            source={item.userImg}
            resizeMode="cover"
            style={styles.userImage}
          />
        </View>
        <View style={{flexDirection: 'column', width: SIZES.width - 104}}>
          <View style={styles.userInfoContainer}>
            <Text style={styles.userName}>{item.fullName}</Text>
            {/* Display phone number under full name */}
            <Text style={styles.phoneNumber}>{item.phone}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderContent = () => {
    return (
      <View>
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
            selectionColor={COLORS.primary}
          />
        </View>
        <FlatList
          data={filteredUsers}
          showVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{paddingBottom: 50}} // Extra padding at the bottom
          style={{flexGrow: 1}} // Ensure the FlatList takes up all available space
          ListFooterComponent={<View style={{height: 90}} />} // Additional footer for padding
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden={true} />
      <View style={styles.container}>{renderContent()}</View>
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
    backgroundColor: COLORS.secondaryWhite,
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
  userContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLORS.secondaryWhite,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  oddBackground: {
    backgroundColor: COLORS.white,
  },
  userImageContainer: {
    paddingVertical: 15,
    marginRight: 22,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  userInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 4,
  },
  phoneNumber: {
    fontSize: 14,
    color: COLORS.gray,
  },
});

export default Contacts;

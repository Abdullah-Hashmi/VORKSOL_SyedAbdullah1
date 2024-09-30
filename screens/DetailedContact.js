import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants';
import {contactListData} from '../data';

const DetailedContact = ({route, navigation}) => {
  const {userName, userImg, userPhone} = route.params;

  // Filter the call history for the specific user
  const userCallData = contactListData.filter(
    contact => contact.fullName === userName,
  );

  // Helper function to handle icon logic for calls
  const getCallIcon = callType => {
    switch (callType) {
      case 'incoming':
        return {
          icon: 'arrow-down-outline',
          color: 'green',
        };
      case 'outgoing':
        return {
          icon: 'arrow-up-outline',
          color: 'green',
        };
      case 'missed':
      case 'missed-incoming':
        return {
          icon: 'arrow-down-outline',
          color: 'red',
        };
      case 'missed-outgoing':
        return {
          icon: 'arrow-up-outline',
          color: 'red',
        };
      default:
        return {
          icon: 'call-outline',
          color: 'gray',
        };
    }
  };

  const renderCallItem = ({item}) => {
    const {icon, color} = getCallIcon(item.callType); // Get the icon and color
    return (
      <View style={styles.callItem}>
        <Ionicons style={styles.callIcon} name={icon} size={16} color={color} />
        <View style={styles.callDetails}>
          <Text style={styles.callDate}>
            {new Date(item.callTime).toLocaleString()}
          </Text>
          {item.duration ? (
            <Text style={styles.callDuration}>{item.duration} mins</Text>
          ) : (
            <Text style={styles.callDuration}>Missed Call</Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color={COLORS.primary} />
      </TouchableOpacity>

      <View style={styles.userProfile}>
        <Image source={userImg} style={styles.profileImage} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.userphone}>{userPhone}</Text>
      </View>

      <View style={styles.callControls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => navigation.navigate('Calling', {userName, userImg})}>
          <Ionicons name="call-outline" size={36} color={COLORS.primary} />
          <Text style={styles.controlText}>Call</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <MaterialIcons name="video-call" size={36} color={COLORS.primary} />
          <Text style={styles.controlText}>Video</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome name="comment" size={36} color={COLORS.primary} />
          <Text style={styles.controlText}>Message</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.callHistory}>
        <Text style={styles.historyTitle}>Call History</Text>
        <FlatList
          data={userCallData} // Use filtered call data
          renderItem={renderCallItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
  userProfile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginBottom: 15,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  userphone: {
    fontSize: 15,
    color: COLORS.secondaryGray,
  },
  callControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  controlButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.primary,
    marginTop: 5,
  },
  callHistory: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  callDetails: {
    marginLeft: 15,
  },
  callDate: {
    fontSize: 16,
    color: COLORS.secondaryGray,
  },
  callDuration: {
    fontSize: 14,
    color: COLORS.secondaryGray,
  },
  callIcon: {
    marginRight: 10,
    transform: [{rotate: '45deg'}],
  },
});

export default DetailedContact;

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES} from '../constants'; // Assuming you have these constants defined

const Calling = ({route, navigation}) => {
  const {userName, userImg} = route.params; // Pass user image as well if available

  const [callStatus, setCallStatus] = useState('Calling...');
  const [colors, setColors] = useState({
    keyboard: COLORS.secondaryGray,
    recording: COLORS.secondaryGray,
    mute: COLORS.secondaryGray,
    speaker: COLORS.secondaryGray,
  });

  const [callDuration, setCallDuration] = useState(0);
  const textInputRef = useRef(null); // Ref for TextInput

  useEffect(() => {
    // Simulate call status and start call duration after a few seconds
    const timeout = setTimeout(() => setCallStatus('In Call...'), 3000);

    let interval;
    if (callStatus === 'In Call...') {
      interval = setInterval(() => {
        setCallDuration(prevDuration => prevDuration + 1);
      }, 1000);
    }

    // Clear interval and timeout on component unmount
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [callStatus]);

  // Toggle color for the specific button
  const toggleColor = button => {
    setColors(prevColors => ({
      ...prevColors,
      [button]:
        prevColors[button] === COLORS.secondaryGray
          ? COLORS.primary
          : COLORS.secondaryGray,
    }));
  };

  // Format call duration in mm:ss
  const formatDuration = seconds => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <View style={styles.container}>
      {/* Caller's Profile Section */}
      <View style={styles.callerInfo}>
        <Image
          source={userImg}
          style={styles.profileImage}
          onError={() => console.log('Error loading image')} // Debugging image loading errors
        />
        <Text style={styles.callerName}>{userName}</Text>
        <Text style={styles.callStatus}>{callStatus}</Text>
        {callStatus === 'In Call...' && (
          <Text style={styles.callDuration}>
            {formatDuration(callDuration)}
          </Text>
        )}
      </View>

      {/* First Row of Controls */}
      <View style={styles.callControlsFirstRow}>
        <TouchableOpacity
          style={[styles.controlButton, styles.keyboardButton]}
          onPress={() => toggleColor('keyboard')} // Change color on press
        >
          <Ionicons name="keypad" size={36} color={colors.keyboard} />
          <Text style={[styles.controlText, styles.keyboardText]}>
            Keyboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.controlButton, styles.keyboardButton]}
          onPress={() => toggleColor('recording')} // Change color on press
        >
          <Ionicons
            name="recording-outline"
            size={36}
            color={colors.recording}
          />
          <Text style={[styles.controlText, styles.keyboardText]}>Record</Text>
        </TouchableOpacity>
      </View>

      {/* Second Row of Controls */}
      <View style={styles.callControls}>
        {/* Mute Button */}
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => toggleColor('mute')} // Change color on press
        >
          <Ionicons name="mic-off" size={36} color={colors.mute} />
          <Text style={styles.controlText}>Mute</Text>
        </TouchableOpacity>

        {/* Speaker Button */}
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => toggleColor('speaker')} // Change color on press
        >
          <Ionicons name="volume-high" size={36} color={colors.speaker} />
          <Text style={styles.controlText}>Speaker</Text>
        </TouchableOpacity>

        {/* End Call Button */}
        <TouchableOpacity
          style={[styles.controlButton, styles.endCallButton, {top: 15}]}
          onPress={() => navigation.goBack()} // End call and go back
        >
          <Ionicons
            name="call"
            size={31}
            color={COLORS.white}
            style={{transform: [{rotate: '90deg'}]}}
          />
        </TouchableOpacity>
      </View>

      {/* Hidden TextInput to open keyboard */}
      <TextInput
        ref={textInputRef}
        style={styles.hiddenInput}
        onFocus={() => console.log('Keyboard opened')} // Optional: Add any action on focus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  callerInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: COLORS.primary,
    marginBottom: 20,
    backgroundColor: COLORS.lightGray, // Fallback background color in case image fails
  },
  callerName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 10,
  },
  callStatus: {
    fontSize: 20,
    color: COLORS.secondaryGray,
  },
  callDuration: {
    fontSize: 18,
    color: COLORS.secondaryGray,
    marginTop: 10,
  },
  callControlsFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  callControls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 50,
  },
  controlButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 40,
    backgroundColor: COLORS.lightGray,
    width: 100,
    height: 100,
  },
  controlText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.secondaryGray,
  },
  keyboardButton: {
    backgroundColor: COLORS.lightGray, // Customize if needed
  },
  keyboardText: {
    color: COLORS.secondaryGray, // Customize if needed
  },
  endCallButton: {
    backgroundColor: 'red',
    borderRadius: 50,
    padding: 20,
    width: 70,
    height: 70,
  },
  hiddenInput: {
    position: 'absolute',
    bottom: -1000, // Off-screen
    left: -1000, // Off-screen
    width: 0,
    height: 0,
  },
});

export default Calling;

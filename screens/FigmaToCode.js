// Task 1

import React, {useRef} from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button as RNPButton} from 'react-native-paper'; // Correctly import the Button from react-native-paper

const FigmaToCode = () => {
  const scrollViewRef = useRef(null);

  return (
    <View style={{flex: 1}}>
      {/* Topbar stays at the top */}
      <View style={styles.Topbar}>
        <View style={styles.notificationContainer}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#fff"
            style={styles.notificationIcon}
          />
          <Text style={styles.Topbartext}>Notifiche attive</Text>
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        contentInset={{top: 50}}>
        <View style={styles.container1}>
          <Image
            style={styles.fallrestartseason1Icon}
            resizeMode="cover"
            source={require('../assets/images/FallRestartSeason1.png')}
          />
          <LinearGradient
            style={styles.tropicalNightsV600101}
            locations={[0, 1]}
            colors={['rgba(0, 0, 0, 0)', '#000']}
            useAngle={true}
            angle={180}>
            <ImageBackground
              style={styles.icon}
              resizeMode="cover"
              source={require('../assets/images/mainImage.png')}
            />
          </LinearGradient>
        </View>

        {/* Scrollable Progress Bar */}
        <LinearGradient
          style={[styles.gp10, styles.gp10Position]}
          locations={[0, 1]}
          colors={['#4B0082', '#800080']}
          useAngle={true}
          angle={180}>
          <ScrollView
            ref={scrollViewRef}
            style={styles.progressBar}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.progressBarScrollViewContent}>
            <Image
              style={styles.forziere2Icon}
              resizeMode="cover"
              source={require('../assets/images/forziere-11.png')}
            />
            <View style={styles.lines1}>
              <View style={[styles.progress, styles.linesBg]} />
            </View>
            <Image
              style={styles.forziere1Icon1}
              resizeMode="cover"
              source={require('../assets/images/forziere-11.png')}
            />
            <View style={styles.lines1}>
              <View style={[styles.progress, styles.linesBg]} />
            </View>
            <Image
              style={styles.forziere2Icon}
              resizeMode="cover"
              source={require('../assets/images/forziere-11.png')}
            />
          </ScrollView>
        </LinearGradient>

        {/* Group of Images */}
        <View style={styles.groupParent}>
          <Image
            style={styles.frameChild}
            resizeMode="cover"
            source={require('../assets/images/group-1274.png')}
          />
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require('../assets/images/group-1267.png')}
          />
        </View>
        <LinearGradient
          style={[styles.drops, styles.dropsLayout]}
          locations={[0, 1]}
          colors={['#612db8', '#ec1be3']}
          useAngle={true}
          angle={85.04}>
          <View style={styles.title}>
            <View style={styles.chips}>
              <Text style={[styles.chip, styles.textLayout]}>
                Exclusive drops
              </Text>
            </View>
            <Text style={[styles.vansSeason, styles.creatorsTypo]}>
              Vans season
            </Text>
            <View style={styles.line} />
            <Text style={[styles.loremIpsumDolor, styles.textTypo]}>
              Lorem ipsum dolor sit amet
            </Text>
            <RNPButton mode="contained" labelStyle={styles.frameButtonBtn}>
              Vai allo shop
            </RNPButton>
          </View>
          <Image
            style={styles.dropsChild}
            resizeMode="cover"
            source={require('../assets/images/frame-1297.png')}
          />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Topbar: {
    height: 50,
    backgroundColor: '#B94FC6',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    zIndex: 10,
    paddingHorizontal: 15,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Topbartext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  tropicalNightsV600101: {
    top: 52,
    height: 370,
    width: '100%',
    borderBottomLeftRadius: 72,
    borderBottomRightRadius: 72,
    overflow: 'hidden',
  },
  icon: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    paddingTop: 30, // Adjust this value to provide space for the Topbar
  },
  fallrestartseason1Icon: {
    top: 30,
    left: -93,
    width: 562,
    height: 150,
    position: 'absolute',
  },
  gp10: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  gp10Position: {
    marginVertical: 0, // Set to 0 to remove vertical spacing
    paddingHorizontal: 15,
  },
  progressBar: {
    height: 150,
    paddingVertical: 10,
  },
  progressBarScrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  lines1: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  progress: {
    width: 80,
    height: 6,
    backgroundColor: '#2FE98C',
    borderRadius: 3,
  },
  forziere2Icon: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
  forziere1Icon1: {
    width: 130,
    height: 130,
  },
  groupParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 200,
    width: '100%', // This ensures the groupParent takes full width
    backgroundColor: 'black',
    marginVertical: 0, // Set to 0 to remove vertical margin
  },
  frameChild: {
    width: 150,
    height: 150,
  },
  frameItem: {
    width: 150,
    height: 150,
  },
});

export default FigmaToCode;

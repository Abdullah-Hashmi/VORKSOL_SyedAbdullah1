import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, images} from '../constants';
import {StatusBar} from 'react-native';
import Button from '../conponents/Button';
import {Image} from 'react-native';
// import { useNavigation } from "@react-navigation/native";

const Intro = ({navigation}) => {
  // const navigation = useNavigation();

  return (
    <ImageBackground source={images.background} style={{flex: 1}}>
      <StatusBar hidden />

      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>
          Converted provided Figma design into React Native CLI code
        </Text>
        {/* <Text style={styles.bottomSubtitle}>
          Connect people around the world for free
        </Text> */}
        <Button
          title="Task 1"
          onPress={() => {
            navigation.navigate('FigmaToCode');
          }}
          style={{
            marginVertical: 24,
            width: SIZES.width - 64,
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>
          Developed a Simple Contact List App using React Native CLI
        </Text>
        {/* <Text style={styles.bottomSubtitle}>
          Connect people around the world for free
        </Text> */}
        <Button
          title="Task 2"
          onPress={() => {
            navigation.navigate('Main');
          }}
          style={{
            marginVertical: 24,
            width: SIZES.width - 64,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '16',
          }}>
          <Text
            style={{
              fontSize: 12,
              color: 'white',
              fontFamily: 'medium',
            }}>
            by :{' '}
          </Text>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
              fontFamily: 'semiBold',
            }}>
            Syed Abdullah
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    flex: 2,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    alignItems: 'center',
    padding: 16,
  },
  bottomTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    margin: 12,
  },
  bottomSubtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    margin: 12,
  },
  circleViewContainer: {
    width: SIZES.width - 32,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  circleView: {
    width: (SIZES.width - 32) / 2 - 8,
    height: (SIZES.width - 32) / 2 - 8,
    borderRadius: 9999,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
});

export default Intro;

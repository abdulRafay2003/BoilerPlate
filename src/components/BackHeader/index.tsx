import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {Colors, Images, Metrix, NavigationService} from '../../config';
import {CustomText} from '..';

type BackHeaderProps = {
  heading?: string;
  customeStyle?: StyleProp<ViewStyle>;
  btnImage?: ImageSourcePropType;
  backArrow?: boolean;
  backFunction?: () => void;
  isBoldHeading?: boolean;
  btnImageStyle?: ImageStyle;
};

export const BackHeader: React.FC<BackHeaderProps> = ({
  heading = '',
  customeStyle,
  btnImage = Images.BackBtn,
  backArrow = true,
  backFunction = () => NavigationService.goBack(),
  isBoldHeading,
  btnImageStyle,
}) => {
  return (
    <View style={[styles.container, customeStyle]}>
      {backArrow ? (
        <TouchableOpacity style={styles.backButton} onPress={backFunction}>
          <Image
            source={Images.Arrow}
            resizeMode="contain"
            style={[styles.backImage, btnImageStyle]}
          />
        </TouchableOpacity>
      ) : (
        <View style={isBoldHeading ? {} : styles.backButton} />
      )}
      <View style={isBoldHeading ? {} : styles.headingContainer}>
        {isBoldHeading ? (
          <CustomText.LargeBoldText>{heading}</CustomText.LargeBoldText>
        ) : (
          <CustomText.LargeSemiBoldText customStyle={{color:Colors.Base}}>{heading}</CustomText.LargeSemiBoldText>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    width: '100%',
    paddingTop: Metrix.VerticalSize(10),
    paddingBottom: Metrix.VerticalSize(10),
  },
  backButton: {
    width: '25%',
    // borderWidth:1,
    // borderColor:'white'
  },
  backImage: {
    width: Metrix.HorizontalSize(20),
    height: Metrix.VerticalSize(20),
  },
  headingContainer: {
    // paddingVertical:5,
    width: '50%',
    alignItems: 'center',
    justifyContent:"center"
  },
});

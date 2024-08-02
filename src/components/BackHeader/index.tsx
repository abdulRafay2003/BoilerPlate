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
import {
  Colors,
  FontType,
  Images,
  Metrix,
  NavigationService,
  Utills,
} from '../../config';
import {CustomText} from '..';
import {normalizeFont} from '../../config/metrix';

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
            source={Images.ArrowChevron}
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
          <CustomText.LargeSemiBoldText
            customStyle={{
              color: Utills.selectedThemeColors().Primary,
              fontSize: normalizeFont(18),
            }}>
            {heading}
          </CustomText.LargeSemiBoldText>
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
    // paddingTop: Metrix.VerticalSize(10),
    paddingBottom: Metrix.VerticalSize(10),
  },
  backButton: {
    width: '10%',
  },
  backImage: {
    width: Metrix.HorizontalSize(30),
    height: Metrix.VerticalSize(30),
    tintColor: Utills.selectedThemeColors().Primary,
    transform: [{rotate: '180deg'}],
  },
  headingContainer: {
    // paddingVertical:5,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

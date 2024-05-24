import React, {FC, useState, Ref} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  TextInputProps,
  ImageProps,
  ViewStyle,
} from 'react-native';
import {Colors, Fonts, Metrix, Images, FontType, Utills} from '../../config';

type CustomSearchBarProps = TextInputProps & {
  customStyle?: TextInputProps['style'];
  isIcon?: boolean;
  iconImage?: ImageProps['source'];
  onBtnPress?: () => void;
  iconStyle?: ImageProps['style'];
  inputRef?: Ref<TextInput>;
};

export const CustomSearchBar: FC<CustomSearchBarProps> = ({
  customStyle,
  isIcon,
  iconImage,
  onBtnPress,
  iconStyle = {},
  inputRef,
  ...rest
}) => {
  return (
    <View style={styles.textContainer}>
      <Image
        source={Images.Search}
        style={{
          width: 24,
          height: 24,
          marginLeft: Metrix.HorizontalSize(10),
        }}
        resizeMode="contain"
      />
      <TextInput
        selectionColor={Utills.selectedThemeColors().Primary}
        style={[styles.textInput, customStyle]}
        placeholderTextColor={Utills.selectedThemeColors().TextInputPlaceholserColor}
        ref={inputRef}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    //   borderWidth: 2,
    borderRadius: Metrix.VerticalSize(50),
    height: Metrix.VerticalSize(50),
    width: '100%',
    flexDirection: 'row',
    //   justifyContent: 'space-between',
    marginVertical: Metrix.VerticalSize(10),
    backgroundColor: '#FBFBFB',
    borderColor: Utills.selectedThemeColors().TextInputBorderColor,
    alignItems: 'center',
    overflow: 'hidden',
  },
  textInput: {
    // borderWidth:1,
    color: Utills.selectedThemeColors().PrimaryTextColor,
    fontSize: Metrix.customFontSize(14),
    padding: Metrix.VerticalSize(12),
    fontFamily: Fonts['Regular'],
    // height: '100%',
    width: '87%',
  },
});

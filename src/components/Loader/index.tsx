import {
  ActivityIndicator,
  Modal,
  Platform,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors, Metrix, Utills} from '../../config';
import {ActivityIndicatorProps} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {CustomText, LottieAnimatedComponent} from '..';
import {useThemeHook} from '../../hooks';

type LoaderProps = ActivityIndicatorProps & {};

export const Loader: React.FC<LoaderProps> = ({size = 'large'}) => {
  const isLoadingAuth = useSelector((state: RootState) => state.user.loader);
  const isLoadingHome = useSelector((state: RootState) => state.home.loader);
  const checkingAuthActionLoader = useSelector(
    (state: RootState) => state.user.checkingLoader,
  );
  const checkingHomeActionLoader = useSelector(
    (state: RootState) => state.home.checkingLoader,
  );

  console.log(
    `Auth : ${checkingAuthActionLoader} ${isLoadingAuth}`,
    `\n`,
    `Home : ${checkingHomeActionLoader} ${isLoadingHome}`,
  );
  if (isLoadingAuth || isLoadingHome) {
    return (
      <Modal
        visible={isLoadingAuth || isLoadingHome}
        transparent={true}
        animationType={'fade'}>
        <View style={styles.mainContaienr}>
          {/* <CustomText.MediumText>
            {`Auth : ${checkingAuthActionLoader}`}
            {`Home : ${checkingHomeActionLoader}`}
          </CustomText.MediumText> */}
          {/* <ActivityIndicator size={size} color={Utills.selectedThemeColors().Primary} /> */}
          <LottieAnimatedComponent speed={1.5} />
        </View>
      </Modal>
    );
  } else {
    return null;
  }
};

interface LoaderStyles {
  mainContaienr: ViewStyle;
}
const styles = StyleSheet.create<LoaderStyles>({
  mainContaienr: {
    flex: 1,
    backgroundColor: Utills.selectedThemeColors().BaseOpacity('1'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

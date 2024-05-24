import {
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  ImageProps,
} from 'react-native';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {Images, Metrix, NavigationService, RouteNames, Utills} from '../config';
import {TabStack} from './TabStack';
import {CustomText} from '../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {AuthActions} from '../redux/actions';

const Drawer = createDrawerNavigator();

const DrawerContent: React.FC = () => {
  const dispatch = useDispatch();
  const DrawerElement = [
    {
      label: 'About us',
      icon: Images.About,
      onPress: () => {
        NavigationService.navigate(RouteNames.HomeRoutes.NavigationScreen);
      },
    },
    {
      label: 'Best Points Program Members',
      icon: Images.Coins,
      onPress: () => {},
    },
    {
      label: 'Invitation',
      icon: Images.Invitation,
      onPress: () => {},
    },
    {
      label: 'Invitation rewards',
      icon: Images.Certificate,
      onPress: () => {},
    },
    {
      label: 'Common questions',
      icon: Images.Common,
      onPress: () => {},
    },
    {
      label: 'Term & conditions',
      icon: Images.TermCondition,
      onPress: () => {},
    },
    {
      label: 'Privacy policy',
      icon: Images.PrivacyPilicy,
      onPress: () => {},
    },
    {
      label: 'Help center',
      icon: Images.HelpCenter,
      onPress: () => {},
    },
    {
      label: 'Logout',
      icon: Images.LogOut,
      onPress: () => dispatch(AuthActions.loginSuccess(false)),
    },
  ];
  return (
    <View style={styles.userInfoSection}>
      <View
        style={{
          // borderWidth:1,
          paddingLeft: 20,
          paddingVertical: 5,
        }}>
        <Avatar.Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
          }}
          size={50}
        />
        <Title style={styles.title}>Dawid Urbaniak</Title>
      </View>

      <View style={styles.drawerSection}>
        {DrawerElement.map((option, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            key={index}
            style={{
              // borderWidth:1,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              paddingRight: Metrix.HorizontalSize(20),
            }}>
            <DrawerItem
              icon={({color, size}) => (
                <Image
                  key={index}
                  source={option.icon}
                  style={{
                    width: Metrix.HorizontalSize(17),
                    height: Metrix.VerticalSize(17),
                  }}
                  resizeMode="contain"
                />
              )}
              label={option.label}
              labelStyle={{
                // width:"100%",
                // borderWidth:1,
                fontSize: 14,
                color: '#222',
              }}
              onPress={option.onPress}
              style={{width: '80%'}}
            />
            <Image
              key={index}
              source={Images.Stroke}
              style={{
                width: Metrix.HorizontalSize(10),
                height: Metrix.VerticalSize(10),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
    // </DrawerContentScrollView>
  );
};

const HeaderIconsComponent: React.FC<{
  icon: ImageProps['source'];
  onPress: () => void;
  size?: number;
}> = ({icon, onPress, size}) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        width: Metrix.HorizontalSize(size || 30),
        height: Metrix.VerticalSize(size || 30),
      }}
    />
  </TouchableOpacity>
);

const CustomHeader = ({navigation}: {navigation: any}) => {
  //   const navigation = useNavigation();

  const headerIconsData = [
    {
      id: '1',
      icon: Images.Drawer,
      onPress: () => navigation?.openDrawer(),
    },
    {
      id: '2',
      icon: Images.NMO,
      onPress: () => {},
      size: 50,
    },
    {
      id: '3',
      icon: Images.BellActive,
      onPress: () => {},
      size: 20,
    },
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Metrix.HorizontalSize(10),
        marginTop: Metrix.VerticalSize(40),
        // borderWidth: 1,
      }}>
      {headerIconsData?.map(item => (
        <HeaderIconsComponent
          key={item?.id}
          icon={item?.icon}
          onPress={item?.onPress}
          size={item?.size}
        />
      ))}
      {/* <Image
        source={Images.GoogleLogo}
        resizeMode="contain"
        style={{
          width: Metrix.HorizontalSize(30),
          height: Metrix.VerticalSize(30),
        }}
      />
      <Image
        source={Images.GoogleLogo}
        resizeMode="contain"
        style={{
          width: Metrix.HorizontalSize(30),
          height: Metrix.VerticalSize(30),
        }}
      />
      <Image
        source={Images.GoogleLogo}
        resizeMode="contain"
        style={{
          width: Metrix.HorizontalSize(30),
          height: Metrix.VerticalSize(30),
        }}
      /> */}
    </View>
  );
};

export const DrawerStack: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({navigation, route, options}) => {
          return <CustomHeader navigation={navigation} />;
        },
      }}
      drawerContent={() => <DrawerContent />}>
      {/* <DrawerContent /> */}
      <Drawer.Screen
        name={RouteNames.HomeRoutes.TabStack}
        component={TabStack}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    position: 'absolute',
    zIndex: 999,
    flex: 1,
  },
  userInfoSection: {
    marginTop: 50,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    paddingTop: 25,
    borderTopWidth: 1,
    borderColor: Utills.selectedThemeColors().InActiveTabBar,
    marginTop: 25,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

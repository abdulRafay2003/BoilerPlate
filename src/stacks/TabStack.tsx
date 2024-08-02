import {Image, ImageProps, StyleSheet, Text, View} from 'react-native';
import React, {ReactNode, useEffect} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Activity, Courses, HomeScreen, ProfileScreen, Search} from '../screens';
import {Colors, Images, Metrix, Utills} from '../config';
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const Tab = createMaterialBottomTabNavigator();
type TabStackType = {
  name: string;
  component: React.FC;
  active: ImageProps['source'];
  inActive: ImageProps['source'];
}[];

const tabsData: TabStackType = [
  {
    name: 'Home',
    component: HomeScreen,
    active: Images.HomeActive,
    inActive: Images.HomeInActive,
  },
  {
    name: 'Search',
    component: Search,
    active: Images.SearchActive,
    inActive: Images.SearchInActive,
  },
  {
    name: 'Courses',
    component: Courses,
    active: Images.CourseActive,
    inActive: Images.CourseInActive,
  },
  {
    name: 'Activity',
    component: Activity,
    active: Images.BellActive,
    inActive: Images.BellInActive,
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    active: Images.ProfileActive,
    inActive: Images.ProfileInActive,
  },
];

export const TabStack: React.FC = ({}) => {
  const changeBottomBtnBarColor = async () => {
    try {
      const response = await changeNavigationBarColor(
        Utills.selectedThemeColors().TextInputBaseColor,
        true,
      );
      // console.log('changebottom', response); // {success: true}
    } catch (e) {
      console.log(e); // {success: false}
    }
  };

  useEffect(() => {
    changeBottomBtnBarColor();
  }, []);
  return (
    <PaperProvider
      theme={MD3LightTheme}
      // theme={{
      //   dark: true,
      //   colors: {
      //     background: Utills.selectedThemeColors().Base,
      //     primary: '#000000',
      //     text: '#000000',
      //     notification: '#000000',
      //   },
      // }}
    >
      <Tab.Navigator
        activeColor={Utills.selectedThemeColors().Primary}
        inactiveColor={Utills.selectedThemeColors().InActiveTabBar}
        barStyle={styles.barStyle}
        shifting>
        {tabsData?.map(item => (
          <Tab.Screen
            key={item?.name}
            name={item?.name}
            component={item?.component}
            options={{
              tabBarLabel: item?.name,
              tabBarIcon: ({color, focused}) => (
                <Image
                  source={focused ? item?.active : item?.inActive}
                  resizeMode="contain"
                  style={{
                    tintColor: color,
                    width: Metrix.HorizontalSize(20),
                    height: Metrix.VerticalSize(20),
                  }}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: Utills.selectedThemeColors().TextInputBaseColor,
    borderTopWidth: 1,
    borderColor: Utills.selectedThemeColors().PrimaryOpacity,
    // borderWidth: 1,
    // borderColor: '#FFFFFF',
    height: Metrix.VerticalSize(90),
    // justifyContent: 'flex-end',
    paddingTop: Metrix.VerticalSize(10),
    paddingHorizontal: Metrix.VerticalSize(20),
    borderTopRightRadius: Metrix.VerticalSize(40),
    borderTopLeftRadius: Metrix.VerticalSize(40),
    ...Metrix.createShadow,
  },
});

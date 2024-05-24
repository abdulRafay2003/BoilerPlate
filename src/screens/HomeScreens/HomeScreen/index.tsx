import 'react-native-gesture-handler';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {HomeScreenProps} from '../../propTypes';
import {
  CategoryBtnsList,
  CourseCards,
  CustomText,
  MainContainer,
  PrimaryButton,
} from '../../../components';
import {VerifyUser} from '../../AuthScreens/VerifyUser';
import {ProfileScreen} from '../ProfileScreen';
import {
  Colors,
  Images,
  Metrix,
  NavigationService,
  RouteNames,
} from '../../../config';
// import Carousel from 'react-native-reanimated-carousel';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import {useTranslation} from 'react-i18next';
import { ScrollView } from 'react-native-gesture-handler';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const carouselData = [
  {
    id: '1',
    image: Images.TestingAvatar,
  },
  {
    id: '2',
    image: Images.TestingAvatar2,
  },
  {
    id: '3',
    image: Images.TestingAvatar,
  },
  {
    id: '4',
    image: Images.TestingAvatar2,
  },
];

const CarouselComp = () => {
  const carouselRef = useRef(null);

  return (
    <View style={{flex: 1}}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        // sliderHeight={screenWidth}
        itemWidth={screenWidth - 40}
        data={carouselData}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              // height: 20,
              // width: '90%',
            }}
            key={item?.id}>
            <Image
              source={item?.image}
              resizeMode="cover"
              style={{width: '100%', height: '100%'}}
            />
          </View>
        )}
        hasParallaxImages={true}
        // scrollEnabled={scrollStart}
        layout="stack"
        // style={{borderWidth:1,borderColor:"red"}}
      />
      {/* <Carousel
        width={width}
        height={width / 2}
        // autoPlay={true}
        data={carouselData}
        mode={'vertical-stack'}
        // mode='horizontal-stack'
        style={{alignSelf: 'center'}}
        modeConfig={{
          //  showLength:10
          // snapDirection:'right',
          scaleInterval: 1,
          // rotateZDeg: 0,
          // opacityInterval: 1,
          // moveSize:500
        }}
        onSnapToItem={index => console.log('current index:', index)}
        customConfig={() => ({type: 'positive', viewCount: 3})}
        // withAnimation={{type:'spring',config:{
        //   damping:10
        // }}}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
              // height: 20,
              // width: '90%',
            }}
            key={item?.id}>
            <Image
              source={item?.image}
              resizeMode="cover"
              style={{width: '100%', height: '100%'}}
            />
          </View>
        )}
      /> */}
    </View>
  );
};
const listData = [
  {id: '1', title: 'Digital marketing', isChecked: false},
  {id: '2', title: 'Digital marketing', isChecked: false},
  {id: '3', title: 'Digital marketing', isChecked: false},
  {id: '4', title: 'Digital marketing', isChecked: false},
  {id: '5', title: 'Digital marketing', isChecked: false},
  {id: '6', title: 'Digital marketing', isChecked: false},
  {id: '7', title: 'Digital marketing', isChecked: false},
  {id: '8', title: 'Digital marketing', isChecked: false},
  {id: '9', title: 'Digital marketing', isChecked: false},
];

const courseData = [
  {
    id: '1',
    courseImage: Images.Course1,
    isFav: true,
    courseTitle: 'Basic of UI/UX',
    instructorName: 'Purwa Adi',
    numOfVideos: '15',
    rating: 4.6,
    numOfEnrolled: '704',
    price: '200',
    isFree: false,
    offPrice: '300',
  },
  {
    id: '2',
    courseImage: Images.Course2,
    isFav: false,
    courseTitle: 'Basics of currency',
    instructorName: 'Samsul arifin',
    numOfVideos: '15',
    rating: 4.6,
    numOfEnrolled: '704',
    isFree: true,
  },
  {
    id: '3',
    courseImage: Images.Course1,
    isFav: true,
    courseTitle: 'Basic of UI/UX',
    instructorName: 'Purwa Adi',
    numOfVideos: '15',
    rating: 4.6,
    numOfEnrolled: '704',
    price: '200',
    isFree: false,
    offPrice: '300',
  },
  {
    id: '4',
    courseImage: Images.Course1,
    isFav: true,
    courseTitle: 'Basic of UI/UX',
    instructorName: 'Purwa Adi',
    numOfVideos: '15',
    rating: 4.6,
    numOfEnrolled: '704',
    price: '200',
    isFree: false,
    offPrice: '300',
  },
  {
    id: '5',
    courseImage: Images.Course1,
    isFav: true,
    courseTitle: 'Basic of UI/UX',
    instructorName: 'Purwa Adi',
    numOfVideos: '15',
    rating: 4.6,
    numOfEnrolled: '704',
    price: '200',
    isFree: false,
  },
  {
    id: '6',
    courseImage: Images.Course1,
    isFav: true,
    courseTitle: 'Basic of UI/UX',
    instructorName: 'Purwa Adi',
    numOfVideos: '15',
    rating: 4.6,
    numOfEnrolled: '704',
    price: '200',
    isFree: false,
  },
  {
    id: '7',
    courseImage: Images.Course1,
    isFav: true,
    courseTitle: 'Basic of UI/UX',
    instructorName: 'Purwa Adi',
    numOfVideos: '15',
    rating: 4.6,
    numOfEnrolled: '704',
    price: '200',
    isFree: false,
  },
  {
    id: '8',
    courseImage: Images.Course1,
    isFav: true,
    courseTitle: 'Basic of UI/UX',
    instructorName: 'Purwa Adi',
    numOfVideos: '15',
    rating: 4.6,
    numOfEnrolled: '704',
    price: '200',
    isFree: false,
  },
  {
    id: '9',
    courseImage: Images.Course1,
    isFav: true,
    courseTitle: 'Basic of UI/UX',
    instructorName: 'Purwa Adi',
    numOfVideos: '15',
    rating: 4.6,
    numOfEnrolled: '704',
    price: '200',
    isFree: false,
  },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const {t, i18n} = useTranslation();
  return (
    <MainContainer isFlatList>
      <ScrollView>
      {/* <CarouselComp /> */}
      {/* <CustomText.LargeBoldText>Home</CustomText.LargeBoldText> */}
      <CategoryBtnsList listData={listData} topheading="Top Categories" />
      <CourseCards courseData={courseData} topHeading={t('popular_course')} />
      <CourseCards courseData={courseData} topHeading={t('trending_course')} />
      </ScrollView>
    </MainContainer>
  );
};

interface HomeScreenStyles {}
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
    borderColor: Colors.InActiveTabBar,
    marginTop: 25,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

import {
  Image,
  ImageBackground,
  ImageProps,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontType, Images, Metrix, Utills} from '../../config';
import {CustomText} from '..';
import {CourseListDataType} from '../CourseCards';

type CourseDataItemType = {
  courseItem: CourseListDataType[number];
};

export const CardStyledComponent: React.FC<CourseDataItemType> = ({
  courseItem,
}) => {
  const {
    id,
    courseImage,
    isFav,
    courseTitle,
    instructorName,
    numOfVideos,
    rating,
    numOfEnrolled,
    price,
    isFree,
    offPrice,
  } = courseItem;
  return (
    <TouchableOpacity
      style={[styles.renderItemContainer]}
      activeOpacity={0.7}
      key={id}>
      <ImageBackground
        source={courseImage || Images.TestingImage}
        style={styles.courseImageContainer}
        resizeMode="cover">
        <TouchableOpacity
          style={{
            margin: Metrix.VerticalSize(10),
            alignSelf: 'flex-end',
          }}
          activeOpacity={0.7}>
          <Image
            source={isFav ? Images.HeartFilled : Images.HeartEmpty}
            resizeMode="contain"
            style={{
              width: Metrix.HorizontalSize(20),
              height: Metrix.VerticalSize(20),
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.courseDetailContainer}>
        <CustomText.LargeSemiBoldText
          ellipsizeMode="tail"
          numberOfLines={1}
          customStyle={{
            fontSize: FontType.FontRegular,
          }}>
          {courseTitle || ''}
        </CustomText.LargeSemiBoldText>
        <View style={styles.centreItem}>
          <CustomText.RegularText
            isSecondaryColor
            ellipsizeMode="tail"
            numberOfLines={1}
            customStyle={{
              fontSize: FontType.FontExtraSmall,
            }}>
            {instructorName}
          </CustomText.RegularText>
          <View style={styles.dot} />
          <CustomText.RegularText
            ellipsizeMode="tail"
            numberOfLines={1}
            isSecondaryColor
            customStyle={{
              // justifyContent: 'center',
              fontSize: FontType.FontExtraSmall,
            }}>
            {`${numOfVideos} Videos`}
          </CustomText.RegularText>
        </View>
        <View style={styles.centreItem}>
          <CustomText.MediumText
            customStyle={{
              color: Utills.selectedThemeColors().TertiaryTextColor,
            }}>
            {rating || 0}
          </CustomText.MediumText>
          <View
            style={[
              styles.centreItem,
              {marginHorizontal: Metrix.HorizontalSize(3)},
            ]}>
            {[...new Array(Math.round(rating)).keys()]?.map((item, index) => (
              <Image
                key={index}
                source={Images.Star}
                resizeMode="contain"
                style={{
                  width: Metrix.HorizontalSize(13),
                  height: Metrix.VerticalSize(13),
                }}
              />
            ))}
          </View>
          <CustomText.RegularText
            customStyle={{
              fontSize: FontType.FontSmall,
            }}>
            {`(${numOfEnrolled || '0'})`}
          </CustomText.RegularText>
        </View>
        <View style={styles.centreItem}>
          <CustomText.MediumText
            customStyle={{
              color: Utills.selectedThemeColors().Primary,
              fontSize: FontType.FontRegular,
            }}>
            {isFree ? 'Free' : `SAR ${price}`}
          </CustomText.MediumText>
          {offPrice && (
            <CustomText.RegularText
              isSecondaryColor
              customStyle={{
                fontSize: FontType.FontSmall,
                textDecorationLine: 'line-through',
                marginHorizontal: Metrix.VerticalSize(5),
              }}>
              {`SAR ${offPrice}`}
            </CustomText.RegularText>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  renderItemContainer: {
    // borderWidth: 1,
    marginRight: Metrix.HorizontalSize(7),
    height: Metrix.VerticalSize(130 * 2),
    width: Metrix.HorizontalSize(170),
    justifyContent: 'space-around',
  },
  courseImageContainer: {
    flex: 1.6,
    // borderWidth: 1,
    borderRadius: Metrix.VerticalSize(10),
    overflow: 'hidden',
  },
  courseDetailContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: Metrix.VerticalSize(10),
    justifyContent: 'space-around',
    // borderWidth: 1,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
    marginHorizontal: Metrix.HorizontalSize(6),
    // marginBottom:2
  },
  centreItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
  },
});

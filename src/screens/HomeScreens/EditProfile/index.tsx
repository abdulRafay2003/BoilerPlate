import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  BackHeader,
  CustomInput,
  MainContainer,
  PrimaryButton,
  ProfileHeader,
} from '../../../components';
import {Images, Metrix, Utills} from '../../../config';
import {EditProfileProps} from '../../propTypes';
import ImagePicker from 'react-native-image-crop-picker';
import _ from 'lodash';
import {RootState} from '../../../redux/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {AuthActions, HomeActions} from '../../../redux/actions';

export const EditProfile: React.FC<EditProfileProps> = ({}) => {
  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.home.userDetails);

  const [updatedData, setUpdatedData] = useState('');
  const [name, setName] = useState(userData?.fullName || '');
  const [selectedImage, setSelectedImage] = useState('');
  const [iconVisible, setIconVisible] = useState(false);

  const imagePicker = async () => {
    try {
      const image = await ImagePicker?.openPicker({
        mediaType: 'photo',
        cropping: true,
      });
      if (_.isEmpty(image?.path)) {
        Utills.showToast('Upload image field required.');
        return;
      } else {
        setSelectedImage(image?.path);
        setIconVisible(true);
        // refRBSheet.current.open();
      }
    } catch (error: any) {
      if (error.message !== 'User cancelled image selection') {
        console.error('erro upload image', error);
        // this.setState({loading: false});
      }
    }
  };

  const onCancel = () => {
    setSelectedImage('');
    setIconVisible(false);
  };
  const onSelect = () => {
    setIconVisible(false);
  };
  const onUpload = () => {
    if (Object.keys(selectedImage).length != 0) {
      const image = new FormData();
      image.append('image', {
        uri: selectedImage,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      const body = {
        image,
        fullName: name,
      };

      // dispatch(HomeActions.setUploadMedia(body));
    } else if (name !== userData?.fullName) {
      // dispatch(AuthActions.setUpdateProfile({fullName: name}));
    } else {
      Utills.showToast('Please update your profile.');
    }
  };

  // console.log('-------image 000000 data ', selectedImage);

  return (
    <MainContainer>
      <BackHeader heading="Edit Profile" />
      <View
        style={{
          // borderWidth: 1,
          borderColor: '#fff',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <View style={{flex: 0.95}}>
          <ProfileHeader
            // source={{
            //   uri: 'https://e1.pxfuel.com/desktop-wallpaper/62/769/desktop-wallpaper-ssgss-vegeta-vegeta-rage-thumbnail.jpg',
            // }}
            source={
              (Object.keys(selectedImage).length != 0 && {
                uri: selectedImage,
              }) ||
              (userData?.userMedia?.[0]?.path && {
                uri: userData?.userMedia?.[0]?.path,
              })
            }
            btnText="Change Photo"
            onTextPress={() => imagePicker()}
            customMainContainerStyle={{
              // borderWidth: 1,
              // borderColor: '#fff',
              marginBottom: Metrix.VerticalSize(40),
            }}
            uploadPhotoIcons={iconVisible}
            onPressCancel={onCancel}
            onPressCheck={onSelect}
          />
          <CustomInput
            placeholder="Enter Full Name"
            value={name}
            onChangeText={name => setName(name)}
            // onBlur={() => setFieldTouched('name')}
            // error={errors?.name}
            // touched={touched?.name}
          />
          <CustomInput
            // placeholder="Enter Full Name"
            value={userData?.email || ''}
            // onChangeText={name => setName(name)}
            // onBlur={() => setFieldTouched('name')}
            // error={errors?.name}
            // touched={touched?.name}
            editable={false}
          />
        </View>
        <PrimaryButton title="Save Changes" onPress={onUpload} />
      </View>
    </MainContainer>
  );
};

interface EditProfileStyles {}
const styles = StyleSheet.create<EditProfileStyles>({});

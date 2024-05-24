import {StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {CoursesProps} from '../../propTypes';
import {CustomText, MainContainer} from '../../../components';
import { t } from 'i18next';

export const Courses: React.FC<CoursesProps> = ({}) => {
  return (
    <MainContainer isFlatList>
      <CustomText.ExtraLargeBoldText>{t("courses")}</CustomText.ExtraLargeBoldText>
    </MainContainer>
  );
};

interface CoursesStyles {}
const styles = StyleSheet.create<CoursesStyles>({});

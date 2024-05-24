import {StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityProps} from '../../propTypes';
import {CustomText, MainContainer} from '../../../components';
import { t } from 'i18next';

export const Activity: React.FC<ActivityProps> = ({}) => {
  return (
    <MainContainer isFlatList>
      <CustomText.ExtraLargeBoldText>{t("activity")}</CustomText.ExtraLargeBoldText>
    </MainContainer>
  );
};

interface ActivityStyles {}
const styles = StyleSheet.create<ActivityStyles>({});

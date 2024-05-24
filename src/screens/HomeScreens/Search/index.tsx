import {StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SearchProps} from '../../propTypes';
import {CustomText, MainContainer} from '../../../components';
import { t } from 'i18next';

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <MainContainer isFlatList>
      <CustomText.ExtraLargeBoldText>{t("search")}</CustomText.ExtraLargeBoldText>
    </MainContainer>
  );
};

interface SearchStyles {}
const styles = StyleSheet.create<SearchStyles>({});

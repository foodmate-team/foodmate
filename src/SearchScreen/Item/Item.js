import React, {Component} from 'react';
import {
  Wrapper,
  PhotoContentWrapper,
  Photo,
  ContentWrapper,
  NameDistanceWrapper,
  Name,
  Distance,
  FoodCategory,
  Arrow,
} from './ItemStyles';
import photo from './Imgs/photo.png';
import arrow from './Imgs/Arrow.svg';

export class Item extends Component {
  /* TODO: если имя фамилия слишком длинное, сделать функцию которая обрезает фамилию */
  render () {
    return (
      <Wrapper>
        <PhotoContentWrapper>
          <Photo src={photo}/>
          <ContentWrapper>
            <NameDistanceWrapper>
              <Name>Имя Фамилия</Name>
              <Distance>250 м</Distance>
            </NameDistanceWrapper>
            <FoodCategory>Итальянская, Америсканская</FoodCategory>
          </ContentWrapper>
        </PhotoContentWrapper>
        <Arrow src={arrow}/>
      </Wrapper>
    );
  }
}
import React, {Component} from 'react';
import {
  OuterWrapper,
  Wrapper,
  MainContentWrapper,
  DropDownButtonWrapper,
  ItemsWrapper,
  Title,
  Description,
  SearchBar,
  SearchButton,
  SearchButtonText,
  SearchIcon,
} from './SearchScreenStyles';
import {Item} from "./Item/Item";
import icon from "./Imgs/IconSearch.svg";

export class SearchScreen extends Component {
  render () {
    return (
      <OuterWrapper>
        <Wrapper>

          <MainContentWrapper>
            <Title>Найди своего шефа</Title>
            <Description>Введите станцию метро на которой вы хотите найти шефа</Description>
          </MainContentWrapper>

          <DropDownButtonWrapper>
            <SearchBar/>
            <SearchButton>
              <SearchIcon src={icon}/>
              <SearchButtonText>
                Найти шефа сейчас
              </SearchButtonText>
            </SearchButton>
          </DropDownButtonWrapper>

          <ItemsWrapper>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
          </ItemsWrapper>

        </Wrapper>
      </OuterWrapper>
    );
  }
}
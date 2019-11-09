import styled from 'styled-components';

const mobileContainerWidth = '90%';
const tabletContainerWidth = '50%';
const desktopContainerWidth = '40%';

export const OuterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 0 30px 0;
  width: ${mobileContainerWidth};
  
  @media screen and (min-width: 768px) {
    width: ${tabletContainerWidth};
  }
  @media screen and (min-width: 1000px) {
    width: ${desktopContainerWidth};
    padding: 100px 0 50px 0;
  }
`;

export const MainContentWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  font-size: 18px;
  color: #000;
  font-weight: 500;
  text-align: center;
  padding: 0 0 10px 0;
  
  @media screen and (min-width: 1000px) {
    font-size: 24px;
  }
`;

export const Description = styled.div`
  font-size: 14px;
  color: #9B9B9B;
  font-weight: 300;
  text-align: center;
  
  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`;

export const DropDownButtonWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
  
  @media screen and (min-width: 1000px) {
    width: 60%;
    padding: 60px 0;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  background-color: #FFF;
  margin: 0 0 20px 0;
  
  -webkit-box-shadow: 0px 0px 10px 0px rgba(155,155,155,0.3);
  -moz-box-shadow: 0px 0px 10px 0px rgba(155,155,155,0.3);
  box-shadow: 0px 0px 10px 0px rgba(155,155,155,0.3);
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  border-radius: 8px;
  background-color: #8F5BBC;
  margin: 20px 0 0 0;
  cursor: pointer;
  
  -webkit-box-shadow: 0px 0px 10px 0px rgba(155,155,155,0.3);
  -moz-box-shadow: 0px 0px 10px 0px rgba(155,155,155,0.3);
  box-shadow: 0px 0px 10px 0px rgba(155,155,155,0.3);
`;

export const SearchButtonText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #FFF;
  margin: 0 0 0 8px;
`;

export const ItemsWrapper = styled.div`
  width: 100%;
  
  @media screen and (min-width: 1000px) {
    width: 80%;
  }
`;

export const  SearchIcon = styled.img`
  width: 14px;
`;
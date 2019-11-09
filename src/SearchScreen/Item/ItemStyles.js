import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 0 20px 0;
   cursor: pointer;
   
   @media screen and (min-width: 1000px) {
    width: 100%;
    margin: 0 0 20px 0;
    padding: 10px 20px;
    border-radius: 8px;
   }
   
   :hover {
    background-color: rgba(143, 91, 188, 0.05);
   }
`;

export const PhotoContentWrapper = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
`;

export const Photo = styled.img`
   width: 50px;
   margin: 0 14px 0 0;
   @media screen and (min-width: 1000px) {
    width: 70px;
    margin: 0 24px 0 0;
   }
`;

export const ContentWrapper = styled.div``;

export const NameDistanceWrapper = styled.div`
   display: flex;
   justify-content: start;
   align-items: flex-end;
   margin: 0 0 4px 0;
   
   @media screen and (min-width: 1000px) {
    margin: 0 0 8px 0;
   }
`;

export const Name = styled.div`
   font-weight: 400;
   font-size: 16px;
   line-height: 14px;
   padding: 0 10px 0 0;
   
   @media screen and (min-width: 1000px) {
    font-size: 18px;
    line-height: 16px;
    padding: 0 14px 0 0;
   }
`;

export const Distance = styled.div`
   font-weight: 400;
   font-size: 12px;
   line-height: 12px;
   color: #8F5BBC;
   
   @media screen and (min-width: 1000px) {
    font-size: 14px;
    line-height: 14px;
   }
`;

export const FoodCategory = styled.div`
   font-weight: 300;
   font-size: 12px;
   color: #9B9B9B;
   
   @media screen and (min-width: 1000px) {
    font-size: 14px;
   }
`;

export const Arrow = styled.img`
  width: 10px;
`;
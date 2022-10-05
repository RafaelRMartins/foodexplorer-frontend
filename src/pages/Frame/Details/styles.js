import styled from 'styled-components';

export const Container = styled.div`
  grid-area: main;
  width: 100%;
  display: grid;
  grid-template-rows: auto 124px;
  grid-template-areas: 
  "content"
  "footer";
  overflow-y: auto;
`;

export const Main = styled.main`
  grid-area: content;
  padding: 0 80px;

  >div{
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >a{
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.TEXT_100};
    }
    .editPlate{
      gap: 10px;
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.TEXT_100};
    }
  }
`;

export const ButtonLink = styled.button`
  background: none;
  border: none;
`;

export const Info = styled.div`
  margin-top: 40px;
  margin-bottom: 120px;
  display: flex;
  gap: 40px;
  >img{
    width: 390px;
  }
`;

export const PlateInfo = styled.div`
  >h1{
    font-weight: 500;
    font-size: 4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
  >p{
    margin-top: 8px;
    font-weight: 400;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_200};
  }
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 26px;
`;

export const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  >img{
    width: 54px;
    height: 54px;
  }
  >p{
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.TEXT_200};
  }
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 45px;
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  font-weight: 400;
  font-size: 3.2rem;
  font-family: 'Roboto', sans-serif;
  margin-right: 50px;
`;

export const Include = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  >div{
    display: flex;
    align-items: center;
    gap: 12px;

    >span{
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 2rem;
    }

    >button{
      background: none;
      border: none;

      >svg{
        color: ${({ theme }) => theme.COLORS.TEXT_100};
      }
      
    }
  }
`;
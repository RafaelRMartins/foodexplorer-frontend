import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 512px;
  border-radius: 8px;
  background-color: rgba( 0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.65);
  display: flex;
  flex-direction: column;
  align-items: center;

  >img{
    width: 176px;
    height: 176px;
    margin-top: 8px;
  }
  h3{
    margin-top: 16px;
    font-weight: 700;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
  >p{
    margin-top: 16px;
    font-size: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TEXT_200};
  }
`;

export const Favorite = styled.button`
  margin-top: 16px;
  margin-left: 242px;
  background: none;
  border: none;
  >svg{
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
`;

export const ButtonLink = styled.button`
  background: none;
  border: none;
`;

export const Price = styled.span`
  margin-top: 16px;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.COLORS.PRIMARY_400};
  font-size: 3.2rem;
`;

export const Include = styled.div`
  margin-top: 18px;
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
      font-size: 3rem;
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
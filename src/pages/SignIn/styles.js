
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Logo = styled.span`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
  font-size: 4.2rem;
  font-family: 'Roboto', sans-serif;
`;

export const CreateAccount = styled.div`
  margin-bottom: 40px;
  flex: 1;
  max-width: 476px;
  padding: 0 64px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};

  >h1{
    display: block;
    text-align: center;
    margin-top: 48px;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
  >label{
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.TEXT_200};
    font-family: 'Roboto', sans-serif;
    margin-bottom: 32px;
    >p{
      margin-top: 32px;
      margin-bottom: 8px;
    }
  }
  >button{
    margin-top: 32px;
  }
  >a{
    margin-top: 32px;
    margin-bottom: 32px;
    display: block;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
    font-weight: 500;
    font-size: 1.4rem;
  }
`;
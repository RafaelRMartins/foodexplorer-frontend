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
  display: flex;
  flex-direction: column;

  >h1{
    margin-top: 32px;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
  .Back{
    margin-top: 24px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
  >table{
    border-collapse: collapse;
    margin-bottom: 60px;
    >thead{
      th{
        padding: 20px;
        text-align: start;
        border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
        color: ${({ theme }) => theme.COLORS.TEXT_100};
        font-size: 1.4rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
      }
    }
    >tbody{
      td{
        padding: 20px;
        border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY_600};
        color: ${({ theme }) => theme.COLORS.TEXT_200};
        font-weight: 400;
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;

        >select{
          width: 100%;
          padding: 10px 0;
          background: none;
          border: 1px solid ${({ theme }) => theme.COLORS.TEXT_100};
          border-radius: 5px;
          color: ${({ theme }) => theme.COLORS.TEXT_200};
          font-weight: 400;
          font-size: 1.4rem;
          font-family: 'Roboto', sans-serif;
        }
      }
    }
  }
`;
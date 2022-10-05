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
  
  >h1{
    margin-top: 24px;
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
  .AdminLink{
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_600};
    color: ${({ theme }) => theme.COLORS.TEXT_100};
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT_100};
    border-radius: 5px;
    font-weight: 500;
    height: 56px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }
`;
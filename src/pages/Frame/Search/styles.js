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
  padding: 20px 80px 80px 80px;

  >.search{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
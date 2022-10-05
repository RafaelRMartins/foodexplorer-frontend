import styled from 'styled-components';

export const Container = styled.div`
  >.boxcarousel{
    width: 100%;
    text-align: center;
    >.carousel{
      width: calc(100vw - 180px);
      display: flex;
      overflow-x: auto;
      gap: 18px;
      scroll-behavior: smooth;
    }
    .carousel::-webkit-scrollbar{
      display: none;
    }
  
    >.buttons{
      position: relative;
      top: -325px;
      display: flex;
      justify-content: space-between;
      >button{
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.TEXT_100};
      }
    }
  }
`;
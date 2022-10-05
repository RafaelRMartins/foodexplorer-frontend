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
  padding: 0 80px 80px 80px;

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

export const Banner = styled.div`
  height: 420px;
  display: flex;
  align-items: flex-end;
  margin-bottom: 60px;

  img{
    width: 620px;
    position: relative;
    bottom: 52px;
    right: 60px;
  }
  >div{
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 40px 0 0;
    width: 100%;
    height: 260px;
    border-radius: 8px;
    background-image: linear-gradient(to top, ${({ theme }) => theme.COLORS.PRIMARY_LINEAR_2}, ${({ theme }) => theme.COLORS.PRIMARY_LINEAR_1});
    >span{
      >h1{
        color: ${({ theme }) => theme.COLORS.TEXT_100};
        font-weight: 500;
        font-size: 4rem;
      }
      >p{
        color: ${({ theme }) => theme.COLORS.TEXT_200};
      }
    }
  }
`;
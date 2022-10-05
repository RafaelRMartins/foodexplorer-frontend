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
  display: grid;
  grid-template-columns: 1fr 1fr;

  >div{
    margin-top: 32px;
    >h1{
      font-weight: 500;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.TEXT_100};
    }
    >h2{
      font-weight: 500;
      font-size: 3.2rem;
      color: ${({ theme }) => theme.COLORS.TEXT_100};
    }
  }

  .cardlist{
    margin-top: 32px;
    /* margin-bottom: 152px; */
    >p{
      font-weight: 500;
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.TEXT_100};
      padding: 16px 0;
    }
  }
  .paymentarea{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 40px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px 8px 0 0;
    
    >div{
      display: flex;
      width: 100%;
      button{
        flex: 1;
        padding: 32px 0;
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;
        background: none;
        font-weight: 400;
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.COLORS.TEXT_100};
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      button:hover{
        background-color: rgba(255, 255, 255, 0.05);
      }
      button:nth-child(1){
      border-radius: 8px 0 0 0;

        svg{
          transform: rotate(45deg);
        }
      }
      button:nth-child(2){
      border-radius: 0 8px 0 0;
      }
    }
    >img{
      padding: 32px 0;
      width: 270px;
    }
  }

  .formCart{
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .inputFlex{
      display: flex;
      gap: 20px;
    }
    .linkbutton{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 16px 32px;
      border-radius: 5px;
      background: ${({ theme }) => theme.COLORS.RED_200};
      color: ${({ theme }) => theme.COLORS.TEXT_100};
    }
  }
`;
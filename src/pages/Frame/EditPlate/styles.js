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
  .Back{
    margin-top: 24px;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
`;

export const Form = styled.form`
  >div{
    display: flex;
    label{
      flex: 1;
    }
  }
  p{
    font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.TEXT_200};
      margin-bottom: 8px;
  }
  .row2{
    margin-top: 32px;
    margin-bottom: 32px;
    display: grid;
    grid-template-columns: 5fr 1fr;
    gap: 32px;
  }
  label{
    >div{
      >div{
        padding: 10px 6px;
        background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme.COLORS.TEXT_100};
        >div{
          >div{
            font-family: 'Roboto', sans-serif;
            color: ${({ theme }) => theme.COLORS.TEXT_300};
          }
        }
      }
      
    }
  }
  .selectType{
    margin-left: 32px;
    select{
      width: 100%;
      height: 58px;
      padding: 10px 6px;
      background-color: ${({ theme }) => theme.COLORS.PRIMARY_900};
      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme.COLORS.TEXT_100};
      font-family: 'Roboto', sans-serif;
      color: ${({ theme }) => theme.COLORS.TEXT_300};
      font-weight: 400;
      font-size: 1.6rem;
    }
  }
  textarea{
    width: 100%;
    height: 150px;
    background: none;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT_100};
    color: ${({ theme }) => theme.COLORS.TEXT_100};
    padding: 12px;
    resize: vertical;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_300};
    }
  }

  >.button-end{
    display: flex;
    justify-content: space-between;
    margin-bottom: 122px;

    .buttonDelete{
      background: rgba(255, 50, 50, 0.2);
    }
    
    >button{
      margin-top: 24px;
      padding: 12px 117px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid ${({ theme }) => theme.COLORS.TEXT_100};
      border-radius: 6px;
      font-weight: 500;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.TEXT_100};
    }
  }

`;

export const File = styled.div`
  label{
    >span{
      display: block;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.TEXT_200};
      margin-bottom: 8px;
    }
    >p{
      display: flex;
      align-items: center;
      gap: 8px;
      border-radius: 6px;
      border: 1px solid ;
      padding: 16px 32px;
      cursor: pointer;
      margin-right: 32px;
    }
  }
  input{
    display: none;
  }
`;
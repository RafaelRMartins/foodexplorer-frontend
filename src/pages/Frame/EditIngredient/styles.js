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
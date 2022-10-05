import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-areas: 
  "header"
  "main";
`;

export const Header = styled.header`
  grid-area: header;
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};

  >a{
    color: ${({ theme }) => theme.COLORS.TEXT_200};
  }
  >div{
    max-width: 428px;
  }
  >button{
    max-width: 180px;
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
`;

export const Logout = styled.button`
  border: none;
  background: none;

  >svg{
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
`;

export const AdminPage = styled.button`
  border: none;
  background: none;

  >svg{
    color: ${({ theme }) => theme.COLORS.TEXT_100};
  }
`;

export const Logo = styled.div`
  >a{
    border: none;
    background: none;
    display: flex;
    align-items: center;
    gap: 10px;

    >span{
      color: #fff;
      font-weight: 700;
      font-size: 2.5rem;
    }
  }
  
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  color: ${({ theme }) => theme.COLORS.TEXT_100};

  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_200};
    }

  }

  > svg {
    margin-left: 16px;
  }
`;
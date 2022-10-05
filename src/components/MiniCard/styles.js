import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  gap: 13px;
  img{
    width: 72px;
    height: 72px;
  }
  p{
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
    >span{
      font-weight: 400;
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.TEXT_200};
      font-family: 'Roboto', sans-serif;
    }
  }
  `;
export const ExcluirButton = styled.button`
  border: none;
  background: none;
  font-weight: 400;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.TEXT_EXCLUIR};
  font-family: 'Roboto', sans-serif;
`;
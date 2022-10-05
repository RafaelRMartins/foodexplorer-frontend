import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: footer;
  width: 100%;
  height: 124px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_800};
  color: ${({ theme }) => theme.COLORS.TEXT_200};
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >span{
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.3);
    font-weight: 700;
    font-size: 2.5rem;
  }
`;
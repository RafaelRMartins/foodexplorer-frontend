import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_100};
  border-radius: 6px;
  padding: 10px;
  cursor: pointer;
  :hover{
    background: rgba(255, 255, 255, 0.2);
  }
  >img{
    width: 80px;
  }
`;
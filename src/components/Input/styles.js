import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.COLORS.TEXT_100};
  background-color: none;
  color: ${({ theme }) => theme.COLORS.TEXT_100};

  border-radius: 6px;

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.TEXT_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.TEXT_300};
    }

  }

  > svg {
    margin-left: 16px;
  }
`;
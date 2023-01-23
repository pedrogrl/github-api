import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  /* margin: 2rem 0; */

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    grid-template-columns: auto auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: auto;
  }
`;

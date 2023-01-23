import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.background};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const Main = styled.section`
  background: ${({ theme }) => theme.colors.container};
  width: 100%;
  min-height: 100%;
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 40px 20px;
  }
`;

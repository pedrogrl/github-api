import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 438px;
  background: rgba(0, 0, 0, 0.25);
  border-left: 3px solid
    ${({ theme, color }) => color || theme.colors.champagneDark};
  padding: 1rem;
`;

export const Name = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1.25;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 1rem 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme, color }) => color || theme.colors.champagneDark};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const Lang = styled.span`
  color: inherit;
`;

export const Anchor = styled.a`
  color: inherit;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
`;

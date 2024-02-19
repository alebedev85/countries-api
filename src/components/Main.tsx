import styled from 'styled-components';
import { Container } from './Container';
import React from 'react';

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

export default function Main ({ children }: {children: React.ReactNode}) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

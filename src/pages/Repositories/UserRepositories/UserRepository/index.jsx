import React from 'react';
import P from 'prop-types';

import { Anchor, Container, Description, Footer, Lang, Name } from './styles';

import { langColors } from '../../../../services/config';

function UserRepository({ repository }) {
  const color =
    langColors[repository.language && repository.language.toLowerCase()];

  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>

      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Anchor href={repository.html_url} target="_blank">
          Show
        </Anchor>
      </Footer>
    </Container>
  );
}

UserRepository.propTypes = {
  repository: P.shape({
    id: P.number.isRequired,
    name: P.string.isRequired,
    description: P.string,
    html_url: P.string.isRequired,
    language: P.string,
  }).isRequired,
};

export default UserRepository;

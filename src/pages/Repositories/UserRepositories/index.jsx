import React from 'react';
import P from 'prop-types';

import { Container } from './styles';
import UserRepository from './UserRepository';

function UserRepositories({ repositories, currentLanguage }) {
  const repos = repositories
    .filter(
      (repo) =>
        currentLanguage === undefined || repo.language === currentLanguage
    )
    .map((repo) => <UserRepository key={repo.id} repository={repo} />);

  return <Container>{repos}</Container>;
}

UserRepositories.defaultProps = {
  currentLanguage: undefined,
};

UserRepositories.propTypes = {
  repositories: P.arrayOf(
    P.shape({
      id: P.number.isRequired,
      name: P.string.isRequired,
      description: P.string,
      html_url: P.string.isRequired,
      language: P.string,
    }).isRequired
  ).isRequired,
  currentLanguage: P.string,
};

export default UserRepositories;

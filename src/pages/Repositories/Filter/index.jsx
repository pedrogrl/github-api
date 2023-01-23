import React from 'react';
import P from 'prop-types';

import { Cleaner, Container, Selector } from './styles';

function Filter({ stats, currentLanguage, onClick }) {
  const selectors = stats.map(({ name, count, color }) => (
    <Selector
      key={name}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>Clear</Cleaner>
    </Container>
  );
}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.propTypes = {
  stats: P.arrayOf(
    P.shape({
      name: P.string.isRequired,
      count: P.number.isRequired,
      color: P.string,
    }).isRequired
  ).isRequired,
  currentLanguage: P.string,
  onClick: P.func,
};

export default Filter;

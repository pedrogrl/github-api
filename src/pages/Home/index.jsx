import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { MdSearch } from 'react-icons/md';
import { Button, Container, Form, Input, Logo, Title } from './styles';

import ghLogo from '../../assets/images/github-logo.svg';

function Home() {
  const [username, setUsername] = useState('');

  const navigate = useNavigate()

  return (
    <Container>
      <Logo src={ghLogo} alt="GitHub logo" />
      <Title>Github API</Title>
      <Form onSubmit={() => navigate(`/${username}/repositories`)}>
        <Input
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <Button to={`/${username}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
}

export default Home;

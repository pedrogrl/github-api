import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Loading, Main, Sidebar } from './styles';

import Profile from './Profile';
import Filter from './Filter';
import UserRepositories from './UserRepositories';

import { getUser, getDataFrom, getRepos } from '../../services/api';

function Repositories() {
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [stats, setStats] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  const { login } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, reposResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(reposResponse.data);
      setStats(getDataFrom(reposResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          stats={stats}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>

      <Main>
        <UserRepositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
}

export default Repositories;

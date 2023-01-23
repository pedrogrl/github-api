import React from 'react';
import P from 'prop-types';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import {
  Container,
  Avatar,
  Header,
  Name,
  Username,
  Inner,
  Data,
} from './styles';

function Profile({ user }) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Username>{user.login}</Username>
        <Name>{user.name}</Name>
      </Header>

      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.followers} &nbsp; <i>followers</i> &nbsp; &middot;{' '}
          {user.following} &nbsp; <i>following</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20} />
            {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <MdLocationCity size={20} />
            {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <MdLink size={20} />
            <a href={`\\${user.blog}`}>{user.blog}</a>
          </Data>
        )}
      </Inner>
    </Container>
  );
}

Profile.propTypes = {
  user: P.shape({
    login: P.string.isRequired,
    name: P.string,
    avatar_url: P.string.isRequired,
    followers: P.number.isRequired,
    following: P.number.isRequired,
    company: P.string,
    blog: P.string,
    location: P.string,
  }).isRequired,
};

export default Profile;

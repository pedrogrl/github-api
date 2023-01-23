import axios from 'axios';
import { langColors } from './config';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getUser = async (login) => api.get(`/users/${login}`);

export const getRepos = async (login) => api.get(`/users/${login}/repos`);

export const getDataFrom = (repositories) => {
  let stats = repositories
    .map((repo) => repo.language)
    .reduce(
      (data, lang) => ({
        ...data,
        [lang]: (data[lang] || 0) + 1,
      }),
      []
    );

  delete stats.null;

  stats = Object.keys(stats)
    .map((lang) => ({
      name: lang,
      count: stats[lang],
      color: langColors[lang.toLowerCase()],
    }))
    .sort((a, b) => b.count - a.count);

  return stats;
};

export default api;

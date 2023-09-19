export interface IRepository {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const REPOSITORIES = 'repositories';

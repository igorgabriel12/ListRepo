import repositoriesReducer from './repositories';

export enum RepositoriesTypes {
  getRepositoriesFetch = 'repositories/getRepositoriesFetch',
  getRepositoriesFailure = 'repositories/getRepositoriesFailure',
  getRepositoriesSuccess = 'repositories/getRepositoriesSuccess',
}

const rootReducer = {
  repositories: repositoriesReducer,
};

export default rootReducer;

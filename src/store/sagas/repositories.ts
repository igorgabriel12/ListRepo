import {call, put, takeLatest} from 'redux-saga/effects';
import api from '../../services/apiConfig';

import {
  getRepositoriesSuccess,
  getRepositoriesFailure,
} from '../reducers/repositories';
import {IRepository} from '../../types/repositoriesTypes';
import {AxiosResponse} from 'axios';
import {PayloadAction} from '@reduxjs/toolkit';
import {RepositoriesTypes} from '../reducers';

type GetRepositoriesParams = {
  page: number;
  repositoryName: string;
};

export function* getRepositoriesSagas({
  payload,
}: PayloadAction<GetRepositoriesParams>) {
  try {
    const {page = 1, repositoryName = ''} = payload;
    const itemsPerPage = page * 20;
    const response: AxiosResponse<{items: IRepository[]}> = yield call(() =>
      api.get(
        `search/repositories?per_page=${itemsPerPage}&q=${repositoryName}`,
      ),
    );

    const repositories = response.data.items.map(
      ({id, name, owner, html_url, stargazers_count}) => ({
        id,
        name,
        html_url,
        owner: {
          login: owner.login,
          avatar_url: owner.avatar_url,
        },
        stargazers_count,
      }),
    );

    yield put(getRepositoriesSuccess({repositories, newPage: page}));
  } catch (error) {
    yield put(getRepositoriesFailure());
  }
}

export function* watchGetRepositories() {
  yield takeLatest(
    RepositoriesTypes.getRepositoriesFetch,
    getRepositoriesSagas,
  );
}

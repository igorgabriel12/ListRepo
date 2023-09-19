import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {IRepository, REPOSITORIES} from '../../types/repositoriesTypes';

export interface RepositoriesState {
  isLoading: boolean;
  currentPage: number;
  repositoriesList: IRepository[];
}

const initialState: RepositoriesState = {
  currentPage: 1,
  isLoading: false,
  repositoriesList: [],
};

export const repositoriesSlice = createSlice({
  initialState,
  name: REPOSITORIES,
  reducers: {
    getRepositoriesFetch: (
      state: RepositoriesState,
      action: PayloadAction<{page: number; repositoryName: string}>,
    ) => {
      state.isLoading = true;
      state.currentPage = action.payload.page;
    },
    getRepositoriesSuccess: (
      state: RepositoriesState,
      action: PayloadAction<{
        newPage: number;
        repositories: IRepository[];
      }>,
    ) => {
      state.isLoading = false;
      state.currentPage = action.payload.newPage;
      state.repositoriesList = action.payload.repositories;
    },
    getRepositoriesFailure: (state: RepositoriesState) => {
      state.isLoading = false;
    },
    clearRepositories: (state: RepositoriesState) => {
      state.currentPage = 1;
      state.isLoading = false;
      state.repositoriesList = [];
    },
  },
});

export const {
  clearRepositories,
  getRepositoriesFetch,
  getRepositoriesSuccess,
  getRepositoriesFailure,
} = repositoriesSlice.actions;

export default repositoriesSlice.reducer;

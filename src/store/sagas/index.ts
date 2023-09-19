import {all, fork} from 'redux-saga/effects';

import {watchGetRepositories} from './repositories';

const rootSaga = function* rootSaga() {
  yield all([fork(watchGetRepositories)]);
};

export default rootSaga;

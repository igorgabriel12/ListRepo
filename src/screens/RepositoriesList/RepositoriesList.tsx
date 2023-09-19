import React, {useCallback, useLayoutEffect, useState} from 'react';

import {RootState} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  clearRepositories,
  getRepositoriesFetch,
} from '../../store/reducers/repositories';

import {SCREENS} from '../../routes/screens';
import {RepositoriesStack} from '../../routes/Routes';
import {Container, List} from './RepositoriesList.styles';
import {IRepository} from '../../types/repositoriesTypes';
import RepositoryItem from '../../components/RepositoryItem';
import ListEmptyComponent from '../../components/ListEmptyComponent';
import ListFooterComponent from '../../components/ListFooterComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const RepositoriesList: React.FC = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RepositoriesStack, SCREENS.REPOSITORIES_LIST>
    >();
  const [filterValue, setFilterValue] = useState<string>('');
  const [applyFilter, setApplyFilter] = useState<boolean>(false);

  const {isLoading, currentPage, repositoriesList} = useSelector(
    ({repositories}: RootState) => repositories,
  );

  const clearFilter = useCallback(() => {
    if (applyFilter) {
      setApplyFilter(false);
    }
  }, [applyFilter]);

  const getRepositoriesByFilter = useCallback(
    (nextPage = 1) => {
      if (filterValue !== '') {
        if (!applyFilter) {
          setApplyFilter(true);
        }
        dispatch(
          getRepositoriesFetch({page: nextPage, repositoryName: filterValue}),
        );
      }
    },
    [applyFilter, dispatch, filterValue],
  );

  const getNextPage = () => {
    if (repositoriesList.length > 0) {
      getRepositoriesByFilter(currentPage + 1);
    }
  };

  const goToRepositoryDetails = (repository: IRepository) => {
    navigation.navigate(SCREENS.REPOSITORY_DETAILS, {
      repositoryUri: repository.html_url,
      name: repository.name,
    });
  };

  const ListEmpty = useCallback(
    () => (
      <ListEmptyComponent
        repositoryNotFound={
          !isLoading &&
          applyFilter &&
          filterValue !== '' &&
          repositoriesList.length === 0
        }
      />
    ),
    [isLoading, filterValue, applyFilter, repositoriesList.length],
  );

  const ListFooter = useCallback(
    () =>
      isLoading && repositoriesList.length ? <ListFooterComponent /> : null,
    [isLoading, repositoriesList.length],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Busca por repositórios',
        onBlur: () => {
          getRepositoriesByFilter();
        },
        onCancelButtonPress: () => {
          clearFilter();
          dispatch(clearRepositories());
        },
        onChangeText: (event: {
          nativeEvent: {text: React.SetStateAction<string>};
        }) => {
          clearFilter();
          setFilterValue(event.nativeEvent.text);
        },
      },
    });
  }, [clearFilter, dispatch, getRepositoriesByFilter, navigation]);

  return (
    <Container>
      <List
        refreshing={isLoading}
        data={repositoriesList}
        scrollEventThrottle={16}
        onEndReached={getNextPage}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={ListEmpty}
        ListFooterComponent={ListFooter}
        onRefresh={getRepositoriesByFilter}
        contentInsetAdjustmentBehavior="automatic"
        keyExtractor={({id, name}) => `${id}-${name}`}
        renderItem={({item}) => (
          <RepositoryItem
            repository={item}
            goToRepositoryDetails={() => goToRepositoryDetails(item)}
          />
        )}
      />
    </Container>
  );
};

export default RepositoriesList;

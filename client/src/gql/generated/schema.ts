import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Games = {
  __typename?: 'Games';
  code: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  get10BestUsers: Array<Users>;
  getGames: Array<Games>;
  getUsers: Array<Users>;
};

export type Users = {
  __typename?: 'Users';
  bestScore: Scalars['Float'];
  email: Scalars['String'];
  id: Scalars['Float'];
  password: Scalars['String'];
  pseudo: Scalars['String'];
};

export type GetGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGamesQuery = { __typename?: 'Query', getGames: Array<{ __typename?: 'Games', id: number, name: string, code: string }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'Users', id: number, pseudo: string, email: string, password: string, bestScore: number }> };

export type Get10BestUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type Get10BestUsersQuery = { __typename?: 'Query', get10BestUsers: Array<{ __typename?: 'Users', id: number, pseudo: string, bestScore: number }> };


export const GetGamesDocument = gql`
    query GetGames {
  getGames {
    id
    name
    code
  }
}
    `;

/**
 * __useGetGamesQuery__
 *
 * To run a query within a React component, call `useGetGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGamesQuery(baseOptions?: Apollo.QueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
      }
export function useGetGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGamesQuery, GetGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGamesQuery, GetGamesQueryVariables>(GetGamesDocument, options);
        }
export type GetGamesQueryHookResult = ReturnType<typeof useGetGamesQuery>;
export type GetGamesLazyQueryHookResult = ReturnType<typeof useGetGamesLazyQuery>;
export type GetGamesQueryResult = Apollo.QueryResult<GetGamesQuery, GetGamesQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    id
    pseudo
    email
    password
    bestScore
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const Get10BestUsersDocument = gql`
    query Get10BestUsers {
  get10BestUsers {
    id
    pseudo
    bestScore
  }
}
    `;

/**
 * __useGet10BestUsersQuery__
 *
 * To run a query within a React component, call `useGet10BestUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet10BestUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet10BestUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet10BestUsersQuery(baseOptions?: Apollo.QueryHookOptions<Get10BestUsersQuery, Get10BestUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get10BestUsersQuery, Get10BestUsersQueryVariables>(Get10BestUsersDocument, options);
      }
export function useGet10BestUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get10BestUsersQuery, Get10BestUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get10BestUsersQuery, Get10BestUsersQueryVariables>(Get10BestUsersDocument, options);
        }
export type Get10BestUsersQueryHookResult = ReturnType<typeof useGet10BestUsersQuery>;
export type Get10BestUsersLazyQueryHookResult = ReturnType<typeof useGet10BestUsersLazyQuery>;
export type Get10BestUsersQueryResult = Apollo.QueryResult<Get10BestUsersQuery, Get10BestUsersQueryVariables>;
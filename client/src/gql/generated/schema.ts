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

export type GamesInput = {
  code: Scalars['String'];
  name: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createGame: Games;
  createUser: Users;
  deleteGame: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  logout: Scalars['Boolean'];
  updateUserBestScore: Scalars['Boolean'];
};


export type MutationCreateGameArgs = {
  data: GamesInput;
};


export type MutationCreateUserArgs = {
  data: UsersInput;
};


export type MutationDeleteGameArgs = {
  gameId: Scalars['Float'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['Float'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationUpdateUserBestScoreArgs = {
  data: UpdateUserBestScoreInput;
};

export type Query = {
  __typename?: 'Query';
  findGameCode: Scalars['String'];
  get10BestUsers: Array<Users>;
  getGames: Array<Games>;
  getUsers: Array<Users>;
  profile: Users;
};


export type QueryFindGameCodeArgs = {
  data: Scalars['String'];
};

export type UpdateUserBestScoreInput = {
  newBestScore: Scalars['Float'];
  userId: Scalars['Float'];
};

export type Users = {
  __typename?: 'Users';
  bestScore: Scalars['Float'];
  email: Scalars['String'];
  id: Scalars['Float'];
  pseudo: Scalars['String'];
};

export type UsersInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  pseudo: Scalars['String'];
};

export type GetGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGamesQuery = { __typename?: 'Query', getGames: Array<{ __typename?: 'Games', id: number, name: string, code: string }> };

export type FindGameCodeQueryVariables = Exact<{
  data: Scalars['String'];
}>;


export type FindGameCodeQuery = { __typename?: 'Query', findGameCode: string };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', profile: { __typename?: 'Users', id: number, email: string } };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'Users', id: number, pseudo: string, email: string, bestScore: number }> };

export type Get10BestUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type Get10BestUsersQuery = { __typename?: 'Query', get10BestUsers: Array<{ __typename?: 'Users', id: number, pseudo: string, bestScore: number }> };

export type CreateUserMutationVariables = Exact<{
  data: UsersInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'Users', id: number, pseudo: string, email: string } };

export type UpdateUserBestScoreMutationVariables = Exact<{
  data: UpdateUserBestScoreInput;
}>;


export type UpdateUserBestScoreMutation = { __typename?: 'Mutation', updateUserBestScore: boolean };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['Float'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };


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
export const FindGameCodeDocument = gql`
    query FindGameCode($data: String!) {
  findGameCode(data: $data)
}
    `;

/**
 * __useFindGameCodeQuery__
 *
 * To run a query within a React component, call `useFindGameCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindGameCodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindGameCodeQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useFindGameCodeQuery(baseOptions: Apollo.QueryHookOptions<FindGameCodeQuery, FindGameCodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindGameCodeQuery, FindGameCodeQueryVariables>(FindGameCodeDocument, options);
      }
export function useFindGameCodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindGameCodeQuery, FindGameCodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindGameCodeQuery, FindGameCodeQueryVariables>(FindGameCodeDocument, options);
        }
export type FindGameCodeQueryHookResult = ReturnType<typeof useFindGameCodeQuery>;
export type FindGameCodeLazyQueryHookResult = ReturnType<typeof useFindGameCodeLazyQuery>;
export type FindGameCodeQueryResult = Apollo.QueryResult<FindGameCodeQuery, FindGameCodeQueryVariables>;
export const GetProfileDocument = gql`
    query getProfile {
  profile {
    id
    email
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getUsers {
    id
    pseudo
    email
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
export const CreateUserDocument = gql`
    mutation CreateUser($data: UsersInput!) {
  createUser(data: $data) {
    id
    pseudo
    email
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserBestScoreDocument = gql`
    mutation UpdateUserBestScore($data: UpdateUserBestScoreInput!) {
  updateUserBestScore(data: $data)
}
    `;
export type UpdateUserBestScoreMutationFn = Apollo.MutationFunction<UpdateUserBestScoreMutation, UpdateUserBestScoreMutationVariables>;

/**
 * __useUpdateUserBestScoreMutation__
 *
 * To run a mutation, you first call `useUpdateUserBestScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserBestScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserBestScoreMutation, { data, loading, error }] = useUpdateUserBestScoreMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserBestScoreMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserBestScoreMutation, UpdateUserBestScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserBestScoreMutation, UpdateUserBestScoreMutationVariables>(UpdateUserBestScoreDocument, options);
      }
export type UpdateUserBestScoreMutationHookResult = ReturnType<typeof useUpdateUserBestScoreMutation>;
export type UpdateUserBestScoreMutationResult = Apollo.MutationResult<UpdateUserBestScoreMutation>;
export type UpdateUserBestScoreMutationOptions = Apollo.BaseMutationOptions<UpdateUserBestScoreMutation, UpdateUserBestScoreMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($userId: Float!) {
  deleteUser(userId: $userId)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  removeUser: User;
  updateUser: User;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Query = {
  __typename?: 'Query';
  user: User;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
};

export type GetUserQueryVariables = Exact<{
  args: UserWhereUniqueInput;
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  user: { __typename?: 'User'; name?: string | null; email: string };
};

/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "members" */
  members: Array<Members>;
  /** fetch aggregated fields from the table: "members" */
  members_aggregate: Members_Aggregate;
  /** fetch data from the table: "members" using primary key columns */
  members_by_pk?: Maybe<Members>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "teams_public" */
  teams_public: Array<Teams_Public>;
  /** fetch aggregated fields from the table: "teams_public" */
  teams_public_aggregate: Teams_Public_Aggregate;
};


/** query root */
export type Query_RootMembersArgs = {
  distinct_on?: Maybe<Array<Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Members_Order_By>>;
  where?: Maybe<Members_Bool_Exp>;
};


/** query root */
export type Query_RootMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Members_Order_By>>;
  where?: Maybe<Members_Bool_Exp>;
};


/** query root */
export type Query_RootMembers_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** query root */
export type Query_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** query root */
export type Query_RootTeams_By_PkArgs = {
  id: Scalars['String'];
};


/** query root */
export type Query_RootTeams_PublicArgs = {
  distinct_on?: Maybe<Array<Teams_Public_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Public_Order_By>>;
  where?: Maybe<Teams_Public_Bool_Exp>;
};


/** query root */
export type Query_RootTeams_Public_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Public_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Public_Order_By>>;
  where?: Maybe<Teams_Public_Bool_Exp>;
};

/** select columns of table "members" */
export enum Members_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TeamId = 'team_id'
}

/** ordering options when selecting data from "members" */
export type Members_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Boolean expression to filter rows from the table "members". All fields are combined with a logical 'AND'. */
export type Members_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Members_Bool_Exp>>>;
  _not?: Maybe<Members_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Members_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  team_id?: Maybe<String_Comparison_Exp>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "members" */
export type Members = {
  __typename?: 'members';
  id: Scalars['String'];
  name: Scalars['String'];
  team_id: Scalars['String'];
};

/** aggregated selection of "members" */
export type Members_Aggregate = {
  __typename?: 'members_aggregate';
  aggregate?: Maybe<Members_Aggregate_Fields>;
  nodes: Array<Members>;
};

/** aggregate fields of "members" */
export type Members_Aggregate_Fields = {
  __typename?: 'members_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Members_Max_Fields>;
  min?: Maybe<Members_Min_Fields>;
};


/** aggregate fields of "members" */
export type Members_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Members_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Members_Max_Fields = {
  __typename?: 'members_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Members_Min_Fields = {
  __typename?: 'members_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** ordering options when selecting data from "teams" */
export type Teams_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  members_aggregate?: Maybe<Members_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

/** order by aggregate values of table "members" */
export type Members_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Members_Max_Order_By>;
  min?: Maybe<Members_Min_Order_By>;
};

/** order by max() on columns of table "members" */
export type Members_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** order by min() on columns of table "members" */
export type Members_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  _not?: Maybe<Teams_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  members?: Maybe<Members_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "teams" */
export type Teams = {
  __typename?: 'teams';
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** An array relationship */
  members: Array<Members>;
  /** An aggregated array relationship */
  members_aggregate: Members_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "teams" */
export type TeamsMembersArgs = {
  distinct_on?: Maybe<Array<Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Members_Order_By>>;
  where?: Maybe<Members_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Members_Order_By>>;
  where?: Maybe<Members_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
  __typename?: 'teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
  __typename?: 'teams_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
};


/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teams_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'teams_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** select columns of table "teams_public" */
export enum Teams_Public_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** ordering options when selecting data from "teams_public" */
export type Teams_Public_Order_By = {
  id?: Maybe<Order_By>;
  members_aggregate?: Maybe<Members_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teams_public". All fields are combined with a logical 'AND'. */
export type Teams_Public_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Public_Bool_Exp>>>;
  _not?: Maybe<Teams_Public_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Public_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  members?: Maybe<Members_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "teams_public" */
export type Teams_Public = {
  __typename?: 'teams_public';
  id?: Maybe<Scalars['String']>;
  /** An array relationship */
  members: Array<Members>;
  /** An aggregated array relationship */
  members_aggregate: Members_Aggregate;
  name?: Maybe<Scalars['String']>;
};


/** columns and relationships of "teams_public" */
export type Teams_PublicMembersArgs = {
  distinct_on?: Maybe<Array<Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Members_Order_By>>;
  where?: Maybe<Members_Bool_Exp>;
};


/** columns and relationships of "teams_public" */
export type Teams_PublicMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Members_Order_By>>;
  where?: Maybe<Members_Bool_Exp>;
};

/** aggregated selection of "teams_public" */
export type Teams_Public_Aggregate = {
  __typename?: 'teams_public_aggregate';
  aggregate?: Maybe<Teams_Public_Aggregate_Fields>;
  nodes: Array<Teams_Public>;
};

/** aggregate fields of "teams_public" */
export type Teams_Public_Aggregate_Fields = {
  __typename?: 'teams_public_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Teams_Public_Max_Fields>;
  min?: Maybe<Teams_Public_Min_Fields>;
};


/** aggregate fields of "teams_public" */
export type Teams_Public_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teams_Public_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Teams_Public_Max_Fields = {
  __typename?: 'teams_public_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Teams_Public_Min_Fields = {
  __typename?: 'teams_public_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "members" */
  delete_members?: Maybe<Members_Mutation_Response>;
  /** delete single row from the table: "members" */
  delete_members_by_pk?: Maybe<Members>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "teams_public" */
  delete_teams_public?: Maybe<Teams_Public_Mutation_Response>;
  /** insert data into the table: "members" */
  insert_members?: Maybe<Members_Mutation_Response>;
  /** insert a single row into the table: "members" */
  insert_members_one?: Maybe<Members>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "teams_public" */
  insert_teams_public?: Maybe<Teams_Public_Mutation_Response>;
  /** insert a single row into the table: "teams_public" */
  insert_teams_public_one?: Maybe<Teams_Public>;
  /** update data of the table: "members" */
  update_members?: Maybe<Members_Mutation_Response>;
  /** update single row of the table: "members" */
  update_members_by_pk?: Maybe<Members>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
  /** update data of the table: "teams_public" */
  update_teams_public?: Maybe<Teams_Public_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_MembersArgs = {
  where: Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Members_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Teams_PublicArgs = {
  where: Teams_Public_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_MembersArgs = {
  objects: Array<Members_Insert_Input>;
  on_conflict?: Maybe<Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Members_OneArgs = {
  object: Members_Insert_Input;
  on_conflict?: Maybe<Members_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_OneArgs = {
  object: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_PublicArgs = {
  objects: Array<Teams_Public_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_Public_OneArgs = {
  object: Teams_Public_Insert_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MembersArgs = {
  _set?: Maybe<Members_Set_Input>;
  where: Members_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Members_By_PkArgs = {
  _set?: Maybe<Members_Set_Input>;
  pk_columns: Members_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
  _set?: Maybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_By_PkArgs = {
  _set?: Maybe<Teams_Set_Input>;
  pk_columns: Teams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_PublicArgs = {
  _set?: Maybe<Teams_Public_Set_Input>;
  where: Teams_Public_Bool_Exp;
};

/** response of any mutation on the table "members" */
export type Members_Mutation_Response = {
  __typename?: 'members_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Members>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
  __typename?: 'teams_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams>;
};

/** response of any mutation on the table "teams_public" */
export type Teams_Public_Mutation_Response = {
  __typename?: 'teams_public_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams_Public>;
};

/** input type for inserting data into table "members" */
export type Members_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
};

/** on conflict condition type for table "members" */
export type Members_On_Conflict = {
  constraint: Members_Constraint;
  update_columns: Array<Members_Update_Column>;
  where?: Maybe<Members_Bool_Exp>;
};

/** unique or primary key constraints on table "members" */
export enum Members_Constraint {
  /** unique or primary key constraint */
  MembersPkey = 'members_pkey'
}

/** update columns of table "members" */
export enum Members_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TeamId = 'team_id'
}

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  members?: Maybe<Members_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

/** input type for inserting array relation for remote table "members" */
export type Members_Arr_Rel_Insert_Input = {
  data: Array<Members_Insert_Input>;
  on_conflict?: Maybe<Members_On_Conflict>;
};

/** on conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns: Array<Teams_Update_Column>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint */
  TeamsPkey = 'teams_pkey'
}

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for inserting data into table "teams_public" */
export type Teams_Public_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  members?: Maybe<Members_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
};

/** input type for updating data in table "members" */
export type Members_Set_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
};

/** primary key columns input for table: "members" */
export type Members_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** primary key columns input for table: "teams" */
export type Teams_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** input type for updating data in table "teams_public" */
export type Teams_Public_Set_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "members" */
  members: Array<Members>;
  /** fetch aggregated fields from the table: "members" */
  members_aggregate: Members_Aggregate;
  /** fetch data from the table: "members" using primary key columns */
  members_by_pk?: Maybe<Members>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table: "teams_public" */
  teams_public: Array<Teams_Public>;
  /** fetch aggregated fields from the table: "teams_public" */
  teams_public_aggregate: Teams_Public_Aggregate;
};


/** subscription root */
export type Subscription_RootMembersArgs = {
  distinct_on?: Maybe<Array<Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Members_Order_By>>;
  where?: Maybe<Members_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMembers_AggregateArgs = {
  distinct_on?: Maybe<Array<Members_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Members_Order_By>>;
  where?: Maybe<Members_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMembers_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeams_By_PkArgs = {
  id: Scalars['String'];
};


/** subscription root */
export type Subscription_RootTeams_PublicArgs = {
  distinct_on?: Maybe<Array<Teams_Public_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Public_Order_By>>;
  where?: Maybe<Teams_Public_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeams_Public_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Public_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Public_Order_By>>;
  where?: Maybe<Teams_Public_Bool_Exp>;
};

/** input type for inserting object relation for remote table "members" */
export type Members_Obj_Rel_Insert_Input = {
  data: Members_Insert_Input;
  on_conflict?: Maybe<Members_On_Conflict>;
};

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Max_Order_By>;
  min?: Maybe<Teams_Min_Order_By>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
  data: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** order by aggregate values of table "teams_public" */
export type Teams_Public_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Public_Max_Order_By>;
  min?: Maybe<Teams_Public_Min_Order_By>;
};

/** order by max() on columns of table "teams_public" */
export type Teams_Public_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** order by min() on columns of table "teams_public" */
export type Teams_Public_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "teams_public" */
export type Teams_Public_Arr_Rel_Insert_Input = {
  data: Array<Teams_Public_Insert_Input>;
};

/** input type for inserting object relation for remote table "teams_public" */
export type Teams_Public_Obj_Rel_Insert_Input = {
  data: Teams_Public_Insert_Input;
};

export type RegisterMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  members: Array<Members_Insert_Input>;
}>;


export type RegisterMutation = (
  { __typename?: 'mutation_root' }
  & { insert_teams_one?: Maybe<(
    { __typename?: 'teams' }
    & Pick<Teams, 'id'>
  )> }
);

export type GetPublicTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPublicTeamsQuery = (
  { __typename?: 'query_root' }
  & { teams_public: Array<(
    { __typename?: 'teams_public' }
    & Pick<Teams_Public, 'id' | 'name'>
    & { members: Array<(
      { __typename?: 'members' }
      & Pick<Members, 'name'>
    )> }
  )> }
);


export const RegisterDocument = gql`
    mutation register($id: String!, $name: String!, $email: String!, $members: [members_insert_input!]!) {
  insert_teams_one(object: {id: $id, name: $name, email: $email, members: {data: $members}}) {
    id
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      members: // value for 'members'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetPublicTeamsDocument = gql`
    query getPublicTeams {
  teams_public {
    id
    name
    members {
      name
    }
  }
}
    `;

/**
 * __useGetPublicTeamsQuery__
 *
 * To run a query within a React component, call `useGetPublicTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPublicTeamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPublicTeamsQuery, GetPublicTeamsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPublicTeamsQuery, GetPublicTeamsQueryVariables>(GetPublicTeamsDocument, baseOptions);
      }
export function useGetPublicTeamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPublicTeamsQuery, GetPublicTeamsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPublicTeamsQuery, GetPublicTeamsQueryVariables>(GetPublicTeamsDocument, baseOptions);
        }
export type GetPublicTeamsQueryHookResult = ReturnType<typeof useGetPublicTeamsQuery>;
export type GetPublicTeamsLazyQueryHookResult = ReturnType<typeof useGetPublicTeamsLazyQuery>;
export type GetPublicTeamsQueryResult = ApolloReactCommon.QueryResult<GetPublicTeamsQuery, GetPublicTeamsQueryVariables>;
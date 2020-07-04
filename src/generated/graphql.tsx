/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
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
  /** fetch data from the table: "my_team" */
  my_team: Array<My_Team>;
  /** fetch aggregated fields from the table: "my_team" */
  my_team_aggregate: My_Team_Aggregate;
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
export type Query_RootMy_TeamArgs = {
  distinct_on?: Maybe<Array<My_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<My_Team_Order_By>>;
  where?: Maybe<My_Team_Bool_Exp>;
};


/** query root */
export type Query_RootMy_Team_AggregateArgs = {
  distinct_on?: Maybe<Array<My_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<My_Team_Order_By>>;
  where?: Maybe<My_Team_Bool_Exp>;
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

/** select columns of table "my_team" */
export enum My_Team_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsParticipating = 'is_participating',
  /** column name */
  Location = 'location',
  /** column name */
  Member1 = 'member1',
  /** column name */
  Member2 = 'member2',
  /** column name */
  Member3 = 'member3',
  /** column name */
  Member4 = 'member4',
  /** column name */
  Name = 'name'
}

/** ordering options when selecting data from "my_team" */
export type My_Team_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_participating?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
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

/** Boolean expression to filter rows from the table "my_team". All fields are combined with a logical 'AND'. */
export type My_Team_Bool_Exp = {
  _and?: Maybe<Array<Maybe<My_Team_Bool_Exp>>>;
  _not?: Maybe<My_Team_Bool_Exp>;
  _or?: Maybe<Array<Maybe<My_Team_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  is_participating?: Maybe<Boolean_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  member1?: Maybe<String_Comparison_Exp>;
  member2?: Maybe<String_Comparison_Exp>;
  member3?: Maybe<String_Comparison_Exp>;
  member4?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
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

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "my_team" */
export type My_Team = {
  __typename?: 'my_team';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_participating?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "my_team" */
export type My_Team_Aggregate = {
  __typename?: 'my_team_aggregate';
  aggregate?: Maybe<My_Team_Aggregate_Fields>;
  nodes: Array<My_Team>;
};

/** aggregate fields of "my_team" */
export type My_Team_Aggregate_Fields = {
  __typename?: 'my_team_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<My_Team_Max_Fields>;
  min?: Maybe<My_Team_Min_Fields>;
};


/** aggregate fields of "my_team" */
export type My_Team_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<My_Team_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type My_Team_Max_Fields = {
  __typename?: 'my_team_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type My_Team_Min_Fields = {
  __typename?: 'my_team_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsParticipating = 'is_participating',
  /** column name */
  Location = 'location',
  /** column name */
  Member1 = 'member1',
  /** column name */
  Member2 = 'member2',
  /** column name */
  Member3 = 'member3',
  /** column name */
  Member4 = 'member4',
  /** column name */
  Name = 'name'
}

/** ordering options when selecting data from "teams" */
export type Teams_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_participating?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  _not?: Maybe<Teams_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  is_participating?: Maybe<Boolean_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  member1?: Maybe<String_Comparison_Exp>;
  member2?: Maybe<String_Comparison_Exp>;
  member3?: Maybe<String_Comparison_Exp>;
  member4?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "teams" */
export type Teams = {
  __typename?: 'teams';
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  is_participating: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name: Scalars['String'];
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
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** select columns of table "teams_public" */
export enum Teams_Public_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Member1 = 'member1',
  /** column name */
  Member2 = 'member2',
  /** column name */
  Member3 = 'member3',
  /** column name */
  Member4 = 'member4',
  /** column name */
  Name = 'name'
}

/** ordering options when selecting data from "teams_public" */
export type Teams_Public_Order_By = {
  id?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teams_public". All fields are combined with a logical 'AND'. */
export type Teams_Public_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Public_Bool_Exp>>>;
  _not?: Maybe<Teams_Public_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Public_Bool_Exp>>>;
  id?: Maybe<String_Comparison_Exp>;
  member1?: Maybe<String_Comparison_Exp>;
  member2?: Maybe<String_Comparison_Exp>;
  member3?: Maybe<String_Comparison_Exp>;
  member4?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** columns and relationships of "teams_public" */
export type Teams_Public = {
  __typename?: 'teams_public';
  id?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Teams_Public_Min_Fields = {
  __typename?: 'teams_public_min_fields';
  id?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "my_team" */
  delete_my_team?: Maybe<My_Team_Mutation_Response>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "teams_public" */
  delete_teams_public?: Maybe<Teams_Public_Mutation_Response>;
  /** insert data into the table: "my_team" */
  insert_my_team?: Maybe<My_Team_Mutation_Response>;
  /** insert a single row into the table: "my_team" */
  insert_my_team_one?: Maybe<My_Team>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "teams_public" */
  insert_teams_public?: Maybe<Teams_Public_Mutation_Response>;
  /** insert a single row into the table: "teams_public" */
  insert_teams_public_one?: Maybe<Teams_Public>;
  /** update data of the table: "my_team" */
  update_my_team?: Maybe<My_Team_Mutation_Response>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
  /** update data of the table: "teams_public" */
  update_teams_public?: Maybe<Teams_Public_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDelete_My_TeamArgs = {
  where: My_Team_Bool_Exp;
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
export type Mutation_RootInsert_My_TeamArgs = {
  objects: Array<My_Team_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_My_Team_OneArgs = {
  object: My_Team_Insert_Input;
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
export type Mutation_RootUpdate_My_TeamArgs = {
  _set?: Maybe<My_Team_Set_Input>;
  where: My_Team_Bool_Exp;
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

/** response of any mutation on the table "my_team" */
export type My_Team_Mutation_Response = {
  __typename?: 'my_team_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<My_Team>;
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

/** input type for inserting data into table "my_team" */
export type My_Team_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_participating?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_participating?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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
  IsParticipating = 'is_participating',
  /** column name */
  Location = 'location',
  /** column name */
  Member1 = 'member1',
  /** column name */
  Member2 = 'member2',
  /** column name */
  Member3 = 'member3',
  /** column name */
  Member4 = 'member4',
  /** column name */
  Name = 'name'
}

/** input type for inserting data into table "teams_public" */
export type Teams_Public_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** input type for updating data in table "my_team" */
export type My_Team_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_participating?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_participating?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** primary key columns input for table: "teams" */
export type Teams_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** input type for updating data in table "teams_public" */
export type Teams_Public_Set_Input = {
  id?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "my_team" */
  my_team: Array<My_Team>;
  /** fetch aggregated fields from the table: "my_team" */
  my_team_aggregate: My_Team_Aggregate;
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
export type Subscription_RootMy_TeamArgs = {
  distinct_on?: Maybe<Array<My_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<My_Team_Order_By>>;
  where?: Maybe<My_Team_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootMy_Team_AggregateArgs = {
  distinct_on?: Maybe<Array<My_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<My_Team_Order_By>>;
  where?: Maybe<My_Team_Bool_Exp>;
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

/** order by aggregate values of table "my_team" */
export type My_Team_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<My_Team_Max_Order_By>;
  min?: Maybe<My_Team_Min_Order_By>;
};

/** order by max() on columns of table "my_team" */
export type My_Team_Max_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** order by min() on columns of table "my_team" */
export type My_Team_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** input type for inserting array relation for remote table "my_team" */
export type My_Team_Arr_Rel_Insert_Input = {
  data: Array<My_Team_Insert_Input>;
};

/** input type for inserting object relation for remote table "my_team" */
export type My_Team_Obj_Rel_Insert_Input = {
  data: My_Team_Insert_Input;
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
  location?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
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
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** order by min() on columns of table "teams_public" */
export type Teams_Public_Min_Order_By = {
  id?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
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
  data: Teams_Insert_Input;
}>;


export type RegisterMutation = (
  { __typename?: 'mutation_root' }
  & { insert_teams_one?: Maybe<(
    { __typename?: 'teams' }
    & Pick<Teams, 'id'>
  )> }
);

export type UpdateTeamMutationVariables = Exact<{
  id: Scalars['String'];
  data: Teams_Set_Input;
}>;


export type UpdateTeamMutation = (
  { __typename?: 'mutation_root' }
  & { update_teams_by_pk?: Maybe<(
    { __typename?: 'teams' }
    & Pick<Teams, 'id'>
  )> }
);

export type GetPublicTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPublicTeamsQuery = (
  { __typename?: 'query_root' }
  & { teams_public: Array<(
    { __typename?: 'teams_public' }
    & Pick<Teams_Public, 'id' | 'name' | 'member1' | 'member2' | 'member3' | 'member4'>
  )> }
);

export type GetMyTeamQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyTeamQuery = (
  { __typename?: 'query_root' }
  & { my_team: Array<(
    { __typename?: 'my_team' }
    & Pick<My_Team, 'id' | 'name' | 'email' | 'is_participating' | 'member1' | 'member2' | 'member3' | 'member4' | 'location'>
  )> }
);


export const RegisterDocument = gql`
    mutation register($data: teams_insert_input!) {
  insert_teams_one(object: $data) {
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
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateTeamDocument = gql`
    mutation updateTeam($id: String!, $data: teams_set_input!) {
  update_teams_by_pk(_set: $data, pk_columns: {id: $id}) {
    id
  }
}
    `;
export type UpdateTeamMutationFn = ApolloReactCommon.MutationFunction<UpdateTeamMutation, UpdateTeamMutationVariables>;

/**
 * __useUpdateTeamMutation__
 *
 * To run a mutation, you first call `useUpdateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTeamMutation, { data, loading, error }] = useUpdateTeamMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateTeamMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTeamMutation, UpdateTeamMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTeamMutation, UpdateTeamMutationVariables>(UpdateTeamDocument, baseOptions);
      }
export type UpdateTeamMutationHookResult = ReturnType<typeof useUpdateTeamMutation>;
export type UpdateTeamMutationResult = ApolloReactCommon.MutationResult<UpdateTeamMutation>;
export type UpdateTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTeamMutation, UpdateTeamMutationVariables>;
export const GetPublicTeamsDocument = gql`
    query getPublicTeams {
  teams_public {
    id
    name
    member1
    member2
    member3
    member4
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
export const GetMyTeamDocument = gql`
    query getMyTeam {
  my_team {
    id
    name
    email
    is_participating
    member1
    member2
    member3
    member4
    location
  }
}
    `;

/**
 * __useGetMyTeamQuery__
 *
 * To run a query within a React component, call `useGetMyTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyTeamQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyTeamQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMyTeamQuery, GetMyTeamQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMyTeamQuery, GetMyTeamQueryVariables>(GetMyTeamDocument, baseOptions);
      }
export function useGetMyTeamLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMyTeamQuery, GetMyTeamQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMyTeamQuery, GetMyTeamQueryVariables>(GetMyTeamDocument, baseOptions);
        }
export type GetMyTeamQueryHookResult = ReturnType<typeof useGetMyTeamQuery>;
export type GetMyTeamLazyQueryHookResult = ReturnType<typeof useGetMyTeamLazyQuery>;
export type GetMyTeamQueryResult = ApolloReactCommon.QueryResult<GetMyTeamQuery, GetMyTeamQueryVariables>;
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
  json: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
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

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Output = {
  __typename?: 'Output';
  error?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
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

/** columns and relationships of "ciphers" */
export type Ciphers = {
  __typename?: 'ciphers';
  cipher_code: Scalars['String'];
  cipher_number: Scalars['Int'];
  hint_text?: Maybe<Scalars['String']>;
  hint_time?: Maybe<Scalars['Int']>;
  solution?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  solution_time?: Maybe<Scalars['Int']>;
  /** An array relationship */
  teams_statuses: Array<Teams_Status>;
  /** An aggregated array relationship */
  teams_statuses_aggregate: Teams_Status_Aggregate;
  url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "ciphers" */
export type CiphersTeams_StatusesArgs = {
  distinct_on?: Maybe<Array<Teams_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Status_Order_By>>;
  where?: Maybe<Teams_Status_Bool_Exp>;
};


/** columns and relationships of "ciphers" */
export type CiphersTeams_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Status_Order_By>>;
  where?: Maybe<Teams_Status_Bool_Exp>;
};

/** aggregated selection of "ciphers" */
export type Ciphers_Aggregate = {
  __typename?: 'ciphers_aggregate';
  aggregate?: Maybe<Ciphers_Aggregate_Fields>;
  nodes: Array<Ciphers>;
};

/** aggregate fields of "ciphers" */
export type Ciphers_Aggregate_Fields = {
  __typename?: 'ciphers_aggregate_fields';
  avg?: Maybe<Ciphers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ciphers_Max_Fields>;
  min?: Maybe<Ciphers_Min_Fields>;
  stddev?: Maybe<Ciphers_Stddev_Fields>;
  stddev_pop?: Maybe<Ciphers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ciphers_Stddev_Samp_Fields>;
  sum?: Maybe<Ciphers_Sum_Fields>;
  var_pop?: Maybe<Ciphers_Var_Pop_Fields>;
  var_samp?: Maybe<Ciphers_Var_Samp_Fields>;
  variance?: Maybe<Ciphers_Variance_Fields>;
};


/** aggregate fields of "ciphers" */
export type Ciphers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ciphers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ciphers" */
export type Ciphers_Aggregate_Order_By = {
  avg?: Maybe<Ciphers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ciphers_Max_Order_By>;
  min?: Maybe<Ciphers_Min_Order_By>;
  stddev?: Maybe<Ciphers_Stddev_Order_By>;
  stddev_pop?: Maybe<Ciphers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ciphers_Stddev_Samp_Order_By>;
  sum?: Maybe<Ciphers_Sum_Order_By>;
  var_pop?: Maybe<Ciphers_Var_Pop_Order_By>;
  var_samp?: Maybe<Ciphers_Var_Samp_Order_By>;
  variance?: Maybe<Ciphers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ciphers" */
export type Ciphers_Arr_Rel_Insert_Input = {
  data: Array<Ciphers_Insert_Input>;
  on_conflict?: Maybe<Ciphers_On_Conflict>;
};

/** aggregate avg on columns */
export type Ciphers_Avg_Fields = {
  __typename?: 'ciphers_avg_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  hint_time?: Maybe<Scalars['Float']>;
  solution_time?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ciphers" */
export type Ciphers_Avg_Order_By = {
  cipher_number?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ciphers". All fields are combined with a logical 'AND'. */
export type Ciphers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ciphers_Bool_Exp>>>;
  _not?: Maybe<Ciphers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ciphers_Bool_Exp>>>;
  cipher_code?: Maybe<String_Comparison_Exp>;
  cipher_number?: Maybe<Int_Comparison_Exp>;
  hint_text?: Maybe<String_Comparison_Exp>;
  hint_time?: Maybe<Int_Comparison_Exp>;
  solution?: Maybe<String_Comparison_Exp>;
  solution_text?: Maybe<String_Comparison_Exp>;
  solution_time?: Maybe<Int_Comparison_Exp>;
  teams_statuses?: Maybe<Teams_Status_Bool_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ciphers" */
export enum Ciphers_Constraint {
  /** unique or primary key constraint */
  SolutionsPkey = 'solutions_pkey'
}

/** input type for incrementing integer column in table "ciphers" */
export type Ciphers_Inc_Input = {
  cipher_number?: Maybe<Scalars['Int']>;
  hint_time?: Maybe<Scalars['Int']>;
  solution_time?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "ciphers" */
export type Ciphers_Insert_Input = {
  cipher_code?: Maybe<Scalars['String']>;
  cipher_number?: Maybe<Scalars['Int']>;
  hint_text?: Maybe<Scalars['String']>;
  hint_time?: Maybe<Scalars['Int']>;
  solution?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  solution_time?: Maybe<Scalars['Int']>;
  teams_statuses?: Maybe<Teams_Status_Arr_Rel_Insert_Input>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ciphers_Max_Fields = {
  __typename?: 'ciphers_max_fields';
  cipher_code?: Maybe<Scalars['String']>;
  cipher_number?: Maybe<Scalars['Int']>;
  hint_text?: Maybe<Scalars['String']>;
  hint_time?: Maybe<Scalars['Int']>;
  solution?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  solution_time?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ciphers" */
export type Ciphers_Max_Order_By = {
  cipher_code?: Maybe<Order_By>;
  cipher_number?: Maybe<Order_By>;
  hint_text?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution?: Maybe<Order_By>;
  solution_text?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Ciphers_Min_Fields = {
  __typename?: 'ciphers_min_fields';
  cipher_code?: Maybe<Scalars['String']>;
  cipher_number?: Maybe<Scalars['Int']>;
  hint_text?: Maybe<Scalars['String']>;
  hint_time?: Maybe<Scalars['Int']>;
  solution?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  solution_time?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ciphers" */
export type Ciphers_Min_Order_By = {
  cipher_code?: Maybe<Order_By>;
  cipher_number?: Maybe<Order_By>;
  hint_text?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution?: Maybe<Order_By>;
  solution_text?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "ciphers" */
export type Ciphers_Mutation_Response = {
  __typename?: 'ciphers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Ciphers>;
};

/** input type for inserting object relation for remote table "ciphers" */
export type Ciphers_Obj_Rel_Insert_Input = {
  data: Ciphers_Insert_Input;
  on_conflict?: Maybe<Ciphers_On_Conflict>;
};

/** on conflict condition type for table "ciphers" */
export type Ciphers_On_Conflict = {
  constraint: Ciphers_Constraint;
  update_columns: Array<Ciphers_Update_Column>;
  where?: Maybe<Ciphers_Bool_Exp>;
};

/** ordering options when selecting data from "ciphers" */
export type Ciphers_Order_By = {
  cipher_code?: Maybe<Order_By>;
  cipher_number?: Maybe<Order_By>;
  hint_text?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution?: Maybe<Order_By>;
  solution_text?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
  teams_statuses_aggregate?: Maybe<Teams_Status_Aggregate_Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "ciphers" */
export type Ciphers_Pk_Columns_Input = {
  cipher_number: Scalars['Int'];
};

/** select columns of table "ciphers" */
export enum Ciphers_Select_Column {
  /** column name */
  CipherCode = 'cipher_code',
  /** column name */
  CipherNumber = 'cipher_number',
  /** column name */
  HintText = 'hint_text',
  /** column name */
  HintTime = 'hint_time',
  /** column name */
  Solution = 'solution',
  /** column name */
  SolutionText = 'solution_text',
  /** column name */
  SolutionTime = 'solution_time',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "ciphers" */
export type Ciphers_Set_Input = {
  cipher_code?: Maybe<Scalars['String']>;
  cipher_number?: Maybe<Scalars['Int']>;
  hint_text?: Maybe<Scalars['String']>;
  hint_time?: Maybe<Scalars['Int']>;
  solution?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  solution_time?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ciphers_Stddev_Fields = {
  __typename?: 'ciphers_stddev_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  hint_time?: Maybe<Scalars['Float']>;
  solution_time?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ciphers" */
export type Ciphers_Stddev_Order_By = {
  cipher_number?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ciphers_Stddev_Pop_Fields = {
  __typename?: 'ciphers_stddev_pop_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  hint_time?: Maybe<Scalars['Float']>;
  solution_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ciphers" */
export type Ciphers_Stddev_Pop_Order_By = {
  cipher_number?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ciphers_Stddev_Samp_Fields = {
  __typename?: 'ciphers_stddev_samp_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  hint_time?: Maybe<Scalars['Float']>;
  solution_time?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ciphers" */
export type Ciphers_Stddev_Samp_Order_By = {
  cipher_number?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Ciphers_Sum_Fields = {
  __typename?: 'ciphers_sum_fields';
  cipher_number?: Maybe<Scalars['Int']>;
  hint_time?: Maybe<Scalars['Int']>;
  solution_time?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ciphers" */
export type Ciphers_Sum_Order_By = {
  cipher_number?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
};

/** update columns of table "ciphers" */
export enum Ciphers_Update_Column {
  /** column name */
  CipherCode = 'cipher_code',
  /** column name */
  CipherNumber = 'cipher_number',
  /** column name */
  HintText = 'hint_text',
  /** column name */
  HintTime = 'hint_time',
  /** column name */
  Solution = 'solution',
  /** column name */
  SolutionText = 'solution_text',
  /** column name */
  SolutionTime = 'solution_time',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Ciphers_Var_Pop_Fields = {
  __typename?: 'ciphers_var_pop_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  hint_time?: Maybe<Scalars['Float']>;
  solution_time?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ciphers" */
export type Ciphers_Var_Pop_Order_By = {
  cipher_number?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ciphers_Var_Samp_Fields = {
  __typename?: 'ciphers_var_samp_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  hint_time?: Maybe<Scalars['Float']>;
  solution_time?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ciphers" */
export type Ciphers_Var_Samp_Order_By = {
  cipher_number?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Ciphers_Variance_Fields = {
  __typename?: 'ciphers_variance_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  hint_time?: Maybe<Scalars['Float']>;
  solution_time?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ciphers" */
export type Ciphers_Variance_Order_By = {
  cipher_number?: Maybe<Order_By>;
  hint_time?: Maybe<Order_By>;
  solution_time?: Maybe<Order_By>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** perform the action: "arrive" */
  arrive: Output;
  /** delete data from the table: "ciphers" */
  delete_ciphers?: Maybe<Ciphers_Mutation_Response>;
  /** delete single row from the table: "ciphers" */
  delete_ciphers_by_pk?: Maybe<Ciphers>;
  /** delete data from the table: "my_team" */
  delete_my_team?: Maybe<My_Team_Mutation_Response>;
  /** delete data from the table: "routes" */
  delete_routes?: Maybe<Routes_Mutation_Response>;
  /** delete single row from the table: "routes" */
  delete_routes_by_pk?: Maybe<Routes>;
  /** delete data from the table: "submits" */
  delete_submits?: Maybe<Submits_Mutation_Response>;
  /** delete single row from the table: "submits" */
  delete_submits_by_pk?: Maybe<Submits>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "teams_public" */
  delete_teams_public?: Maybe<Teams_Public_Mutation_Response>;
  /** delete data from the table: "teams_status" */
  delete_teams_status?: Maybe<Teams_Status_Mutation_Response>;
  /** delete single row from the table: "teams_status" */
  delete_teams_status_by_pk?: Maybe<Teams_Status>;
  /** insert data into the table: "ciphers" */
  insert_ciphers?: Maybe<Ciphers_Mutation_Response>;
  /** insert a single row into the table: "ciphers" */
  insert_ciphers_one?: Maybe<Ciphers>;
  /** insert data into the table: "my_team" */
  insert_my_team?: Maybe<My_Team_Mutation_Response>;
  /** insert a single row into the table: "my_team" */
  insert_my_team_one?: Maybe<My_Team>;
  /** insert data into the table: "routes" */
  insert_routes?: Maybe<Routes_Mutation_Response>;
  /** insert a single row into the table: "routes" */
  insert_routes_one?: Maybe<Routes>;
  /** insert data into the table: "submits" */
  insert_submits?: Maybe<Submits_Mutation_Response>;
  /** insert a single row into the table: "submits" */
  insert_submits_one?: Maybe<Submits>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "teams_public" */
  insert_teams_public?: Maybe<Teams_Public_Mutation_Response>;
  /** insert a single row into the table: "teams_public" */
  insert_teams_public_one?: Maybe<Teams_Public>;
  /** insert data into the table: "teams_status" */
  insert_teams_status?: Maybe<Teams_Status_Mutation_Response>;
  /** insert a single row into the table: "teams_status" */
  insert_teams_status_one?: Maybe<Teams_Status>;
  /** perform the action: "takeHint" */
  takeHint: Output;
  /** perform the action: "takeSolution" */
  takeSolution: Output;
  /** perform the action: "trySolve" */
  trySolve: Output;
  /** update data of the table: "ciphers" */
  update_ciphers?: Maybe<Ciphers_Mutation_Response>;
  /** update single row of the table: "ciphers" */
  update_ciphers_by_pk?: Maybe<Ciphers>;
  /** update data of the table: "my_team" */
  update_my_team?: Maybe<My_Team_Mutation_Response>;
  /** update data of the table: "routes" */
  update_routes?: Maybe<Routes_Mutation_Response>;
  /** update single row of the table: "routes" */
  update_routes_by_pk?: Maybe<Routes>;
  /** update data of the table: "submits" */
  update_submits?: Maybe<Submits_Mutation_Response>;
  /** update single row of the table: "submits" */
  update_submits_by_pk?: Maybe<Submits>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
  /** update data of the table: "teams_public" */
  update_teams_public?: Maybe<Teams_Public_Mutation_Response>;
  /** update data of the table: "teams_status" */
  update_teams_status?: Maybe<Teams_Status_Mutation_Response>;
  /** update single row of the table: "teams_status" */
  update_teams_status_by_pk?: Maybe<Teams_Status>;
};


/** mutation root */
export type Mutation_RootDelete_CiphersArgs = {
  where: Ciphers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ciphers_By_PkArgs = {
  cipher_number: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_My_TeamArgs = {
  where: My_Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_RoutesArgs = {
  where: Routes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Routes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SubmitsArgs = {
  where: Submits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Submits_By_PkArgs = {
  id: Scalars['Int'];
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
export type Mutation_RootDelete_Teams_StatusArgs = {
  where: Teams_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teams_Status_By_PkArgs = {
  team_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_CiphersArgs = {
  objects: Array<Ciphers_Insert_Input>;
  on_conflict?: Maybe<Ciphers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ciphers_OneArgs = {
  object: Ciphers_Insert_Input;
  on_conflict?: Maybe<Ciphers_On_Conflict>;
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
export type Mutation_RootInsert_RoutesArgs = {
  objects: Array<Routes_Insert_Input>;
  on_conflict?: Maybe<Routes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Routes_OneArgs = {
  object: Routes_Insert_Input;
  on_conflict?: Maybe<Routes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubmitsArgs = {
  objects: Array<Submits_Insert_Input>;
  on_conflict?: Maybe<Submits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Submits_OneArgs = {
  object: Submits_Insert_Input;
  on_conflict?: Maybe<Submits_On_Conflict>;
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
export type Mutation_RootInsert_Teams_StatusArgs = {
  objects: Array<Teams_Status_Insert_Input>;
  on_conflict?: Maybe<Teams_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_Status_OneArgs = {
  object: Teams_Status_Insert_Input;
  on_conflict?: Maybe<Teams_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootTrySolveArgs = {
  solution: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdate_CiphersArgs = {
  _inc?: Maybe<Ciphers_Inc_Input>;
  _set?: Maybe<Ciphers_Set_Input>;
  where: Ciphers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ciphers_By_PkArgs = {
  _inc?: Maybe<Ciphers_Inc_Input>;
  _set?: Maybe<Ciphers_Set_Input>;
  pk_columns: Ciphers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_My_TeamArgs = {
  _set?: Maybe<My_Team_Set_Input>;
  where: My_Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_RoutesArgs = {
  _append?: Maybe<Routes_Append_Input>;
  _delete_at_path?: Maybe<Routes_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Routes_Delete_Elem_Input>;
  _delete_key?: Maybe<Routes_Delete_Key_Input>;
  _prepend?: Maybe<Routes_Prepend_Input>;
  _set?: Maybe<Routes_Set_Input>;
  where: Routes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Routes_By_PkArgs = {
  _append?: Maybe<Routes_Append_Input>;
  _delete_at_path?: Maybe<Routes_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Routes_Delete_Elem_Input>;
  _delete_key?: Maybe<Routes_Delete_Key_Input>;
  _prepend?: Maybe<Routes_Prepend_Input>;
  _set?: Maybe<Routes_Set_Input>;
  pk_columns: Routes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SubmitsArgs = {
  _inc?: Maybe<Submits_Inc_Input>;
  _set?: Maybe<Submits_Set_Input>;
  where: Submits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Submits_By_PkArgs = {
  _inc?: Maybe<Submits_Inc_Input>;
  _set?: Maybe<Submits_Set_Input>;
  pk_columns: Submits_Pk_Columns_Input;
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


/** mutation root */
export type Mutation_RootUpdate_Teams_StatusArgs = {
  _inc?: Maybe<Teams_Status_Inc_Input>;
  _set?: Maybe<Teams_Status_Set_Input>;
  where: Teams_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_Status_By_PkArgs = {
  _inc?: Maybe<Teams_Status_Inc_Input>;
  _set?: Maybe<Teams_Status_Set_Input>;
  pk_columns: Teams_Status_Pk_Columns_Input;
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
  /** An object relationship */
  status?: Maybe<Teams_Status>;
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

/** order by aggregate values of table "my_team" */
export type My_Team_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<My_Team_Max_Order_By>;
  min?: Maybe<My_Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "my_team" */
export type My_Team_Arr_Rel_Insert_Input = {
  data: Array<My_Team_Insert_Input>;
};

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
  status?: Maybe<Teams_Status_Bool_Exp>;
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
  status?: Maybe<Teams_Status_Obj_Rel_Insert_Input>;
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

/** response of any mutation on the table "my_team" */
export type My_Team_Mutation_Response = {
  __typename?: 'my_team_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<My_Team>;
};

/** input type for inserting object relation for remote table "my_team" */
export type My_Team_Obj_Rel_Insert_Input = {
  data: My_Team_Insert_Input;
};

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
  status?: Maybe<Teams_Status_Order_By>;
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

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "ciphers" */
  ciphers: Array<Ciphers>;
  /** fetch aggregated fields from the table: "ciphers" */
  ciphers_aggregate: Ciphers_Aggregate;
  /** fetch data from the table: "ciphers" using primary key columns */
  ciphers_by_pk?: Maybe<Ciphers>;
  /** fetch data from the table: "my_team" */
  my_team: Array<My_Team>;
  /** fetch aggregated fields from the table: "my_team" */
  my_team_aggregate: My_Team_Aggregate;
  /** fetch data from the table: "routes" */
  routes: Array<Routes>;
  /** fetch aggregated fields from the table: "routes" */
  routes_aggregate: Routes_Aggregate;
  /** fetch data from the table: "routes" using primary key columns */
  routes_by_pk?: Maybe<Routes>;
  /** fetch data from the table: "submits" */
  submits: Array<Submits>;
  /** fetch aggregated fields from the table: "submits" */
  submits_aggregate: Submits_Aggregate;
  /** fetch data from the table: "submits" using primary key columns */
  submits_by_pk?: Maybe<Submits>;
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
  /** fetch data from the table: "teams_status" */
  teams_status: Array<Teams_Status>;
  /** fetch aggregated fields from the table: "teams_status" */
  teams_status_aggregate: Teams_Status_Aggregate;
  /** fetch data from the table: "teams_status" using primary key columns */
  teams_status_by_pk?: Maybe<Teams_Status>;
};


/** query root */
export type Query_RootCiphersArgs = {
  distinct_on?: Maybe<Array<Ciphers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ciphers_Order_By>>;
  where?: Maybe<Ciphers_Bool_Exp>;
};


/** query root */
export type Query_RootCiphers_AggregateArgs = {
  distinct_on?: Maybe<Array<Ciphers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ciphers_Order_By>>;
  where?: Maybe<Ciphers_Bool_Exp>;
};


/** query root */
export type Query_RootCiphers_By_PkArgs = {
  cipher_number: Scalars['Int'];
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
export type Query_RootRoutesArgs = {
  distinct_on?: Maybe<Array<Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Routes_Order_By>>;
  where?: Maybe<Routes_Bool_Exp>;
};


/** query root */
export type Query_RootRoutes_AggregateArgs = {
  distinct_on?: Maybe<Array<Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Routes_Order_By>>;
  where?: Maybe<Routes_Bool_Exp>;
};


/** query root */
export type Query_RootRoutes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootSubmitsArgs = {
  distinct_on?: Maybe<Array<Submits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Submits_Order_By>>;
  where?: Maybe<Submits_Bool_Exp>;
};


/** query root */
export type Query_RootSubmits_AggregateArgs = {
  distinct_on?: Maybe<Array<Submits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Submits_Order_By>>;
  where?: Maybe<Submits_Bool_Exp>;
};


/** query root */
export type Query_RootSubmits_By_PkArgs = {
  id: Scalars['Int'];
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


/** query root */
export type Query_RootTeams_StatusArgs = {
  distinct_on?: Maybe<Array<Teams_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Status_Order_By>>;
  where?: Maybe<Teams_Status_Bool_Exp>;
};


/** query root */
export type Query_RootTeams_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Status_Order_By>>;
  where?: Maybe<Teams_Status_Bool_Exp>;
};


/** query root */
export type Query_RootTeams_Status_By_PkArgs = {
  team_id: Scalars['String'];
};

/** columns and relationships of "routes" */
export type Routes = {
  __typename?: 'routes';
  id: Scalars['uuid'];
  places: Scalars['jsonb'];
  route_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  teams: Array<Teams>;
  /** An aggregated array relationship */
  teams_aggregate: Teams_Aggregate;
};


/** columns and relationships of "routes" */
export type RoutesPlacesArgs = {
  path?: Maybe<Scalars['String']>;
};


/** columns and relationships of "routes" */
export type RoutesTeamsArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};


/** columns and relationships of "routes" */
export type RoutesTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Order_By>>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** aggregated selection of "routes" */
export type Routes_Aggregate = {
  __typename?: 'routes_aggregate';
  aggregate?: Maybe<Routes_Aggregate_Fields>;
  nodes: Array<Routes>;
};

/** aggregate fields of "routes" */
export type Routes_Aggregate_Fields = {
  __typename?: 'routes_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Routes_Max_Fields>;
  min?: Maybe<Routes_Min_Fields>;
};


/** aggregate fields of "routes" */
export type Routes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Routes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "routes" */
export type Routes_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Routes_Max_Order_By>;
  min?: Maybe<Routes_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Routes_Append_Input = {
  places?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "routes" */
export type Routes_Arr_Rel_Insert_Input = {
  data: Array<Routes_Insert_Input>;
  on_conflict?: Maybe<Routes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "routes". All fields are combined with a logical 'AND'. */
export type Routes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Routes_Bool_Exp>>>;
  _not?: Maybe<Routes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Routes_Bool_Exp>>>;
  id?: Maybe<Uuid_Comparison_Exp>;
  places?: Maybe<Jsonb_Comparison_Exp>;
  route_name?: Maybe<String_Comparison_Exp>;
  teams?: Maybe<Teams_Bool_Exp>;
};

/** unique or primary key constraints on table "routes" */
export enum Routes_Constraint {
  /** unique or primary key constraint */
  RoutesPkey = 'routes_pkey',
  /** unique or primary key constraint */
  RoutesRouteNameKey = 'routes_route_name_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Routes_Delete_At_Path_Input = {
  places?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Routes_Delete_Elem_Input = {
  places?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Routes_Delete_Key_Input = {
  places?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "routes" */
export type Routes_Insert_Input = {
  id?: Maybe<Scalars['uuid']>;
  places?: Maybe<Scalars['jsonb']>;
  route_name?: Maybe<Scalars['String']>;
  teams?: Maybe<Teams_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Routes_Max_Fields = {
  __typename?: 'routes_max_fields';
  id?: Maybe<Scalars['uuid']>;
  route_name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "routes" */
export type Routes_Max_Order_By = {
  id?: Maybe<Order_By>;
  route_name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Routes_Min_Fields = {
  __typename?: 'routes_min_fields';
  id?: Maybe<Scalars['uuid']>;
  route_name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "routes" */
export type Routes_Min_Order_By = {
  id?: Maybe<Order_By>;
  route_name?: Maybe<Order_By>;
};

/** response of any mutation on the table "routes" */
export type Routes_Mutation_Response = {
  __typename?: 'routes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Routes>;
};

/** input type for inserting object relation for remote table "routes" */
export type Routes_Obj_Rel_Insert_Input = {
  data: Routes_Insert_Input;
  on_conflict?: Maybe<Routes_On_Conflict>;
};

/** on conflict condition type for table "routes" */
export type Routes_On_Conflict = {
  constraint: Routes_Constraint;
  update_columns: Array<Routes_Update_Column>;
  where?: Maybe<Routes_Bool_Exp>;
};

/** ordering options when selecting data from "routes" */
export type Routes_Order_By = {
  id?: Maybe<Order_By>;
  places?: Maybe<Order_By>;
  route_name?: Maybe<Order_By>;
  teams_aggregate?: Maybe<Teams_Aggregate_Order_By>;
};

/** primary key columns input for table: "routes" */
export type Routes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Routes_Prepend_Input = {
  places?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "routes" */
export enum Routes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Places = 'places',
  /** column name */
  RouteName = 'route_name'
}

/** input type for updating data in table "routes" */
export type Routes_Set_Input = {
  id?: Maybe<Scalars['uuid']>;
  places?: Maybe<Scalars['jsonb']>;
  route_name?: Maybe<Scalars['String']>;
};

/** update columns of table "routes" */
export enum Routes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Places = 'places',
  /** column name */
  RouteName = 'route_name'
}

/** columns and relationships of "submits" */
export type Submits = {
  __typename?: 'submits';
  action: Scalars['String'];
  cipher_number: Scalars['Int'];
  id: Scalars['Int'];
  payload?: Maybe<Scalars['String']>;
  /** An object relationship */
  team: Teams;
  team_id: Scalars['String'];
  timestamp: Scalars['timestamptz'];
};

/** aggregated selection of "submits" */
export type Submits_Aggregate = {
  __typename?: 'submits_aggregate';
  aggregate?: Maybe<Submits_Aggregate_Fields>;
  nodes: Array<Submits>;
};

/** aggregate fields of "submits" */
export type Submits_Aggregate_Fields = {
  __typename?: 'submits_aggregate_fields';
  avg?: Maybe<Submits_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Submits_Max_Fields>;
  min?: Maybe<Submits_Min_Fields>;
  stddev?: Maybe<Submits_Stddev_Fields>;
  stddev_pop?: Maybe<Submits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Submits_Stddev_Samp_Fields>;
  sum?: Maybe<Submits_Sum_Fields>;
  var_pop?: Maybe<Submits_Var_Pop_Fields>;
  var_samp?: Maybe<Submits_Var_Samp_Fields>;
  variance?: Maybe<Submits_Variance_Fields>;
};


/** aggregate fields of "submits" */
export type Submits_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Submits_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "submits" */
export type Submits_Aggregate_Order_By = {
  avg?: Maybe<Submits_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Submits_Max_Order_By>;
  min?: Maybe<Submits_Min_Order_By>;
  stddev?: Maybe<Submits_Stddev_Order_By>;
  stddev_pop?: Maybe<Submits_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Submits_Stddev_Samp_Order_By>;
  sum?: Maybe<Submits_Sum_Order_By>;
  var_pop?: Maybe<Submits_Var_Pop_Order_By>;
  var_samp?: Maybe<Submits_Var_Samp_Order_By>;
  variance?: Maybe<Submits_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "submits" */
export type Submits_Arr_Rel_Insert_Input = {
  data: Array<Submits_Insert_Input>;
  on_conflict?: Maybe<Submits_On_Conflict>;
};

/** aggregate avg on columns */
export type Submits_Avg_Fields = {
  __typename?: 'submits_avg_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "submits" */
export type Submits_Avg_Order_By = {
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "submits". All fields are combined with a logical 'AND'. */
export type Submits_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Submits_Bool_Exp>>>;
  _not?: Maybe<Submits_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Submits_Bool_Exp>>>;
  action?: Maybe<String_Comparison_Exp>;
  cipher_number?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  payload?: Maybe<String_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  team_id?: Maybe<String_Comparison_Exp>;
  timestamp?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "submits" */
export enum Submits_Constraint {
  /** unique or primary key constraint */
  SubmitsPkey = 'submits_pkey'
}

/** input type for incrementing integer column in table "submits" */
export type Submits_Inc_Input = {
  cipher_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "submits" */
export type Submits_Insert_Input = {
  action?: Maybe<Scalars['String']>;
  cipher_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  payload?: Maybe<Scalars['String']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Submits_Max_Fields = {
  __typename?: 'submits_max_fields';
  action?: Maybe<Scalars['String']>;
  cipher_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  payload?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "submits" */
export type Submits_Max_Order_By = {
  action?: Maybe<Order_By>;
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Submits_Min_Fields = {
  __typename?: 'submits_min_fields';
  action?: Maybe<Scalars['String']>;
  cipher_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  payload?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "submits" */
export type Submits_Min_Order_By = {
  action?: Maybe<Order_By>;
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** response of any mutation on the table "submits" */
export type Submits_Mutation_Response = {
  __typename?: 'submits_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Submits>;
};

/** input type for inserting object relation for remote table "submits" */
export type Submits_Obj_Rel_Insert_Input = {
  data: Submits_Insert_Input;
  on_conflict?: Maybe<Submits_On_Conflict>;
};

/** on conflict condition type for table "submits" */
export type Submits_On_Conflict = {
  constraint: Submits_Constraint;
  update_columns: Array<Submits_Update_Column>;
  where?: Maybe<Submits_Bool_Exp>;
};

/** ordering options when selecting data from "submits" */
export type Submits_Order_By = {
  action?: Maybe<Order_By>;
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  payload?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  team_id?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

/** primary key columns input for table: "submits" */
export type Submits_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "submits" */
export enum Submits_Select_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CipherNumber = 'cipher_number',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** input type for updating data in table "submits" */
export type Submits_Set_Input = {
  action?: Maybe<Scalars['String']>;
  cipher_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  payload?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Submits_Stddev_Fields = {
  __typename?: 'submits_stddev_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "submits" */
export type Submits_Stddev_Order_By = {
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Submits_Stddev_Pop_Fields = {
  __typename?: 'submits_stddev_pop_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "submits" */
export type Submits_Stddev_Pop_Order_By = {
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Submits_Stddev_Samp_Fields = {
  __typename?: 'submits_stddev_samp_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "submits" */
export type Submits_Stddev_Samp_Order_By = {
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Submits_Sum_Fields = {
  __typename?: 'submits_sum_fields';
  cipher_number?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "submits" */
export type Submits_Sum_Order_By = {
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "submits" */
export enum Submits_Update_Column {
  /** column name */
  Action = 'action',
  /** column name */
  CipherNumber = 'cipher_number',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  Timestamp = 'timestamp'
}

/** aggregate var_pop on columns */
export type Submits_Var_Pop_Fields = {
  __typename?: 'submits_var_pop_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "submits" */
export type Submits_Var_Pop_Order_By = {
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Submits_Var_Samp_Fields = {
  __typename?: 'submits_var_samp_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "submits" */
export type Submits_Var_Samp_Order_By = {
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Submits_Variance_Fields = {
  __typename?: 'submits_variance_fields';
  cipher_number?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "submits" */
export type Submits_Variance_Order_By = {
  cipher_number?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "ciphers" */
  ciphers: Array<Ciphers>;
  /** fetch aggregated fields from the table: "ciphers" */
  ciphers_aggregate: Ciphers_Aggregate;
  /** fetch data from the table: "ciphers" using primary key columns */
  ciphers_by_pk?: Maybe<Ciphers>;
  /** fetch data from the table: "my_team" */
  my_team: Array<My_Team>;
  /** fetch aggregated fields from the table: "my_team" */
  my_team_aggregate: My_Team_Aggregate;
  /** fetch data from the table: "routes" */
  routes: Array<Routes>;
  /** fetch aggregated fields from the table: "routes" */
  routes_aggregate: Routes_Aggregate;
  /** fetch data from the table: "routes" using primary key columns */
  routes_by_pk?: Maybe<Routes>;
  /** fetch data from the table: "submits" */
  submits: Array<Submits>;
  /** fetch aggregated fields from the table: "submits" */
  submits_aggregate: Submits_Aggregate;
  /** fetch data from the table: "submits" using primary key columns */
  submits_by_pk?: Maybe<Submits>;
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
  /** fetch data from the table: "teams_status" */
  teams_status: Array<Teams_Status>;
  /** fetch aggregated fields from the table: "teams_status" */
  teams_status_aggregate: Teams_Status_Aggregate;
  /** fetch data from the table: "teams_status" using primary key columns */
  teams_status_by_pk?: Maybe<Teams_Status>;
};


/** subscription root */
export type Subscription_RootCiphersArgs = {
  distinct_on?: Maybe<Array<Ciphers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ciphers_Order_By>>;
  where?: Maybe<Ciphers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCiphers_AggregateArgs = {
  distinct_on?: Maybe<Array<Ciphers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ciphers_Order_By>>;
  where?: Maybe<Ciphers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCiphers_By_PkArgs = {
  cipher_number: Scalars['Int'];
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
export type Subscription_RootRoutesArgs = {
  distinct_on?: Maybe<Array<Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Routes_Order_By>>;
  where?: Maybe<Routes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoutes_AggregateArgs = {
  distinct_on?: Maybe<Array<Routes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Routes_Order_By>>;
  where?: Maybe<Routes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRoutes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootSubmitsArgs = {
  distinct_on?: Maybe<Array<Submits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Submits_Order_By>>;
  where?: Maybe<Submits_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSubmits_AggregateArgs = {
  distinct_on?: Maybe<Array<Submits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Submits_Order_By>>;
  where?: Maybe<Submits_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSubmits_By_PkArgs = {
  id: Scalars['Int'];
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


/** subscription root */
export type Subscription_RootTeams_StatusArgs = {
  distinct_on?: Maybe<Array<Teams_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Status_Order_By>>;
  where?: Maybe<Teams_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeams_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Status_Order_By>>;
  where?: Maybe<Teams_Status_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTeams_Status_By_PkArgs = {
  team_id: Scalars['String'];
};

/** columns and relationships of "teams" */
export type Teams = {
  __typename?: 'teams';
  correspondence_address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  is_participating: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An object relationship */
  route?: Maybe<Routes>;
  route_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  submits: Array<Submits>;
  /** An aggregated array relationship */
  submits_aggregate: Submits_Aggregate;
  /** An array relationship */
  teams_statuses: Array<Teams_Status>;
  /** An aggregated array relationship */
  teams_statuses_aggregate: Teams_Status_Aggregate;
};


/** columns and relationships of "teams" */
export type TeamsSubmitsArgs = {
  distinct_on?: Maybe<Array<Submits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Submits_Order_By>>;
  where?: Maybe<Submits_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsSubmits_AggregateArgs = {
  distinct_on?: Maybe<Array<Submits_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Submits_Order_By>>;
  where?: Maybe<Submits_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsTeams_StatusesArgs = {
  distinct_on?: Maybe<Array<Teams_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Status_Order_By>>;
  where?: Maybe<Teams_Status_Bool_Exp>;
};


/** columns and relationships of "teams" */
export type TeamsTeams_Statuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Teams_Status_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Teams_Status_Order_By>>;
  where?: Maybe<Teams_Status_Bool_Exp>;
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

/** order by aggregate values of table "teams" */
export type Teams_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Max_Order_By>;
  min?: Maybe<Teams_Min_Order_By>;
};

/** input type for inserting array relation for remote table "teams" */
export type Teams_Arr_Rel_Insert_Input = {
  data: Array<Teams_Insert_Input>;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  _not?: Maybe<Teams_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Bool_Exp>>>;
  correspondence_address?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  is_participating?: Maybe<Boolean_Comparison_Exp>;
  location?: Maybe<String_Comparison_Exp>;
  member1?: Maybe<String_Comparison_Exp>;
  member2?: Maybe<String_Comparison_Exp>;
  member3?: Maybe<String_Comparison_Exp>;
  member4?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  route?: Maybe<Routes_Bool_Exp>;
  route_id?: Maybe<Uuid_Comparison_Exp>;
  submits?: Maybe<Submits_Bool_Exp>;
  teams_statuses?: Maybe<Teams_Status_Bool_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint */
  TeamsPkey = 'teams_pkey'
}

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  correspondence_address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_participating?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  route?: Maybe<Routes_Obj_Rel_Insert_Input>;
  route_id?: Maybe<Scalars['uuid']>;
  submits?: Maybe<Submits_Arr_Rel_Insert_Input>;
  teams_statuses?: Maybe<Teams_Status_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'teams_max_fields';
  correspondence_address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  route_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "teams" */
export type Teams_Max_Order_By = {
  correspondence_address?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  correspondence_address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  route_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "teams" */
export type Teams_Min_Order_By = {
  correspondence_address?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  route_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
  __typename?: 'teams_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  on_conflict?: Maybe<Teams_On_Conflict>;
};

/** on conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns: Array<Teams_Update_Column>;
  where?: Maybe<Teams_Bool_Exp>;
};

/** ordering options when selecting data from "teams" */
export type Teams_Order_By = {
  correspondence_address?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_participating?: Maybe<Order_By>;
  location?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  route?: Maybe<Routes_Order_By>;
  route_id?: Maybe<Order_By>;
  submits_aggregate?: Maybe<Submits_Aggregate_Order_By>;
  teams_statuses_aggregate?: Maybe<Teams_Status_Aggregate_Order_By>;
};

/** primary key columns input for table: "teams" */
export type Teams_Pk_Columns_Input = {
  id: Scalars['String'];
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

/** order by aggregate values of table "teams_public" */
export type Teams_Public_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Public_Max_Order_By>;
  min?: Maybe<Teams_Public_Min_Order_By>;
};

/** input type for inserting array relation for remote table "teams_public" */
export type Teams_Public_Arr_Rel_Insert_Input = {
  data: Array<Teams_Public_Insert_Input>;
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

/** input type for inserting data into table "teams_public" */
export type Teams_Public_Insert_Input = {
  id?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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

/** order by max() on columns of table "teams_public" */
export type Teams_Public_Max_Order_By = {
  id?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
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

/** order by min() on columns of table "teams_public" */
export type Teams_Public_Min_Order_By = {
  id?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "teams_public" */
export type Teams_Public_Mutation_Response = {
  __typename?: 'teams_public_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams_Public>;
};

/** input type for inserting object relation for remote table "teams_public" */
export type Teams_Public_Obj_Rel_Insert_Input = {
  data: Teams_Public_Insert_Input;
};

/** ordering options when selecting data from "teams_public" */
export type Teams_Public_Order_By = {
  id?: Maybe<Order_By>;
  member1?: Maybe<Order_By>;
  member2?: Maybe<Order_By>;
  member3?: Maybe<Order_By>;
  member4?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
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

/** input type for updating data in table "teams_public" */
export type Teams_Public_Set_Input = {
  id?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  CorrespondenceAddress = 'correspondence_address',
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
  Name = 'name',
  /** column name */
  RouteId = 'route_id'
}

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  correspondence_address?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_participating?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  member1?: Maybe<Scalars['String']>;
  member2?: Maybe<Scalars['String']>;
  member3?: Maybe<Scalars['String']>;
  member4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  route_id?: Maybe<Scalars['uuid']>;
};

/** columns and relationships of "teams_status" */
export type Teams_Status = {
  __typename?: 'teams_status';
  /** An object relationship */
  cipher: Ciphers;
  current_cipher_code?: Maybe<Scalars['String']>;
  current_cipher_coordinates?: Maybe<Scalars['String']>;
  current_cipher_number: Scalars['Int'];
  hint_text?: Maybe<Scalars['String']>;
  last_solved_cipher_number?: Maybe<Scalars['Int']>;
  next_cipher_coordinates?: Maybe<Scalars['String']>;
  next_hint_time?: Maybe<Scalars['String']>;
  next_solution_time?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  /** An object relationship */
  team: Teams;
  team_id: Scalars['String'];
};

/** aggregated selection of "teams_status" */
export type Teams_Status_Aggregate = {
  __typename?: 'teams_status_aggregate';
  aggregate?: Maybe<Teams_Status_Aggregate_Fields>;
  nodes: Array<Teams_Status>;
};

/** aggregate fields of "teams_status" */
export type Teams_Status_Aggregate_Fields = {
  __typename?: 'teams_status_aggregate_fields';
  avg?: Maybe<Teams_Status_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Teams_Status_Max_Fields>;
  min?: Maybe<Teams_Status_Min_Fields>;
  stddev?: Maybe<Teams_Status_Stddev_Fields>;
  stddev_pop?: Maybe<Teams_Status_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teams_Status_Stddev_Samp_Fields>;
  sum?: Maybe<Teams_Status_Sum_Fields>;
  var_pop?: Maybe<Teams_Status_Var_Pop_Fields>;
  var_samp?: Maybe<Teams_Status_Var_Samp_Fields>;
  variance?: Maybe<Teams_Status_Variance_Fields>;
};


/** aggregate fields of "teams_status" */
export type Teams_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Teams_Status_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "teams_status" */
export type Teams_Status_Aggregate_Order_By = {
  avg?: Maybe<Teams_Status_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Teams_Status_Max_Order_By>;
  min?: Maybe<Teams_Status_Min_Order_By>;
  stddev?: Maybe<Teams_Status_Stddev_Order_By>;
  stddev_pop?: Maybe<Teams_Status_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Teams_Status_Stddev_Samp_Order_By>;
  sum?: Maybe<Teams_Status_Sum_Order_By>;
  var_pop?: Maybe<Teams_Status_Var_Pop_Order_By>;
  var_samp?: Maybe<Teams_Status_Var_Samp_Order_By>;
  variance?: Maybe<Teams_Status_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "teams_status" */
export type Teams_Status_Arr_Rel_Insert_Input = {
  data: Array<Teams_Status_Insert_Input>;
  on_conflict?: Maybe<Teams_Status_On_Conflict>;
};

/** aggregate avg on columns */
export type Teams_Status_Avg_Fields = {
  __typename?: 'teams_status_avg_fields';
  current_cipher_number?: Maybe<Scalars['Float']>;
  last_solved_cipher_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "teams_status" */
export type Teams_Status_Avg_Order_By = {
  current_cipher_number?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "teams_status". All fields are combined with a logical 'AND'. */
export type Teams_Status_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Teams_Status_Bool_Exp>>>;
  _not?: Maybe<Teams_Status_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Teams_Status_Bool_Exp>>>;
  cipher?: Maybe<Ciphers_Bool_Exp>;
  current_cipher_code?: Maybe<String_Comparison_Exp>;
  current_cipher_coordinates?: Maybe<String_Comparison_Exp>;
  current_cipher_number?: Maybe<Int_Comparison_Exp>;
  hint_text?: Maybe<String_Comparison_Exp>;
  last_solved_cipher_number?: Maybe<Int_Comparison_Exp>;
  next_cipher_coordinates?: Maybe<String_Comparison_Exp>;
  next_hint_time?: Maybe<String_Comparison_Exp>;
  next_solution_time?: Maybe<String_Comparison_Exp>;
  solution_text?: Maybe<String_Comparison_Exp>;
  team?: Maybe<Teams_Bool_Exp>;
  team_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "teams_status" */
export enum Teams_Status_Constraint {
  /** unique or primary key constraint */
  TeamsStatusPkey = 'teams_status_pkey'
}

/** input type for incrementing integer column in table "teams_status" */
export type Teams_Status_Inc_Input = {
  current_cipher_number?: Maybe<Scalars['Int']>;
  last_solved_cipher_number?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "teams_status" */
export type Teams_Status_Insert_Input = {
  cipher?: Maybe<Ciphers_Obj_Rel_Insert_Input>;
  current_cipher_code?: Maybe<Scalars['String']>;
  current_cipher_coordinates?: Maybe<Scalars['String']>;
  current_cipher_number?: Maybe<Scalars['Int']>;
  hint_text?: Maybe<Scalars['String']>;
  last_solved_cipher_number?: Maybe<Scalars['Int']>;
  next_cipher_coordinates?: Maybe<Scalars['String']>;
  next_hint_time?: Maybe<Scalars['String']>;
  next_solution_time?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  team?: Maybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Teams_Status_Max_Fields = {
  __typename?: 'teams_status_max_fields';
  current_cipher_code?: Maybe<Scalars['String']>;
  current_cipher_coordinates?: Maybe<Scalars['String']>;
  current_cipher_number?: Maybe<Scalars['Int']>;
  hint_text?: Maybe<Scalars['String']>;
  last_solved_cipher_number?: Maybe<Scalars['Int']>;
  next_cipher_coordinates?: Maybe<Scalars['String']>;
  next_hint_time?: Maybe<Scalars['String']>;
  next_solution_time?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "teams_status" */
export type Teams_Status_Max_Order_By = {
  current_cipher_code?: Maybe<Order_By>;
  current_cipher_coordinates?: Maybe<Order_By>;
  current_cipher_number?: Maybe<Order_By>;
  hint_text?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
  next_cipher_coordinates?: Maybe<Order_By>;
  next_hint_time?: Maybe<Order_By>;
  next_solution_time?: Maybe<Order_By>;
  solution_text?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Teams_Status_Min_Fields = {
  __typename?: 'teams_status_min_fields';
  current_cipher_code?: Maybe<Scalars['String']>;
  current_cipher_coordinates?: Maybe<Scalars['String']>;
  current_cipher_number?: Maybe<Scalars['Int']>;
  hint_text?: Maybe<Scalars['String']>;
  last_solved_cipher_number?: Maybe<Scalars['Int']>;
  next_cipher_coordinates?: Maybe<Scalars['String']>;
  next_hint_time?: Maybe<Scalars['String']>;
  next_solution_time?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "teams_status" */
export type Teams_Status_Min_Order_By = {
  current_cipher_code?: Maybe<Order_By>;
  current_cipher_coordinates?: Maybe<Order_By>;
  current_cipher_number?: Maybe<Order_By>;
  hint_text?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
  next_cipher_coordinates?: Maybe<Order_By>;
  next_hint_time?: Maybe<Order_By>;
  next_solution_time?: Maybe<Order_By>;
  solution_text?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "teams_status" */
export type Teams_Status_Mutation_Response = {
  __typename?: 'teams_status_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Teams_Status>;
};

/** input type for inserting object relation for remote table "teams_status" */
export type Teams_Status_Obj_Rel_Insert_Input = {
  data: Teams_Status_Insert_Input;
  on_conflict?: Maybe<Teams_Status_On_Conflict>;
};

/** on conflict condition type for table "teams_status" */
export type Teams_Status_On_Conflict = {
  constraint: Teams_Status_Constraint;
  update_columns: Array<Teams_Status_Update_Column>;
  where?: Maybe<Teams_Status_Bool_Exp>;
};

/** ordering options when selecting data from "teams_status" */
export type Teams_Status_Order_By = {
  cipher?: Maybe<Ciphers_Order_By>;
  current_cipher_code?: Maybe<Order_By>;
  current_cipher_coordinates?: Maybe<Order_By>;
  current_cipher_number?: Maybe<Order_By>;
  hint_text?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
  next_cipher_coordinates?: Maybe<Order_By>;
  next_hint_time?: Maybe<Order_By>;
  next_solution_time?: Maybe<Order_By>;
  solution_text?: Maybe<Order_By>;
  team?: Maybe<Teams_Order_By>;
  team_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "teams_status" */
export type Teams_Status_Pk_Columns_Input = {
  team_id: Scalars['String'];
};

/** select columns of table "teams_status" */
export enum Teams_Status_Select_Column {
  /** column name */
  CurrentCipherCode = 'current_cipher_code',
  /** column name */
  CurrentCipherCoordinates = 'current_cipher_coordinates',
  /** column name */
  CurrentCipherNumber = 'current_cipher_number',
  /** column name */
  HintText = 'hint_text',
  /** column name */
  LastSolvedCipherNumber = 'last_solved_cipher_number',
  /** column name */
  NextCipherCoordinates = 'next_cipher_coordinates',
  /** column name */
  NextHintTime = 'next_hint_time',
  /** column name */
  NextSolutionTime = 'next_solution_time',
  /** column name */
  SolutionText = 'solution_text',
  /** column name */
  TeamId = 'team_id'
}

/** input type for updating data in table "teams_status" */
export type Teams_Status_Set_Input = {
  current_cipher_code?: Maybe<Scalars['String']>;
  current_cipher_coordinates?: Maybe<Scalars['String']>;
  current_cipher_number?: Maybe<Scalars['Int']>;
  hint_text?: Maybe<Scalars['String']>;
  last_solved_cipher_number?: Maybe<Scalars['Int']>;
  next_cipher_coordinates?: Maybe<Scalars['String']>;
  next_hint_time?: Maybe<Scalars['String']>;
  next_solution_time?: Maybe<Scalars['String']>;
  solution_text?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Teams_Status_Stddev_Fields = {
  __typename?: 'teams_status_stddev_fields';
  current_cipher_number?: Maybe<Scalars['Float']>;
  last_solved_cipher_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "teams_status" */
export type Teams_Status_Stddev_Order_By = {
  current_cipher_number?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Teams_Status_Stddev_Pop_Fields = {
  __typename?: 'teams_status_stddev_pop_fields';
  current_cipher_number?: Maybe<Scalars['Float']>;
  last_solved_cipher_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "teams_status" */
export type Teams_Status_Stddev_Pop_Order_By = {
  current_cipher_number?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Teams_Status_Stddev_Samp_Fields = {
  __typename?: 'teams_status_stddev_samp_fields';
  current_cipher_number?: Maybe<Scalars['Float']>;
  last_solved_cipher_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "teams_status" */
export type Teams_Status_Stddev_Samp_Order_By = {
  current_cipher_number?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Teams_Status_Sum_Fields = {
  __typename?: 'teams_status_sum_fields';
  current_cipher_number?: Maybe<Scalars['Int']>;
  last_solved_cipher_number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "teams_status" */
export type Teams_Status_Sum_Order_By = {
  current_cipher_number?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
};

/** update columns of table "teams_status" */
export enum Teams_Status_Update_Column {
  /** column name */
  CurrentCipherCode = 'current_cipher_code',
  /** column name */
  CurrentCipherCoordinates = 'current_cipher_coordinates',
  /** column name */
  CurrentCipherNumber = 'current_cipher_number',
  /** column name */
  HintText = 'hint_text',
  /** column name */
  LastSolvedCipherNumber = 'last_solved_cipher_number',
  /** column name */
  NextCipherCoordinates = 'next_cipher_coordinates',
  /** column name */
  NextHintTime = 'next_hint_time',
  /** column name */
  NextSolutionTime = 'next_solution_time',
  /** column name */
  SolutionText = 'solution_text',
  /** column name */
  TeamId = 'team_id'
}

/** aggregate var_pop on columns */
export type Teams_Status_Var_Pop_Fields = {
  __typename?: 'teams_status_var_pop_fields';
  current_cipher_number?: Maybe<Scalars['Float']>;
  last_solved_cipher_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "teams_status" */
export type Teams_Status_Var_Pop_Order_By = {
  current_cipher_number?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Teams_Status_Var_Samp_Fields = {
  __typename?: 'teams_status_var_samp_fields';
  current_cipher_number?: Maybe<Scalars['Float']>;
  last_solved_cipher_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "teams_status" */
export type Teams_Status_Var_Samp_Order_By = {
  current_cipher_number?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Teams_Status_Variance_Fields = {
  __typename?: 'teams_status_variance_fields';
  current_cipher_number?: Maybe<Scalars['Float']>;
  last_solved_cipher_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "teams_status" */
export type Teams_Status_Variance_Order_By = {
  current_cipher_number?: Maybe<Order_By>;
  last_solved_cipher_number?: Maybe<Order_By>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  CorrespondenceAddress = 'correspondence_address',
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
  Name = 'name',
  /** column name */
  RouteId = 'route_id'
}


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
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

export type ArriveMutationVariables = Exact<{ [key: string]: never; }>;


export type ArriveMutation = (
  { __typename?: 'mutation_root' }
  & { arrive: (
    { __typename?: 'Output' }
    & Pick<Output, 'error' | 'status'>
  ) }
);

export type TakeHintMutationVariables = Exact<{ [key: string]: never; }>;


export type TakeHintMutation = (
  { __typename?: 'mutation_root' }
  & { takeHint: (
    { __typename?: 'Output' }
    & Pick<Output, 'error' | 'status'>
  ) }
);

export type TakeSolutionMutationVariables = Exact<{ [key: string]: never; }>;


export type TakeSolutionMutation = (
  { __typename?: 'mutation_root' }
  & { takeSolution: (
    { __typename?: 'Output' }
    & Pick<Output, 'error' | 'status'>
  ) }
);

export type TrySolveMutationVariables = Exact<{
  solution: Scalars['String'];
}>;


export type TrySolveMutation = (
  { __typename?: 'mutation_root' }
  & { trySolve: (
    { __typename?: 'Output' }
    & Pick<Output, 'error' | 'status'>
  ) }
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

export type GetMyTeamStatusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyTeamStatusQuery = (
  { __typename?: 'query_root' }
  & { my_team: Array<(
    { __typename?: 'my_team' }
    & Pick<My_Team, 'name'>
    & { status?: Maybe<(
      { __typename?: 'teams_status' }
      & Pick<Teams_Status, 'solution_text' | 'next_solution_time' | 'next_hint_time' | 'next_cipher_coordinates' | 'hint_text' | 'current_cipher_number' | 'current_cipher_code'>
    )> }
  )> }
);

export type GetCiphersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCiphersQuery = (
  { __typename?: 'query_root' }
  & { ciphers_aggregate: (
    { __typename?: 'ciphers_aggregate' }
    & { nodes: Array<(
      { __typename?: 'ciphers' }
      & Pick<Ciphers, 'cipher_code' | 'cipher_number' | 'url' | 'hint_text' | 'solution_text'>
    )> }
  ) }
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
export const ArriveDocument = gql`
    mutation arrive {
  arrive {
    error
    status
  }
}
    `;
export type ArriveMutationFn = ApolloReactCommon.MutationFunction<ArriveMutation, ArriveMutationVariables>;

/**
 * __useArriveMutation__
 *
 * To run a mutation, you first call `useArriveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useArriveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [arriveMutation, { data, loading, error }] = useArriveMutation({
 *   variables: {
 *   },
 * });
 */
export function useArriveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ArriveMutation, ArriveMutationVariables>) {
        return ApolloReactHooks.useMutation<ArriveMutation, ArriveMutationVariables>(ArriveDocument, baseOptions);
      }
export type ArriveMutationHookResult = ReturnType<typeof useArriveMutation>;
export type ArriveMutationResult = ApolloReactCommon.MutationResult<ArriveMutation>;
export type ArriveMutationOptions = ApolloReactCommon.BaseMutationOptions<ArriveMutation, ArriveMutationVariables>;
export const TakeHintDocument = gql`
    mutation takeHint {
  takeHint {
    error
    status
  }
}
    `;
export type TakeHintMutationFn = ApolloReactCommon.MutationFunction<TakeHintMutation, TakeHintMutationVariables>;

/**
 * __useTakeHintMutation__
 *
 * To run a mutation, you first call `useTakeHintMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTakeHintMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [takeHintMutation, { data, loading, error }] = useTakeHintMutation({
 *   variables: {
 *   },
 * });
 */
export function useTakeHintMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TakeHintMutation, TakeHintMutationVariables>) {
        return ApolloReactHooks.useMutation<TakeHintMutation, TakeHintMutationVariables>(TakeHintDocument, baseOptions);
      }
export type TakeHintMutationHookResult = ReturnType<typeof useTakeHintMutation>;
export type TakeHintMutationResult = ApolloReactCommon.MutationResult<TakeHintMutation>;
export type TakeHintMutationOptions = ApolloReactCommon.BaseMutationOptions<TakeHintMutation, TakeHintMutationVariables>;
export const TakeSolutionDocument = gql`
    mutation takeSolution {
  takeSolution {
    error
    status
  }
}
    `;
export type TakeSolutionMutationFn = ApolloReactCommon.MutationFunction<TakeSolutionMutation, TakeSolutionMutationVariables>;

/**
 * __useTakeSolutionMutation__
 *
 * To run a mutation, you first call `useTakeSolutionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTakeSolutionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [takeSolutionMutation, { data, loading, error }] = useTakeSolutionMutation({
 *   variables: {
 *   },
 * });
 */
export function useTakeSolutionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TakeSolutionMutation, TakeSolutionMutationVariables>) {
        return ApolloReactHooks.useMutation<TakeSolutionMutation, TakeSolutionMutationVariables>(TakeSolutionDocument, baseOptions);
      }
export type TakeSolutionMutationHookResult = ReturnType<typeof useTakeSolutionMutation>;
export type TakeSolutionMutationResult = ApolloReactCommon.MutationResult<TakeSolutionMutation>;
export type TakeSolutionMutationOptions = ApolloReactCommon.BaseMutationOptions<TakeSolutionMutation, TakeSolutionMutationVariables>;
export const TrySolveDocument = gql`
    mutation trySolve($solution: String!) {
  trySolve(solution: $solution) {
    error
    status
  }
}
    `;
export type TrySolveMutationFn = ApolloReactCommon.MutationFunction<TrySolveMutation, TrySolveMutationVariables>;

/**
 * __useTrySolveMutation__
 *
 * To run a mutation, you first call `useTrySolveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrySolveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trySolveMutation, { data, loading, error }] = useTrySolveMutation({
 *   variables: {
 *      solution: // value for 'solution'
 *   },
 * });
 */
export function useTrySolveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TrySolveMutation, TrySolveMutationVariables>) {
        return ApolloReactHooks.useMutation<TrySolveMutation, TrySolveMutationVariables>(TrySolveDocument, baseOptions);
      }
export type TrySolveMutationHookResult = ReturnType<typeof useTrySolveMutation>;
export type TrySolveMutationResult = ApolloReactCommon.MutationResult<TrySolveMutation>;
export type TrySolveMutationOptions = ApolloReactCommon.BaseMutationOptions<TrySolveMutation, TrySolveMutationVariables>;
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
export const GetMyTeamStatusDocument = gql`
    query getMyTeamStatus {
  my_team {
    status {
      solution_text
      next_solution_time
      next_hint_time
      next_cipher_coordinates
      hint_text
      current_cipher_number
      current_cipher_code
    }
    name
  }
}
    `;

/**
 * __useGetMyTeamStatusQuery__
 *
 * To run a query within a React component, call `useGetMyTeamStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyTeamStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyTeamStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyTeamStatusQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMyTeamStatusQuery, GetMyTeamStatusQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMyTeamStatusQuery, GetMyTeamStatusQueryVariables>(GetMyTeamStatusDocument, baseOptions);
      }
export function useGetMyTeamStatusLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMyTeamStatusQuery, GetMyTeamStatusQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMyTeamStatusQuery, GetMyTeamStatusQueryVariables>(GetMyTeamStatusDocument, baseOptions);
        }
export type GetMyTeamStatusQueryHookResult = ReturnType<typeof useGetMyTeamStatusQuery>;
export type GetMyTeamStatusLazyQueryHookResult = ReturnType<typeof useGetMyTeamStatusLazyQuery>;
export type GetMyTeamStatusQueryResult = ApolloReactCommon.QueryResult<GetMyTeamStatusQuery, GetMyTeamStatusQueryVariables>;
export const GetCiphersDocument = gql`
    query getCiphers {
  ciphers_aggregate(order_by: {cipher_number: asc}, where: {cipher_number: {_neq: 0}}) {
    nodes {
      cipher_code
      cipher_number
      url
      hint_text
      solution_text
    }
  }
}
    `;

/**
 * __useGetCiphersQuery__
 *
 * To run a query within a React component, call `useGetCiphersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCiphersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCiphersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCiphersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCiphersQuery, GetCiphersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCiphersQuery, GetCiphersQueryVariables>(GetCiphersDocument, baseOptions);
      }
export function useGetCiphersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCiphersQuery, GetCiphersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCiphersQuery, GetCiphersQueryVariables>(GetCiphersDocument, baseOptions);
        }
export type GetCiphersQueryHookResult = ReturnType<typeof useGetCiphersQuery>;
export type GetCiphersLazyQueryHookResult = ReturnType<typeof useGetCiphersLazyQuery>;
export type GetCiphersQueryResult = ApolloReactCommon.QueryResult<GetCiphersQuery, GetCiphersQueryVariables>;
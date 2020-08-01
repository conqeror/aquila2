export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  trySolve: Output;
};

export type MutationTrySolveArgs = {
  code: Scalars["String"];
};

export type Output = {
  __typename?: "Output";
  success: Scalars["Boolean"];
};

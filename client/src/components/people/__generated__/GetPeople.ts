/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPeople
// ====================================================

export interface GetPeople_people_people {
  __typename: "Person";
  name: string | null;
  gender: string | null;
  height: string | null;
  homeworld: string | null;
  mass: string | null;
}

export interface GetPeople_people {
  __typename: "PeopleConnection";
  count: number;
  people: (GetPeople_people_people | null)[];
}

export interface GetPeople {
  people: GetPeople_people;
}

export interface GetPeopleVariables {
  page?: number | null;
}

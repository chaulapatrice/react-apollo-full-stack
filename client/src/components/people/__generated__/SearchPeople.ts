/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchPeople
// ====================================================

export interface SearchPeople_search_people {
  __typename: "Person";
  name: string | null;
  gender: string | null;
  height: string | null;
  homeworld: string | null;
  mass: string | null;
}

export interface SearchPeople_search {
  __typename: "PeopleConnection";
  count: number;
  people: (SearchPeople_search_people | null)[];
}

export interface SearchPeople {
  search: SearchPeople_search;
}

export interface SearchPeopleVariables {
  page?: number | null;
  searchTerm: string;
}

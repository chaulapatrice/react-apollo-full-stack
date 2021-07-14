const { gql } = require('apollo-server');

const typeDefs = `
    type Person{
        name: String
        height: String
        mass: String
        homeworld: String
        gender: String
    }

    type PeopleConnection{
        next: String
        previous: String
        people: [Person]!
    }

    type Query {
        people(page: Int): PeopleConnection!
        person(id: Int!): Person
        search(
            """
            The search term to be used
            """
            term: String!
            """
            Page number
            """
            page: Int
            ): PeopleConnection!
    }
`
module.exports = {
    typeDefs
}
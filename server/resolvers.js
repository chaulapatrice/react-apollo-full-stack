module.exports = {
    Query: {
        people: (_, { page = 1 }, { dataSources }) =>
            dataSources.swapidevAPI.getPeople({ page }),
        person: (_, { id }, { dataSources }) =>
            dataSources.swapidevAPI.getPersonById({ personId: id }),
        search: (_, { term, page = 1 }, { dataSources }) =>
            dataSources.swapidevAPI.searchPeople({ term, page }),
    }
}
const { RESTDataSource } = require("apollo-datasource-rest");

class SwapidevAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getPeople({ page }) {
        let response = null;

        try {
            response = await this.get(`people?page=${page}`);
        } catch (error) {
            return {
                next: null,
                previous: null,
                people: []
            }
        }

        const people = await Promise.all(response.results.map(person =>
            this.personReducer(person)));

        return {
            people,
            next: response.next,
            previous: response.previous
        }

    }

    async searchPeople({ term, page }) {
        let response = null;

        try {
            response = await this.get(`people?search=${term}&page=${page}`);
        } catch (error) {
            return {
                next: null,
                previous: null,
                people: []
            }
        }

        const people = await Promise.all(response.results.map(person =>
            this.personReducer(person)));

        return {
            people,
            next: response.next,
            previous: response.previous
        }

    }

    async getPersonById({ personId }) {
        const response = await this.get(`people/${personId}`);
        const person = await this.personReducer(response);
        return person;
    }

    async personReducer(person) {
        const { name, height, gender, homeworld, mass } = person;
        const homeworldUri = homeworld.replace(this.baseURL, "");
        const response = await this.get(homeworldUri);
        return {
            name,
            height,
            gender,
            mass,
            homeworld: response ? response.name : ""
        };
    }

}

module.exports = SwapidevAPI;
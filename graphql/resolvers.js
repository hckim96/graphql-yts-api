const getMovies = require('./db.js'),
    getMovieById = require('./db.js'),
    getSuggestions = require('./db.js');
const resolvers = {
    Query: {
        Movies: (_, { limit, minimum_rating }) =>
            getMovies(limit, minimum_rating),
        Movie: (_, { id }) => getMovieById(id),
        Suggestions: (_, { id }) => getSuggestions(id),
    },
};

module.exports = resolvers;

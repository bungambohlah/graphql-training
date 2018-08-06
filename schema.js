const typeDefs = `
  type Query {
    movies: [Movie]
    movie(id: Int!): Movie
    makeError: Movie
  }
  
  type Mutation {
    addMovie(title: String!, url: String!) : Movie
  }

  type Movie {
    id: Int!
    title: String!
    url: String!
  }
  `;

module.exports = typeDefs;

const { ApolloError } = require("apollo-error");

const fakeData = [
  {
    id: 1,
    url: "https://www.imdb.com/title/tt0119177/",
    title: "Gattaca"
  },
  {
    id: 2,
    url: "https://www.imdb.com/title/tt0238380/",
    title: "Equilibrium"
  },
  {
    id: 3,
    url: "https://www.imdb.com/title/tt0118929/",
    title: "Dark City"
  }
];

function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

const resolvers = {
  Query: {
    movies(_, args) {
      return fakeData;
    },
    movie(_, args) {
      return fakeData.filter(item => args.id === item.id).pop();
    },
    makeError(_, args) {
      throw new ApolloError("My error", "MY_ERRORS")
    }
  },
  
  Mutation: {
    addMovie(_, args) {
      const last = last(fakeData)
      const data = Object.assign(args, {id: last.id + 1});
    }
  }
};

module.exports = resolvers;

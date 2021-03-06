const { gql } = require("apollo-server");
const AuthService = require("../services/auth.service");
const UserService = require("../services/users.service");

const typeDefs = gql`
  type Query {
    user(username: String): User
    userId(userId: Int!): User
    users: [User!]
    test: String!
  }

  type Mutation {
    registerUser(
      username: String!
      full_name: String!
      email: String!
      password: String!
    ): Token
    loginUser(username: String!, password: String!): Token
    deleteUser(id: Int): User
    changePassword(
      oldPassword: String!
      password: String!
      password2: String!
    ): String
    updateBasicInfo(
      userBasics: UserBasics!
    ): User
    updateGeorneyScore(
      georneyScore: Float!
    ): User
    updateUserAvatar(
      userAvatar: UserAvatar!
    ): User
  }

  type User {
    id: Int!
    username: String!
    full_name: String!
    email: String!
    gender: String
    birthday: String
    phone_number: String
    avatarIndex: Int
    color: String
    georneyScore: Float
    Places_visited: [Place_visited!]
    Place_living: Place_living
    UserInterests: [UserInterests!]
    UserSocials: [UserSocials!]
    Places_visiting: [Place_visiting!]
  }

  input UserBasics {
    full_name: String
    email: String
    phone_number: String
    gender: String
    birthday: String
  }

  input UserAvatar {
    avatarIndex: Int!
    color: String!
  }
`;

const resolvers = {
  Query: {
    test: () => {
      return "THIS IS WORKING";
    },
    // if a username variable is provided to the user query it will look for that username, if not it will return the loggedInUser
    user: (_, args, context) => {
      let searchParameter = args.username
        ? { username: args.username }
        : { id: context.user_id };
      return UserService.searchUser(searchParameter);
    },
    userId: (_, args, context) => {
      let searchParameter = args.userId
        ? { id: args.userId }
        : { id: context.user_id };
      return UserService.searchUser(searchParameter);
    },
    users: (_, args) => {
      return UserService.loadAllUsers(args);
    }
  },
  Mutation: {
    registerUser: (_, args) => {
      return AuthService.registerUser(args);
    },
    loginUser: (_, args) => {
      return AuthService.loginUser(args);
    },
    deleteUser: (_, args, context) => {
      let searchParameter = args.id
      ? { id: args.id }
      : { id: context.user_id };
      return UserService.deleteUser(searchParameter);
    },
    changePassword: (_, args, context) => {
      return AuthService.changePassword(
        context.user_id,
        args.oldPassword,
        args.password,
        args.password2
      );
    },
    updateBasicInfo: (_, args, context) => {
      return UserService.updateBasicInfo(context.user_id, args);
    },
    updateGeorneyScore: (_, args, context) => {
      return UserService.updateGeorneyScore(context.user_id, args);
    },
    updateUserAvatar: (_, args, context) => {
      return UserService.updateUserAvatar(context.user_id, args);
    },
    changePassword: (_, args, context) => {
      return AuthService.changePassword(
        context.user_id,
        args.oldPassword,
        args.password,
        args.password2
      );
    }
  }
};

module.exports = {
  typeDefs,
  resolvers
};

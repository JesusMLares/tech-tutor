import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient('http://localhost:5000');

export default client;

// import client from '../apolloClient';          -- Depends on path
// import { gql } from 'graphql-request';
// inside any file that you need to call for api requests
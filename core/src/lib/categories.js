import { gql } from '@apollo/client';
import client from './shopify';

const GET_CATEGORIES = gql`
  query {
    collections(first: 10) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export async function getCategories() {
  const { data } = await client.query({ query: GET_CATEGORIES });
  return data.collections.edges.map(({ node }) => node);
}

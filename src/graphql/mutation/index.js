import { gql } from "@apollo/client";

/*
@params
type PostJobInput {
  title: String!
  commitmentId: ID!
  companyName: String!
  locationNames: String!
  userEmail: String!
  description: String!
  applyUrl: String!
}
*/
export const postJobs = gql`
  mutation postJobs($input: PostJobInput!) {
    postJob(input: $input) {
      id
      slug
      title
      description
      applyUrl
      isPublished
      isFeatured
      locationNames
      userEmail
      company {
        id
        name
        slug
      }
      remotes {
        id
        slug
      }
      commitment {
        id
        title
        slug
        createdAt
        updatedAt
      }
    }
  }
`;

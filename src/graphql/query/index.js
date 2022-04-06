import { gql } from "@apollo/client";
/*
@params
type JobsInput {
  type: String
  slug: String
}
*/
export const getAllJobs = gql`
  query getAllJobs($input: JobsInput) {
    jobs(input: $input) {
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

/*
@params
type JobInput {
  companySlug: String
  jobSlug: String
}
*/

export const getParticularJob = gql`
  query getParticularJob($input: JobInput!) {
    job(input: $input) {
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

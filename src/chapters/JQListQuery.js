import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { JQList } from "./ChapterList";

const chapterQuery = gql`
  query chapters($offset: String) {
    chapters2(limit: 10, offset: $offset) @client {
      id
      show
      episode
      rating
      number
    }
  }
`;

const JQListQuery = () => {
  return (
    <Query query={chapterQuery}>
      {({ data, fetchMore }) =>
        data && (
          <JQList
            chapters2={data.chapters || []}
            onLoadMore={() =>
              fetchMore({
                variables: {
                  offset: data.chapters2.length
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return prev;
                  return Object.assign({}, prev, {
                    chapters: [...prev.chapters, ...fetchMoreResult.chapters]
                  });
                }
              })
            }
          />
        )
      }
    </Query>
  );
};

export default JQListQuery;

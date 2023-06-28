import { gql } from '@apollo/client';
import React from 'react';

export default function CoreParagraph(props:any) {
  const attributes = props.attributes;
  return (
    <p
      className={`${attributes?.className ? attributes.className : ''} font-inter text-base text-dark-100 dark:text-grey-500 mt-14`}
      dangerouslySetInnerHTML={{ __html: attributes?.content }}></p>
  );
}

CoreParagraph.fragments = {
  entry: gql` 
    fragment CoreParagraphFragment on CoreParagraph {
      attributes {
        content
        cssClassName
      }
    }
  `,
  key: `CoreParagraphFragment`,
};

CoreParagraph.displayName = 'CoreParagraph';
// This also works
// CoreParagraph.config.name = 'CoreParagraph'
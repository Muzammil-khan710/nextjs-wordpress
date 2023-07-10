import { gql } from '@apollo/client';
import React from 'react';

export default function CoreList(props:any) {
  const attributes = props.attributes;
  console.log(attributes)
  const pattern = /<li>(.*?)<\/li>/g;
  const result = attributes.values.replace(pattern, "<li class=\"font-inter text-base text-dark-100 dark:text-grey-500 mt-4 list-outside\">$1</li>");
  return (
    <ol className='mt-14 list-outside' dangerouslySetInnerHTML={{__html:result}}/>
  );
}

CoreList.fragments = {
  entry: gql` 
    fragment CoreListFragment on CoreList {
      attributes {
        values
      }
    }
  `,
  key: `CoreListFragment`,
};

CoreList.displayName = 'CoreList';
// This also works
// CoreList.config.name = 'CoreList'
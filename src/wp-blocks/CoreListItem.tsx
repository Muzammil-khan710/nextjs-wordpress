import { gql } from '@apollo/client';
import React from 'react';

export default function CoreListItem(props:any) {
  const attributes = props.attributes;
  console.log(attributes)
  return (
    // <li className='font-inter text-base text-dark-100 dark:text-grey-500 mt-14 list-outside'>{attributes.content}</li>
    null  
  );
}

CoreListItem.fragments = {
  entry: gql` 
    fragment CoreListItemFragment on CoreListItem {
      attributes {
        content
      }
    }
  `,
  key: `CoreListItemFragment`,
};

CoreListItem.displayName = 'CoreListItem';
// This also works
// CoreListItem.config.name = 'CoreListItem'
import { gql } from '@apollo/client';
import React from 'react';
import { generateId } from '../../src/utils/generateId';

export default function CoreHeading(props:any) {
  const attributes = props.attributes;
  
  return React.createElement(`h${attributes.level}`, {className:`${attributes?.className ? attributes.className : ''} ${attributes.level >= 4 ? '!text-h-three' : ''} font-manrope text-h-two md:text-h-one text-dark-100 dark:text-grey-500 mt-14`, id:generateId(attributes.content) },   attributes?.content)
}

CoreHeading.fragments = {
  entry: gql` 
    fragment CoreHeadingFragment on CoreHeading {
      attributes {
        content
        className
        level
      }
    }
  `,
  key: `CoreHeadingFragment`,
};

CoreHeading.displayName = 'CoreHeading';
// This also works
// CoreHeading.config.name = 'CoreHeading'
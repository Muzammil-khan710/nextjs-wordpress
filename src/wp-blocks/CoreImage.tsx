import { gql } from '@apollo/client';
import React from 'react';
import Image from 'next/image'

export default function CoreImage(props:any) {
  const attributes = props.attributes;
  return (
    <div className='bg-grey-100 dark:bg-dark-200 relative '>
        <Image fill src={attributes.src} alt={attributes.alt} className='!relative rounded-[2px] px-[3.18rem] py-4 mt-14'/>
        <figcaption className='italic text-dark-100 dark:text-grey-300 pb-4 px-4' dangerouslySetInnerHTML={{__html:attributes.caption}}></figcaption>
    </div>
  )
}

CoreImage.fragments = {
  entry: gql` 
    fragment CoreImageFragment on CoreImage {
      attributes {
        caption
        src
        alt
      }
    }
  `,
  key: `CoreImageFragment`,
};

CoreImage.displayName = 'CoreImage';
// This also works
// CoreImage.config.name = 'CoreImage'
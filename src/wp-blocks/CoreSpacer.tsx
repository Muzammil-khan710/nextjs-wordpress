import { gql } from '@apollo/client';

export default function CoreSpacer(props:any) {
  const attributes = props.attributes;
  console.log(attributes)
  return (
    <div style={{height: attributes?.height}}/>
  );
}

CoreSpacer.fragments = {
  entry: gql` 
    fragment CoreSpacerFragment on CoreSpacer {
      attributes {
        height
      }
    }
  `,
  key: `CoreSpacerFragment`,
};

CoreSpacer.displayName = 'CoreSpacer';
// This also works
// CoreListItem.config.name = 'CoreListItem'
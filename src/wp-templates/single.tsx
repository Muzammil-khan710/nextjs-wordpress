import { gql } from "@apollo/client";

export default function Component(props: any) {
  console.log('is this even rendering?')
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  return (
    <h1>Hey this is preview page or single page
    </h1>
  )
  // Code to render Single Post template hierachy type
}

Component.query = gql`
  query GetArticle($databaseId: ID!, $asPreview: Boolean = false) {
    article(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
    }
  }
`;


Component.variables = ({ databaseId }: any, ctx: { asPreview: any; }) => {
  return {
    databaseId,
    asPreview: ctx?.asPreview,
  };
};
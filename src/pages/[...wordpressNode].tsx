import { getWordPressProps, WordPressTemplate } from '@faustwp/core';

export default function Page(props:any) {
  return <WordPressTemplate {...props} />;
}

export async function getStaticProps(ctx:any) {
  return await getWordPressProps({ ctx, revalidate:10 });
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

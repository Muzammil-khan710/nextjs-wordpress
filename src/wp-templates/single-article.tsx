import { gql } from '@apollo/client';
import { WordPressBlocksViewer } from '@faustwp/blocks';
import components from '../wp-blocks';
import BlogHerosec from 'components/blogs/ArticleHero';
import Featureimage from 'components/blogs/Featureimage';
import Socialslinks from 'components/blogs/Socialslinks';
import Otherarticles from 'components/blogs/Otherarticles';
import { useRouter } from 'next/router';
import SideBar from 'components/blogs/SideBar';
import { useCategoryCtx } from '../pages/_app';
import { getNextStaticProps } from '@faustwp/core';

export default function SingleArticle(props: any) {

  console.log(props)

  const { title, editorBlocks, featuredImage, categories, author, date, excerpt, seo } = props.data.article;
  const tableContents = editorBlocks.filter((e: { __typename: string; }) => e.__typename === 'CoreHeading').map((el: any) => { return { level: el.attributes.level, content: el.attributes.content } })
  const router = useRouter()
  const { articles } = props.data
  const JsonSchema = seo?.schema.raw

  const filteredArticles = articles.edges.filter((item: any) => item.node.title !== title)

  const convertedJson = JSON.parse(JsonSchema, (key, value) => {
    if (typeof value === 'string' && value.includes('blog.rovae.in')) {
      return value.replace('blog.rovae.in', 'rovae.in');
    }
    return value;
  });

  const convertedString = JSON.stringify(convertedJson);

  const { handleCategorySelect, selectedCategory, handleShowAllBlogs, showAllBlogs } = useCategoryCtx()

  const allCategories: string[] = [];
  articles.edges.forEach((blog: { node: { categories: { edges: any[]; }; }; }) => {
    blog.node.categories.edges.forEach((category: { node: { name: string; }; }) => {
      if (!allCategories.includes(category.node.name)) {
        allCategories.push(category.node.name);
      }
    });
  });

  return (
    <>
      <div className='main-spacer'>
        <section className="mt-10 md:mt-8 lg:mt-[67px] flex flex-col">
          <div>
            <div className="flex lg:gap-8  w-full ">
              <div>
                <SideBar
                  categories={allCategories}
                  onCategorySelect={handleCategorySelect}
                  selectedCategory={selectedCategory}
                  showAllBlogs={handleShowAllBlogs}
                  isAllBlogsShown={showAllBlogs}
                  router={router}
                  className='hidden layout3xl:flex layout3xl:w-[256px]  layout3xl:flex-col '
                />
                <Socialslinks className="md:hidden sticky top-[98px]" href={router.asPath} />
              </div>
              <div className="flex flex-col md:mx-auto layout3xl:mx-0">
                <BlogHerosec title={title} author={author?.node.name} content={excerpt} date={date} category={categories.edges[0]?.node.name} handleCategorySelect={handleCategorySelect} />
                <Featureimage src={featuredImage.node.sourceUrl} alt={featuredImage.node.title} tableContents={tableContents} />
                <div className='max-w-[700px] md:mx-auto layout3xl:mx-0'>
                  <WordPressBlocksViewer
                    blocks={editorBlocks}
                    fallbackBlock={MyFallbackComponent}
                  />
                </div>
              </div>
            </div>
          </div>
          {filteredArticles.length > 0 &&
            <Otherarticles className="max-w-[700px] mb-16" data={filteredArticles} />
          }
          <SideBar
            categories={allCategories}
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
            showAllBlogs={handleShowAllBlogs}
            isAllBlogsShown={showAllBlogs}
            router={router}
            className="flex mb-[132px] lg:mb-[168px] max-w-[700px] mx-auto mt-14"
          />
        </section>
      </div>
    </>
  );
}

SingleArticle.variables = ({ uri }: any) => {
  return { uri };
};

SingleArticle.query = gql`
${components.CoreParagraph.fragments.entry}
${components.CoreHeading.fragments.entry}
${components.CoreImage.fragments.entry}
${components.GenesisCustomBlocksSnippet.fragments.entry}
query MQ($uri: ID = "") {
    articles {
      edges {
        node {
          title
          date
          excerpt
          uri
          featuredImage {
            node {
              sourceUrl
              title
            }
          }
          categories {
            edges {
              node {
                name
                link
                slug
              }
            }
          }
        }
      }
    }
    article (id: $uri, idType: URI) {
      title
      id
      date
      excerpt
      seo {
        title
        metaDesc
        opengraphImage {
          mediaItemUrl
        }
        schema {
          raw
        }
      }
      featuredImage {
        node {
          sourceUrl
          title
        }
      }
      author {
        node {
          name
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      editorBlocks {
        renderedHtml
        __typename
        clientId
        name
        ...${components.CoreParagraph.fragments.key}
        ...${components.CoreHeading.fragments.key}
        ...${components.CoreImage.fragments.key}
        ...${components.GenesisCustomBlocksSnippet.fragments.key}
      }
    }
  }
`;

const MyFallbackComponent = ({ renderedHtml }: any) => {
  return (
    <span className='my-14' dangerouslySetInnerHTML={{ __html: renderedHtml }} />
  )
}

export async function getStaticProps(ctx: any) {
  return await getNextStaticProps(ctx, {
    Page: SingleArticle,
    revalidate: 10
  });
}
import { gql } from '@apollo/client';
import Blogslists from 'components/blogs/ArticleList';
import { getNextStaticProps } from '@faustwp/core';
import SideBar from 'components/blogs/SideBar';
import { useRouter } from 'next/router';
import { useCategoryCtx } from './_app';

type Category = {
  name: string;
  link: string;
  slug: string;
};

type Blog = {
  slug: string;
  date: string;
  excerpt: string;
  title: string;
  uri: string;
  featuredImage: {
    node: {
      sourceUrl: string;
      title: string;
    };
  };
  categories: {
    edges: {
      node: Category;
    }[];
  };
};

type PageProps = {
  data: {
    articles: {
      edges: {
        node: Blog;
      }[];
    };
  };
};



const Page = ({ data }: PageProps) => {

  const { handleCategorySelect, selectedCategory, handleShowAllBlogs, showAllBlogs } = useCategoryCtx()

  const allCategories: string[] = [];
  data.articles.edges.forEach((article) => {
    article.node.categories.edges.forEach((category) => {
      if (!allCategories.includes(category.node.name)) {
        allCategories.push(category.node.name);
      }
    });
  });

  const filteredBlogs = selectedCategory
    ? data.articles.edges.filter((article) =>
      article.node.categories.edges.some((category) => category.node.name === selectedCategory)
    )
    : data.articles.edges;

  const blogsToDisplay = showAllBlogs ? data.articles.edges : filteredBlogs;

  const router = useRouter()

  return (
    <>
      <div className="main-spacer">
        <section>
          <h1 className="text-[72px] dark:text-grey-500 text-dark-100 leading-[80px] font-manrope mt-14 font-medium">
            Articles
          </h1>
          <p className="text-[24px] dark:text-grey-500 text-dark-100 leading-[39px] font-inter">
            Congratulations! You just found a treasure trove of quality content
            that <br />
            entertains, educates, and inspires. Enjoy 😇
          </p>
          <div className="flex  gap-7 flex-col-reverse lg:flex-row mt-14">
            <div className="flex  md:w-full layout3xl:w-[256px] flex-col md:flex-row md:justify-between layout3xl:flex-col layout3xl:justify-start w-full gap-14">
              <SideBar
                categories={allCategories}
                onCategorySelect={handleCategorySelect}
                selectedCategory={selectedCategory}
                showAllBlogs={handleShowAllBlogs}
                isAllBlogsShown={showAllBlogs}
                router={router}
                className={'md:flex-col'}
              />
            </div>
            <Blogslists data={blogsToDisplay} className="md:mb-12" />

          </div>
        </section>
      </div>
    </>
  );
};

Page.query = gql`
  query MyQuery {
    articles {
      edges {
        node {
          slug
          date
          excerpt
          title
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
  }
`;

export async function getStaticProps(ctx: any) {
  return await getNextStaticProps(ctx, {
    Page,
  });
}

export default Page;

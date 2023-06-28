import { FaustProvider } from '@faustwp/core'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import '../../faust.config'
import { createContext, useContext, useState, useEffect } from 'react'
import { WordPressBlocksProvider } from '@faustwp/blocks'
import blocks from '../wp-blocks';

const CategoryContext = createContext({} as any)
export const useCategoryCtx = () => useContext(CategoryContext)

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllBlogs, setShowAllBlogs] = useState<boolean>(false);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowAllBlogs(false);
  };

  const handleShowAllBlogs = () => {
    setSelectedCategory(null);
    setShowAllBlogs(true);
  };
  useEffect(() => {
    console.log(pageProps)
  }, [])

  return (
    <FaustProvider pageProps={pageProps} key={router.asPath}>
      <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory, showAllBlogs, setShowAllBlogs, handleCategorySelect, handleShowAllBlogs }}>
        <WordPressBlocksProvider config={{
          //@ts-ignore
          blocks,
        }}>
          <Component {...pageProps} key={router.asPath} />
        </WordPressBlocksProvider>
      </CategoryContext.Provider>
    </FaustProvider>
  )

}

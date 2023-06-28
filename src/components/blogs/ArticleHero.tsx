import Link from 'next/link'
import React from 'react'

type Props = {
  className?: string
  title: string
  content: string
  date: string
  author: string
  category: string
  handleCategorySelect: any
}

const ArticleHero = ({ className, author, category, content, date, title, handleCategorySelect }: Props) => {
  return (
    <div className={`flex flex-col  max-w-[700px] layout3xl:w-full m-auto layout3xl:m-0 ${className}`}>
      <h1 className="text-[32px] md:text-[38px] lg:text-[40px] dark:text-grey-500 text-dark-100 leading-[48px] font-manrope  font-medium">
        {title}
      </h1>

      <div className="text-[18px] dark:text-grey-500 text-dark-100 leading-[29px] mt-6 inline">
        <span className='float-left pr-2 font-semibold'>Summary: </span>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>

      <h3 className="text-grey-400 dark:text-grey-300 text-[18px] font-inter leading-[27px] mt-6">
        By {author}
      </h3>

      <h3 className="text-grey-400 dark:text-grey-300 text-[18px] font-inter leading-[27px] mt-2">
        {date} | 6 minutes to read{" "}
      </h3>
        <h3 className="text-grey-400 dark:text-grey-300 text-[18px] font-inter leading-[27px] mt-2">
          Topic:{" "}
          <Link href={'/articles'} onClick={() => handleCategorySelect(category)} className="text-blue dark:text-blueDarkTwo">
            {category}
          </Link>
        </h3>
    </div>
  )
}

export default ArticleHero

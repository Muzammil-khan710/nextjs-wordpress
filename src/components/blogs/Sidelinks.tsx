import React from 'react'

type Props = {
  className?: string
  data: any
}

const Sildelinks = ({ className, data }: Props) => {



  return (
    <div className={`flex  md:w-full layout3xl:w-[256px] ${className}`}>
      <div className="flex flex-col md:flex-row md:justify-between layout3xl:flex-col layout3xl:justify-start w-full gap-14">
        <div className=" flex flex-col gap-4">
          <span className="text-[18px] dark:text-grey-500 text-dark-100 leading-[27px] font-inter font-medium ">
            Topic
          </span>

          {data.map((edge: any, i: number) => {
            const categories = edge.node.categories.edges;
            return categories.map((category: any, j: number) => (
              <a href={category.node.link}>
                <span
                  className="text-[18px] dark:text-bluedarktwo cursor-pointer text-blue leading-[27px] font-inter hover:underline decoration-2 underline-offset-4"
                  key={`${i}-${j}`}
                >
                  {category.node.name}
                </span>
              </a>
            ));
          })}
        </div>


        <div className="flex flex-col gap-8 ">
          <span className="text-[18px] dark:text-grey-500 text-dark-100 leading-[27px] font-inter font-medium ">
            Popular Articles
          </span>

        </div>
      </div>

    </div>
  )
}

export default Sildelinks
import Link from "next/link";

type Props = {
  className?: any;
  data: any
};

const Blogs = ({ className, data }: Props) => {

  return (
    <>
      <div className='border-t border-[#D9D9D9] dark:border-grey-600 max-w-[700px] my-14 flex mx-auto w-full'></div>
      <section className={`${className} bg-grey-100 dark:bg-dark-500 p-6 md:p-8 rounded-[24px] w-full max-w-[700px] mx-auto`}>
        <div className="border-b-2 border-[#D9D9D9] dark:border-grey-600 pb-8">
          <h2 className="text-[24px] dark:text-grey-500 text-dark-100 leading-[35px]  font-manrope  font-medium">
            Other Related Articles
          </h2>
        </div>
        <div className="flex flex-col gap-10 mt-8">
          {data &&
            data.map((edge: any, i: any) => (
              <div
                key={i}
                className={`flex flex-col md:block ${i !== data.length-1 ? 'border-b-2 border-[#D9D9D9] dark:border-grey-600  pb-8' : '' }  flex-col md:flex-row`}
              >
                {/* <div className="flex flex-col gap-2"> */}
                  {edge.node.featuredImage && (
                    <img
                      src={edge.node.featuredImage.node.sourceUrl}
                      alt={edge.node.featuredImage.node.title}
                      className="rounded-[16px] md:max-h-[168px] md:min-w-[310px] md:float-right md:ml-4 order-3 mt-4 md:mt-0"
                    />
                  )}
                  <Link href={edge.node.uri}>
                    <h2 className="text-lg  dark:text-blueDarkTwo cursor-pointer text-blue font-medium ">
                      {edge.node.title}
                    </h2>
                  </Link>

                  <h3 className="text-grey-400 dark:text-grey-300 text-base mt-2">
                    {edge.node.date} | 6 minutes to read
                  </h3>
                  <div
                    className="mt-2 text-base dark:text-grey-200 text-dark-100 font-normal"
                    dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
                  />
                  {/* <a href={edge.node.slug}>Read More</a> */}
                {/* </div> */}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};



export default Blogs;

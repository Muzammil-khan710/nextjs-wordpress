import Link from "next/link";


type Props = {
  className?: any;
  data?:any
};

const Articles = ({ className,data }: Props) => {
  

  return (
    <section className={`${className} max-w-[995px] `}>
      
      <div className="flex flex-col gap-10 ">
        {data &&
          data.map((edge: any,i:any) => (
            <div
              key={i}
              className="flex gap-4 flex-col md:flex-row justify-between"
            >
              <div className="flex flex-col gap-2">
                <Link href={edge.node.uri}>
                  <h2 className="text-[24px] dark:text-bluedarktwo cursor-pointer text-blue dark:text-blueDarkTwo leading-[35px] font-medium font-inter">
                    {edge.node.title}
                  </h2>
                </Link>

                <h3 className="text-grey-400 dark:text-grey-300 text-[18px] font-inter leading-[27px] mt-2">
                  {edge.node.date} | 6 minutes to read
                </h3>
                <div
                  className="mt-2 font-inter text-[18px] leading-[27px] dark:text-grey-200 text-dark-100 font-normal"
                  dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
                />
                {/* <a href={edge.node.slug}>Read More</a> */}
              </div>
              {edge.node.featuredImage && (
                <img
                  src={edge.node.featuredImage.node.sourceUrl}
                  alt={edge.node.featuredImage.node.title}
                  className="rounded-[16px] md:max-h-[168px] md:min-w-[310px]"
                />
              )}
            </div>
          ))}
      </div>
     

    </section>
  );
};


export default Articles;

import { useEffect } from "react";
import { animateScroll  } from 'react-scroll'

const SideBar = ({
    categories,
    onCategorySelect,
    selectedCategory,
    showAllBlogs,
    isAllBlogsShown,
    router,
    className
}: any) => {
    const handleCategorySelect = (category: string) => {
        onCategorySelect(category);
    };

    const handleShowAllBlogs = () => {
        showAllBlogs();
    };

    return (
        <div className={`flex  md:w-full `}>
            <div className={`flex flex-col md:flex-row ${className} md:justify-between layout3xl:justify-start w-full gap-14`}>

                <div className=" flex flex-col gap-4">
                    <span className="text-[18px] dark:text-grey-500 text-dark-100 leading-[27px] font-inter font-medium ">
                        Topic
                    </span>

                    {/* <button
                        onClick={() => {animateScroll.scrollToTop(), router.route === '/articles' ? (handleShowAllBlogs()) : router.push('/articles') && handleShowAllBlogs()}}
                        className={`text-[18px] dark:text-bluedarktwo text-start cursor-pointer text-blue dark:text-blueDarkTwo leading-[27px] ${router.route === '/articles' && isAllBlogsShown ? 'underline decoration-2 underline-offset-4' : ''}`}>
                        All
                    </button> */}

                    {categories.map((category: string, index: number) => {

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        useEffect(() => {
                            router.query.topic === category && handleCategorySelect(router.query.topic)
                        }, [router.query.topic])
                        
                        return (
                            <button
                                key={index}
                                onClick={() => { animateScroll.scrollToTop(),router.route === '/articles' ? (router.push({query:{topic: category}}), handleCategorySelect(category)) : (router.push({ pathname: '/articles', query: { topic: category } }) && handleCategorySelect(category)) }}
                                className={`text-[18px] dark:text-bluedarktwo  text-start cursor-pointer text-blue dark:text-blueDarkTwo leading-[27px] font-inter hover:underline decoration-2 underline-offset-4 ${router.route === '/articles' &&  selectedCategory === category ? 'underline' : ''
                                    }`}
                            >
                                {category}
                            </button>

                        )
                    })}

                </div>
            </div>
        </div>
    );
};

export default SideBar
import { gql } from "@apollo/client"
import Image from "next/image"

export default function GenesisCustomBlocksSnippet(props: any) {
    const attributes = props.attributes
    return (
        <section className="bg-grey-100 dark:bg-dark-500 rounded-3xl px-4 py-6 md:p-8 text-dark-100 dark:text-grey-500 mt-14">
            <div className="flex items-center gap-6 rounded-2xl bg-white dark:bg-dark-200 py-4 px-6">
                <Image src="http://blog.rovae.in/wp-content/uploads/2023/05/Screenshot-2023-05-14-at-5.34-1.png" height={39} width={39} alt="image alt" className="h-[39px] w-[39px]" />
                <h4 className=" text-lg md:text-xl font-semibold font-manrope ">{attributes.title}</h4>
            </div>
            <p className="mt-6 text-[18px] leading-[29px]">{attributes.description}</p>
        </section>
    )
}

GenesisCustomBlocksSnippet.fragments = {
    entry: gql`
    fragment GenesisCustomBlocksFragment on GenesisCustomBlocksSnippet {
        name
        __typename
        attributes {
            title
            description
        }
    }`,
    key: `GenesisCustomBlocksFragment`,
}

GenesisCustomBlocksSnippet.displayName = 'GenesisCustomBlocksSnippet'

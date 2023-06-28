import React from 'react'
import Image from "next/image";
import { generateId } from '../../utils/generateId';
import { Link as ScrollToLink } from 'react-scroll';

type Props = {
  className?: string
  alt: string
  src: string
  tableContents: string[]
}

const Featureimage = ({ className, alt, src, tableContents }: Props) => {
  return (
    <div className={`border-t  dark:border-grey-600 border-[#D9D9D9] mt-14 pt-14 max-w-[700px] ${className}`}>
      <div className='w-full'>
        <Image src={src} alt={alt} className="object-cover rounded-[32px] !relative" fill={true} />
      </div>
      {tableContents.length > 0 &&
        <div className='mt-14 flex flex-col '>
          <h4 className='text-dark-100 dark:text-grey-500 text-[24px] leading-[35px] font-inter font-semibold'>Table of Contents</h4>
          <ol>
            {tableContents.map((item: any, index) => (
              <li className={`text-dark-100 dark:text-grey-500 text-[18px] leading-[27px]  mt-4 ${item.level >= 4 ? 'ml-5' : ''}`} key={index}><ScrollToLink to={`${generateId(item.content)}`} offset={-100} spy={true} smooth={true} className='cursor-pointer'>{item.content}</ScrollToLink></li>
            ))}
          </ol>
        </div>
      }
    </div >
  )
}
export default Featureimage
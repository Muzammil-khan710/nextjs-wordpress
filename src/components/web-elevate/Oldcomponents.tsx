
import ContactUs from 'components/about/ContactUs'
import Hashtag from 'components/about/HashCard'
type Props = {
  className?: string
  style?:string
}
const Oldcomponents = ({className=''}: Props) => {
  return (
    <>
      <section className={`  gap-5 layout3xl:gap-0  m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  layout3xl:grid-cols-4  ${className}`}>
        <Hashtag className=" order-1  layout3xl:h-full" />
        <div className='bg-grey-100 dark:bg-dark-300 md:col-span-2  lg:col-span-2  layout3xl:order-3 md:order-3  lg:order-2 order-2 rounded-[24px] layoutmd:rounded-input relative z-[1]  md:px-10  flex items-center lg:mx-0 md:py-[40px] layout3xl:py-[40px]  layout3xl:ml-[28px]  layout3xl:row-span-3 layout3xl:w-[590px] layout3xl:h-[325px] '>
          <p className="text-grey-300 font-medium font-manrope md:text-[32px] md:leading-[43px] text-[28px] leading-[38px] p-6 md:p-0">At Rovae, we pride ourselves on providing <span className='text-dark-200 dark:text-grey-500'>exceptional and premium</span>  product experiences. Our team has a <span className='text-dark-200 dark:text-grey-500'> proven track record </span> of delivering stunning results.</p>
        </div>
        
<ContactUs className="layout3xl:order-3 lg:order-3 md:order-2 order-3  layout3xl:h-[325px]" style='text-[17px]' />      </section>
    </>
  )
}
export default Oldcomponents
type Props = {
  className?: string
  href: string
}

const Socialslinks = ({ className, href }: Props) => {
  return (
    <div className={`w-[210px] hidden layout3xl:block relative lg:mt-16 layout3xl:mt-10  ${className}`}>
      <div className='bg-grey-100 dark:bg-dark-500 pt-4 pb-[18px] px-6 rounded-2xl sticky top-[100px] border-[1px] dark:border-grey-600 border-grey-200'>
        <p className='text-grey-400 dark:text-grey-300 text-center text-[16px] leading-[24px] font-inter'>Share this article on:</p>
        <div className='flex gap-6 justify-center items-center mt-[14px] '>
          <a target='_blank' href={`https://www.linkedin.com/shareArticle?mini=true&url=rovae.in${href}`}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="dark:fill-[#4D8CC7] fill-blue" fillRule="evenodd" clipRule="evenodd" d="M7.429 6.969H11.143V8.819C11.678 7.755 13.05 6.799 15.111 6.799C19.062 6.799 20 8.917 20 12.803V20H16V13.688C16 11.475 15.465 10.227 14.103 10.227C12.214 10.227 11.429 11.572 11.429 13.687V20H7.429V6.969ZM0.57 19.83H4.57V6.799H0.57V19.83ZM5.143 2.55C5.14315 2.88528 5.07666 3.21724 4.94739 3.52659C4.81812 3.83594 4.62865 4.11651 4.39 4.352C3.9064 4.83262 3.25181 5.10165 2.57 5.1C1.88939 5.09954 1.23631 4.8312 0.752 4.353C0.514211 4.11671 0.325386 3.83582 0.196344 3.52643C0.0673015 3.21704 0.000579132 2.88522 0 2.55C0 1.873 0.27 1.225 0.753 0.747C1.23689 0.268158 1.89024 -0.000299211 2.571 2.50265e-07C3.253 2.50265e-07 3.907 0.269 4.39 0.747C4.872 1.225 5.143 1.873 5.143 2.55Z" />
            </svg>
          </a>
          <a target='_blank' href={`https://www.facebook.com/sharer/sharer.php?u=rovae.in${href}`}>
            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="dark:fill-[#4D8CC7] fill-blue" d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z" />
            </svg>
          </a>
          <a target='_blank' href={`https://twitter.com/intent/tweet?url=rovae.in${href}&text=`}>
            <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="dark:fill-[#4D8CC7] fill-blue" d="M21.4591 2C20.6891 2.35 19.8591 2.58 18.9991 2.69C19.8791 2.16 20.5591 1.32 20.8791 0.31C20.0491 0.81 19.1291 1.16 18.1591 1.36C17.3691 0.5 16.2591 0 14.9991 0C12.6491 0 10.7291 1.92 10.7291 4.29C10.7291 4.63 10.7691 4.96 10.8391 5.27C7.27906 5.09 4.10906 3.38 1.99906 0.79C1.62906 1.42 1.41906 2.16 1.41906 2.94C1.41906 4.43 2.16906 5.75 3.32906 6.5C2.61906 6.5 1.95906 6.3 1.37906 6V6.03C1.37906 8.11 2.85906 9.85 4.81906 10.24C4.18979 10.4122 3.52916 10.4362 2.88906 10.31C3.16067 11.1625 3.6926 11.9084 4.41008 12.4429C5.12756 12.9775 5.99451 13.2737 6.88906 13.29C5.37269 14.4904 3.49306 15.1393 1.55906 15.13C1.21906 15.13 0.879063 15.11 0.539062 15.07C2.43906 16.29 4.69906 17 7.11906 17C14.9991 17 19.3291 10.46 19.3291 4.79C19.3291 4.6 19.3291 4.42 19.3191 4.23C20.1591 3.63 20.8791 2.87 21.4591 2Z" />
            </svg>
          </a>
          <a target='_blank' href={`mailto:info@example.com?&subject=&cc=&bcc=&body=rovae.in${href}%0A`}>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="dark:fill-[#4D8CC7] fill-blue" d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06H18C18.55 1.69779e-06 19.021 0.196001 19.413 0.588001C19.805 0.980001 20.0007 1.45067 20 2V14C20 14.55 19.804 15.021 19.412 15.413C19.02 15.805 18.5493 16.0007 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Socialslinks
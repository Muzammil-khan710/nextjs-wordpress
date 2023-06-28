import SharedLink from "./SharedLink";

type Props = {
  data:string
  className?:string
};

const CallToAction = ({data, className=''}: Props) => {
  return (
    <section className={`flex bg-dark-100 dark:bg-grey-500 bg-fixed bg-center   shared-banner rounded-input justify-center ${className}`}>
        <div className="  rounded-[32px] px-6   md:px-8 lg:px-10  w-full py-16   md:py-20  lg:py-[104px] flex flex-col justify-center items-center gap-10 ">
          <h3 className="main-headings-weight opposite tracking-[-0.02em]  max-w-[1011px] font-semibold md:text-[64px] text-[48px] lg:text-[72px]  md:leading-[70px] lg:leading-[80px] leading-[110%] text-grey-500 dark:text-dark-200 text-center">
            {data}
          </h3>
          <SharedLink href={'https://calendly.com/rovae/30min'} className="btn-opp"  variant="white">
            Book a Call
          </SharedLink>
        </div>
    </section>
  );
};

export default CallToAction;
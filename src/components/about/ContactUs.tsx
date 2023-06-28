import CardLayout from "components/CardLayout";
import { ContactData } from "data/data";
import { motion, useCycle } from 'framer-motion';
import { useWindowSize } from "src/hooks/useWindowSize";
import { Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import 'swiper/css/autoplay';

import { Swiper, SwiperSlide } from "swiper/react";
type Props = {
    className?: string
    style?:string
}

const ContactUs = (props: Props) => {
    const  [isTouch, setTouch]:[boolean,any] = useCycle(false,true);
    const size = useWindowSize();

    return (
        <CardLayout className={`${props.className} relative  !aspect-square overflow-hidden !p-0 flex items-start`}>
            <Swiper className="relative inset-0 z-10 w-full h-full overflow-hidden"
                slidesPerView={5}
                modules={[Autoplay,Mousewheel]}
                mousewheel={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true
                }}

                centeredSlides={true}
                direction={"vertical"}
                loop={true}
                grabCursor={true}
                onTouchStart={(e) => setTouch(true)}
                onTouchEnd={(e) => setTouch(false)}
                spaceBetween={size.isMobile ? 0 : 5}

            >
                {ContactData.map((item, i ) => {
                    return (
                        <SwiperSlide key={i}   className={`text-dark-100 ${props.style} dark:text-grey-500 m-auto w-max text-lg font-[450] relative flex items-center`}>
                            {({ isActive, isPrev, isNext }) => (
                                <motion.a href={item.link}  target="_blank"
                                    initial={{
                                        scale: .7,
                                        opacity: 0
                                    }}

                                    animate={{
                                        scale: isTouch ? .75 : isActive ? 1 : (isPrev || isNext) ? .9 : .75,
                                        opacity: isTouch ? .12 : isActive ? 1 : (isPrev || isNext) ? .32 : .12
                                    }}
                                    className={`absolute p-2 max-h-[3rem]   h-max m-auto max-w-[261px]    w-full inset-0 rounded-[8px] flex items-center    gap-2 justify-start ${!isActive && 'pointer-events-none'}`}>
                                    <motion.span className="w-[2rem] h-[2rem] flex items-center justify-center bg-orange  bg-white rounded-md dark:bg-[#414141] shadow-svgLight dark:shadow-svgDark">{item.svg}</motion.span>
                                    <motion.span className="">{item.name}  </motion.span>
                                </motion.a>
                            )}
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <motion.div  animate={{
                opacity: isTouch ? 0 : 1
            }} className="bg-[#EBEBED] h-14 dark:bg-dark-200  w-auto mx-7 absolute inset-0 my-auto z-[-2] rounded-[8px]"/>
        </CardLayout>
    )
}

export default ContactUs
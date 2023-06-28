import CardLayout from "components/CardLayout";
import { HashItems } from "data/data";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import React, { useEffect } from "react";
import { useMenuCtx } from "src/pages/_app";

type Props = {
  className?: React.ReactNode;
};

const variants = {
  flip0: {
    rotateY: 0
  },
  flip180: {
    rotateY: 180
  }
}

const textVariants = {
  initial:  {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  },
  exit: {
    y: -20,
    opacity: 0
  }
}
const Hashtag = (props: Props) => {
  const [index, setIndex] = useCycle(0,1,2,3,4,5);

  const { mobileNav  } = useMenuCtx();

  useEffect(() => {
    const id = setInterval(() => {
      setIndex()
    }, 2000);
    return () => clearInterval(id);
  }, [])






  return (
    <CardLayout
      className={`aspect-square flex justify-center items-center ${props.className} `}
    >
      <motion.div   className="flex items-center justify-center card ">
        <motion.div
          className="relative flex items-center justify-center face front "
          variants={variants}
          animate={!mobileNav && (index % 2 === 0 ? 'flip0' : 'flip180')}
          transition={{
            type: 'tween',
            duration: .35
          }}
        >
          <svg
            width="245"
            height="212"
            viewBox="0 0 237 212"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.16"
              d="M39.5042 211.853L55.3405 152.467H0.0601154L7.83162 123.288H63.2586L73.3762 84.7232H18.0959L26.014 55.8367H81.1477L95.9576 0.849599H126.017L111.207 55.8367H151.531L166.341 0.849599H196.401L181.591 55.8367H236.871L229.246 84.7232H173.819L163.408 123.288H218.689L211.064 152.467H155.637L139.801 211.853H109.888L125.577 152.467H85.2534L69.4172 211.853H39.5042ZM93.1716 123.288H133.349L143.76 84.7232H103.436L93.1716 123.288Z"
              className="dark:fill-grey-100 fill-dark-100"
            />
          </svg>
        </motion.div>
      </motion.div>
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full ">
        <AnimatePresence>
          <motion.div
            variants={textVariants}
            key={HashItems[index].id}
            initial={'initial'}
            animate={'visible'}
            exit={'exit'}
            transition={{ ease: "easeInOut" , duration: .2 }}
            style={{ position: "absolute" }}
          >
            <h1 className="mb-2 text-dark-100 dark:text-grey-500 text-h-one font-manrope">
              {HashItems[index].content}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </CardLayout>
  );
};

export default Hashtag;

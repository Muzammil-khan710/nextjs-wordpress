import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const CardLayout: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <section
      {...props}
      className={`bg-grey-100 dark:bg-dark-300 rounded-[24px] layoutmd:rounded-input relative z-[1] p-6 layoutmd:p-8 ${className}`}
    >
      {children}
    </section>
  );
};

export default CardLayout;

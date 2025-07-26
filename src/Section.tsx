import { ReactNode } from "react";

export const Section = ({
  className = "",
  children,
}: {
  className: string;
  children: ReactNode;
}) => {
  return (
    <section className={`${className} section flex p-6`}>{children}</section>
  );
};

export default Section;

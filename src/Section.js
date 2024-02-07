export const Section = ({ Tag = "section", className = "", children }) => {
  return <Tag className={`${className} section flex p-6`}>{children}</Tag>;
};

export default Section;

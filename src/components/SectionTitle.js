export const SectionTitle = ({ level = "1", title = "" }) => {
  const Component = `h${level}`;

  return <Component className="mt-10 font-bold text-2xl">{title}</Component>;
};

export default SectionTitle;

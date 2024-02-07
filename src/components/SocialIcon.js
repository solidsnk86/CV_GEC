import Link from "next/link";

const SocialIcon = ({ url, icon: Icon }) => {
  return (
    <Link href={url}>
      <Icon />
    </Link>
  );
};

export default SocialIcon;

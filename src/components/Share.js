import { METADATA } from "@/Constants";

export default function Share() {
  const shareCv = () => {
    if (navigator.share) {
      navigator.share({
        title: METADATA.title,
        text: METADATA.description,
        url: window.location.href,
      });
    }
  };
  return shareCv;
}

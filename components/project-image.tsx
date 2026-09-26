import Image, { type ImageProps, type StaticImageData } from "next/image";

// next/image with a blur placeholder whenever the build generated one (it doesn't for GIFs).
export default function ProjectImage({
  src,
  ...props
}: Omit<ImageProps, "src" | "placeholder"> & { src: StaticImageData }) {
  return (
    <Image
      src={src}
      placeholder={src.blurDataURL ? "blur" : "empty"}
      {...props}
    />
  );
}

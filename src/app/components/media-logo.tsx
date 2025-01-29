import Image from 'next/image';

export const MediaLogo = ({ src, alt }: { src: string; alt: string }) => (
    <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={60}
        className="object-contain h-12"
      />
    </div>
  );
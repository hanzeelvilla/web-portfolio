import { useInView } from "../../hooks/useInView";

interface LazyVideoProps {
  src: string;
  poster: string;
  width: number;
  height: number;
  title: string;
}

export const LazyVideo = ({
  src,
  poster,
  width,
  height,
  title,
}: LazyVideoProps) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ rootMargin: "200px" });

  return (
    <div ref={ref} className="h-full w-full">
      {isInView ? (
        <video
          src={src}
          poster={poster}
          width={width}
          height={height}
          className="h-full w-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
        />
      ) : (
        <img
          src={poster}
          alt={title}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      )}
    </div>
  );
};

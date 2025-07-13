// components/YouTubeEmbed.tsx
import React from "react";
import clsx from "clsx";

type YouTubeVideoProps = {
  className?: string;
  youtubeId: string;
  height?: number;
};

export default function YouTubeVideo({
  className = "",
  youtubeId,
  height = 300,
}: YouTubeVideoProps) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <div className={clsx(className)}>
      <iframe
        className="w-full"
        height={height}
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

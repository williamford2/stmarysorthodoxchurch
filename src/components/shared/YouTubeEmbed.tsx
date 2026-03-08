"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({ videoId, title, className }: YouTubeEmbedProps) {
  const [activated, setActivated] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (activated) {
    return (
      <div className={`aspect-video ${className ?? ""}`}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setActivated(true)}
      className={`relative aspect-video w-full group cursor-pointer rounded-lg overflow-hidden ${className ?? ""}`}
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 bg-church-burgundy/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="h-7 w-7 text-white ml-1" fill="white" />
        </div>
      </div>
    </button>
  );
}

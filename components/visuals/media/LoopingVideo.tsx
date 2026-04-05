'use client';

import { useState, useRef, useEffect } from 'react';

interface LoopingVideoProps {
  src: string;
  poster?: string;
  aspectRatio?: string;
  caption?: string;
}

export function LoopingVideo({ src, poster, aspectRatio = '16/9', caption }: LoopingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio,
          borderRadius: 12,
          overflow: 'hidden',
          background: '#0d0d0d',
          border: '1px solid var(--color-border)',
        }}
      >
        {/* Blur placeholder */}
        {!loaded && poster && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${poster})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(20px)',
              transform: 'scale(1.1)',
            }}
          />
        )}

        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      </div>

      {caption && (
        <p style={{
          textAlign: 'center',
          fontSize: 11,
          color: 'var(--color-text-muted)',
          marginTop: 8,
          fontStyle: 'italic',
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}

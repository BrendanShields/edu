interface IllustrationCanvasProps {
  src: string;
  alt: string;
  caption?: string;
  maxWidth?: number;
}

export function IllustrationCanvas({ src, alt, caption, maxWidth = 340 }: IllustrationCanvasProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      width: '100%',
    }}>
      <div style={{
        width: '100%',
        maxWidth,
        borderRadius: 12,
        overflow: 'hidden',
        border: '1px solid var(--color-border)',
        background: '#0d0d0d',
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
          loading="lazy"
        />
      </div>

      {caption && (
        <p style={{
          textAlign: 'center',
          fontSize: 11,
          color: 'var(--color-text-muted)',
          fontStyle: 'italic',
          maxWidth: 300,
        }}>
          {caption}
        </p>
      )}
    </div>
  );
}

interface Callout {
  x: string;    // CSS percentage, e.g. "25%"
  y: string;    // CSS percentage
  label: string;
  color?: string;
}

interface AnnotatedImageProps {
  src: string;
  alt: string;
  callouts: Callout[];
  aspectRatio?: string;
}

export function AnnotatedImage({ src, alt, callouts, aspectRatio = '16/10' }: AnnotatedImageProps) {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio,
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
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
        loading="lazy"
      />

      {/* Callout badges */}
      {callouts.map((callout, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: callout.x,
            top: callout.y,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            animation: 'fadeIn 0.4s ease both',
            animationDelay: `${i * 0.15}s`,
          }}
        >
          {/* Dot */}
          <div style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: callout.color || 'var(--color-accent)',
            boxShadow: `0 0 8px ${callout.color || 'var(--color-accent)'}`,
            flexShrink: 0,
          }} />

          {/* Label */}
          <div style={{
            fontSize: 10,
            fontWeight: 600,
            color: '#fafafa',
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(4px)',
            padding: '3px 8px',
            borderRadius: 4,
            whiteSpace: 'nowrap',
            border: `1px solid ${callout.color || 'var(--color-accent)'}40`,
          }}>
            {callout.label}
          </div>
        </div>
      ))}
    </div>
  );
}

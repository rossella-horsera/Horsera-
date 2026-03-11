// Horsera Progress Ring — reusable SVG arc component
// Used on Home (milestone hero) and Journey (level readiness)

interface ProgressRingProps {
  progress: number;        // 0–1
  size?: number;           // diameter in px, default 190
  strokeWidth?: number;    // default 13
  label: string;           // center top label (milestone name)
  sublabel: string;        // center bottom label (e.g. "3/5 rides")
  sublabelCaption?: string;// tiny caption below sublabel
  color?: string;          // progress color, default cognac
  trackColor?: string;     // background arc color
}

export default function ProgressRing({
  progress,
  size = 190,
  strokeWidth = 13,
  label,
  sublabel,
  sublabelCaption = 'rides',
  color = '#8C5A3C',
  trackColor = '#EDE7DF',
}: ProgressRingProps) {
  // SVG geometry
  const viewSize = 200;
  const cx = viewSize / 2;
  const cy = viewSize / 2;
  const r = 80;
  const circumference = 2 * Math.PI * r;

  // 270° arc (3/4 circle) — gap at bottom
  const arcAngle = 270;
  const arcLength = (arcAngle / 360) * circumference;      // 376.99
  const gapLength = circumference - arcLength;              // 125.66
  const progressLength = Math.max(0, Math.min(progress, 1)) * arcLength;

  // rotate(135) positions start at bottom-left, arc goes clockwise to bottom-right
  const rotation = 135;

  // Inner accent ring radius
  const innerR = 66;
  const innerCircumference = 2 * Math.PI * innerR;
  const innerArcLength = (arcAngle / 360) * innerCircumference;

  return (
    <div
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {/* Subtle glow behind ring */}
      <div
        style={{
          position: 'absolute',
          width: size * 0.72,
          height: size * 0.72,
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(140,90,60,0.07) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* SVG Ring */}
      <svg
        viewBox={`0 0 ${viewSize} ${viewSize}`}
        width={size}
        height={size}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        {/* Outer subtle halo */}
        <circle
          cx={cx} cy={cy} r={r + 12}
          stroke="rgba(140,90,60,0.05)"
          strokeWidth="1"
          fill="none"
        />

        {/* Background track arc */}
        <circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${arcLength} ${circumference}`}
          strokeLinecap="round"
          transform={`rotate(${rotation} ${cx} ${cy})`}
        />

        {/* Inner accent ring */}
        <circle
          cx={cx} cy={cy} r={innerR}
          fill="none"
          stroke="rgba(201,169,110,0.18)"
          strokeWidth="1.5"
          strokeDasharray={`${innerArcLength} ${innerCircumference}`}
          strokeLinecap="round"
          transform={`rotate(${rotation} ${cx} ${cy})`}
        />

        {/* Progress fill */}
        {progressLength > 0 && (
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${progressLength} ${circumference}`}
            strokeLinecap="round"
            transform={`rotate(${rotation} ${cx} ${cy})`}
            style={{ transition: 'stroke-dasharray 0.6s ease' }}
          />
        )}

        {/* Champagne tip dot at progress end */}
        {progressLength > 8 && (
          <circle
            cx={cx} cy={cy} r={r}
            fill="none"
            stroke="#C9A96E"
            strokeWidth={strokeWidth}
            strokeDasharray={`4 ${circumference}`}
            strokeDashoffset={-(progressLength - 4)}
            strokeLinecap="round"
            transform={`rotate(${rotation} ${cx} ${cy})`}
            opacity="0.7"
          />
        )}
      </svg>

      {/* Center content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '0 20px',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: size > 150 ? '13.5px' : '11px',
            fontWeight: 500,
            color: '#1A140E',
            lineHeight: 1.3,
            marginBottom: '6px',
          }}
        >
          {label}
        </div>
        <div
          style={{
            width: '24px',
            height: '1px',
            background: '#D4C9BC',
            margin: '0 auto 6px',
          }}
        />
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: size > 150 ? '19px' : '14px',
            fontWeight: 500,
            color: color,
            lineHeight: 1,
            marginBottom: '2px',
          }}
        >
          {sublabel}
        </div>
        {sublabelCaption && (
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '9px',
              color: '#B5A898',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            {sublabelCaption}
          </div>
        )}
      </div>
    </div>
  );
}

export function BlueprintDrawing() {
  return (
    <svg
      viewBox="0 0 640 520"
      className="w-full h-auto"
      role="img"
      aria-label="Planta baixa esquemática de um projeto arquitetônico"
    >
      <g
        fill="none"
        strokeLinecap="square"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      >
        {/* outer footprint */}
        <path
          className="draw-path draw-1"
          d="M80 60 H560 V380 H80 Z"
          stroke="var(--text-primary)"
          strokeOpacity="0.85"
          strokeWidth="2.5"
          pathLength={1}
        />

        {/* vertical partition, upper rooms */}
        <path
          className="draw-path draw-2"
          d="M320 60 V140 M320 180 V250"
          stroke="var(--accent-gold)"
          strokeOpacity="0.75"
          strokeWidth="1.5"
          pathLength={1}
        />

        {/* horizontal partition, lower room split */}
        <path
          className="draw-path draw-2"
          d="M80 250 H560"
          stroke="var(--accent-gold)"
          strokeOpacity="0.75"
          strokeWidth="1.5"
          pathLength={1}
        />

        {/* interior door: partition */}
        <path
          className="draw-path draw-3"
          d="M320 180 H280 M280 180 A40 40 0 0 0 320 140"
          stroke="var(--text-secondary)"
          strokeOpacity="0.6"
          strokeWidth="1"
          pathLength={1}
        />

        {/* exterior door: bottom wall */}
        <path
          className="draw-path draw-3"
          d="M260 380 V340 M260 340 A40 40 0 0 1 300 380"
          stroke="var(--text-secondary)"
          strokeOpacity="0.6"
          strokeWidth="1"
          pathLength={1}
        />

        {/* window ticks, top wall */}
        <path
          className="draw-path draw-3"
          d="M140 60 V50 M160 60 V50 M420 60 V50 M440 60 V50 M480 60 V50 M500 60 V50"
          stroke="var(--accent-gold)"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          pathLength={1}
        />

        {/* window ticks, left wall */}
        <path
          className="draw-path draw-3"
          d="M80 300 H70 M80 320 H70 M80 100 H70 M80 120 H70"
          stroke="var(--accent-gold)"
          strokeOpacity="0.6"
          strokeWidth="1.5"
          pathLength={1}
        />

        {/* horizontal dimension line */}
        <g stroke="var(--text-muted)" strokeWidth="1">
          <path
            className="draw-path draw-4"
            d="M80 400 V430 M560 400 V430 M80 420 H560"
            pathLength={1}
          />
          <path
            className="draw-path draw-4"
            d="M76 416 L84 424 M556 416 L564 424"
            pathLength={1}
          />
        </g>

        {/* vertical dimension line */}
        <g stroke="var(--text-muted)" strokeWidth="1">
          <path
            className="draw-path draw-4"
            d="M580 60 H600 M580 380 H600 M590 60 V380"
            pathLength={1}
          />
          <path
            className="draw-path draw-4"
            d="M586 64 L594 72 M586 376 L594 368"
            pathLength={1}
          />
        </g>

        {/* north arrow */}
        <g
          className="draw-path draw-4"
          stroke="var(--text-secondary)"
          strokeWidth="1"
        >
          <circle cx="600" cy="30" r="16" pathLength={1} />
          <path d="M600 20 V40 M600 20 L595 28 M600 20 L605 28" pathLength={1} />
        </g>
      </g>

      <g
        fontFamily="var(--font-mono)"
        fill="var(--text-muted)"
        fontSize="11"
        letterSpacing="0.02em"
      >
        <text x="320" y="443" textAnchor="middle">
          9,60 m
        </text>
        <text x="620" y="224" textAnchor="middle" transform="rotate(90 620 224)">
          6,40 m
        </text>
        <text x="600" y="58" textAnchor="middle" fontSize="9">
          N
        </text>
        <text x="88" y="76" fontSize="10" fill="var(--accent-gold)" fillOpacity="0.8">
          A-101
        </text>
      </g>
    </svg>
  );
}

import { C } from "./theme";

/* Woven warp/weft background texture */
export default function WeavePattern({ opacity = 0.06, id = "weave" }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity }}>
      <defs>
        <pattern id={id} width="34" height="34" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="34" stroke={C.gold} strokeWidth="1" />
          <line x1="0" y1="0" x2="34" y2="0" stroke={C.gold} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

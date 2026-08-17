import { C } from "./theme";

/* Stitched divider — the thread motif used between sections */
export default function Stitch() {
  return (
    <div className="flex items-center justify-center gap-2 w-full select-none" aria-hidden="true">
      {Array.from({ length: 28 }).map((_, i) => (
        <span
          key={i}
          style={{
            width: 3,
            height: i % 4 === 0 ? 10 : 5,
            background: i % 4 === 0 ? C.gold : C.line,
          }}
        />
      ))}
    </div>
  );
}

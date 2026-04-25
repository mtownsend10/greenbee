import { cn } from "@/lib/utils";

type Props = React.SVGProps<SVGSVGElement> & {
  rows?: number;
  cols?: number;
  cellSize?: number;
};

/**
 * A honeycomb lattice you can place behind sections.
 * Pure SVG so the strokes stay crisp at any scale.
 */
export function Honeycomb({
  rows = 6,
  cols = 8,
  cellSize = 40,
  className,
  ...props
}: Props) {
  const w = cellSize;
  const h = (Math.sqrt(3) / 2) * cellSize;
  const points = `${w / 2},0 ${w},${h / 2} ${w},${h * 1.5} ${w / 2},${h * 2} 0,${h * 1.5} 0,${h / 2}`;

  const cells: { x: number; y: number; key: string }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * w + (r % 2 ? w / 2 : 0);
      const y = r * (h * 1.5);
      cells.push({ x, y, key: `${r}-${c}` });
    }
  }

  const totalW = cols * w + w / 2;
  const totalH = rows * h * 1.5 + h / 2;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      width="100%"
      height="100%"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      className={cn("text-honey/40", className)}
      aria-hidden="true"
      {...props}
    >
      {cells.map(({ x, y, key }) => (
        <polygon key={key} points={points} transform={`translate(${x} ${y})`} />
      ))}
    </svg>
  );
}

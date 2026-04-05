'use client';

import { useState } from 'react';

interface ComparisonTableProps {
  title?: string;
  columns: string[];
  rows: {
    label: string;
    values: string[];
  }[];
}

function cellClass(value: string) {
  if (value === '✓') return 'text-emerald-400';
  if (value === '✗') return 'text-text-muted/50';
  if (value === '~') return 'text-amber-400';
  return 'text-text-secondary';
}

const isSymbol = (v: string) => v === '✓' || v === '✗' || v === '~';

export function ComparisonTable({ title, columns, rows }: ComparisonTableProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <div
      className="space-y-3"
      style={{ animation: 'fadeUp 0.5s ease both' }}
    >
      {title && (
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
          {title}
        </p>
      )}
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="px-3 py-2 text-left font-medium text-text-muted" />
              {columns.map((col, colIdx) => (
                <th
                  key={col}
                  className={`px-3 py-2 text-center font-medium text-text-muted cursor-default transition-all duration-150 ${hoveredCol === colIdx ? 'bg-white/[0.04]' : ''}`}
                  onMouseEnter={() => setHoveredCol(colIdx)}
                  onMouseLeave={() => setHoveredCol(null)}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr
                key={row.label}
                className={`transition-all duration-150 ${rowIdx < rows.length - 1 ? 'border-b border-border/50' : ''} ${hoveredRow === rowIdx ? 'bg-white/[0.04]' : ''}`}
                style={{
                  animation: `fadeSlideIn 0.4s ease both`,
                  animationDelay: `${rowIdx * 0.07 + 0.15}s`,
                }}
                onMouseEnter={() => setHoveredRow(rowIdx)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="px-3 py-1.5 text-left font-medium text-text-primary whitespace-nowrap">
                  {row.label}
                </td>
                {row.values.map((val, colIdx) => (
                  <td
                    key={`${row.label}-${columns[colIdx]}`}
                    className={`px-3 py-1.5 text-center transition-all duration-150 ${cellClass(val)} ${hoveredCol === colIdx ? 'bg-white/[0.04]' : ''}`}
                    onMouseEnter={() => setHoveredCol(colIdx)}
                    onMouseLeave={() => setHoveredCol(null)}
                  >
                    <span
                      className={`inline-block transition-transform duration-150 ${isSymbol(val) && (hoveredRow === rowIdx || hoveredCol === colIdx) ? 'scale-125' : 'scale-100'}`}
                    >
                      {val}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

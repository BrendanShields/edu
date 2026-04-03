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

export function ComparisonTable({ title, columns, rows }: ComparisonTableProps) {
  return (
    <div className="space-y-3">
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
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-3 py-2 text-center font-medium text-text-muted"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i < rows.length - 1 ? 'border-b border-border/50' : ''}
              >
                <td className="px-3 py-1.5 text-left font-medium text-text-primary whitespace-nowrap">
                  {row.label}
                </td>
                {row.values.map((val, j) => (
                  <td
                    key={`${row.label}-${columns[j]}`}
                    className={`px-3 py-1.5 text-center ${cellClass(val)}`}
                  >
                    {val}
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

type Row = {
  label: string;
  value: string;
};

export function DataTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-steel-border">
      <table className="w-full border-collapse text-left text-body-sm">
        <thead className="bg-deep-graphite text-caption uppercase text-silver-whisper">
          <tr>
            <th className="px-3 py-3 font-medium">Field</th>
            <th className="px-3 py-3 font-medium">Verified value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-steel-border">
              <th className="w-2/5 px-3 py-3 font-medium text-silver-whisper">
                {row.label}
              </th>
              <td className="px-3 py-3 font-gtamericamono text-white-canvas">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

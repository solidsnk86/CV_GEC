export const SkelletonVisits = () => {
  return (
    <>
      <thead className="text-left">
        <tr>
          {Array.from({ length: 9 }).map((_, index) => (
            <th key={`skeleton-th-${index}`} className="px-2 py-2">
              <div className="h-4 w-16 bg-zinc-300 rounded animate-pulse" />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 15 }).map((_, rowIndex) => (
          <tr
            key={`skeleton-row-${rowIndex}`}
            className="border-b border-zinc-200"
          >
            {Array.from({ length: 9 }).map((_, colIndex) => (
              <td
                key={`skeleton-td-${rowIndex}-${colIndex}`}
                className="px-2 py-2"
              >
                <div className="h-4 w-full bg-zinc-200 rounded animate-pulse" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
};

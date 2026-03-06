export function Table({ headers, data, renderRow }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
            {headers.map((header, i) => (
              <th key={i} style={{ 
                padding: '0.75rem', 
                textAlign: 'left',
                fontWeight: 600,
                color: '#374151'
              }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i} style={{ 
              borderBottom: '1px solid #e5e7eb',
              transition: 'background-color 0.2s'
            }}>
              {renderRow(item)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

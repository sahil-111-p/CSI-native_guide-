import React from 'react';

export default function ApiTable({ propsData = [] }) {
  return (
    <div className="table-container">
      <table className="api-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {propsData.map((row, idx) => (
            <tr key={idx}>
              <td className="prop-name">{row.prop}</td>
              <td><span className="prop-type">{row.type}</span></td>
              <td className="prop-default"><code>{row.default}</code></td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

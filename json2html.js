export default function json2html(data) {
  // Get unique column headers from all objects
  const columns = [...new Set(data.flatMap(Object.keys))];

  // Start the HTML table with the data-user attribute
  let html = '<table data-user="geethikabodagala@gmail.com"><thead><tr>';
  
  // Add headers
  columns.forEach(col => {
    html += `<th>${col}</th>`;
  });
  html += '</tr></thead><tbody>';

  // Add rows
  data.forEach(row => {
    html += '<tr>';
    columns.forEach(col => {
      html += `<td>${row[col] || ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody></table>';

  return html;
}

function jsonToHtmlTable(jsonData) {
  // 创建一个表格元素
  const table = document.createElement('table');

  // 检查数据是否为空
  if (jsonData === null || jsonData === undefined) {
    return table;
  }

  // 处理不同类型的数据
  if (Array.isArray(jsonData)) {
    // 数组数据
    const headers = getHeadersFromJson(jsonData);
    const thead = createThead(headers);
    const tbody = createTbody(jsonData, headers);
    table.appendChild(thead);
    table.appendChild(tbody);
  } else if (typeof jsonData === 'object' && jsonData !== null) {
    // 单个对象数据
    const headers = Object.keys(jsonData);
    const thead = createThead(headers);
    const tbody = createTbody([jsonData], headers);
    table.appendChild(thead);
    table.appendChild(tbody);
  } else {
    // 基本类型数据
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = String(jsonData);
    tr.appendChild(td);
    table.appendChild(tr);
  }

  return table;
}

function getHeadersFromJson(data) {
  const headersSet = new Set();
  data.forEach(item => {
    if (typeof item === 'object' && item !== null) {
      Object.keys(item).forEach(key => headersSet.add(key));
    }
  });
  return Array.from(headersSet);
}

function createThead(headers) {
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  return thead;
}

function createTbody(data, headers) {
  const tbody = document.createElement('tbody');
  data.forEach(item => {
    const row = document.createElement('tr');
    headers.forEach(header => {
      const cell = document.createElement('td');
      const cellValue = getCellValue(item, header);
      cell.innerHTML = cellValue;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  return tbody;
}

function getCellValue(item, key) {
  const value = item[key];
  if (!value) {
    return '';
  }
  if (typeof value === 'object' || Array.isArray(value)) {
    return jsonToHtmlTable(value).outerHTML;
  }
  return String(value);
}


export default (data) => {
  const table = jsonToHtmlTable(data);
  return table.outerHTML;
};
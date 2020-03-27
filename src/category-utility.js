const categoryUtilityModule = (() => {
  const rowFragment = new DocumentFragment();
  const cellFragment = new DocumentFragment();
  const overlayContent = document.querySelector(".modal-body");
  const modalTitle = document.querySelector(".modal-title");
  const modalTable = document.createElement("table");
  modalTable.className = "cat-table";

  /**
   * Populate a table element for the modal
   * @param {{string: string}} category
   * @param {String} title
   */
  const populateTable = (category, title) => {
    if (modalTable.hasChildNodes) {
      while (modalTable.firstChild) {
        modalTable.removeChild(modalTable.lastChild);
      }
    }

    let chineseInnerText = "";

    for (let row in category) {
      const rowData = category[row];
      for (let column in rowData) {
        const cells = document.createElement("td");
        cells.innerText = rowData[column];
        switch (column) {
          case "chin":
            // store chinese text to be combined into one column
            chineseInnerText = cells.innerText;
            break;
          case "eng":
            // combine chinese and english text into one column
            cells.innerText = `${chineseInnerText} \n\n ${cells.innerText}`;
            cells.className = "description";
            cellFragment.appendChild(cells);
            break;
          default:
            cellFragment.appendChild(cells);
            break;
        }
      }
      const tableRow = document.createElement("tr");
      tableRow.appendChild(cellFragment);
      rowFragment.appendChild(tableRow);
    }
    modalTable.appendChild(rowFragment);
    overlayContent.appendChild(modalTable);
    modalTitle.innerText = title;
  };

  /**
   * Returns new object for a category
   * @param {number} n - length of category
   * @param {array} chinese - array holding chinese strings
   * @param {array} english - array holding english strings
   * @param {array} prices  - array holding price strings
   * @param {string} letter - letter of category
   */
  const populateObject = (n, chinese, english, prices, letter) => {
    const newObject = {};
    for (let i = 0; i < n; i++) {
      newObject[`r${i + 1}`] = {
        num: `${letter}${i + 1}`,
        chin: chinese[i],
        eng: english[i],
        price: prices[i],
      };
    }

    return newObject;
  };

  /**
   * Returns a new array with no whitespace
   * @param {string} literal - template literal
   */
  const cleanTemplateLiteral = (literal) => {
    const arr = [];
    const tempLiteral = literal.split("\n");
    for (let elem of tempLiteral) {
      arr.push(elem.trim());
    }

    return arr;
  };

  return {
    populateTable,
    populateObject,
    cleanLiteral: cleanTemplateLiteral,
  };
})();

export default categoryUtilityModule;

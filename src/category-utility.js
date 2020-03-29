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
    
    // clear previous table
    if (modalTable.hasChildNodes) {
      while (modalTable.firstChild) {
        modalTable.removeChild(modalTable.lastChild);
      }
    }
    
    let chineseInnerText = "";

    for (let row in category) {
      const rowData = category[row];
      for (let column in rowData) {
        const currentCell = document.createElement("td");
        currentCell.innerText = rowData[column];
        switch (column) {
          case "chin":
            // store chinese text to be combined into one column
            chineseInnerText = currentCell.innerText;
            break;
          case "eng":
            // combine chinese and english text into one column
            const englishInnerText = currentCell.innerText;
            currentCell.innerText = `${chineseInnerText} \n\n ${englishInnerText}`;
            currentCell.className = "description";
            // possibly remove line 40 & 41 to allow fallthrough
            cellFragment.appendChild(currentCell);
            break;
          default:
            cellFragment.appendChild(currentCell);
            break;
        }
      }
      const tableRow = document.createElement("tr");
      tableRow.appendChild(cellFragment);
      rowFragment.appendChild(tableRow);
    }
    modalTable.appendChild(rowFragment);
    // apply menu to modal
    overlayContent.appendChild(modalTable);
    modalTitle.innerText = title;
  };

  /**
   * Returns new object for a category
   * @param {Number} n - length of category
   * @param {Array.<String>} data - array holding category information
   * @param {String} letter - letter of category
   */
  const populateObject = (n, data, letter = "", isDefault = true) => {
    const newObject = {};
    let currentDish;
    if (isDefault) {
      for (let i = 0; i < n; i++) {
        currentDish = data[i].split(",")
        newObject[`r${i + 1}`] = {
          num: `${letter}${i + 1}`,
          chin: currentDish[0],
          eng: currentDish[1],
          price: currentDish[2],
        };
      }
    } else {
      for (let i = 0; i < n; i++) {
        currentDish = data[i].split(",")
        newObject[`r${i + 1}`] = {
          chin: currentDish[0],
          eng: currentDish[1],
          price: currentDish[2],
        };
      }
    }

    return newObject;
  };

  /**
   * Returns a new array of strings with no whitespace
   * @param {string} literal - template literal
   */
  const cleanTemplateLiteral = (literal) => {
    const arr = [];
    const literalArray = literal.split("\n");

    for (let elem of literalArray) {
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

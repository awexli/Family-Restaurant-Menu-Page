const categoryUtilityModule = (() => {
  const rowFragment = new DocumentFragment();
  const cellFragment = new DocumentFragment();
  const cellCloneFragment = new DocumentFragment();
  const currentCell = document.createElement('td');
  const currentRow = document.createElement('tr');
  const modalTable = document.createElement('table');
  const p = document.createElement('p');
  modalTable.className = 'cat-table';

  const dishNumberClone = (clonedNode, text, fragment) => {
    let cellClone;
    cellClone = clonedNode;
    cellClone.innerText = text;
    fragment.appendChild(cellClone);
    return fragment;
  };

  /**
   * Populate a table element for the modal
   * @param {{string: string}} category
   */
  const populateTable = (categoryObj) => {
    // clear previous table
    if (modalTable.hasChildNodes) {
      while (modalTable.firstChild) {
        modalTable.removeChild(modalTable.lastChild);
      }
    }

    let currentCellClone;
    let currentRollClone;
    let pClone;
    let priceInnerText;
    for (let row in categoryObj) {
      /** create cells for dish number */
      // currentCellClone = currentCell.cloneNode(true);
      // currentCellClone.innerText = categoryObj[row].num;
      // cellFragment.appendChild(currentCellClone);
      dishNumberClone(
        currentCell.cloneNode(true),
        categoryObj[row].num,
        cellFragment
      );
      /** END cell creation for dish number */

      /** create cell for chinese & english & price */
      currentCellClone = currentCell.cloneNode(true);
      currentCellClone.className = 'description';
      if (categoryObj[row].price === 'undefined') {
        /** create paragraph element for english text */
        pClone = p.cloneNode(true);
        pClone.innerText = categoryObj[row].eng;
        pClone.className = 'english';
        cellCloneFragment.appendChild(pClone);
        /** END english text */

        /** create paragraph element for chinese text */
        pClone = p.cloneNode(true);
        pClone.innerText = categoryObj[row].chin;
        pClone.className = 'chinese';
        cellCloneFragment.appendChild(pClone);
        /** END chinese text */
      } else {
        /** create paragraph element for english text */
        pClone = p.cloneNode(true);
        pClone.innerText = categoryObj[row].eng;
        pClone.className = 'english';
        cellCloneFragment.appendChild(pClone);
        /** END english text */

        /** create paragraph element for chinese text */
        pClone = p.cloneNode(true);
        pClone.innerText = categoryObj[row].chin;
        pClone.className = 'chinese';
        cellCloneFragment.appendChild(pClone);
        /** END chinese text */

        /** create paragraph element for price text */
        pClone = p.cloneNode(true);
        priceInnerText = categoryObj[row].price;
        if (categoryObj[row].price != 'Seasonal') {
          priceInnerText = `$${priceInnerText}`;
        }
        pClone.innerText = priceInnerText;
        pClone.className = 'price';
        cellCloneFragment.appendChild(pClone);
        /** END price text */
      }
      /** END cell creation for chinese & english & price  */

      currentCellClone.appendChild(cellCloneFragment);
      cellFragment.appendChild(currentCellClone);
      currentRollClone = currentRow.cloneNode(true);
      currentRollClone.appendChild(cellFragment);
      rowFragment.appendChild(currentRollClone);
    }

    modalTable.appendChild(rowFragment);

    return modalTable;
  };

  /**
   * Returns new object for a category
   * @param {Number} n - length of category
   * @param {Array.<String>} data - array holding category information
   * @param {String} letter - letter of category
   */
  const populateObject = (n, data, letter = '') => {
    const newObject = [];
    let currentDish;
    for (let i = 0; i < n; i++) {
      currentDish = data[i].split(',');
      newObject.push({
        number: `${letter}${i + 1}`,
        chinese: currentDish[0],
        english: currentDish[1],
        price: currentDish[2],
      });
    }
    return newObject;
  };

  /**
   * Returns a new array of strings with no whitespace
   * @param {string} literal - template literal
   */
  const cleanTemplateLiteral = (literal) => {
    const arr = [];
    const literalArray = literal.split('\n');

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

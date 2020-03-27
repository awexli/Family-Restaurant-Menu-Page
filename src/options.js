const mainFragment = () => {
  const mainContentFragment = new DocumentFragment();
  const mainDiv = document.createElement("div");
  mainDiv.className = "main";

  const foodCategory = () => {
    const categoryArr = [
      "House Special (特色菜)",
      "Chow Mein & Fun (粉麵類)",
      "Fried Rice (炒飯類)",
      "Congee (粥類)",
      "Clay Pot (煲仔類)",
      "Lettuce Wraps (生菜包)",
      "Vegetables",
      "Seafood",
      "Crab & Lobster",
      "Chicken & Duck & Frog",
      "Pork",
      "Mu Shu (木須類)",
      "Appetizers (餐前小食)",
      "Soup",
      "Beef & Lamb",
      "Rice Plates & Soup ($9.50)"
    ];

    const optionsDiv = document.createElement("div");
    const table = document.createElement("table");
    const categoryTableRow = document.createElement("tr");
    const categoryTableCell = document.createElement("td");
    const rowFragments = new DocumentFragment();

    categoryArr.forEach( categoryName => {
      const rowClone = categoryTableRow.cloneNode(true);
      const cellClone = categoryTableCell.cloneNode(true);
      cellClone.innerText = categoryName;
      cellClone.className = "btn";
      cellClone.setAttribute("data-toggle", "modal");
      cellClone.setAttribute("data-target", "#modalLong");
      rowClone.appendChild(cellClone);
      rowFragments.appendChild(rowClone);
    });

    table.appendChild(rowFragments);
    optionsDiv.appendChild(table);
    optionsDiv.className = "options";

    return optionsDiv;
  };

  mainDiv.appendChild(foodCategory());
  mainContentFragment.appendChild(mainDiv);

  return mainContentFragment;
};

const mainTag = () => {
  return document.querySelector(".main");
};

export default { mainFragment, mainTag };

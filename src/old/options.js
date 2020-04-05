// const mainFragment = () => {
//   const mainContentFragment = new DocumentFragment();
//   const mainDiv = document.createElement("div");
//   mainDiv.className = "main";

//   const foodCategory = () => {
//     const categoryArr = [
//       "House Special (特色菜)",
//       "All-Day Takeout (全日外賣)",
//       "Appetizers (餐前小食)",
//       "Soup (湯羹類)",
//       "Seafood (海鮮類)",
//       "Chicken & Duck & Frog (雞鴨田雞類)",
//       "Beef & Lamb (牛羊類)",
//       "Pork (豬肉類)",
//       "Clay Pot (煲仔類)",
//       "Mu Shu (木須類)",
//       "Lettuce Wraps (生菜包)",
//       "Vegetables (健康素菜類)",
//       "Chow Mein & Fun (粉麵類)",
//       "Fried Rice (炒飯類)",
//       "Congee (粥類)",
//       "Crab (蟹)",
//       "Lobster (龍蝦)",
//       "Rice Plates & Soup (午餐碟飯送例湯)",
//     ];

//     const optionsDiv = document.createElement("div");
//     const table = document.createElement("table");
//     const categoryTableRow = document.createElement("tr");
//     const categoryTableCell = document.createElement("td");
//     const rowFragments = new DocumentFragment();
//     categoryArr.forEach((categoryName) => {
//       const rowClone = categoryTableRow.cloneNode(true);
//       const cellClone = categoryTableCell.cloneNode(true);
//       cellClone.innerText = categoryName;
//       cellClone.classList.add("btn");
//       cellClone.classList.add("option");
//       cellClone.setAttribute("data-toggle", "modal");
//       cellClone.setAttribute("data-target", "#modalLong");
//       rowClone.appendChild(cellClone);
//       rowFragments.appendChild(rowClone);
//     });

//     table.appendChild(rowFragments);
//     optionsDiv.appendChild(table);
//     optionsDiv.className = "options";

//     return optionsDiv;
//   };

//   mainDiv.appendChild(foodCategory());
//   mainContentFragment.appendChild(mainDiv);

//   return mainContentFragment;
// };

// const mainTag = () => {
//   return document.querySelector(".main");
// };

// export default { mainFragment, mainTag };

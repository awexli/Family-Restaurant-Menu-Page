const main = () => {
    const mainDiv = document.createElement("div");
    mainDiv.className = "main";

    const foodCategory = () => {
        const categoryArr = [
            "House Special",
            "Chow Mein & Fun",
            "Fried Rice",
            "Congee",
            "Hot Pot",
            "Lettuce Wraps",
            "Vegetables",
            "Seafood",
            "Crab & Lobster",
            "Chicken & Duck & Frog",
            "Pork",
            "Mu Shu",
            "Appetizers",
            "Soup",
            "Beef & Lamb"
        ]

        const table = document.createElement("table");
        const categoryTableRow = document.createElement("tr");
        const categoryTableCell = document.createElement("td");
        const rowFragments = new DocumentFragment();
        
        categoryTableCell.innerText = categoryArr[0];
        categoryTableCell.className = "open-menu";

        categoryArr.forEach(cat => {
            const rowClone = categoryTableRow.cloneNode(true);
            const cellClone = categoryTableCell.cloneNode(true);
            cellClone.innerText = cat;
            rowClone.appendChild(cellClone);
            rowFragments.appendChild(rowClone);
        })

        table.appendChild(rowFragments);

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";
        optionsDiv.appendChild(table);

        return optionsDiv;
    }
    

    const googleMapDiv = document.createElement("div");
    googleMapDiv.className = "google-map";

    const googleFrame = document.createElement("iframe");
    googleFrame.className = "map";
    googleFrame.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5306.261142299606!2d-122.48895765621603!3d37.7402878074469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xde21cc529fccf39d!2sZhong%20Shan%20Hakka%20Restaurant!5e0!3m2!1sen!2sus!4v1583040029690!5m2!1sen!2sus";

    googleMapDiv.appendChild(googleFrame);

    mainDiv.appendChild(foodCategory());
    //mainDiv.appendChild(googleMapDiv);

    const mainContentFragment = new DocumentFragment();
    mainContentFragment.appendChild(mainDiv);

    return mainContentFragment;
}

export default main;
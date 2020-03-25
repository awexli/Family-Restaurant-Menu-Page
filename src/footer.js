const footerFragment = () => {
    const footerDiv = document.createElement("div");
    footerDiv.className = "footer";

    const infoDiv = document.createElement("div");
    infoDiv.className = "info";

    const sectionAddress = document.createElement("section");
    const sectionContact = document.createElement("section");
    const sectionHours = document.createElement("section");

    sectionAddress.className = "address";
    sectionAddress.innerText = "Address: 2237 Taraval St, San Francisco, CA 94116"

    sectionContact.className = "contact";
    sectionContact.innerText = "Phone: (415) 592-8938"

    sectionHours.className = "hours";
    sectionHours.innerText = "Hours: 11AM - 3PM, 5-9:30PM (THURSDAYS CLOSED)"

    const sectionFrag = document.createDocumentFragment();
    sectionFrag.appendChild(sectionAddress);
    sectionFrag.appendChild(sectionContact);
    sectionFrag.appendChild(sectionHours);

    infoDiv.appendChild(sectionFrag);
    footerDiv.appendChild(infoDiv);

    const footerFrag = document.createDocumentFragment();
    footerFrag.appendChild(footerDiv);

    return footerFrag;
}

const footerTag = () => {
    return document.querySelector(".footer");
}

export default { footerFragment, footerTag };
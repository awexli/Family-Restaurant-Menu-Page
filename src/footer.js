const footerFragment = () => {
  const footerDiv = document.createElement("div");
  const infoDiv = document.createElement("div");
  const sectionAddress = document.createElement("section");
  const addressLink = document.createElement("a");
  const sectionContact = document.createElement("section");
  const contactLink = document.createElement("a");
  const sectionHours = document.createElement("section");
  const sectionFrag = document.createDocumentFragment();
  const footerFrag = document.createDocumentFragment();

  footerDiv.className = "footer";
  infoDiv.className = "info";

  /** Address */
  sectionAddress.className = "address";
  addressLink.innerText =
    "2237 Taraval St , San Francisco, CA 94116 \n Sunset District (Between 32nd and 33rd)";
  addressLink.href =
    "https://www.google.com/maps/place/Zhong+Shan+Hakka+Restaurant/@37.7422557,-122.4903221,15z/data=!4m5!3m4!1s0x0:0xde21cc529fccf39d!8m2!3d37.7422557!4d-122.4903221";
  addressLink.target = "_blank";
  sectionAddress.appendChild(addressLink);
  /** End Address */

  /** Contact */
  sectionContact.className = "contact";
  contactLink.innerText = "CALL: (415) 592-8938";
  contactLink.href = "tel:4155928938";
  sectionContact.appendChild(contactLink);
  /** End Contact */

  sectionHours.className = "hours";
  sectionHours.innerText = "11AM - 3PM \n 5-9:30PM \n (THURSDAYS CLOSED)";

  sectionFrag.appendChild(sectionAddress);
  sectionFrag.appendChild(sectionContact);
  sectionFrag.appendChild(sectionHours);

  infoDiv.appendChild(sectionFrag);
  footerDiv.appendChild(infoDiv);
  footerFrag.appendChild(footerDiv);
  return footerFrag;
};

const footerTag = () => {
  return document.querySelector(".footer");
};

export default { footerFragment, footerTag };

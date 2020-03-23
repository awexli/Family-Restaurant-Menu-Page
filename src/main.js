const main = () => {
    const mainDiv = document.createElement("div");
    mainDiv.className = "main";

    const mainPicDiv = document.createElement("div");
    mainPicDiv.className = "main-pic";

    const imgContentDiv = document.createElement("div");
    imgContentDiv.className = "image-content";

    const mainImg = document.createElement("img");
    mainImg.className = "main-img";
    mainImg.src = "./img/crsl.jpg";

    imgContentDiv.appendChild(mainImg);
    mainPicDiv.appendChild(imgContentDiv);

    const googleMapDiv = document.createElement("div");
    googleMapDiv.className = "google-map";

    const googleFrame = document.createElement("iframe");
    googleFrame.className = "map";
    googleFrame.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5306.261142299606!2d-122.48895765621603!3d37.7402878074469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xde21cc529fccf39d!2sZhong%20Shan%20Hakka%20Restaurant!5e0!3m2!1sen!2sus!4v1583040029690!5m2!1sen!2sus";

    googleMapDiv.appendChild(googleFrame);

    mainDiv.appendChild(mainPicDiv);
    mainDiv.appendChild(googleMapDiv);

    const mainContentFragment = new DocumentFragment();
    mainContentFragment.appendChild(mainDiv);

    return mainContentFragment;
}

export default main;
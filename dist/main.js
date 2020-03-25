!function(e){var n={};function t(r){if(n[r])return n[r].exports;var c=n[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)t.d(r,c,function(n){return e[n]}.bind(null,c));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r=()=>{const e=document.createElement("h3");e.innerText="Zhong Shan Restaurant";const n=document.createElement("p");n.innerText="Hakka Cuisine";const t=new DocumentFragment;t.appendChild(e),t.appendChild(n);const r=document.createElement("div");r.className="nav-content",r.appendChild(t);const c=document.createElement("div");c.className="nav-bar",c.appendChild(r);const i=new DocumentFragment;return i.appendChild(c),i};var c=()=>{const e=document.createElement("div");e.className="main";const n=document.createElement("div");n.className="google-map";const t=document.createElement("iframe");t.className="map",t.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5306.261142299606!2d-122.48895765621603!3d37.7402878074469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xde21cc529fccf39d!2sZhong%20Shan%20Hakka%20Restaurant!5e0!3m2!1sen!2sus!4v1583040029690!5m2!1sen!2sus",n.appendChild(t),e.appendChild((()=>{const e=["House Special","Chow Mein & Fun","Fried Rice","Congee","Hot Pot","Lettuce Wraps & Vegetables","Seafood","Crab & Lobster","Chicken & Duck & Frog","Pork & Mu Shu","Appetizers","Soup","Beef & Lamb"],n=document.createElement("table"),t=document.createElement("tr"),r=document.createElement("td"),c=new DocumentFragment;r.innerText=e[0],r.className="open-menu",e.forEach(e=>{const n=t.cloneNode(!0),i=r.cloneNode(!0);i.innerText=e,n.appendChild(i),c.appendChild(n)}),n.appendChild(c);const i=document.createElement("div");return i.className="options",i.appendChild(n),i})());const r=new DocumentFragment;return r.appendChild(e),r};var i=()=>{const e=document.createElement("div");e.className="footer";const n=document.createElement("div");n.className="info";const t=document.createElement("section"),r=document.createElement("section"),c=document.createElement("section");t.className="address",t.innerText="Address: 2237 Taraval St, San Francisco, CA 94116",r.className="contact",r.innerText="Phone: (415) 592-8938",c.className="hours",c.innerText="Hours: 11AM - 3PM, 5-9:30PM (THURSDAYS CLOSED)";const i=document.createDocumentFragment();i.appendChild(t),i.appendChild(r),i.appendChild(c),n.appendChild(i),e.appendChild(n);const a=document.createDocumentFragment();return a.appendChild(e),a};var a=(()=>{const e=document.querySelector(".overlay-content"),n=document.createElement("table");n.className="cat-table";const t=new DocumentFragment,r=new DocumentFragment,c=c=>{if(n.hasChildNodes)for(;n.firstChild;)n.removeChild(n.lastChild);for(let e in c){const n=c[e];for(let e in n){const t=document.createElement("td");t.innerText=n[e],"chin"==e&&(t.className="chinese"),r.appendChild(t)}const i=document.createElement("tr");i.appendChild(r),t.appendChild(i)}n.appendChild(t),e.appendChild(n)};return{houseSpecial:()=>{c({r1:{num:"S1",chin:"客家鹽焗雞",eng:"Salt & Baked Chicken",price:"(半 Half) 14.95 (Whole) 28.00"},r2:{num:"S2",chin:"招牌華香雞（半）",eng:"House Special Steamed Chicken (Half)",price:"13.95"},r3:{num:"S3",chin:"豬肚撈雞（半）",eng:"Pork Belly with Chicken (Half)",price:"17.95"},r4:{num:"S4",chin:"惠州梅菜扣肉",eng:"Chinese Bacon w/ Presevered Green",price:"14.95"},r5:{num:"S5",chin:"客家煎釀滑豆腐",eng:"House Special Pan Fried Stuffed Tofu",price:"11.95"},r6:{num:"S6",chin:"客家煎釀三寶",eng:"Pan Fried Three Stuffed Treasures",price:"13.95"},r7:{num:"S7",chin:"客家黃酒薑炒雞",eng:"Stir Fry Chicken in Wine Sauce",price:"16.95"},r8:{num:"S8",chin:"胡椒支竹豬肚雞煲",eng:"Chicken, Pork Belly & Bean Curd with Pepper in Pot",price:"15.95"},r9:{num:"S9",chin:"客家炒大腸",eng:"Hakka Style Stir Fry Intestine",price:"12.95"},r10:{num:"S10",chin:"燒汁雜菌炒肥牛",eng:"Beef & Mixed Mushroom in Teriyaki Sauce",price:"13.95"},r11:{num:"S11",chin:"美極磨菇牛柳粒",eng:"Steak Cube & Mushroom in Maggie Sauce",price:"15.95"},r12:{num:"S12",chin:"家鄉小炒皇",eng:"House Special Stir Fry Mixed",price:"13.95"},r13:{num:"S13",chin:"椒鹽豬爽肉",eng:"Salt & Pepper Pork Neck",price:"11.95"},r14:{num:"S14",chin:"金沙鹹蛋黃炒蟹",eng:"Stir Fry Crab with Salted Egg",price:"Seasonal"},r15:{num:"S15",chin:"九層塔炒蜆",eng:"House Special Basil Clams",price:"15.95"},r16:{num:"S16",chin:"避風塘炒蜆",eng:"Hong Kong Style Spicy Clams",price:"15.95"},r17:{num:"S17",chin:"豉油皇老虎大蝦",eng:"Tiger Prawns with Soy Sauce (8)",price:"19.95"},r18:{num:"S18",chin:"西汁煎老虎大蝦",eng:"Tiger Prawns in Teriyaki Sauce (8)",price:"19.95"},r19:{num:"S19",chin:"家鄉雙味蒸塘虱",eng:"Cat Fish in Two Kind of Sauce (Whole)",price:"27.95"},r20:{num:"S20",chin:"川味朵椒蒸魚頭腩",eng:"Steamed Fish Head with Spicy Pepper",price:"13.95"},r21:{num:"S21",chin:"豉椒炒雙魷魚",eng:"Spicy Squid with Black Pepper Sauce",price:"(Half) 14.95 (Whole) 28.00"},r22:{num:"S22",chin:"薑蔥砂鍋魚頭",eng:"Fish Head with Ginger and Scallion in Pot",price:"13.95"},r23:{num:"S23",chin:"家鄉菜脯粒煎蠔餅",eng:"Pan Friend Oyster with Preserved Green",price:"13.95"},r24:{num:"S24",chin:"黑松露海鮮玉子豆腐",eng:"Black Truffle Seafood & Japanese Tofu",price:"13.95"},r25:{num:"S25",chin:"豉汁蒜子爆虎皮尖椒",eng:"Pan Seared Green Chilli Pepper in Black Pepper Sauce",price:"11.95"},r26:{num:"S26",chin:"豉汁涼瓜雞球",eng:"Chicken & Bitter Melon in Black Pepper Sauce",price:"11.95"},r27:{num:"S27",chin:"玉子豆腐拌金玉菇",eng:"Japanese Tofu with Baby Mushroom",price:"12.95"},r28:{num:"S28",chin:"椒鹽田雞鹹魚粒",eng:"Salt & Pepper Frog with Diced Salted Fish",price:"16.95"},r29:{num:"S29",chin:"紅燒乳鴿",eng:"Roasted Squab",price:"12.95"},r30:{num:"S30",chin:"客家特色（炆）綠鴨",eng:"Hakka Style Braised Duck (半 Half)",price:"16.95"},r31:{num:"S31",chin:"荷葉糯米鴨",eng:"Stuffed Duck in Lotus Leaf (Order in Advance)",price:"45.00"},r32:{num:"S32",chin:"脆皮糯米雞",eng:"Stuffed Chicken with Sticky Rice (Order in Advance)",price:"39.00"}})}}})();const o=document.getElementById("overlay-nav"),s=document.querySelector(".menu"),u=new DocumentFragment,l=[r(),c(),i()];for(let e of l)u.appendChild(e);document.querySelector(".wrapper").appendChild(u),document.addEventListener("click",e=>{let n=e.target.className;switch(e.target.innerText){case"House Special":o.style.height="100%",a.houseSpecial();break;case"Soup":s.src="./img/soup.png",o.style.height="100%";break;case"Beef & Lamb":s.src="./img/beef_lamb.png",o.style.height="100%";break;case"Appetizers":s.src="./img/appetizers.png",o.style.height="100%";break;case"Chicken & Duck & Frog":s.src="./img/chicken_duck_frog.png",o.style.height="100%";break;case"Pork & Mu Shu":s.src="./img/pork_mushu.png",o.style.height="100%";break;case"Seafood":s.src="./img/seafood.png",o.style.height="100%";break;case"Crab & Lobster":s.src="./img/crab_lobster.png",o.style.height="100%";break;case"Hot Pot":s.src="./img/hot_pot.png",o.style.height="100%";break;case"Lettuce Wraps & Vegetables":s.src="./img/lettucewraps_vegetables.png",o.style.height="100%";break;case"Chow Mein & Fun":s.src="./img/chowmein_fun.png",o.style.height="100%";break;case"Fried Rice":s.src="./img/fried_rice.png",o.style.height="100%";break;case"Congee":s.src="./img/congee.png",o.style.height="100%"}"overlay"!=n&&"overlay-content"!=n&&"close-menu"!=n||(o.style.height="0%")})}]);
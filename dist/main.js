!function(e){var n={};function r(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,n,c){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(c,t,function(n){return e[n]}.bind(null,t));return c},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n,r){"use strict";r.r(n);var c=()=>{const e=document.createElement("h3");e.innerText="Zhong Shan Restaurant";const n=document.createElement("p");n.innerText="Hakka Cuisine";const r=new DocumentFragment;r.appendChild(e),r.appendChild(n);const c=document.createElement("div");c.className="nav-content",c.appendChild(r);const t=document.createElement("div");t.className="nav-bar",t.appendChild(c);const i=new DocumentFragment;return i.appendChild(t),i};var t=()=>{const e=document.createElement("div");e.className="main";const n=document.createElement("div");n.className="google-map";const r=document.createElement("iframe");r.className="map",r.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5306.261142299606!2d-122.48895765621603!3d37.7402878074469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xde21cc529fccf39d!2sZhong%20Shan%20Hakka%20Restaurant!5e0!3m2!1sen!2sus!4v1583040029690!5m2!1sen!2sus",n.appendChild(r),e.appendChild((()=>{const e=["House Special","Chow Mein & Fun","Fried Rice","Congee","Hot Pot","Lettuce Wraps & Vegetables","Seafood","Crab & Lobster","Chicken & Duck & Frog","Pork & Mu Shu","Appetizers","Soup","Beef & Lamb"],n=document.createElement("table"),r=document.createElement("tr"),c=document.createElement("td"),t=new DocumentFragment;c.innerText=e[0],c.className="open-menu",e.forEach(e=>{const n=r.cloneNode(!0),i=c.cloneNode(!0);i.innerText=e,n.appendChild(i),t.appendChild(n)}),n.appendChild(t);const i=document.createElement("div");return i.className="options",i.appendChild(n),i})());const c=new DocumentFragment;return c.appendChild(e),c};var i=()=>{const e=document.createElement("div");e.className="footer";const n=document.createElement("div");n.className="info";const r=document.createElement("section"),c=document.createElement("section"),t=document.createElement("section");r.className="address",r.innerText="Address: 2237 Taraval St, San Francisco, CA 94116",c.className="contact",c.innerText="Phone: (415) 592-8938",t.className="hours",t.innerText="Hours: 11AM - 3PM, 5-9:30PM (THURSDAYS CLOSED)";const i=document.createDocumentFragment();i.appendChild(r),i.appendChild(c),i.appendChild(t),n.appendChild(i),e.appendChild(n);const a=document.createDocumentFragment();return a.appendChild(e),a};var a=(()=>{const e=document.querySelector(".overlay-content"),n=document.createElement("table");n.className="cat-table";const r=new DocumentFragment,c=new DocumentFragment,t=t=>{if(n.hasChildNodes)for(;n.firstChild;)n.removeChild(n.lastChild);for(let e in t){const n=t[e];for(let e in n){const r=document.createElement("td");r.innerText=n[e],"chin"==e&&(r.className="chinese"),c.appendChild(r)}const i=document.createElement("tr");i.appendChild(c),r.appendChild(i)}n.appendChild(r),e.appendChild(n)},i=e=>{const n=[];e=e.split("\n");for(let r of e)n.push(r.trim());return n};return{houseSpecial:()=>{t({r1:{num:"S1",chin:"客家鹽焗雞",eng:"Salt & Baked Chicken",price:"(半 Half) 14.95 (Whole) 28.00"},r2:{num:"S2",chin:"招牌華香雞（半）",eng:"House Special Steamed Chicken (Half)",price:"13.95"},r3:{num:"S3",chin:"豬肚撈雞（半）",eng:"Pork Belly with Chicken (Half)",price:"17.95"},r4:{num:"S4",chin:"惠州梅菜扣肉",eng:"Chinese Bacon w/ Presevered Green",price:"14.95"},r5:{num:"S5",chin:"客家煎釀滑豆腐",eng:"House Special Pan Fried Stuffed Tofu",price:"11.95"},r6:{num:"S6",chin:"客家煎釀三寶",eng:"Pan Fried Three Stuffed Treasures",price:"13.95"},r7:{num:"S7",chin:"客家黃酒薑炒雞",eng:"Stir Fry Chicken in Wine Sauce",price:"16.95"},r8:{num:"S8",chin:"胡椒支竹豬肚雞煲",eng:"Chicken, Pork Belly & Bean Curd with Pepper in Pot",price:"15.95"},r9:{num:"S9",chin:"客家炒大腸",eng:"Hakka Style Stir Fry Intestine",price:"12.95"},r10:{num:"S10",chin:"燒汁雜菌炒肥牛",eng:"Beef & Mixed Mushroom in Teriyaki Sauce",price:"13.95"},r11:{num:"S11",chin:"美極磨菇牛柳粒",eng:"Steak Cube & Mushroom in Maggie Sauce",price:"15.95"},r12:{num:"S12",chin:"家鄉小炒皇",eng:"House Special Stir Fry Mixed",price:"13.95"},r13:{num:"S13",chin:"椒鹽豬爽肉",eng:"Salt & Pepper Pork Neck",price:"11.95"},r14:{num:"S14",chin:"金沙鹹蛋黃炒蟹",eng:"Stir Fry Crab with Salted Egg",price:"Seasonal"},r15:{num:"S15",chin:"九層塔炒蜆",eng:"House Special Basil Clams",price:"15.95"},r16:{num:"S16",chin:"避風塘炒蜆",eng:"Hong Kong Style Spicy Clams",price:"15.95"},r17:{num:"S17",chin:"豉油皇老虎大蝦",eng:"Tiger Prawns with Soy Sauce (8)",price:"19.95"},r18:{num:"S18",chin:"西汁煎老虎大蝦",eng:"Tiger Prawns in Teriyaki Sauce (8)",price:"19.95"},r19:{num:"S19",chin:"家鄉雙味蒸塘虱",eng:"Cat Fish in Two Kind of Sauce (Whole)",price:"27.95"},r20:{num:"S20",chin:"川味朵椒蒸魚頭腩",eng:"Steamed Fish Head with Spicy Pepper",price:"13.95"},r21:{num:"S21",chin:"豉椒炒雙魷魚",eng:"Spicy Squid with Black Pepper Sauce",price:"(Half) 14.95 (Whole) 28.00"},r22:{num:"S22",chin:"薑蔥砂鍋魚頭",eng:"Fish Head with Ginger and Scallion in Pot",price:"13.95"},r23:{num:"S23",chin:"家鄉菜脯粒煎蠔餅",eng:"Pan Friend Oyster with Preserved Green",price:"13.95"},r24:{num:"S24",chin:"黑松露海鮮玉子豆腐",eng:"Black Truffle Seafood & Japanese Tofu",price:"13.95"},r25:{num:"S25",chin:"豉汁蒜子爆虎皮尖椒",eng:"Pan Seared Green Chilli Pepper in Black Pepper Sauce",price:"11.95"},r26:{num:"S26",chin:"豉汁涼瓜雞球",eng:"Chicken & Bitter Melon in Black Pepper Sauce",price:"11.95"},r27:{num:"S27",chin:"玉子豆腐拌金玉菇",eng:"Japanese Tofu with Baby Mushroom",price:"12.95"},r28:{num:"S28",chin:"椒鹽田雞鹹魚粒",eng:"Salt & Pepper Frog with Diced Salted Fish",price:"16.95"},r29:{num:"S29",chin:"紅燒乳鴿",eng:"Roasted Squab",price:"12.95"},r30:{num:"S30",chin:"客家特色（炆）綠鴨",eng:"Hakka Style Braised Duck (半 Half)",price:"16.95"},r31:{num:"S31",chin:"荷葉糯米鴨",eng:"Stuffed Duck in Lotus Leaf (Order in Advance)",price:"45.00"},r32:{num:"S32",chin:"脆皮糯米雞",eng:"Stuffed Chicken with Sticky Rice (Order in Advance)",price:"39.00"}})},chowMeinFun:()=>{const e=i("家鄉炒米\n        星州炒米\n        泰式炒米\n        韭皇干炒牛/雞河\n        涼瓜雞乾炒河粉\n        星馬炒貴刁\n        豉椒牛/雞濕炒河\n        海鮮XO醬濕炒河\n        蒜茸牛油蝦炒粗麵\n        沙爹牛粒濕炒河粉\n        雞/牛/叉燒炒粗麵\n        招牌海鮮炒粗麵\n        九層塔海鮮炆伊麵\n        咖喱牛粒炆伊麵\n        韭皇干燒伊麵\n        瑤柱金玉菇炆伊麵\n        豉油皇炒細麵"),n={r1:{num:"K1",chin:"客家鹽焗雞",eng:"Salt & Baked Chicken",price:"(半 Half) 14.95 (Whole) 28.00"},r2:{num:"K2",chin:"招牌華香雞（半）",eng:"House Special Steamed Chicken (Half)",price:"13.95"},r3:{num:"K3",chin:"豬肚撈雞（半）",eng:"Pork Belly with Chicken (Half)",price:"17.95"},r4:{num:"K4",chin:"惠州梅菜扣肉",eng:"Chinese Bacon w/ Presevered Green",price:"14.95"},r5:{num:"K5",chin:"客家煎釀滑豆腐",eng:"House Special Pan Fried Stuffed Tofu",price:"11.95"},r6:{num:"K6",chin:"客家煎釀三寶",eng:"Pan Fried Three Stuffed Treasures",price:"13.95"},r7:{num:"K7",chin:"客家黃酒薑炒雞",eng:"Stir Fry Chicken in Wine Sauce",price:"16.95"},r8:{num:"K8",chin:"胡椒支竹豬肚雞煲",eng:"Chicken, Pork Belly & Bean Curd with Pepper in Pot",price:"15.95"},r9:{num:"K9",chin:"客家炒大腸",eng:"Hakka Style Stir Fry Intestine",price:"12.95"},r10:{num:"K10",chin:"燒汁雜菌炒肥牛",eng:"Beef & Mixed Mushroom in Teriyaki Sauce",price:"13.95"},r11:{num:"K11",chin:"美極磨菇牛柳粒",eng:"Steak Cube & Mushroom in Maggie Sauce",price:"15.95"},r12:{num:"K12",chin:"家鄉小炒皇",eng:"House Special Stir Fry Mixed",price:"13.95"},r13:{num:"K13",chin:"椒鹽豬爽肉",eng:"Salt & Pepper Pork Neck",price:"11.95"},r14:{num:"K14",chin:"金沙鹹蛋黃炒蟹",eng:"Stir Fry Crab with Salted Egg",price:"Seasonal"},r15:{num:"K15",chin:"九層塔炒蜆",eng:"House Special Basil Clams",price:"15.95"},r16:{num:"K16",chin:"避風塘炒蜆",eng:"Hong Kong Style Spicy Clams",price:"15.95"},r17:{num:"K17",chin:"豉油皇老虎大蝦",eng:"Tiger Prawns with Soy Sauce (8)",price:"19.95"}};for(let r=0;r<e.length;r++)n[`r${r+1}`].chin=e[r];t(n)}}})();const o=document.getElementById("overlay-nav"),u=document.querySelector(".menu"),s=document.querySelector(".wrapper"),l=new DocumentFragment,p=[c(),t(),i()];for(let e of p)l.appendChild(e);document.querySelector(".wrapper").appendChild(l);let h=s;document.addEventListener("click",e=>{let n=e.target.className;switch(console.log(e.target),e.target.innerText){case"House Special":o.style.height="100%",a.houseSpecial(),s.remove();break;case"Soup":u.src="./img/soup.png",o.style.height="100%";break;case"Beef & Lamb":u.src="./img/beef_lamb.png",o.style.height="100%";break;case"Appetizers":u.src="./img/appetizers.png",o.style.height="100%";break;case"Chicken & Duck & Frog":u.src="./img/chicken_duck_frog.png",o.style.height="100%";break;case"Pork & Mu Shu":u.src="./img/pork_mushu.png",o.style.height="100%";break;case"Seafood":u.src="./img/seafood.png",o.style.height="100%";break;case"Crab & Lobster":u.src="./img/crab_lobster.png",o.style.height="100%";break;case"Hot Pot":u.src="./img/hot_pot.png",o.style.height="100%";break;case"Lettuce Wraps & Vegetables":u.src="./img/lettucewraps_vegetables.png",o.style.height="100%";break;case"Chow Mein & Fun":o.style.height="100%",a.chowMeinFun(),s.remove(),s.style.height="0%";break;case"Fried Rice":u.src="./img/fried_rice.png",o.style.height="100%";break;case"Congee":u.src="./img/congee.png",o.style.height="100%"}"overlay"!=n&&"overlay-content"!=n&&"back"!=n||(o.style.height="0%",document.body.appendChild(h))})}]);
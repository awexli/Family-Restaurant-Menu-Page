!function(e){var n={};function r(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,i){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(i,o,function(n){return e[n]}.bind(null,o));return i},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=2)}([,function(e,n,r){},function(e,n,r){"use strict";r.r(n);var i=(()=>{const e=new DocumentFragment,n=new DocumentFragment,r=document.querySelector(".modal-body"),i=document.querySelector(".modal-title"),o=document.createElement("table");o.className="cat-table";return{populateTable:(a,t)=>{if(o.hasChildNodes)for(;o.firstChild;)o.removeChild(o.lastChild);for(let r in a){const i=a[r];let o="",t="";for(let e in i){const r=document.createElement("td"),a=i[e];switch(r.innerText=a,e){case"chin":o=r.innerText;break;case"eng":t=r.innerText;break;case"price":let e=r.innerText;null==a?r.innerText=`${o} \n\n ${t}`:("Seasonal"!=e&&(e=`$${e}`),r.innerText=`${o} \n\n ${t} \n\n ${e}`),r.className="description";default:n.appendChild(r)}}const l=document.createElement("tr");l.appendChild(n),e.appendChild(l)}o.appendChild(e),r.appendChild(o),i.innerText=t},populateObject:(e,n,r="")=>{const i={};let o;for(let a=0;a<e;a++)o=n[a].split(","),i[`r${a+1}`]={num:`${r}${a+1}`,chin:o[0],eng:o[1],price:o[2]};return i},cleanLiteral:e=>{const n=[],r=e.split("\n");for(let e of r)n.push(e.trim());return n}}})();var o=e=>{i.populateTable(e.data,e.name)};var a=(()=>{const e=()=>{const e=i.cleanLiteral("客家鹽焗雞,Salt & Baked Chicken,14.95(半 Half) $28.00(Whole) \n    招牌華香雞（半）,House Special Steamed Chicken (Half),13.95\n    豬肚撈雞（半）,Pork Stomach w/ Chicken (Half),17.95\n    惠州梅菜扣肉,Chinese Bacon w/ Presevered Green,14.95\n    客家煎釀滑豆腐,House Special Pan Fried Stuffed Tofu,12.95\n    客家黃酒薑炒雞,Stir Fry Chicken w/ Ginger in Wine Sauce,16.95\n    胡椒支竹豬肚雞煲,Chicken - Pork Stomach & Bean Curd w/ Pepper in Pot,15.95\n    客家炒大腸,Hakka Style Stir Fry Intestine,12.95\n    燒汁雜菌炒肥牛,Beef & Mixed Mushroom in Teriyaki Sauce,13.95\n    美極磨菇牛柳粒,Steak Cube & Mushroom in Maggie Sauce,15.95\n    家鄉小炒皇,House Special Stir Fry Mixed,13.95\n    椒鹽豬爽肉,Salt & Pepper Pork Neck,11.95\n    金沙鹹蛋黃炒蟹,Stir Fry Crab w/ Salted Egg,Seasonal\n    九層塔炒蜆,House Special Basil Clams,16.95\n    避風塘炒蜆,Hong Kong Style Spicy Clams,16.95\n    豉油皇老虎大蝦,Tiger Prawns w/ Soy Sauce (8),20.95\n    西汁煎老虎大蝦,Tiger Prawns in Teriyaki Sauce (8),20.95\n    家鄉雙味蒸塘虱,Cat Fish in Two Kind of Sauce (Whole),28.95\n    川味朵椒蒸魚頭腩,Steamed Fish Head w/ Spicy Pepper,13.95\n    豉椒炒雙魷魚,Spicy Squid w/ Black Pepper Sauce,12.95\n    薑蔥砂鍋魚頭,Fish Head w/ Ginger and Scallion in Pot,13.95\n    家鄉菜脯粒煎蠔餅,Pan Friend Oyster w/ Preserved Green,13.95\n    黑松露海鮮玉子豆腐,Black Truffle Seafood & Japanese Tofu,13.95\n    豉汁涼瓜雞球,Chicken & Bitter Melon in Black Pepper Sauce,11.95\n    玉子豆腐拌金玉菇,Japanese Tofu w/ Baby Mushroom,12.95\n    椒鹽田雞鹹魚粒,Salt & Pepper Frog w/ Diced Salted Fish,16.95\n    紅燒乳鴿,Roasted Squab,12.95\n    客家特色（炆）綠鴨,Hakka Style Braised Duck (半 Half),16.95\n    荷葉糯米鴨,Stuffed Duck in Lotus Leaf (Order in Advance),48.00\n    脆皮糯米雞,Stuffed Chicken w/ Sticky Rice (Order in Advance),39.00");return i.populateObject(e.length,e,"S")},n=()=>{const e=i.cleanLiteral("炸春卷,Egg Rolls (4),5.95\n    窩貼,Pot Stickers (6), 6.95\n    脆皮炸蝦,Deep Fried Prawns (8),10.95\n    椒鹽生蠔,Salted & Pepper Oysters,11.95\n    招牌手撕雞,House Special Shredded Chicken Salad (Half),16.95\n    椒鹽雞翼,Salt & Pepper Chicken Wings,9.95\n    金沙鹹蛋黃南瓜,Pumpkin Strip w/ Salted Eggs,9.95\n    椒鹽魷魚,Salt & Pepper Squids,11.95");return i.populateObject(e.length,e,"A")},r=()=>{const e=i.cleanLiteral("瑤柱海皇豆腐羹,Dry Scallop w/ Seafood and Tofu Soup,12.95\n    海鮮南瓜茸羹,Seafood and Pumpkin Soup,12.95\n    西湖牛肉豆腐羹,Minced Beef and Tofu Soup,10.95\n    雞茸粟米羹,Chicken w/ Sweet Corn Soup,10.95\n    雞絲魚肚羹,Chicken w/ Fish Maw Soup,12.95\n    酸辣湯,Hot & Sour Soup,10.95\n    酸辣雲吞湯,Hot & Sour Won Ton Soup,10.95\n    菜雞雲吞湯,Chicken & Vegetable Won Ton Soup,10.95\n    招牌雲吞湯,House Special Won Ton Soup,12.95\n    客家薑炒雞酒湯,House Special Cooked Chicken & Wine Soup,16.95\n    雞菜雜湯,Mixed Vegetable w/ Chicken Soup,10.95\n    客家布袋雞湯（原隻豬肚包雞）,House Special Steamed Pork Stomach w/ Chicken Soup (Order in Advance),59.00");return i.populateObject(e.length,e,"B")},o=()=>{const e=i.cleanLiteral("麻辣豉椒炒規,Hot & Spicy Clams,16.95\n    上湯花雕浸醉蜆,Wine Clams in Supreme Broth,16.95\n    X0醬泡魚片,Fish Fillet in X.O. Sauce,13.95\n    九層塔炒魚片,Basil Fish Fillet,13.95\n    碧綠合桃蝦,Walnut Prawns w/ Vegtable,14.95\n    黑松露炒花枝蝦球,Black Truffle w/ Squids & Prawns,15.95\n    雜菌雲耳炒蝦球,Prawns w/ Mixed Mushroom & Fungus,13.95\n    沙茶花枝雞片,Chicken & Squid in Satay Sauce,13.95\n    椒鹽魚片,Salt & Pepper Fish Fillet,13.95\n    宮保蝦球,Kung Pao Chicken,13.95\n    粟米斑塊,Fillet Fish w/ Corn,13.95\n    薑蔥#生蠔,Baked Oysters w/ Ginger & Scallion,16.95\n    豉椒焗生蠔,Baked Oyster w/ Spicy Pepper Sauce,16.95\n    雙色蒸水蛋,Steamed Two Kind of Egg,11.95");return i.populateObject(e.length,e,"C")},a=()=>{const e=i.cleanLiteral("鹹蛋黃南瓜田雞,Frog & Pumpkin Fried w/ Salted Egg Yolk,16.95\n    九層塔田雞,House Special Basil Frog,16.95\n    鹹魚粒椒鹽田雞,Salt & Pepper Frog w/ Diced Salted Fish,16.95\n    X0醬雜菌炒田雞,Stir Fry Frog & Mixed Mushroom w/ X.O. Sauce,16.95\n    黑松露油泡田雞,Black Truffle Frog,17.95\n    豉汁涼瓜炒田雞,Frog & Bitter Melon w/ Black Bean Sauce,16.95\n    宮保雞,Kong Pow Chicken,11.95\n    檸檬雞,Lemon Chicken,11.95\n    左宗雞,General Chicken,11.95\n    咕嚕雞,Sweet & Sour Chicken,11.95\n    豉汁四季豆雞,String Bean Chicken w/ Black Bean Sauce,11.95\n    雜菜冬菇雞,Chicken w/ Mixed Vegetable & Mushroom,11.95\n    幹烹雞翼, Chicken Wing (8),11.95");return i.populateObject(e.length,e,"D")},t=()=>{const e=i.cleanLiteral("欖菜芥蘭炒牛肉,Chinese Broccoli w/ Olive,13.95\n    西蘭白菜炒牛肉,Beef w/ Broccoli & Bok Choy,13.95\n    雜菌菇炒牛肉,Beef w/ Mixed Mushroom,13.95\n    蒙古牛肉/雞肉,Mongolian Beef or Chicken,13.95\n    美極磨菇牛柳,Steak & Mushroom w/ Maggie Sauce,15.95\n    沙茶牛肉炒四季豆,Beef & String Bean w/ Satay Sauce,13.95\n    黑椒雜菌炒牛柳,Steak & Mixed Mushroom w/ Black Pepper Sauce,15.95\n    X0醬珍菌炒羊肉,Lamb & Mixed Mushrooms w/ X.0. Sauce,16.95\n    薑蔥大蒜炒羊肉,Lamb w/ Ginger & Scallion,16.95\n    虎皮尖椒爆羊肉,Lamb w/ Hot Pepper,16.95");return i.populateObject(e.length,e,"E")},l=()=>{const e=i.cleanLiteral("避風塘大腸,Intestine Fried w/ Garlic & Hot Pepper,13.95\n    X0醬豆仔炒豬肚,Pork Stomach & String Beans w/ X.O. Sauce,13.95\n    鹹魚蒸肉餅,Steamed Pork w/ Salted Fish,11.95\n    京都肉排,Peking Spareribs,11.95\n    糖醋咕嚕肉,Sweet & Sour Pork,11.95\n    臘腸冬菜蒸肉餅,Steamed Pork w/ Chinese Sausage & Preserved Green,11.95\n    肉崧麻婆豆腐,Ma Pao Tofu w/ Preserved Green,11.95\n    鹹酸菜炒肉絲,Shredded Pork w/ Preserved Green,11.95\n    嬌頭生炒骨,Shallot Spareribs,11.95\n    椒鹽豆仔排骨,Salt & Papper Spareribs w/ String Beans,11.95\n    X0醬肉崧四季豆,Minced Pork & String Bean w/ X.O. Sauce,11.95\n    什菌肉片,Pork w/ Mixed Mushroom,12.95\n    虎皮尖椒炒豬肚,Pork Stomach w/ Spicy Pepper,13.95\n    鹹酸菜炒豬肚,Pork Stomach w/ Preserved Green,13.95");return i.populateObject(e.length,e,"F")},c=()=>{const e=i.cleanLiteral("栗子雜菌雞煲,Chicken w/ Chestnut & Mixed Mushroom in Clay Pot,13.95\n    啫啫乾蔥豆豉雞煲,Chicken in Bone w/ Black Bean Sauce in Clay Pot,13.95\n    招牌涼瓜塘虱煲,Cat Fish & Bitter Melon in Clay Pot,15.95\n    大蒜薑蔥魚頭腩煲,Fish Head w/ Garlic - Ginger & Scallion,13.95\n    家鄉支竹羊腩煲,Lamb w/ Bean Curd in Clay Pot,17.95\n    大千海鮮豆腐煲,Spicy Seafood & Tofu in Clay Pot,12.95\n    紅燒豆腐斑腩煲,Braised Fried Tofu & Fish Fillet in Clay Pot,12.95\n    柱候牛腩煲,Beef Stew in Clay Pot,13.95\n    沙茶雞粒茄子煲,Satay Chicken Diced w/ Eggplant,12.95\n    咸魚雞粒豆腐煲,Salted Fish & Chicken in Clay Pot,12.95\n    節瓜肉崧粉絲煲,Chinese Melon - Minced Pork & Vermicelli in Clay Pot,11.95\n    客家五更長旺煲,Pork Intestines & Tofu in Chili Sauce,12.95");return i.populateObject(e.length,e,"G")},u=()=>{const e=i.cleanLiteral("木須肉, Mu Shu Pork,12.95\n    木須雞, Mu Shu Chicken,12.95\n    木須菜, Mu Shu Vegetable,12.95\n    木須蝦, Mu Shu Shrimp,12.95");return i.populateObject(e.length,e,"H")},S=()=>{const e=i.cleanLiteral("豬肉生菜包,Minced Pork w/ Lettuce Wraps,12.95\n    雞肉生菜包,Minced Chicken w/ Lettuce Wraps,12.95\n    海鮮生菜包,Minced Seafood w/ Lettuce Wraps,13.95\n    素菜生菜包,Minced Vegetable w/ Lettuce Wraps,12.95");return i.populateObject(e.length,e,"I")},d=()=>{const e=i.cleanLiteral("蒜茸冬菜蒸茄子,Steamed Eggplant w/ Garlic & Preserved Green,11.95\n    雜菌雲耳炒碧綠,Sauteed Mixed Mushroom & Fungus w/ Vegetable,11.95\n    椒鹽茄子豆腐粒,Salt & Pepper Eggplant & Fried Tofu Cube,10.95\n    欖菜肉崧四季豆,Minced Pork & String Beans w/ Olive,11.95\n    腐皮白果上湯豆苗,Bean Sprout w/ Bean Curd Sheet & Ginkgo in Broth,15.95\n    上湯皮蛋浸茶菜,Mustard Green & Preserved Eggs in Broth,11.95\n    鹹豬骨上湯芥菜,Mustard Green in Salted Bone Broth,11.95\n    九層塔茄子,House Special Basil Eggplant,11.95\n    川味魚香茄子,Spicy Eggplant,11.95\n    糖酒/蠔油炒芥蘭,Sauteed Chinese Broccoli w/ Rice Wine or Oyster Sauce,10.95\n    油鹽炒白莱,Sauteed Bok Choy,10.95\n    蒜茸四季豆,Sauteed Garlic String Beans,11.95\n    蒜茸炒豆苗,Sauteed Garlic Pea Sprouts,Seasonal\n    冬菇白菜,Bok Choy and Chinese Mushroom,11.95\n    紅燒冬菇豆腐,Braised Fried Tofu,10.95");return i.populateObject(e.length,e,"J")},s=()=>{const e=i.cleanLiteral("家鄉炒米,House Special Fried Rice Noodle,11.95\n    星州炒米,Singapore Style Fried Rice Noodle,11.95\n    泰式炒米,Thai Style Fried Rice Noodle,11.95\n    韭皇干炒牛/雞河,Beef/Chicken Dry Chow Fun w/ Yellow Chive,11.95\n    涼瓜雞乾炒河粉,Chicken & Bitter Melon Dry Chow Fun,11.95\n    星馬炒貴刁,Malaysia Style Curry Chow Fun,11.95\n    豉椒牛/雞濕炒河,Beef or Chicken Chow Fun in Black Bean Sauce,12.95\n    海鮮XO醬濕炒河,Seafood Chow Fun in X.O. Sauce,13.95\n    蒜茸牛油蝦炒粗麵,Garlic & Butter Shrimp Chow Mein,12.95\n    沙爹牛粒濕炒河粉,Beef Cube Chow Fun w/ Satay Sauce,12.95\n    雞/牛/叉燒炒粗麵,Chicken/Beef/BBQ Pork Chow Mein, 10.95\n    招牌海鮮炒粗麵,House Special Seafood Chow Mein,12.95\n    九層塔海鮮炆伊麵,House Special Basil Seafood E-Fu Noodle,11.95\n    咖喱牛粒炆伊麵,Curry Beef Cube E-Fu Noodle,11.95\n    韭皇干燒伊麵,Yellow Chive E-Fu Noodle,10.95\n    瑤柱金玉菇炆伊麵,Dried Scallop & Mushroom E-Fu Noodle,12.95\n    豉油皇炒細麵,Soy Sauce Fried Thin Chow Mein,10.95");return i.populateObject(e.length,e,"K")},p=()=>{const e=i.cleanLiteral("荷葉生炒糯米飯,Sticky Rice in Lotus Leaf,14.00\n    黑松露海鮮粒炒飯,Black Truffle Seafood Fried Rice,13.95\n    X0醬金雙蛋炒飯,Double Eggs Fried Rice w/ X.O. Sauce,13.95\n    瑤柱蛋白炒飯炒,Dried Scallop w/ Egg White Fried Rice,13.95\n    楊州炒飯,Yang Chow Fried Rice,12.95\n    雞/牛/又燒炒飯,Chicken/Beef/BBQ Pork Fried Rice,10.95\n    鹹魚雞粒炒飯,Chicken & Salted Fish Fried Rice,12.95\n    鹹酸菜雞粒炒飯,Preserved Green & Egg Fried Rice,10.95\n    菠蘿海鮮粒炒飯,Pinapple Shrimp Fried Rice,11.95\n    福建炒飯,Fukien Fried Rice,12.95\n    X0醬牛粒豆豉炒飯,Beef Cube w/ Black Bean Fried Rice in X.O. Sauce,11.95");return i.populateObject(e.length,e,"L")},h=()=>{const e=i.cleanLiteral("皮蛋粥肉瘦,Preserved Egg & Pork Congee,7.95\n    生滾魚片粥,Fish Fillet Congee,8.95\n    海鮮粥,Shrimp Congee,8.95\n    生滾牛肉粥,Beef Congee,7.95\n    瑤柱田雞粥,Frog w/ Dried Scallop Congee,9.95\n    貴妃蚌粥,Empress Clams Congee,10.95\n    砂鍋蟹/龍蝦粥,Crab or Lobster Congee,Seasonal\n    鹹豬骨白菜粥,Salted Pork Bone w/ Bok Choy Congee,8.95\n    黃毛雞粥,Free Range Chicken Congee,9.95\n    清淡白粥,Plain Congee,4.50\n    白飯,Steamed Rice,1.50");return i.populateObject(e.length,e,"M")},g=()=>{const e=i.cleanLiteral("四季豆雞球/牛肉飯,Chicken & String Bean in Black Bean Sauce over Rice,9.50\n    涼瓜雞球/牛肉/排骨飯,Bitter Melon Chicken/Beef/Spareribs over Rice,9.50\n    蒙古雞肉/牛肉飯,Mongolian Chicken or Beef over Rice,9.50\n    宮保雞飯,Kung Pao Chicken,9.50\n    干炒雞/牛河,Beef/Chicken Dry Chow Fun,9.50\n    蒜茸牛油雞炒粗麵,Chicken w/ Garlic & Butter over Thick Noodle,9.50\n    鹹酸菜大腸/豬肚飯,Pork Intestines/Stomach & Preserved Green over Rice,9.50\n    鹹酸菜肉絲豆腐飯,Shredded Pork - Tofu & Preserved Green over Rice,9.50\n    椒鹽豆仔豬爽肉/豬扒飯,Salt & Pepper String Bean & Pork Neck or Pork Chop,9.50\n    炸菜肉片飯,Pork & Preserved Vegetable over Rice,9.50\n    豉汁豆仔肉片飯,Pork & String Bean in Black Bean Sauce over Rice,9.50\n    豆腐排骨飯,Spareribs & Tofu over Rice,9.50\n    紅燒肉崧茄子飯,Braised Minced Pork & Eggplant over Rice,9.50\n    紅燒豆腐斑腩飯,Braised Fish Fillet w/ Fried Tofu over Rice,9.50\n    肉崧麻婆豆腐飯,Ma Pao Tofu w/ Minced Pork over Rice,9.50\n    XO醬肉崧四季豆飯,Minced Pork & String Bean over Rice,9.50\n    茄子牛崧/雞粒飯,Eggplant Beef / Chicken over Rice,9.50\n    蘿蔔牛腩飯,Beef Stew & Turnip over Rice,9.50\n    咖喱牛腩飯,Curry Beef Stew over Rice,9.50\n    牛腩湯麵/粉,Beef Stew over Noodle or Rice Noodle Soup,9.50\n    排骨湯麵/粉,Spareribs over Noodle or Rice Noodle Soup,9.50\n    家鄉炒米,House Special Pan Fried Rice Noodle,9.50");return i.populateObject(e.length,e)},k=()=>{const e=i.cleanLiteral("咸蛋黃,Salted Egg Yolk\n    避風塘,Fried w/ Garlic & Hot Pepper\n    椒鹽,Salt & Pepper\n    牛油胡椒,Butter & Pepper\n    蒜茸粉絲,Garlic & Vermicelli\n    大千粉絲,Spicy Garlic & Vermicelli\n    甘香涼瓜,Bitter Melon\n    鹹菜,Preserved Salted Vegetable\n    薑蔥,Ginger & Scallion\n    沙茶粉絲,Satay & Vermicelli");return i.populateObject(e.length,e)},C=()=>{const e=i.cleanLiteral("蒜茸粉絲,Garlic & Vermicelli\n    XO醬,X.O. Sauce\n    薑蔥,Ginger & Scallion\n    豉油皇,Soy Sauce\n    咸蛋黃,Salted Egg Yolk");return i.populateObject(e.length,e)},P=()=>{const e=i.cleanLiteral("蒙古雞肉/牛肉,Mongolian Chicken or Beef\n    沙茶花枝雞片,Satay Squid & Chicken\n    左宗棠雞,General's Chicken\n    宫保雞,Kung Pao Chicken\n    豉汁四季豆雞球,Chicken & String Bean in Black Bean Sauce\n    干炒雞/牛河粉,Chicken or Beef Dry Chow Fun\n    XO醬四季豆炒豬肚,Sauteed Pork Stomach & String Bean w/ X.O. Sauce\n    椒鹽豆仔肉排,Salt & Pepper Spareribs w/ String Beans\n    京都肉排,Peking Spareribs\n    咕嚕肉/雞,Sweet and Sour Pork/Chicken\n    喬頭生炒骨,Shallot Spareribs\n    臘腸冬菜/梅菜蒸肉餅,Steamed Minced Pork w/Chinese Sausage\n    肉崧麻婆豆腐,Ma Pao Tofu w/ Minced Pork\n    椒鹽四季豆豬爽肉,Salt & Pepper Pork Neck & String Beans\n    XO醬芹心炒魚片,Fish Fillet & Celery in X.0. Sauce\n    紅燒豆腐斑腩煲,Braised Fish Fillet w/ Fried Tofu\n    沙茶雞粒茄子煲,Satay Chicken & Eggplant in Pot\n    五更長旺煲,Pork Intestines & Tofu in Chili Sauce\n    鹹魚雞粒豆腐煲,Chicken & Salted Fish & Tofu in Pot\n    欖菜肉崧四季豆,Minced Pork & String Bean w/ Olive\n    上湯鹹豬骨浸芥菜,Mustard Green in Salted Pork Bone in Broth\n    雜菌雲耳炒碧綠,Sauteed Vegetable - Mixed Mushroom & Fungus\n    炸菜肉片,Pork & Preserved Vegetable\n    蒜茸四季豆,Sauteed String Beans\n    冬菇紅燒豆腐,Braised Fried Tofu & Mushroom\n    紅燒肉崧茄子,Braised Minced Pork & Eggplant\n    上湯皮蛋浸芥菜,Mustard Green & Preserved Eggs in Supreme Broth\n    蒜茸豉汁爆虎皮尖椒,Pan Seared Green Chilli Pepper in Garlic and Black Pepper Sauce\n    家鄉菜脯煎蛋,Pan Fried Egg w/ Preserved Green\n    雙色蒸滑蛋,Steamed Two Kind of Egg\n    脆塘海鮮滑豆腐,Steamed Seafood & Tofu\n    豉油皇炒細麵,Soy Sauce Fried Thin Noodle\n    家鄉炒米,House Special Pan Fried Rice Noodle\n    泰式炒米,Thai Style Fried Rice Noodle XO\n    醬金雙蛋炒飯,Double Eggs Fried Rice in XO Sauce");return i.populateObject(e.length,e)};return{getMenu:i=>{const w={"House Special (特色菜)":e(),"All-Day Takeout (全日外賣)":P(),"Appetizers (餐前小食)":n(),"Soup (湯羹類)":r(),"Seafood (海鮮類)":o(),"Chicken & Duck & Frog (雞鴨田雞類)":a(),"Beef & Lamb (牛羊類)":t(),"Pork (豬肉類)":l(),"Clay Pot (煲仔類)":c(),"Mu Shu (木須類)":u(),"Lettuce Wraps (生菜包)":S(),"Vegetables (健康素菜類)":d(),"Chow Mein & Fun (粉麵類)":s(),"Fried Rice (炒飯類)":p(),"Congee (粥類)":h(),"Crab (蟹)":k(),"Lobster (龍蝦)":C(),"Rice Plates & Soup (午餐碟飯送例湯)":g()}[i];return"Lobster (龍蝦)"==i&&(i+=" (Market Price)\n\nPlease decide on one of the following cooking methods\n(龍蝦有下列烹調方法可供選擇)"),"Crab (蟹)"==i&&(i+=" (Market Price)\n\nPlease decide on one of the following cooking methods\n(蟹有下列烹調方法可供選擇)"),"All-Day Takeout (全日外賣)"==i&&(i+=" (29.95)\n\nChoose Any 3 Items (任選以下三款小菜)"),{name:i,data:w}}}})();r(1);document.querySelector(".options").addEventListener("click",e=>{if("option"==e.target.classList[1]){(e=>{let n=a.getMenu(e);o(n)})(e.target.innerText)}})}]);
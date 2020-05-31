import util from "./category-utility";

const categoryModal = (() => {
  const getMenu = (menuName) => {
    const categoryObject = {
      "House Special (特色菜)": houseSpecial(),
      "All-Day Takeout (全日外賣)": takeaway(),
      "Appetizers (餐前小食)": appetizers(),
      "Soup (湯羹類)": soup(),
      "Seafood (海鮮類)": seafood(),
      "Chicken & Duck & Frog (雞鴨田雞類)": chickenDuckFrog(),
      "Beef & Lamb (牛羊類)": beefLamb(),
      "Pork (豬肉類)": pork(),
      "Clay Pot (煲仔類)": clayPot(),
      "Mu Shu (木須類)": mushu(),
      "Lettuce Wraps (生菜包)": lettuceWrap(),
      "Vegetables (健康素菜類)": vegetables(),
      "Chow Mein & Fun (粉麵類)": chowMeinFun(),
      "Fried Rice (炒飯類)": friedRice(),
      "Congee (粥類)": congee(),
      "Crab (蟹)": crab(),
      "Lobster (龍蝦)": lobster(),
      "Rice Plates & Soup (午餐碟飯送例湯)": ricePlates(),
    };
    const menuData = categoryObject[menuName];

    if (menuName == "Lobster (龍蝦)") {
      menuName +=
        " (Market Price)\n\nPlease decide on one of the following cooking methods\n(龍蝦有下列烹調方法可供選擇)";
    }

    if (menuName == "Crab (蟹)") {
      menuName +=
        " (Market Price)\n\nPlease decide on one of the following cooking methods\n(蟹有下列烹調方法可供選擇)";
    }

    if (menuName == "All-Day Takeout (全日外賣)") {
      menuName += " (29.95)\n\nChoose Any 3 Items (任選以下三款小菜)";
    }

    return {
      name: menuName,
      data: menuData,
    };
  };

  const houseSpecial = () => {
    const houseCSV = `客家鹽焗雞,Salt & Baked Chicken,14.95(半 Half) $28.00(Whole) 
    招牌華香雞（半）,House Special Steamed Chicken (Half),13.95
    豬肚撈雞（半）,Pork Stomach w/ Chicken (Half),17.95
    惠州梅菜扣肉,Chinese Bacon w/ Presevered Green,14.95
    客家煎釀滑豆腐,House Special Pan Fried Stuffed Tofu,12.95
    客家黃酒薑炒雞,Stir Fry Chicken w/ Ginger in Wine Sauce,16.95
    胡椒支竹豬肚雞煲,Chicken - Pork Stomach & Bean Curd w/ Pepper in Pot,15.95
    客家炒大腸,Hakka Style Stir Fry Intestine,12.95
    燒汁雜菌炒肥牛,Beef & Mixed Mushroom in Teriyaki Sauce,13.95
    美極磨菇牛柳粒,Steak Cube & Mushroom in Maggie Sauce,15.95
    家鄉小炒皇,House Special Stir Fry Mixed,13.95
    椒鹽豬爽肉,Salt & Pepper Pork Neck,11.95
    金沙鹹蛋黃炒蟹,Stir Fry Crab w/ Salted Egg,Seasonal
    九層塔炒蜆,House Special Basil Clams,16.95
    避風塘炒蜆,Hong Kong Style Spicy Clams,16.95
    豉油皇老虎大蝦,Tiger Prawns w/ Soy Sauce (8),20.95
    西汁煎老虎大蝦,Tiger Prawns in Teriyaki Sauce (8),20.95
    家鄉雙味蒸塘虱,Cat Fish in Two Kind of Sauce (Whole),28.95
    川味朵椒蒸魚頭腩,Steamed Fish Head w/ Spicy Pepper,13.95
    豉椒炒雙魷魚,Spicy Squid w/ Black Pepper Sauce,12.95
    薑蔥砂鍋魚頭,Fish Head w/ Ginger and Scallion in Pot,13.95
    家鄉菜脯粒煎蠔餅,Pan Friend Oyster w/ Preserved Green,13.95
    黑松露海鮮玉子豆腐,Black Truffle Seafood & Japanese Tofu,13.95
    豉汁涼瓜雞球,Chicken & Bitter Melon in Black Pepper Sauce,11.95
    玉子豆腐拌金玉菇,Japanese Tofu w/ Baby Mushroom,12.95
    椒鹽田雞鹹魚粒,Salt & Pepper Frog w/ Diced Salted Fish,16.95
    紅燒乳鴿,Roasted Squab,12.95
    客家特色（炆）綠鴨,Hakka Style Braised Duck (半 Half),16.95
    荷葉糯米鴨,Stuffed Duck in Lotus Leaf (Order in Advance),48.00
    脆皮糯米雞,Stuffed Chicken w/ Sticky Rice (Order in Advance),39.00`;

    const houseData = util.cleanLiteral(houseCSV);
    const houseObject = util.populateObject(houseData.length, houseData, "S");
    return houseObject;
  };

  const appetizers = () => {
    const appetizersCSV = `炸春卷,Egg Rolls (4),5.95
    窩貼,Pot Stickers (6), 6.95
    脆皮炸蝦,Deep Fried Prawns (8),10.95
    椒鹽生蠔,Salted & Pepper Oysters,11.95
    招牌手撕雞,House Special Shredded Chicken Salad (Half),16.95
    椒鹽雞翼,Salt & Pepper Chicken Wings,9.95
    金沙鹹蛋黃南瓜,Pumpkin Strip w/ Salted Eggs,9.95
    椒鹽魷魚,Salt & Pepper Squids,11.95`;
    const appetizersData = util.cleanLiteral(appetizersCSV);
    const appetizersObject = util.populateObject(
      appetizersData.length,
      appetizersData,
      "A"
    );
    return appetizersObject;
  };

  const soup = () => {
    const soupCSV = `瑤柱海皇豆腐羹,Dry Scallop w/ Seafood and Tofu Soup,12.95
    海鮮南瓜茸羹,Seafood and Pumpkin Soup,12.95
    西湖牛肉豆腐羹,Minced Beef and Tofu Soup,10.95
    雞茸粟米羹,Chicken w/ Sweet Corn Soup,10.95
    雞絲魚肚羹,Chicken w/ Fish Maw Soup,12.95
    酸辣湯,Hot & Sour Soup,10.95
    酸辣雲吞湯,Hot & Sour Won Ton Soup,10.95
    菜雞雲吞湯,Chicken & Vegetable Won Ton Soup,10.95
    招牌雲吞湯,House Special Won Ton Soup,12.95
    客家薑炒雞酒湯,House Special Cooked Chicken & Wine Soup,16.95
    雞菜雜湯,Mixed Vegetable w/ Chicken Soup,10.95
    客家布袋雞湯（原隻豬肚包雞）,House Special Steamed Pork Stomach w/ Chicken Soup (Order in Advance),59.00`;
    const soupData = util.cleanLiteral(soupCSV);
    const soupObject = util.populateObject(soupData.length, soupData, "B");
    return soupObject;
  };

  const seafood = () => {
    const seafoodCSV = `麻辣豉椒炒規,Hot & Spicy Clams,16.95
    上湯花雕浸醉蜆,Wine Clams in Supreme Broth,16.95
    X0醬泡魚片,Fish Fillet in X.O. Sauce,13.95
    九層塔炒魚片,Basil Fish Fillet,13.95
    碧綠合桃蝦,Walnut Prawns w/ Vegtable,14.95
    黑松露炒花枝蝦球,Black Truffle w/ Squids & Prawns,15.95
    雜菌雲耳炒蝦球,Prawns w/ Mixed Mushroom & Fungus,13.95
    沙茶花枝雞片,Chicken & Squid in Satay Sauce,13.95
    椒鹽魚片,Salt & Pepper Fish Fillet,13.95
    宮保蝦球,Kung Pao Chicken,13.95
    粟米斑塊,Fillet Fish w/ Corn,13.95
    薑蔥#生蠔,Baked Oysters w/ Ginger & Scallion,16.95
    豉椒焗生蠔,Baked Oyster w/ Spicy Pepper Sauce,16.95
    雙色蒸水蛋,Steamed Two Kind of Egg,11.95`;
    const seafoodData = util.cleanLiteral(seafoodCSV);
    const seafoodObject = util.populateObject(
      seafoodData.length,
      seafoodData,
      "C"
    );
    return seafoodObject;
  };

  const chickenDuckFrog = () => {
    const chickenDuckFrogCSV = `鹹蛋黃南瓜田雞,Frog & Pumpkin Fried w/ Salted Egg Yolk,16.95
    九層塔田雞,House Special Basil Frog,16.95
    鹹魚粒椒鹽田雞,Salt & Pepper Frog w/ Diced Salted Fish,16.95
    X0醬雜菌炒田雞,Stir Fry Frog & Mixed Mushroom w/ X.O. Sauce,16.95
    黑松露油泡田雞,Black Truffle Frog,17.95
    豉汁涼瓜炒田雞,Frog & Bitter Melon w/ Black Bean Sauce,16.95
    宮保雞,Kong Pow Chicken,11.95
    檸檬雞,Lemon Chicken,11.95
    左宗雞,General Chicken,11.95
    咕嚕雞,Sweet & Sour Chicken,11.95
    豉汁四季豆雞,String Bean Chicken w/ Black Bean Sauce,11.95
    雜菜冬菇雞,Chicken w/ Mixed Vegetable & Mushroom,11.95
    幹烹雞翼, Chicken Wing (8),11.95`;
    const chickenDuckFrogData = util.cleanLiteral(chickenDuckFrogCSV);
    const chickenDuckFrogObject = util.populateObject(
      chickenDuckFrogData.length,
      chickenDuckFrogData,
      "D"
    );

    return chickenDuckFrogObject;
  };

  const beefLamb = () => {
    const beefLambCSV = `欖菜芥蘭炒牛肉,Chinese Broccoli w/ Olive,13.95
    西蘭白菜炒牛肉,Beef w/ Broccoli & Bok Choy,13.95
    雜菌菇炒牛肉,Beef w/ Mixed Mushroom,13.95
    蒙古牛肉/雞肉,Mongolian Beef or Chicken,13.95
    美極磨菇牛柳,Steak & Mushroom w/ Maggie Sauce,15.95
    沙茶牛肉炒四季豆,Beef & String Bean w/ Satay Sauce,13.95
    黑椒雜菌炒牛柳,Steak & Mixed Mushroom w/ Black Pepper Sauce,15.95
    X0醬珍菌炒羊肉,Lamb & Mixed Mushrooms w/ X.0. Sauce,16.95
    薑蔥大蒜炒羊肉,Lamb w/ Ginger & Scallion,16.95
    虎皮尖椒爆羊肉,Lamb w/ Hot Pepper,16.95`;
    const beefLambData = util.cleanLiteral(beefLambCSV);
    const beefLambObject = util.populateObject(
      beefLambData.length,
      beefLambData,
      "E"
    );
    return beefLambObject;
  };
  const pork = () => {
    const porkCSV = `避風塘大腸,Intestine Fried w/ Garlic & Hot Pepper,13.95
    X0醬豆仔炒豬肚,Pork Stomach & String Beans w/ X.O. Sauce,13.95
    鹹魚蒸肉餅,Steamed Pork w/ Salted Fish,11.95
    京都肉排,Peking Spareribs,11.95
    糖醋咕嚕肉,Sweet & Sour Pork,11.95
    臘腸冬菜蒸肉餅,Steamed Pork w/ Chinese Sausage & Preserved Green,11.95
    肉崧麻婆豆腐,Ma Pao Tofu w/ Preserved Green,11.95
    鹹酸菜炒肉絲,Shredded Pork w/ Preserved Green,11.95
    嬌頭生炒骨,Shallot Spareribs,11.95
    椒鹽豆仔排骨,Salt & Papper Spareribs w/ String Beans,11.95
    X0醬肉崧四季豆,Minced Pork & String Bean w/ X.O. Sauce,11.95
    什菌肉片,Pork w/ Mixed Mushroom,12.95
    虎皮尖椒炒豬肚,Pork Stomach w/ Spicy Pepper,13.95
    鹹酸菜炒豬肚,Pork Stomach w/ Preserved Green,13.95`;
    const porkData = util.cleanLiteral(porkCSV);
    const porkObject = util.populateObject(porkData.length, porkData, "F");

    return porkObject;
  };

  const clayPot = () => {
    const clayPotCSV = `栗子雜菌雞煲,Chicken w/ Chestnut & Mixed Mushroom in Clay Pot,13.95
    啫啫乾蔥豆豉雞煲,Chicken in Bone w/ Black Bean Sauce in Clay Pot,13.95
    招牌涼瓜塘虱煲,Cat Fish & Bitter Melon in Clay Pot,15.95
    大蒜薑蔥魚頭腩煲,Fish Head w/ Garlic - Ginger & Scallion,13.95
    家鄉支竹羊腩煲,Lamb w/ Bean Curd in Clay Pot,17.95
    大千海鮮豆腐煲,Spicy Seafood & Tofu in Clay Pot,12.95
    紅燒豆腐斑腩煲,Braised Fried Tofu & Fish Fillet in Clay Pot,12.95
    柱候牛腩煲,Beef Stew in Clay Pot,13.95
    沙茶雞粒茄子煲,Satay Chicken Diced w/ Eggplant,12.95
    咸魚雞粒豆腐煲,Salted Fish & Chicken in Clay Pot,12.95
    節瓜肉崧粉絲煲,Chinese Melon - Minced Pork & Vermicelli in Clay Pot,11.95
    客家五更長旺煲,Pork Intestines & Tofu in Chili Sauce,12.95`;
    const clayPotData = util.cleanLiteral(clayPotCSV);
    const clayPotObject = util.populateObject(
      clayPotData.length,
      clayPotData,
      "G"
    );

    return clayPotObject;
  };

  const mushu = () => {
    const mushuCSV = `木須肉, Mu Shu Pork,12.95
    木須雞, Mu Shu Chicken,12.95
    木須菜, Mu Shu Vegetable,12.95
    木須蝦, Mu Shu Shrimp,12.95`;
    const mushuData = util.cleanLiteral(mushuCSV);
    const mushupObject = util.populateObject(mushuData.length, mushuData, "H");
    return mushupObject;
  };

  const lettuceWrap = () => {
    const lettuceWrapCSV = `豬肉生菜包,Minced Pork w/ Lettuce Wraps,12.95
    雞肉生菜包,Minced Chicken w/ Lettuce Wraps,12.95
    海鮮生菜包,Minced Seafood w/ Lettuce Wraps,13.95
    素菜生菜包,Minced Vegetable w/ Lettuce Wraps,12.95`;
    const lettuceWrapData = util.cleanLiteral(lettuceWrapCSV);
    const lettuceWrapObject = util.populateObject(
      lettuceWrapData.length,
      lettuceWrapData,
      "I"
    );

    return lettuceWrapObject;
  };

  const vegetables = () => {
    const vegetablesCSV = `蒜茸冬菜蒸茄子,Steamed Eggplant w/ Garlic & Preserved Green,11.95
    雜菌雲耳炒碧綠,Sauteed Mixed Mushroom & Fungus w/ Vegetable,11.95
    椒鹽茄子豆腐粒,Salt & Pepper Eggplant & Fried Tofu Cube,10.95
    欖菜肉崧四季豆,Minced Pork & String Beans w/ Olive,11.95
    腐皮白果上湯豆苗,Bean Sprout w/ Bean Curd Sheet & Ginkgo in Broth,15.95
    上湯皮蛋浸茶菜,Mustard Green & Preserved Eggs in Broth,11.95
    鹹豬骨上湯芥菜,Mustard Green in Salted Bone Broth,11.95
    九層塔茄子,House Special Basil Eggplant,11.95
    川味魚香茄子,Spicy Eggplant,11.95
    糖酒/蠔油炒芥蘭,Sauteed Chinese Broccoli w/ Rice Wine or Oyster Sauce,10.95
    油鹽炒白莱,Sauteed Bok Choy,10.95
    蒜茸四季豆,Sauteed Garlic String Beans,11.95
    蒜茸炒豆苗,Sauteed Garlic Pea Sprouts,Seasonal
    冬菇白菜,Bok Choy and Chinese Mushroom,11.95
    紅燒冬菇豆腐,Braised Fried Tofu,10.95`;
    const vegetablesData = util.cleanLiteral(vegetablesCSV);
    const vegetablesObject = util.populateObject(
      vegetablesData.length,
      vegetablesData,
      "J"
    );

    return vegetablesObject;
  };

  const chowMeinFun = () => {
    const chowMeinCSV = `家鄉炒米,House Special Fried Rice Noodle,11.95
    星州炒米,Singapore Style Fried Rice Noodle,11.95
    泰式炒米,Thai Style Fried Rice Noodle,11.95
    韭皇干炒牛/雞河,Beef/Chicken Dry Chow Fun w/ Yellow Chive,11.95
    涼瓜雞乾炒河粉,Chicken & Bitter Melon Dry Chow Fun,11.95
    星馬炒貴刁,Malaysia Style Curry Chow Fun,11.95
    豉椒牛/雞濕炒河,Beef or Chicken Chow Fun in Black Bean Sauce,12.95
    海鮮XO醬濕炒河,Seafood Chow Fun in X.O. Sauce,13.95
    蒜茸牛油蝦炒粗麵,Garlic & Butter Shrimp Chow Mein,12.95
    沙爹牛粒濕炒河粉,Beef Cube Chow Fun w/ Satay Sauce,12.95
    雞/牛/叉燒炒粗麵,Chicken/Beef/BBQ Pork Chow Mein, 10.95
    招牌海鮮炒粗麵,House Special Seafood Chow Mein,12.95
    九層塔海鮮炆伊麵,House Special Basil Seafood E-Fu Noodle,11.95
    咖喱牛粒炆伊麵,Curry Beef Cube E-Fu Noodle,11.95
    韭皇干燒伊麵,Yellow Chive E-Fu Noodle,10.95
    瑤柱金玉菇炆伊麵,Dried Scallop & Mushroom E-Fu Noodle,12.95
    豉油皇炒細麵,Soy Sauce Fried Thin Chow Mein,10.95`;

    const chowMeinData = util.cleanLiteral(chowMeinCSV);
    const chowMeinObject = util.populateObject(
      chowMeinData.length,
      chowMeinData,
      "K"
    );

    return chowMeinObject;
  };

  const friedRice = () => {
    const friedRiceCSV = `荷葉生炒糯米飯,Sticky Rice in Lotus Leaf,14.00
    黑松露海鮮粒炒飯,Black Truffle Seafood Fried Rice,13.95
    X0醬金雙蛋炒飯,Double Eggs Fried Rice w/ X.O. Sauce,13.95
    瑤柱蛋白炒飯炒,Dried Scallop w/ Egg White Fried Rice,13.95
    楊州炒飯,Yang Chow Fried Rice,12.95
    雞/牛/又燒炒飯,Chicken/Beef/BBQ Pork Fried Rice,10.95
    鹹魚雞粒炒飯,Chicken & Salted Fish Fried Rice,12.95
    鹹酸菜雞粒炒飯,Preserved Green & Egg Fried Rice,10.95
    菠蘿海鮮粒炒飯,Pinapple Shrimp Fried Rice,11.95
    福建炒飯,Fukien Fried Rice,12.95
    X0醬牛粒豆豉炒飯,Beef Cube w/ Black Bean Fried Rice in X.O. Sauce,11.95`;

    const friedRiceData = util.cleanLiteral(friedRiceCSV);
    const friedRiceObject = util.populateObject(
      friedRiceData.length,
      friedRiceData,
      "L"
    );

    return friedRiceObject;
  };

  const congee = () => {
    const congeeCSV = `皮蛋粥肉瘦,Preserved Egg & Pork Congee,7.95
    生滾魚片粥,Fish Fillet Congee,8.95
    海鮮粥,Shrimp Congee,8.95
    生滾牛肉粥,Beef Congee,7.95
    瑤柱田雞粥,Frog w/ Dried Scallop Congee,9.95
    貴妃蚌粥,Empress Clams Congee,10.95
    砂鍋蟹/龍蝦粥,Crab or Lobster Congee,Seasonal
    鹹豬骨白菜粥,Salted Pork Bone w/ Bok Choy Congee,8.95
    黃毛雞粥,Free Range Chicken Congee,9.95
    清淡白粥,Plain Congee,4.50
    白飯,Steamed Rice,1.50`;
    const congeeData = util.cleanLiteral(congeeCSV);
    const congeeObject = util.populateObject(
      congeeData.length,
      congeeData,
      "M"
    );

    return congeeObject;
  };

  const ricePlates = () => {
    const ricePlatesCSV = `四季豆雞球/牛肉飯,Chicken & String Bean in Black Bean Sauce over Rice,9.50
    涼瓜雞球/牛肉/排骨飯,Bitter Melon Chicken/Beef/Spareribs over Rice,9.50
    蒙古雞肉/牛肉飯,Mongolian Chicken or Beef over Rice,9.50
    宮保雞飯,Kung Pao Chicken,9.50
    干炒雞/牛河,Beef/Chicken Dry Chow Fun,9.50
    蒜茸牛油雞炒粗麵,Chicken w/ Garlic & Butter over Thick Noodle,9.50
    鹹酸菜大腸/豬肚飯,Pork Intestines/Stomach & Preserved Green over Rice,9.50
    鹹酸菜肉絲豆腐飯,Shredded Pork - Tofu & Preserved Green over Rice,9.50
    椒鹽豆仔豬爽肉/豬扒飯,Salt & Pepper String Bean & Pork Neck or Pork Chop,9.50
    炸菜肉片飯,Pork & Preserved Vegetable over Rice,9.50
    豉汁豆仔肉片飯,Pork & String Bean in Black Bean Sauce over Rice,9.50
    豆腐排骨飯,Spareribs & Tofu over Rice,9.50
    紅燒肉崧茄子飯,Braised Minced Pork & Eggplant over Rice,9.50
    紅燒豆腐斑腩飯,Braised Fish Fillet w/ Fried Tofu over Rice,9.50
    肉崧麻婆豆腐飯,Ma Pao Tofu w/ Minced Pork over Rice,9.50
    XO醬肉崧四季豆飯,Minced Pork & String Bean over Rice,9.50
    茄子牛崧/雞粒飯,Eggplant Beef / Chicken over Rice,9.50
    蘿蔔牛腩飯,Beef Stew & Turnip over Rice,9.50
    咖喱牛腩飯,Curry Beef Stew over Rice,9.50
    牛腩湯麵/粉,Beef Stew over Noodle or Rice Noodle Soup,9.50
    排骨湯麵/粉,Spareribs over Noodle or Rice Noodle Soup,9.50
    家鄉炒米,House Special Pan Fried Rice Noodle,9.50`;
    const ricePlatesData = util.cleanLiteral(ricePlatesCSV);
    const ricePlatesObject = util.populateObject(
      ricePlatesData.length,
      ricePlatesData
    );

    return ricePlatesObject;
  };

  const crab = () => {
    const crabCSV = `咸蛋黃,Salted Egg Yolk
    避風塘,Fried w/ Garlic & Hot Pepper
    椒鹽,Salt & Pepper
    牛油胡椒,Butter & Pepper
    蒜茸粉絲,Garlic & Vermicelli
    大千粉絲,Spicy Garlic & Vermicelli
    甘香涼瓜,Bitter Melon
    鹹菜,Preserved Salted Vegetable
    薑蔥,Ginger & Scallion
    沙茶粉絲,Satay & Vermicelli`;
    const crabData = util.cleanLiteral(crabCSV);
    const crabObject = util.populateObject(crabData.length, crabData);

    return crabObject;
  };

  const lobster = () => {
    const lobsterCSV = `蒜茸粉絲,Garlic & Vermicelli
    XO醬,X.O. Sauce
    薑蔥,Ginger & Scallion
    豉油皇,Soy Sauce
    咸蛋黃,Salted Egg Yolk`;
    const lobsterData = util.cleanLiteral(lobsterCSV);
    const lobsterObject = util.populateObject(lobsterData.length, lobsterData);

    return lobsterObject;
  };

  const takeaway = () => {
    const takeawayCSV = `蒙古雞肉/牛肉,Mongolian Chicken or Beef
    沙茶花枝雞片,Satay Squid & Chicken
    左宗棠雞,General's Chicken
    宫保雞,Kung Pao Chicken
    豉汁四季豆雞球,Chicken & String Bean in Black Bean Sauce
    干炒雞/牛河粉,Chicken or Beef Dry Chow Fun
    XO醬四季豆炒豬肚,Sauteed Pork Stomach & String Bean w/ X.O. Sauce
    椒鹽豆仔肉排,Salt & Pepper Spareribs w/ String Beans
    京都肉排,Peking Spareribs
    咕嚕肉/雞,Sweet and Sour Pork/Chicken
    喬頭生炒骨,Shallot Spareribs
    臘腸冬菜/梅菜蒸肉餅,Steamed Minced Pork w/Chinese Sausage
    肉崧麻婆豆腐,Ma Pao Tofu w/ Minced Pork
    椒鹽四季豆豬爽肉,Salt & Pepper Pork Neck & String Beans
    XO醬芹心炒魚片,Fish Fillet & Celery in X.0. Sauce
    紅燒豆腐斑腩煲,Braised Fish Fillet w/ Fried Tofu
    沙茶雞粒茄子煲,Satay Chicken & Eggplant in Pot
    五更長旺煲,Pork Intestines & Tofu in Chili Sauce
    鹹魚雞粒豆腐煲,Chicken & Salted Fish & Tofu in Pot
    欖菜肉崧四季豆,Minced Pork & String Bean w/ Olive
    上湯鹹豬骨浸芥菜,Mustard Green in Salted Pork Bone in Broth
    雜菌雲耳炒碧綠,Sauteed Vegetable - Mixed Mushroom & Fungus
    炸菜肉片,Pork & Preserved Vegetable
    蒜茸四季豆,Sauteed String Beans
    冬菇紅燒豆腐,Braised Fried Tofu & Mushroom
    紅燒肉崧茄子,Braised Minced Pork & Eggplant
    上湯皮蛋浸芥菜,Mustard Green & Preserved Eggs in Supreme Broth
    蒜茸豉汁爆虎皮尖椒,Pan Seared Green Chilli Pepper in Garlic and Black Pepper Sauce
    家鄉菜脯煎蛋,Pan Fried Egg w/ Preserved Green
    雙色蒸滑蛋,Steamed Two Kind of Egg
    脆塘海鮮滑豆腐,Steamed Seafood & Tofu
    豉油皇炒細麵,Soy Sauce Fried Thin Noodle
    家鄉炒米,House Special Pan Fried Rice Noodle
    泰式炒米,Thai Style Fried Rice Noodle XO
    醬金雙蛋炒飯,Double Eggs Fried Rice in XO Sauce`;
    const takeawayData = util.cleanLiteral(takeawayCSV);
    const takeawayObject = util.populateObject(
      takeawayData.length,
      takeawayData
    );
    return takeawayObject;
  };

  return { getMenu };
})();

export default categoryModal;

import util from "./category-utility";

const categories = (() => {
  const houseSpecial = () => {
    const houseCSV = `客家鹽焗雞,Salt & Baked Chicken,(半 Half) 14.95 (Whole) 28.00
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
    const houseObject = util.populateObject(
      houseData.length,
      houseData,
      "S"
    );
    util.populateTable(houseObject, "House Special (特色菜)");
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
    util.populateTable(chowMeinObject, "Chow Mein & Fun (粉麵類)");
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
    util.populateTable(friedRiceObject, "Fried Rice (炒飯類)");
  };

  const congee = () => {
    const congeeCSV = `皮蛋粥肉瘦,Preserved Egg & Pork Congee,7.95
    生滾魚片粥,Fish Fillet Congee,8.95
    海鮮粥,Shrimp Congee,8.95
    生滾牛肉粥,Beef Congee,7.95
    瑤柱田雞粥,Frog with Dried Scallop Congee,9.95
    貴妃蚌粥,Empress Clams Congee,10.95
    砂鍋蟹/龍蝦粥,Crab or Lobster Congee,Seasonal
    鹹豬骨白菜粥,Salted Pork Bone with Bok Choy Congee,8.95
    黃毛雞粥,Free Range Chicken Congee,9.95
    清淡白粥,Plain Congee,4.50
    白飯,Steamed Rice,1.50`;
    const congeeData = util.cleanLiteral(congeeCSV);
    const congeeObject = util.populateObject(
      congeeData.length,
      congeeData,
      "M"
    );
    util.populateTable(congeeObject, "Congee (粥類)");
  };

  const clayPot = () => {
    const clayPotCSV =`栗子雜菌雞煲,Chicken w/ Chestnut & Mixed Mushroom in Clay Pot,13.95
    啫啫乾蔥豆豉雞煲,Chicken in Bone w/ Black Bean Sauce in Clay Pot,13.95
    招牌涼瓜塘虱煲,Cat Fish & Bitter Melon in Clay Pot,15.95
    大蒜薑蔥魚頭腩煲,Fish Head with Garlic, Ginger & Scallion,13.95
    家鄉支竹羊腩煲,Lamb w/ Bean Curd in Clay Pot,17.95
    大千海鮮豆腐煲,Spicy Seafood & Tofu in Clay Pot,12.95
    紅燒豆腐斑腩煲,Braised Fried Tofu & Fish Fillet in Clay Pot,12.95
    柱候牛腩煲,Beef Stew in Clay Pot,13.95
    沙茶雞粒茄子煲,Satay Chicken Diced w/ Eggplant,12.95
    咸魚雞粒豆腐煲,Salted Fish & Chicken in Clay Pot,12.95
    節瓜肉崧粉絲煲,Chinese Melon, Minced Pork & Vermicelli in Clay Pot,11.95
    客家五更長旺煲,Pork Intestines & Tofu in Chili Sauce,12.95`;
    const clayPotData = util.cleanLiteral(clayPotCSV);
    const clayPotObject = util.populateObject(
      clayPotData.length,
      clayPotData,
      "G"
    );
    util.populateTable(clayPotObject, "Clay Pot (煲仔類)");
  }

  const lettuceWrap = () => {
    const lettuceWrapCSV =`豬肉生菜包,Minced Pork w/ Lettuce Wraps,12.95
    雞肉生菜包,Minced Chicken w/ Lettuce Wraps,12.95
    海鮮生菜包,Minced Seafood w/ Lettuce Wraps,13.95
    素菜生菜包,Minced Vegetable w/ Lettuce Wraps,12.95`;
    const lettuceWrapData = util.cleanLiteral(lettuceWrapCSV);
    const lettuceWrapObject = util.populateObject(
      lettuceWrapData.length,
      lettuceWrapData,
      "I"
    );
    util.populateTable(lettuceWrapObject, "Lettuce Wraps (生菜包) (6 Lettuces)");
  }

  const mushu = () => {
    const mushuCSV =`木須肉, Mu Shu Pork,12.95
    木須雞, Mu Shu Chicken,12.95
    木須菜, Mu Shu Vegetable,12.95
    木須蝦, Mu Shu Shrimp,12.95`;
    const mushuData = util.cleanLiteral(mushuCSV);
    const mushupObject = util.populateObject(
      mushuData.length,
      mushuData,
      "H"
    );
    util.populateTable(mushupObject, "Mu Shu (木須類) (6 Pancakes)");
  }
  const appetizers = () => {
    const appetizersCSV =`炸春卷,Egg Rolls (4),5.95
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
      "H"
    );
    util.populateTable(appetizersObject, "Appetizers (餐前小食)");
  }

  return {
    houseSpecial,
    chowMeinFun,
    friedRice,
    congee,
    clayPot,
    lettuceWrap,
    mushu,
    appetizers
  };
})();

export default categories;

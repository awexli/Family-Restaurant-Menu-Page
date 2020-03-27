import util from "./category-utility";

const categories = (() => {
  const houseSpecial = () => {
    const houseChinese = `客家鹽焗雞
        招牌華香雞（半）
        豬肚撈雞（半）
        惠州梅菜扣肉
        客家煎釀滑豆腐
        客家黃酒薑炒雞
        胡椒支竹豬肚雞煲
        客家炒大腸
        燒汁雜菌炒肥牛
        美極磨菇牛柳粒
        家鄉小炒皇
        椒鹽豬爽肉
        金沙鹹蛋黃炒蟹
        九層塔炒蜆
        避風塘炒蜆
        豉油皇老虎大蝦
        西汁煎老虎大蝦
        家鄉雙味蒸塘虱
        川味朵椒蒸魚頭腩
        豉椒炒雙魷魚
        薑蔥砂鍋魚頭
        家鄉菜脯粒煎蠔餅
        黑松露海鮮玉子豆腐
        豉汁涼瓜雞球
        玉子豆腐拌金玉菇
        椒鹽田雞鹹魚粒
        紅燒乳鴿
        客家特色（炆）綠鴨
        荷葉糯米鴨
        脆皮糯米雞`;
    const houseEnglish = `Salt & Baked Chicken
        House Special Steamed Chicken (Half)
        Pork Stomach w/ Chicken (Half)
        Chinese Bacon w/ Presevered Green
        House Special Pan Fried Stuffed Tofu
        Stir Fry Chicken w/ Ginger in Wine Sauce
        Chicken, Pork Stomach & Bean Curd w/ Pepper in Pot
        Hakka Style Stir Fry Intestine
        Beef & Mixed Mushroom in Teriyaki Sauce
        Steak Cube & Mushroom in Maggie Sauce
        House Special Stir Fry Mixed
        Salt & Pepper Pork Neck
        Stir Fry Crab w/ Salted Egg
        House Special Basil Clams
        Hong Kong Style Spicy Clams
        Tiger Prawns w/ Soy Sauce (8)
        Tiger Prawns in Teriyaki Sauce (8)
        Cat Fish in Two Kind of Sauce (Whole)
        Steamed Fish Head w/ Spicy Pepper
        Spicy Squid w/ Black Pepper Sauce
        Fish Head w/ Ginger and Scallion in Pot
        Pan Friend Oyster w/ Preserved Green
        Black Truffle Seafood & Japanese Tofu
        Chicken & Bitter Melon in Black Pepper Sauce
        Japanese Tofu w/ Baby Mushroom
        Salt & Pepper Frog w/ Diced Salted Fish
        Roasted Squab
        Hakka Style Braised Duck (半 Half)
        Stuffed Duck in Lotus Leaf (Order in Advance)
        Stuffed Chicken w/ Sticky Rice (Order in Advance)`;
    const housePrice = `(半 Half) 14.95 (Whole) 28.00
        13.95
        17.95
        14.95
        12.95
        16.95
        15.95
        12.95
        13.95
        15.95
        13.95
        11.95
        Seasonal
        16.95
        16.95
        20.95
        20.95
        28.95
        13.95
        12.95
        13.95
        13.95
        13.95
        11.95
        12.95
        16.95
        12.95
        16.95
        48.00
        39.00`;

    const houseChineseDishes = util.cleanLiteral(houseChinese);
    const houseEnglishDishes = util.cleanLiteral(houseEnglish);
    const housePrices = util.cleanLiteral(housePrice);
    const houseObject = util.populateObject(
      houseChineseDishes.length,
      houseChineseDishes,
      houseEnglishDishes,
      housePrices,
      "S"
    );
    //console.table(houseObject)
    util.populateTable(houseObject, "House Special (特色菜)");
  };

  const chowMeinFun = () => {
    const chinese = `家鄉炒米
        星州炒米
        泰式炒米
        韭皇干炒牛/雞河
        涼瓜雞乾炒河粉
        星馬炒貴刁
        豉椒牛/雞濕炒河
        海鮮XO醬濕炒河
        蒜茸牛油蝦炒粗麵
        沙爹牛粒濕炒河粉
        雞/牛/叉燒炒粗麵
        招牌海鮮炒粗麵
        九層塔海鮮炆伊麵
        咖喱牛粒炆伊麵
        韭皇干燒伊麵
        瑤柱金玉菇炆伊麵
        豉油皇炒細麵`;

    const english = `House Special Fried Rice Noodle
        Singapore Style Fried Rice Noodle
        Thai Style Fried Rice Noodle
        Beef/Chicken Dry Chow Fun w/ Yellow Chive
        Chicken & Bitter Melon Dry Chow Fun
        Malaysia Style Curry Chow Fun
        Beef or Chicken Chow Fun in Black Bean Sauce
        Seafood Chow Fun in X.O. Sauce
        Garlic & Butter Shrimp Chow Mein
        Beef Cube Chow Fun w/ Satay Sauce
        Chicken/Beef/BBQ Pork Chow Mein
        House Special Seafood Chow Mein
        House Special Basil Seafood E-Fu Noodle
        Curry Beef Cube E-Fu Noodle
        Yellow Chive E-Fu Noodle
        Dried Scallop & Mushroom E-Fu Noodle
        Soy Sauce Fried Thin Chow Mein`;

    const price = `11.95
        11.95
        11.95
        11.95
        11.95
        11.95
        12.95
        13.95
        12.95
        12.95
        10.95
        12.95
        11.95
        11.95
        10.95
        12.95
        10.95`;

    const chinDishes = util.cleanLiteral(chinese);
    const englishDishes = util.cleanLiteral(english);
    const chowMeinFunPrices = util.cleanLiteral(price);
    const chowMeinFunObject = util.populateObject(
      chinDishes.length,
      chinDishes,
      englishDishes,
      chowMeinFunPrices,
      "K"
    );
    //console.table(chowMeinFunObject)
    util.populateTable(chowMeinFunObject, "Chow Mein & Fun (粉麵類)");
  };

  const friedRice = () => {
    const chinese = `荷葉生炒糯米飯
    黑松露海鮮粒炒飯
    X0醬金雙蛋炒飯
    瑤柱蛋白炒飯炒
    楊州炒飯
    雞/牛/又燒炒飯
    鹹魚雞粒炒飯
    鹹酸菜雞粒炒飯
    菠蘿海鮮粒炒飯
    福建炒飯
    X0醬牛粒豆豉炒飯`;

    const english = `Sticky Rice in Lotus Leaf
    Black Truffle Seafood Fried Rice
    Double Eggs Fried Rice w/ X.O. Sauce
    Dried Scallop w/ Egg White Fried Rice
    Yang Chow Fried Rice
    Chicken/Beef/BBQ Pork Fried Rice
    Chicken & Salted Fish Fried Rice
    Preserved Green & Egg Fried Rice
    Pinapple Shrimp Fried Rice
    Fukien Fried Rice
    Beef Cube w/ Black Bean Fried Rice in X.O. Sauce`;

    const price = `14.00
    13.95
    13.95
    13.95
    12.95
    10.95
    12.95
    10.95
    11.95
    12.95
    11.95`;

    const chinDishes = util.cleanLiteral(chinese);
    const englishDishes = util.cleanLiteral(english);
    const friedRicePrices = util.cleanLiteral(price);
    const friedRiceObject = util.populateObject(
      chinDishes.length,
      chinDishes,
      englishDishes,
      friedRicePrices,
      "L"
    );
    //console.table(chowMeinFunObject)
    util.populateTable(friedRiceObject, "Fried Rice (炒飯類)");
  }

  return {
    houseSpecial,
    chowMeinFun,
    friedRice
  };
})();

export default categories;

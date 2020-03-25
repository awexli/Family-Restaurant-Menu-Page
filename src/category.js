const categories = (() => {
    const overlayContent = document.querySelector(".overlay-content");
    const overlayTable = document.createElement("table");
    overlayTable.className = "cat-table";

    const rowFragment = new DocumentFragment();
    const cellFragment = new DocumentFragment();

    const houseSpecial = () => {
        const special = {
            r1: {
                num: "S1",
                chin: "客家鹽焗雞",
                eng: "Salt & Baked Chicken",
                price: "(半 Half) 14.95 (Whole) 28.00"
            },
            r2: {
                num: "S2",
                chin: "招牌華香雞（半）",
                eng: "House Special Steamed Chicken (Half)",
                price: "13.95"
            },
            r3: {
                num: "S3",
                chin: "豬肚撈雞（半）",
                eng: "Pork Belly with Chicken (Half)",
                price: "17.95"
            },
            r4: {
                num: "S4",
                chin: "惠州梅菜扣肉",
                eng: "Chinese Bacon w/ Presevered Green",
                price: "14.95"
            },
            r5: {
                num: "S5",
                chin: "客家煎釀滑豆腐",
                eng: "House Special Pan Fried Stuffed Tofu",
                price: "11.95"
            },
            r6: {
                num: "S6",
                chin: "客家煎釀三寶",
                eng: "Pan Fried Three Stuffed Treasures",
                price: "13.95"
            },
            r7: {
                num: "S7",
                chin: "客家黃酒薑炒雞",
                eng: "Stir Fry Chicken in Wine Sauce",
                price: "16.95"
            },
            r8: {
                num: "S8",
                chin: "胡椒支竹豬肚雞煲",
                eng: "Chicken, Pork Belly & Bean Curd with Pepper in Pot",
                price: "15.95"
            },
            r9: {
                num: "S9",
                chin: "客家炒大腸",
                eng: "Hakka Style Stir Fry Intestine",
                price: "12.95"
            },
            r10: {
                num: "S10",
                chin: "燒汁雜菌炒肥牛",
                eng: "Beef & Mixed Mushroom in Teriyaki Sauce",
                price: "13.95"
            },
            r11: {
                num: "S11",
                chin: "美極磨菇牛柳粒",
                eng: "Steak Cube & Mushroom in Maggie Sauce",
                price: "15.95"
            },
            r12: {
                num: "S12",
                chin: "家鄉小炒皇",
                eng: "House Special Stir Fry Mixed",
                price: "13.95"
            },
            r13: {
                num: "S13",
                chin: "椒鹽豬爽肉",
                eng: "Salt & Pepper Pork Neck",
                price: "11.95"
            },
            r14: {
                num: "S14",
                chin: "金沙鹹蛋黃炒蟹",
                eng: "Stir Fry Crab with Salted Egg",
                price: "Seasonal"
            },
            r15: {
                num: "S15",
                chin: "九層塔炒蜆",
                eng: "House Special Basil Clams",
                price: "15.95"
            },
            r16: {
                num: "S16",
                chin: "避風塘炒蜆",
                eng: "Hong Kong Style Spicy Clams",
                price: "15.95"
            },
            r17: {
                num: "S17",
                chin: "豉油皇老虎大蝦",
                eng: "Tiger Prawns with Soy Sauce (8)",
                price: "19.95"
            },
            r18: {
                num: "S18",
                chin: "西汁煎老虎大蝦",
                eng: "Tiger Prawns in Teriyaki Sauce (8)",
                price: "19.95"
            },
            r19: {
                num: "S19",
                chin: "家鄉雙味蒸塘虱",
                eng: "Cat Fish in Two Kind of Sauce (Whole)",
                price: "27.95"
            },
            r20: {
                num: "S20",
                chin: "川味朵椒蒸魚頭腩",
                eng: "Steamed Fish Head with Spicy Pepper",
                price: "13.95"
            },
            r21: {
                num: "S21",
                chin: "豉椒炒雙魷魚",
                eng: "Spicy Squid with Black Pepper Sauce",
                price: "(Half) 14.95 (Whole) 28.00"
            },
            r22: {
                num: "S22",
                chin: "薑蔥砂鍋魚頭",
                eng: "Fish Head with Ginger and Scallion in Pot",
                price: "13.95"
            },
            r23: {
                num: "S23",
                chin: "家鄉菜脯粒煎蠔餅",
                eng: "Pan Friend Oyster with Preserved Green",
                price: "13.95"
            },
            r24: {
                num: "S24",
                chin: "黑松露海鮮玉子豆腐",
                eng: "Black Truffle Seafood & Japanese Tofu",
                price: "13.95"
            },
            r25: {
                num: "S25",
                chin: "豉汁蒜子爆虎皮尖椒",
                eng: "Pan Seared Green Chilli Pepper in Black Pepper Sauce",
                price: "11.95"
            },
            r26: {
                num: "S26",
                chin: "豉汁涼瓜雞球",
                eng: "Chicken & Bitter Melon in Black Pepper Sauce",
                price: "11.95"
            },
            r27: {
                num: "S27",
                chin: "玉子豆腐拌金玉菇",
                eng: "Japanese Tofu with Baby Mushroom",
                price: "12.95"
            },
            r28: {
                num: "S28",
                chin: "椒鹽田雞鹹魚粒",
                eng: "Salt & Pepper Frog with Diced Salted Fish",
                price: "16.95"
            },
            r29: {
                num: "S29",
                chin: "紅燒乳鴿",
                eng: "Roasted Squab",
                price: "12.95"
            },
            r30: {
                num: "S30",
                chin: "客家特色（炆）綠鴨",
                eng: "Hakka Style Braised Duck (半 Half)",
                price: "16.95"
            },
            r31: {
                num: "S31",
                chin: "荷葉糯米鴨",
                eng: "Stuffed Duck in Lotus Leaf (Order in Advance)",
                price: "45.00"
            },
            r32: {
                num: "S32",
                chin: "脆皮糯米雞",
                eng: "Stuffed Chicken with Sticky Rice (Order in Advance)",
                price: "39.00"
            }
        }
        createTable(special)
    }

    const chowMeinFun = () => {
        let chinese =
        `家鄉炒米
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

        const chinDishes = cleanTemplateLiteral(chinese);
        
        const chow = {
            r1: {
                num: "K1",
                chin: "客家鹽焗雞",
                eng: "Salt & Baked Chicken",
                price: "(半 Half) 14.95 (Whole) 28.00"
            },
            r2: {
                num: "K2",
                chin: "招牌華香雞（半）",
                eng: "House Special Steamed Chicken (Half)",
                price: "13.95"
            },
            r3: {
                num: "K3",
                chin: "豬肚撈雞（半）",
                eng: "Pork Belly with Chicken (Half)",
                price: "17.95"
            },
            r4: {
                num: "K4",
                chin: "惠州梅菜扣肉",
                eng: "Chinese Bacon w/ Presevered Green",
                price: "14.95"
            },
            r5: {
                num: "K5",
                chin: "客家煎釀滑豆腐",
                eng: "House Special Pan Fried Stuffed Tofu",
                price: "11.95"
            },
            r6: {
                num: "K6",
                chin: "客家煎釀三寶",
                eng: "Pan Fried Three Stuffed Treasures",
                price: "13.95"
            },
            r7: {
                num: "K7",
                chin: "客家黃酒薑炒雞",
                eng: "Stir Fry Chicken in Wine Sauce",
                price: "16.95"
            },
            r8: {
                num: "K8",
                chin: "胡椒支竹豬肚雞煲",
                eng: "Chicken, Pork Belly & Bean Curd with Pepper in Pot",
                price: "15.95"
            },
            r9: {
                num: "K9",
                chin: "客家炒大腸",
                eng: "Hakka Style Stir Fry Intestine",
                price: "12.95"
            },
            r10: {
                num: "K10",
                chin: "燒汁雜菌炒肥牛",
                eng: "Beef & Mixed Mushroom in Teriyaki Sauce",
                price: "13.95"
            },
            r11: {
                num: "K11",
                chin: "美極磨菇牛柳粒",
                eng: "Steak Cube & Mushroom in Maggie Sauce",
                price: "15.95"
            },
            r12: {
                num: "K12",
                chin: "家鄉小炒皇",
                eng: "House Special Stir Fry Mixed",
                price: "13.95"
            },
            r13: {
                num: "K13",
                chin: "椒鹽豬爽肉",
                eng: "Salt & Pepper Pork Neck",
                price: "11.95"
            },
            r14: {
                num: "K14",
                chin: "金沙鹹蛋黃炒蟹",
                eng: "Stir Fry Crab with Salted Egg",
                price: "Seasonal"
            },
            r15: {
                num: "K15",
                chin: "九層塔炒蜆",
                eng: "House Special Basil Clams",
                price: "15.95"
            },
            r16: {
                num: "K16",
                chin: "避風塘炒蜆",
                eng: "Hong Kong Style Spicy Clams",
                price: "15.95"
            },
            r17: {
                num: "K17",
                chin: "豉油皇老虎大蝦",
                eng: "Tiger Prawns with Soy Sauce (8)",
                price: "19.95"
            }
        }
        const chowmein = []
        for (let i = 0; i < chinDishes.length; i++) {
            chow[`r${i+1}`].chin = chinDishes[i];
        }
        console.table(chow)
    }

    const createTable = (category) => {

        if (overlayTable.hasChildNodes) {
            while (overlayTable.firstChild) {
                overlayTable.removeChild(overlayTable.lastChild)
            }
        }

        for (let row in category) {
            const rowData = category[row];
            for (let cell in rowData) {
                const cells = document.createElement("td");
                cells.innerText = rowData[cell];
                if (cell == "chin") {
                    cells.className = "chinese";
                }
                cellFragment.appendChild(cells);
            }
            const tableRow = document.createElement("tr");
            tableRow.appendChild(cellFragment);
            rowFragment.appendChild(tableRow);
        }
        overlayTable.appendChild(rowFragment);
        overlayContent.appendChild(overlayTable);
    }

    const cleanTemplateLiteral = (literal) => {
        const arr = [];

        literal = literal.split("\n");

        for (let elem of literal) {
            arr.push(elem.trim())
        }

        return arr;
    }

    return { 
        houseSpecial, 
        chowMeinFun
    }
})();

export default categories;
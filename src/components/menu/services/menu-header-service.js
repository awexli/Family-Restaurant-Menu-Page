export class MenuHeaderService {
  static getEnglishTitle = (menuTitle) => {
    const fullTitle = menuTitle;
    // the index BEFORE the open parentheses
    const endIndex = fullTitle.indexOf('(') - 1;
    return fullTitle.substring(0, endIndex);
  };

  static getHeaderObject = () => {
    return {
      'House Special': { id: 'house-special', num: 0 },
      'All-Day Takeout': { id: 'all-day', num: 1 },
      'Appetizers': { id: 'appetizers', num: 2 },
      'Soup': { id: 'soup', num: 3 },
      'Seafood': { id: 'seafood', num: 4 },
      'Chicken & Duck & Frog': { id: 'chicken-duck-frog', num: 5 },
      'Beef & Lamb': { id: 'beef-lamb', num: 6 },
      'Pork': { id: 'pork', num: 7 },
      'Clay Pot': { id: 'clay-pot', num: 8 },
      'Mu Shu': { id: 'mushu', num: 9 },
      'Lettuce Wraps': { id: 'lettuce-wrap', num: 10 },
      'Vegetables': { id: 'vegetables', num: 11 },
      'Chow Mein & Fun': { id: 'chow-mein', num: 12 },
      'Fried Rice': { id: 'fried-rice', num: 13 },
      'Congee': { id: 'congee', num: 14 },
      'Crab': { id: 'crab', num: 15 },
      'Lobster': { id: 'lobster', num: 16 },
      'Rice Plates & Soup': { id: 'rice-plates', num: 17 },
    };
  };

  static numberToIdObject = () => {
    return {
      0: 'house-special',
      1: 'all-day',
      2: 'appetizers',
      3: 'soup',
      4: 'seafood',
      5: 'chicken-duck-frog',
      6: 'beef-lamb',
      7: 'pork',
      8: 'clay-pot',
      9: 'mushu',
      10: 'lettuce-wrap',
      11: 'vegetables',
      12: 'chow-mein',
      13: 'fried-rice',
      14: 'congee',
      15: 'crab',
      16: 'lobster',
      17: 'rice-plates',
    }
  }

  static getHeaderId = (menuTitle) => {
    const headerObject = MenuHeaderService.getHeaderObject();
    const key = MenuHeaderService.getEnglishTitle(menuTitle);
    return headerObject[key].id;
  }

  static getHeaderNum = (menuTitle) => {
    const headerObject = MenuHeaderService.getHeaderObject();
    const key = MenuHeaderService.getEnglishTitle(menuTitle);
    return headerObject[key].num;
  }

  static jumpUp = (headerNum) => {
    const numberToIdObject = MenuHeaderService.numberToIdObject()
    const toJump = headerNum - 1;
    return `#${numberToIdObject[toJump]}`;
  }

  static jumpDown = (headerNum) => {
    const numberToIdObject = MenuHeaderService.numberToIdObject()
    const toJump = headerNum + 1;
    return `#${numberToIdObject[toJump]}`;
  }
}

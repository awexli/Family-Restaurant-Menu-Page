export class MenuService {
  static getEnglishTitle = (menuTitle: string) => {
    const fullTitle: string = menuTitle;
    // - 1 to exclude index of empty space
    const endIndex: number = fullTitle.indexOf('(') - 1;
    return fullTitle.substring(0, endIndex);
  }

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
  }
}
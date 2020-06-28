import { MenuHeaderService } from './menu/services/menu-header-service';
import MenuModal from '../js/menu-modal';

export class MenuCategoryService {
  static CategoryLocation = () => {
    const categoryId = MenuHeaderService.numberToIdObject();
    const categoryNames = MenuModal.getMenuNames();
    const numOfCategories = 18;
    const result = [];

    for (let i = 0; i < numOfCategories; i++) {
      result.push({
        name: categoryNames[i],
        url: `#${categoryId[i]}`,
      });
    }

    return result;
  };
}

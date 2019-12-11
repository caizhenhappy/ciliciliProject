import ajax from './ajax'


/***** 吃什么 模块 *******/
// 今日菜单的所有菜单分类
export const getTodayMenuCategoryList = () => ajax( '/allScene');
// 菜品菜单
export const getTodayMenuDetail = () => ajax('/menulist');




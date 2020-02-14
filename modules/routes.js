export default class {
  constructor() {
    this.items = [
      { title: "Главная", icon: "home", path: "/" },
      { title: "Опросы", icon: "file", path: "/quizzes" },
      { title: "Пользователи", icon: "user", path: "/users" },
      { title: "Чёрные списки", icon: "flag", path: "/blacklist" },
      { title: "Колл-центр", icon: "phone", path: "/callcenter" },
      { title: "Тестовая страница", icon: "trash", path: "/test" },
    ];
  }
  getItem(route) {
    const item = { title: route.name, icon: "none", path: route.path };
    this.items.forEach(el => {
      if (el.path === route.path) {
        item.title = el.title;
        item.icon = el.icon;
      }
    });
    return item;
  }
  getItems(routes) {
    return routes.map(route => this.getItem(route));
  }
}

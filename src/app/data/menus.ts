export interface Menu {
  menu: number;
  maindish: string;
  dessert: string;
  drink: string;
  gluten: string;
  vegan: string;
  price: number;
  image: string;
}

export const MENUS: Menu[] = [
  {
    menu: 1,
    maindish: 'Lasagna bolognesa con proteína de soya',
    dessert: 'Tiramisú',
    drink: 'Limonada de Frutilla',
    gluten: '',
    vegan: 'Vegano',
    price: 13000,
    image: 'assets/img/daily1.png'
  },

  {
    menu: 2,
    maindish: 'Lasagna de espinaca y setas',
    dessert: 'Tiramisú',
    drink: 'Limonada de Menta',
    gluten: '',
    vegan: 'Vegano',
    price: 13000,
    image: 'assets/img/daily2.png'
  }
];

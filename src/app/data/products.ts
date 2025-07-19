export interface Product {
  name: string;
  gluten: string;
  vegan: string;
  price: number;
  description: string;
  image: string;
  category: 'mdishes' | 'desserts' | 'drinks';
}

export const PRODUCTS: Product[] = [
  // Main dishes
  {
    name: 'Gnocchis Bolognesa',
    gluten: 'Libre de gluten',
    vegan: 'Opción vegana con salsa pomodoro y queso vegano',
    price: 7000,
    description: 'Gnocchis de papa caseros con una salsa bolognesa cocinada a fuego lento con hierbas frescas. Terminado con parmesano rallado al momento.',
    image: 'assets/img/noquis.png',
    category: 'mdishes'
  },
  {
    name: 'Ramen de Miso',
    gluten: 'Opción libre de gluten con fideos de arroz',
    vegan: 'Opción vegana sin huevo',
    price: 6500,
    description: 'Un reconfortante bowl con caldo de verduras y pasta miso, fideos de trigo, tofu suave, champiñones shiitake y huevo. Acompañado de cebollín fresco, un toque de aceite de sésamo tostado y salsa de soya para realzar los sabores umami.',
    image: 'assets/img/ramen.jpeg',
    category: 'mdishes'
  },
  {
    name: 'Arroz con Tofu',
    gluten: 'Libre de gluten',
    vegan: 'Vegano',
    price: 6000,
    description: 'Arroz blanco perfumado con semillas de sésamo, acompañado de tofu dorado y crocante. Incluye una salsa de tamarindo y soya, servida aparte para mezclar al gusto.',
    image: 'assets/img/tofu.jpeg',
    category: 'mdishes'
  },
  {
    name: 'Bowl Ensalada',
    gluten: 'Libre de gluten',
    vegan: 'Vegano',
    price: 6000,
    description: 'Disfruta esta mezcla con palta, lechuga, quinoa, garbanzos crujientes y camote horneado, llena de proteínas, fibra y grasas beneficiosas. Con salsa tahini y semillas tostadas, ¡es nutritiva, saciante y llena de sabor!',
    image: 'assets/img/ensalada.jpg',
    category: 'mdishes'
  },

  // Desserts
  {
    name: 'Tiramisú',
    gluten: 'Libre de gluten',
    vegan: 'Vegano',
    price: 6000,
    description: 'Delicadas capas de bizcocho de almendra tostada, intercaladas con sedosa crema de castañas de cajú aromatizada con café y un final de cacao amargo. Un equilibrio perfecto entre texturas y sabores profundos.',
    image: 'assets/img/tiramisu.jpg',
    category: 'desserts'
  },
  {
    name: 'Tartaleta de Frutilla',
    gluten: 'Libre de gluten',
    vegan: 'Vegano',
    price: 4500,
    description: 'Base crujiente de harina de arroz con un relleno de crema de coco vainillada, coronada con frutillas de temporada. Frescura y contraste en cada bocado.',
    image: 'assets/img/tartaleta.jpg',
    category: 'desserts'
  },

  // Drinks
  {
    name: 'Jugo Fusión Frambuesa',
    gluten: 'Libre de gluten',
    vegan: 'Vegano',
    price: 3000,
    description: 'Refrescante mezcla de frambuesas, jugo de naranja y un toque de menta. Naturalmente dulce y lleno de antioxidantes.',
    image: 'assets/img/jugoframbfus.png',
    category: 'drinks'
  },
  {
    name: 'Jugo Natural de Mango',
    gluten: 'Libre de gluten',
    vegan: 'Vegano',
    price: 3000,
    description: 'Pulpa de mango maduro batido al instante. Cremoso y lleno de sabor tropical.',
    image: 'assets/img/jugomango.jpg',
    category: 'drinks'
  },
  {
    name: 'Infusión de Menta',
    gluten: 'Libre de gluten',
    vegan: 'Vegano',
    price: 2000,
    description: 'Relajante infusión de hojas de menta fresca, ideal para digerir mejor o simplemente disfrutar un momento de calma.',
    image: 'assets/img/infusionmenta.jpg',
    category: 'drinks'
  }
];

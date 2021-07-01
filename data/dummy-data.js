import Category from '../models/Category';
import SubCategory from '../models/SubCategory';
import Product from '../models/Product';
//import Store from '../models/Store';
import Brand from '../models/Brand';

export const CATEGORIES = [
  new Category('c1', 'Computadora', 'laptop'),
  new Category('c2', 'Componentes', 'memory'),
  new Category('c3', 'Periféricos', 'keyboard'),
  /**
   *
   */
];

export const SUBCATEGORIES = [
  new SubCategory('sc1', 'Basic', 'laptop', 'material-community', 'c1'),
  new SubCategory(
    'sc2',
    'Medium',
    'laptop-chromebook',
    'material-community',
    'c1',
  ),
  new SubCategory('sc3', 'High', 'laptop-mac', 'material-community', 'c1'),
  new SubCategory(
    'sc4',
    'Design',
    'video-3d-variant',
    'material-community',
    'c1',
  ),
  new SubCategory(
    'sc5',
    'Gaming',
    'gamepad-variant',
    'material-community',
    'c1',
  ),
  new SubCategory(
    'sc6',
    'Streaming',
    'youtube-gaming',
    'material-community',
    'c1',
  ),
  new SubCategory('sc7', 'CPU', 'cpu', 'feather', 'c2'),
  new SubCategory('sc8', 'RAM', 'memory', 'font-awesome-5', 'c2'),
  new SubCategory('sc9', 'Video', 'videogame-asset', 'material', 'c2'),
  new SubCategory(
    'sc10',
    'Power Suply',
    'power-settings',
    'material-community',
    'c2',
  ),
  new SubCategory('sc11', 'MotherBoard', 'circuit-board', 'octicon', 'c2'),
  new SubCategory('sc12', 'Hard Disk', 'harddisk', 'material-community', 'c2'),

  new SubCategory('sc13', 'USB', 'usb', 'material', 'c3'),
  new SubCategory('sc14', 'Monitor', 'monitor', 'material', 'c3'),
  new SubCategory('sc15', 'Keyboard', 'keyboard', 'material', 'c3'),
  new SubCategory('sc16', 'Mouse', 'mouse', 'material', 'c3'),
  new SubCategory('sc17', 'Printer', 'printer', 'material-community', 'c3'),
  new SubCategory('sc18', 'Furniture', 'desk', 'material-community', 'c3'),
  /**
   *
   */
];

export const Stores = [
  {
    id: 'str1',
    name: 'AEON',
    description:
      'Somos una empresa dedicada a la venta y distribución de equipos de alto rendimiento para aplicaciones exigentes y equipos Gamer ,servicios tecnológicos e informáticos, diferenciados por nuestra calidad de productos y sistemas seguros, satisfaciendo las necesidades de nuestros clientes con el conocimiento, la tecnología, valores de ética, responsabilidad y trabajo en equipo, logrando la excelencia.',
    logo:
      'https://www.aeon.com.sv/web/image/website/1/logo/Aeon%20Computers?unique=062c6e2',
    correo: 'ventas@aeon.com.sv',
    telefono: '22103865',
    coords: {
      latitude: 13.702328,
      longitude: -89.237885,
    },
    Subcategories: [
      {
        id: 'sc2',
        name: 'Medium',
        icon: 'laptop-chromebook',
        iconType: 'material-community',
        color: 'red',
        Products: [
          {
            id: 'p3',
          },
          {
            id: 'p4',
          },
        ],
      },
      {
        id: 'sc1',
        name: 'Basic',
        icon: 'laptop',
        iconType: 'material-community',
        color: 'yellow',
        Products: [
          {
            id: 'p1',
          },

          {
            id: 'p2',
          },
        ],
      },
    ],
    isSelected: false,
  },
  {
    id: 'str2',
    name: 'KPC Hardware',
    description:
      'KPC Hardware, fue creada como una división de G Group S.A., con la visión de convertirse en empresa líder en ventas y soporte técnico en el mercado de tecnologías para usuario final de gama media y alta en El Salvador.   Tenemos como propósito, representar las mejores marcas de hardware del mercado mundial, que permitan a nuestros clientes de diseño, ingeniería y entusiastas “gamers”, satisfacer y exceder cualquier necesidad que sus equipos demanden, brindando para ello, la debida asesoría técnica que otorgue a nuestros compradores, una inversión efectiva y duradera, además de los precios más justos posibles y la mejor atención personalizada que podamos entregar.  Con énfasis en equipos silenciosos y bajas temperaturas de operación, alargamos la vida útil y maximizamos la inversión que nuestros clientes realizan, cuando adquieren nuestros productos.',
    logo: 'https://kpchardware.com/img/kpc-hardwware-1508193268.jpg',
    correo: 'info@kpchardware.com',
    telefono: '22337600',
    coords: {
      latitude: 13.702978,
      longitude: -89.245679,
    },
    Subcategories: [
      {
        id: 'sc4',
        name: 'Design',
        icon: 'video-3d-variant',
        iconType: 'material-community',
        color: 'red',
        Products: [
          {
            id: 'p7',
          },
          {
            id: 'p8',
          },
        ],
      },
      {
        id: 'sc1',
        name: 'Basic',
        icon: 'laptop',
        iconType: 'material-community',
        color: 'yellow',
        Products: [
          {
            id: 'p1',
          },

          {
            id: 'p2',
          },
        ],
      },
    ],
    isSelected: false,
  },
  {
    id: 'str3',
    name: 'XHT',
    description:
      'Xtreme Hardware Technology , Productos Garantizados Al Mejor Precio y Con La Mejor Calidad. Escribenos , Recuerda Si no lo tenemos ¡lo conseguimos!',
    logo:
      'https://scontent.fsal5-1.fna.fbcdn.net/v/t1.0-9/43524475_1146098055541118_6706809367934533632_o.png?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=X23_W_gqXCEAX9tfqb1&_nc_ht=scontent.fsal5-1.fna&oh=3ea892b194b4c5faca49539667f07512&oe=5FEB2F2A',
    correo: 'xht@gmail.com',
    telefono: '25275703',
    coords: {
      latitude: 13.675334,
      longitude: -89.263428,
    },
    Subcategories: [
      {
        id: 'sc3',
        name: 'High',
        icon: 'laptop-mac',
        iconType: 'material-community',
        color: 'green',
        Products: [
          {
            id: 'p5',
          },
          {
            id: 'p6',
          },
        ],
      },
      {
        id: 'sc4',
        name: 'Design',
        icon: 'video-3d-variant',
        iconType: 'material-community',
        color: 'red',
        Products: [
          {
            id: 'p7',
          },
          {
            id: 'p8',
          },
        ],
      },
    ],
  },
  {
    id: 'str4',
    name: 'Kaifa Store',
    description:
      'Somos una empresa 100% Salvadoreña  dedicada a brindarle lo más novedoso en Computadoras de Alto Rendimiento y sus componentes principales. Con productos de las mejores marcas internacionales en línea de Cases, Procesadores, Disipadores, Moherboards, Tarjetas de Video, Memoria Ram, Discos Duros, SSD, Enfriamiento líquido Laptops y Periféricos como Impresores, Proyectores Teclados, Mouse Básicos y Gaming entre otros.',
    logo:
      'https://scontent.fsal5-1.fna.fbcdn.net/v/t31.0-8/25488441_1517593111695710_8058745423180531550_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=XbgLHLaErogAX_dnMJ0&_nc_oc=AQliebC5kfqP0EHzwLqcT4tqv5XmIGC531vYjhC0w4okMfCP844I4ogeOHBXThOSdOg&_nc_ht=scontent.fsal5-1.fna&oh=da0df58bdc5fc5064c0f4e81f4c7cf26&oe=5FED6AF5',
    correo: 'kayfa.info49@gmail.com',
    telefono: '22604027',
    coords: {
      latitude: 13.7008341,
      longitude: -89.2202497,
    },
    Subcategories: [
      {
        id: 'sc2',
        name: 'Medium',
        icon: 'laptop-chromebook',
        iconType: 'material-community',
        color: 'red',
        Products: [
          {
            id: 'p3',
          },
          {
            id: 'p4',
          },
        ],
      },
      {
        id: 'sc3',
        name: 'High',
        icon: 'laptop-mac',
        iconType: 'material-community',
        color: 'green',
        Products: [
          {
            id: 'p5',
          },
          {
            id: 'p6',
          },
        ],
      },
      {
        id: 'sc4',
        name: 'Design',
        icon: 'video-3d-variant',
        iconType: 'material-community',
        color: 'red',
        Products: [
          {
            id: 'p7',
          },
          {
            id: 'p8',
          },
        ],
      },
      {
        id: 'sc5',
        name: 'Gaming',
        icon: 'gamepad-variant',
        iconType: 'material-community',
        color: 'cyan',
        Products: [
          {
            id: 'p9',
          },
          {
            id: 'p10',
          },
        ],
      },
    ],
  },
];


export const Details = [
  {
    id: 'p1',
    marca: 'Lenovo',
    modelo: 'IdeaPad 3',
    sistema_operativo: 'Windows 10',
    memoria: '256GB SSD',
    price: '$450',
    caracteristicas: [' 8GB RAM -', ' Intel Pentium 7 -', ' 17 pulgadas '],
    subCategory: 'sc1',
    image:
      'https://www.lenovo.com/medias/lenovo-thinkpad-l390-5th-gen-gallery-07.jpg?context=bWFzdGVyfHJvb3R8MTAzMjI5fGltYWdlL2pwZ3xoMDAvaDViLzk4NjMxNTc3NzY0MTQuanBnfDIxYmY4NWEzMDE2ZGI4M2IzODRhOTY0NTcyMDhhZDExZDlmNmI1MmExYjE1MzExZDhkNzQwOTNlNGQzYjQ4Zjk',
    Stores: ['str1', 'str2'],
  },
  {
    id: 'p2',
    marca: 'Mini PC Asrock',
    modelo: '90BXG3701',
    sistema_operativo: 'Windows 10',
    memoria: 'Espacio para dos discos duros/HDD de 2,5',
    price: '$170.00',
    caracteristicas: [
      ' DDR4 de alta velocidad - DDR4-2933MHz (Ryzen) -',
      ' AA20BAOW intel -',
      ' -',
    ],
    subCategory: 'sc1',
    image:
      'https://aeon.com.sv/web/image/product.product/6309/image_1024/%5B6763%5D%20Mini%20PC%20Asrock%20%2090BXG3701-A20BAOW%20intel?unique=5cc788f',
    Stores: ['str1', 'str2'],
  },

  {
    id: 'p3',
    marca: 'Mini PC ZOTAC',
    modelo: 'CI620 NANO',
    sistema_operativo: 'Windows 10',
    memoria: 'SSD 120 GB',
    price: '$399.00',
    caracteristicas: [' DDR4 4GB -', ' intel I3-8130U -', ' -'],
    subCategory: 'sc2',
    image:
      'https://aeon.com.sv/web/image/product.product/5148/image_1024/%5B5039%5D%20Mini%20PC%20ZOTAC%20CI620%20NANO%20I3-8130U%2C%204GB%20DDR4%2C%20SSD%20120GB?unique=b093622',
    Stores: ['str1', 'str4'],
  },

  {
    id: 'p4',
    marca: 'Mini PC Asrock',
    modelo: 'G4930',
    sistema_operativo: 'Windows 10',
    memoria: 'SSD 240GB',
    price: '$332.00',
    caracteristicas: [' 8GB DDR4 -', ' Intel Celeron G4930 -', ' -'],
    subCategory: 'sc2',
    image:
      'https://aeon.com.sv/web/image/product.product/6748/image_1024/Mini%20PC%20Asrock%20Intel%20G4930%2C%208GB%20DDR4%2C%20SSD%20240GB%20WiFi%20%288GB%2C%20Teclado%20y%20Mouse%20B%C3%A1sico%29?unique=827cdaf',
    Stores: ['str1', 'str4'],
  },

  {
    id: 'p5',
    marca: 'HP',
    modelo: 'PROBOOK 440 G7',
    sistema_operativo: 'Windows 10 Pro 64-bit',
    memoria: 'SATA de 2.5″ de 1 TB',
    price: '$332.00',
    caracteristicas: [
      ' 4 GB DDR4 SDRAM -',
      ' Intel® Core™ i7-10510U (4.90 GHz) -',
      'LCD delgada de 15.6″ (1366 x 768)',
    ],
    subCategory: 'sc3',
    image: 'https://kpchardware.com/img/p/1/0/0/7/8/10078-home_default.jpg',
    Stores: ['str3', 'str4'],
  },

  {
    id: 'p6',
    marca: 'HP',
    modelo: 'OMEN 15-dc1002la',
    sistema_operativo: 'Windows 10',
    memoria: '512GB SSD',
    price: '$1540',
    caracteristicas: [' 8GB RAM -', ' Intel Core i5 -', ' 15,6" -'],
    subCategory: 'sc3',
    image:
      'https://www.kayfastore.com/assets/images/galleries/1591026754142230.jpg',
    Stores: ['str3', 'str4'],
  },

  {
    id: 'p7',
    marca: 'CPU Panzer',
    modelo: 'PRO 3700X',
    sistema_operativo: 'Windows 10',
    memoria: 'SSD 240GB',
    price: '$1,550.00',
    caracteristicas: [
      ' 16GB Ram -',
      ' AMD Ryzen™ 7 3700X 3.6Ghz up to 4.2Ghz AM4 -',
      '',
    ],
    subCategory: 'sc4',
    image:
      'https://scontent.fsal1-1.fna.fbcdn.net/v/t1.0-9/121537082_3324789797570024_5551759657868526251_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=-0IBZzPn8zkAX92diQB&_nc_ht=scontent.fsal1-1.fna&oh=996b39a38967891120b76fa4afcaa1f9&oe=5FEE504B',
    Stores: ['str2', 'str3', 'str4'],
  },

  {
    id: 'p8',
    marca: 'DELL',
    modelo: 'LATITUDE 5490',
    sistema_operativo: 'Windows 10 PRO',
    memoria: 'SSD 256GB',
    price: '$1,599.00',
    caracteristicas: [
      ' RAM 8GB -',
      ' INTEL CORE I7 8650U -',
      ' PANTALLA LED HD 14',
    ],
    subCategory: 'sc4',
    image:
      'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/latitude_notebooks/14_5490/non_touch/notebooks-latitude-14-5490-nt-campaign-hero-504x350-ng.psd?fmt=jpg',
    Stores: ['str2', 'str3', 'str4'],
  },

  {
    id: 'p9',
    marca: 'MeshTown',
    modelo: 'CPU Gaming',
    sistema_operativo: 'Windows 10 PRO',
    memoria: 'SSD 240GB',
    price: '$1,599.00',
    caracteristicas: [' 16GB RAM -', ' Ryzen 3 3100 -', ''],
    subCategory: 'sc5',
    image:
      'https://aeon.com.sv/web/image/product.product/6803/image_1024/CPU%20Gaming%20MeshTown%2C%20Ryzen%203%203100%2C%2016GB%20RAM%2C%20SSD%20240GB%2C%20RX580%208GB%2C%20600W%2080+%20RGB%20%28Ryzen%203100%29?unique=2c012b4',
    Stores: ['str1', 'str4'],
  },

  {
    id: 'p10',
    marca: 'Acer',
    modelo: 'Nitro 5',
    sistema_operativo: 'Windows 10 Home',
    memoria: 'SSD 256GB',
    price: '$599.99',
    caracteristicas: [' 8GB RAM -', ' Intel Core i5-9300H -', '15.6 Pulgadas'],
    subCategory: 'sc5',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg',
    Stores: ['str1', 'str4'],
  },

  {
    id: 'p11',
    marca: 'Computadora Completa',
    modelo: 'GT710',
    sistema_operativo: 'Windows 10 Home',
    memoria: 'SSD 240GB',
    price: '$650.00',
    caracteristicas: [' 8GB RAM -', ' Intel Core i5 -', 'Monitor Samsung 22”'],
    subCategory: 'sc6',
    image:
      'https://xht.com.sv/wp-content/uploads/2020/08/photo_2020-08-19_22-06-55.jpg',
    Stores: ['str1'],
  },

  {
    id: 'p12',
    marca: 'Computadora AMD Ryzen 3',
    modelo: '3200G',
    sistema_operativo: 'Windows 10 Home',
    memoria: 'SSD 240GB',
    price: '$650.00',
    caracteristicas: [' 8GB RAM -', ' AMD Ryzen 3 3200G -', ''],
    subCategory: 'sc6',
    image:
      'https://xht.com.sv/wp-content/uploads/2020/09/Computadora-AMD-Ryzen-3-3200G-8GB.jpg',
    Stores: ['str1'],
  },
];
import Category from '../models/Category';
import SubCategory from '../models/SubCategory';
import Product from '../models/Product';
import Store from '../models/Store';
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

export const Brands = [
  new Brand(
    'b1',
    'HP',
    'Nuestra visión consiste en crear tecnología que mejore la vida de todos, en todas partes: cada persona, cada organización y cada comunidad de todo el mundo. Esto nos motiva, nos inspira, a hacer lo que hacemos. A crear lo que creamos. A inventar y a reinventar. A brindar experiencias que asombren. No dejaremos de avanzar, porque tú no dejas de avanzar. Tú estás reinventando tu manera de trabajar. Tu manera de jugar. Tu manera de vivir. Con nuestra tecnología, reinventarás tu mundo.',
  ),
];

export const Stores = [
  new Store(
    's1',
    'Kaifa',
    'Somos una empresa 100% Salvadoreña  dedicada a brindarle lo más novedoso en Computadoras de Alto Rendimiento y sus componentes principales. Con productos de las mejores marcas internacionales en línea de Cases, Procesadores, Disipadores, Moherboards, Tarjetas de Video, Memoria Ram, Discos Duros, SSD, Enfriamiento líquido Laptops y Periféricos como Impresores, Proyectores Teclados, Mouse Básicos y Gaming entre otros',
  ),
];

export const PRODUCTS = [
  new Product(
    'p1',
    'Laptop HP OMEN 15-dc1002la Intel Core i5',
    '$1540',
    'Laptop HP Pavilion Gaming 15-dc1002la, GTX 1650 Max-Q 4GB, i5-9300H 8GB 512GB SSD 15.6" Win10 - 4PG18LA#ABM\
    Pantalla con retroiluminación WLED FHD IPS antirreflectante con microbordes, de 15,6" en diagonal (1920 x 1080)\
    Intel® Core™ i5 9300H Processor (frecuencia base de 2,4 GHz, base de hasta 4,1 GHz con tecnología Intel® Turbo Boost, 8 MB de caché y 4 núcleos)\
    SDRAM DDR4-2666 de 8 GB (1 x 8 GB)\
    SSD M.2 PCIe® NVMe™ de 512 GB\
    Gráficos NVIDIA® GeForce® GTX 1650 (GDDR5 de 4 GB dedicada)\
    Windows 10 Home 64-bit\
    Marca: HP\
    PN: 4PG18LA#ABM',
    'https://www.kayfastore.com/assets/images/galleries/1591026754142230.jpg',
    'false',
    'b1',
    'sc1',
    'c1',
    's1',
  ),
  new Product(
    'p2',
    'Laptop Acer NITRO 5 Core i5 8300HQ',
    '$1099',
    'Windows 10 homenvidia GeForce GTX 1050 ti procesador de gráficos de 4 GB Dedicados; 8 generación Intel Core i5 – 8300h; visualización de 15.6"; 8 GB de memoria; 1TB HDD; Bluetooth; Salida HDMI; Disco CD/DVD no incluido',
    'https://www.kayfastore.com/assets/images/products/1591026217LLMy1Uqf.png',
    'false',
    'b1',
    'sc2',
    'c1',
    's1',
  ),
  new Product(
    'p3',
    "DELL LATITUDE 7400 / 14'' / 8GB / 256 GB M.2 / I7 8665U 4.8 GHZ",
    '$2,078.95',
    'Especificaciones principales: Pantalla: 14.0" FHD (1920 x 1080) AG, Non-Touch, SLP, 2.7mm Cam/Mic, WLAN capable, Carbon Fiber Microprocesador: 8ª generación del Procesador Intel® Core™ i7-8665U (8MB Caché, hasta 4,80GHz) Memoria RAM: 8GB de Memoria DDR4, sin paridad [Non-ECC] (1 DIMM x 8GB)  Procesador gráfico: Gráficos integrados Intel UHD Graphics 620',
    'https://kpchardware.com/img/p/1/0/4/2/4/10424-thickbox_default.jpg',
    'false',
    'b1',
    'sc3',
    'c1',
    's1',
  ),
];

export const Details = [
  {
    // Inventario: 'Catalogo_Laptops',
    // Lugar: 'San Salvador',
    // Periodo: 2020,
    // existencias: true,
        marca: 'Lenovo',
        modelo: 'IdeaPad 3',
        sistema_operativo: 'Windows 10',
        memoria: '256GB SSD',
        price: '$450',
        caracteristicas: [
          ' 8GB RAM -' , 
          ' Intel Pentium 7 -' ,
          ' 17 pulgadas '],
        subCategory: "sc1",
        image: "https://www.lenovo.com/medias/lenovo-thinkpad-l390-5th-gen-gallery-07.jpg?context=bWFzdGVyfHJvb3R8MTAzMjI5fGltYWdlL2pwZ3xoMDAvaDViLzk4NjMxNTc3NzY0MTQuanBnfDIxYmY4NWEzMDE2ZGI4M2IzODRhOTY0NTcyMDhhZDExZDlmNmI1MmExYjE1MzExZDhkNzQwOTNlNGQzYjQ4Zjk"
      },
      {
        marca: 'HP',
        modelo: 'Chromebook 11',
        sistema_operativo: 'Windows 10',
        memoria: '16GB SSD',
        price: '$260',
        caracteristicas: [
          ' 4GB RAM -', 
          ' Intel Celeron -', 
          ' 11,6 pulgadas '],
        subCategory: "sc2",
        image: "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/4/P/4PF41LA-1_T1558726893.png"
      },

      {
        marca: 'ACER',
        modelo: 'Aspire 5',
        sistema_operativo: 'Windows 10',
        memoria: '128GB PCIe NVMe SSD',
        price: '$500',
        caracteristicas: [
          ' 4GB RAM -' ,
          ' AMD Ryzen3 3200U DualCore -' ,
          ' 15,6 pulgadas ' ,
        ],
        subCategory: "sc3",
        image: "https://tiendarg.com.ar/pub/media/catalog/product/cache/9acdd941c403ec1171fed4e45ec43f96/a/c/acer-aspire-3-a315-54-54k-42-42g-wp-win10-black-02.jpg"
      },
];

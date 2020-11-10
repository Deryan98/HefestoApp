import Category from '../models/Category';
import SubCategory from '../models/SubCategory';
import Product from '../models/Product';
import Store from '../models/Store';
import Brand from '../models/Brand'

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
   new SubCategory('sc2', 'Medium', 'laptop-chromebook', 'material-community', 'c1'),
   new SubCategory('sc3', 'High', 'laptop-mac', 'material-community', 'c1'),
   new SubCategory('sc4', 'Design', 'video-3d-variant', 'material-community', 'c1'),
   new SubCategory('sc5', 'Gaming', 'gamepad-variant', 'material-community', 'c1'),
   new SubCategory('sc6', 'Streaming', 'youtube-gaming', 'material-community', 'c1'),
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
    'Nuestra visión consiste en crear tecnología que mejore la vida de todos, en todas partes: cada persona, cada organización y cada comunidad de todo el mundo. Esto nos motiva, nos inspira, a hacer lo que hacemos. A crear lo que creamos. A inventar y a reinventar. A brindar experiencias que asombren. No dejaremos de avanzar, porque tú no dejas de avanzar. Tú estás reinventando tu manera de trabajar. Tu manera de jugar. Tu manera de vivir. Con nuestra tecnología, reinventarás tu mundo.'
  )
]

export const Stores = [
  new Store(
    's1',
    'Kaifa',
    'Somos una empresa 100% Salvadoreña  dedicada a brindarle lo más novedoso en Computadoras de Alto Rendimiento y sus componentes principales. Con productos de las mejores marcas internacionales en línea de Cases, Procesadores, Disipadores, Moherboards, Tarjetas de Video, Memoria Ram, Discos Duros, SSD, Enfriamiento líquido Laptops y Periféricos como Impresores, Proyectores Teclados, Mouse Básicos y Gaming entre otros'
  )
]

export const PRODUCTS = [
  new Product(
    'p1',
    'Laptop HP OMEN 15-dc1002la Intel Core i5',
    '$1540',
    "Laptop HP Pavilion Gaming 15-dc1002la, GTX 1650 Max-Q 4GB, i5-9300H 8GB 512GB SSD 15.6\" Win10 - 4PG18LA#ABM\
    Pantalla con retroiluminación WLED FHD IPS antirreflectante con microbordes, de 15,6\" en diagonal (1920 x 1080)\
    Intel® Core™ i5 9300H Processor (frecuencia base de 2,4 GHz, base de hasta 4,1 GHz con tecnología Intel® Turbo Boost, 8 MB de caché y 4 núcleos)\
    SDRAM DDR4-2666 de 8 GB (1 x 8 GB)\
    SSD M.2 PCIe® NVMe™ de 512 GB\
    Gráficos NVIDIA® GeForce® GTX 1650 (GDDR5 de 4 GB dedicada)\
    Windows 10 Home 64-bit\
    Marca: HP\
    PN: 4PG18LA#ABM",
    'https://www.kayfastore.com/assets/images/galleries/1591026754142230.jpg',
    'false',
    'b1',
    'sc1',
    'c1',
    's1'
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
    's1'
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
    's1'
  ),
  new Product(
    'p4',
    "Mini PC Asrock 90BXG3G01 A300W RYZEN",
    '$166.00',
    'Especificaciones principales:Tecnología AMD Fluid Motion, HDMI, DisplayPort, D-Sub, Función RAID 0/1 de la ayuda, 2 x 2.5" SATA 6Gb disco duro, PCIe Gen3 x4 - M2_2 M.2 (2280) – PCIe Gen3 x2/x4, DDR4 de alta velocidad - DDR4-2933MHz (Ryzen)Socket CPU - Picasso, Raven Ridge, Bristol ',
    'https://aeon.com.sv/web/image/product.product/6379/image_1024/%5B6764%5D%20Mini%20PC%20Asrock%2090BXG3G01%20A300W%20RYZEN?unique=eaa02f9',
    'false',
    'b1',
    'sc1',
    'c1',
    's1'
  ),
  new Product(
    'p5',
    "Mini PC Asrock 90BXG3701-A20BAOW intel",
    '$170.00',
    'Especificaciones principales:Nuevo factor de forma Intel® Mini-STX Soporte Socket 1151 Tipo CPU (máx. TDP 65W) Tres salidas de gráficos (D-Sub/HDMI/DP) Espacio para ventiladores Intel® Box estándar USB 3.1 Gen1 Tipo-C Espacio para dos discos duros/HDD de 2,5" 1 x ranura M.2 para módulo WiFi + BT 1 x ranura SSD M.2 (PCIe Gen3 x 4) Memoria Ram No incluida Disco Duro No incluido. Procesador No incluido. ',
    'https://aeon.com.sv/web/image/product.product/6309/image_1024/%5B6763%5D%20Mini%20PC%20Asrock%20%2090BXG3701-A20BAOW%20intel?unique=5cc788f',
    'false',
    'b1',
    'sc1',
    'c1',
    's1'
  ),
  new Product(
    'p6',
    "Mini PC ZOTAC CI620 NANO I3-8130U, 4GB DDR4, SSD 120GB",
    '$399.00',
    'Especificaciones principales:Procesador intel I3-8130U Memoria Ram DDR4 4GB Unidad de Estado Sólido SSD 120 GB WIFI/BT USB 3.0  USB TIPO C ',
    'https://aeon.com.sv/web/image/product.product/5148/image_1024/%5B5039%5D%20Mini%20PC%20ZOTAC%20CI620%20NANO%20I3-8130U%2C%204GB%20DDR4%2C%20SSD%20120GB?unique=b093622',
    'false',
    'b1',
    'sc2',
    'c1',
    's1'
  ),
  new Product(
    'p7',
    "Mini PC Asrock Intel G4930, 8GB DDR4, SSD 240GB WiFi",
    '$320.00',
    'Especificaciones principales:Mini PC Intel 8GB Ram DDR4 SSD 240GB Sata Intel Celeron G4930 ',
    'https://aeon.com.sv/web/image/product.product/6748/image_1024/Mini%20PC%20Asrock%20Intel%20G4930%2C%208GB%20DDR4%2C%20SSD%20240GB%20WiFi%20%288GB%2C%20Teclado%20y%20Mouse%20B%C3%A1sico%29?unique=827cdaf',
    'false',
    'b1',
    'sc2',
    'c1',
    's1'
  ),
  new Product(
    'p8',
    "HP ProBook 440 G7 / 15.6'' / 4GB / 1TB HDD / INTEL i7-10510U 4.9 GHZ",
    '$1,236.84',
    'Especificaciones principales:Pantalla: LCD delgada de 15.6″ (1366 x 768) Microprocesador: Intel® Core™ i7-10510U (4.90 GHz)  Memoria RAM: 4 GB DDR4 SDRAM Procesador gráfico: NVIDIA GeForce MX250 Almacenamiento: SATA de 2.5″ de 1 TB Lector de discos ópticos: No Webcam: Sí Sistema operativo: Windows 10 Pro 64-bit ',
    'https://kpchardware.com/img/p/1/0/0/7/8/10078-home_default.jpg',
    'false',
    'b1',
    'sc3',
    'c1',
    's1'
  ),
  new Product(
    'p9',
    "Laptop HP OMEN 15-dc1002la Intel Core i5",
    '$1,540.00',
    'Especificaciones principales:Laptop HP Pavilion Gaming 15-dc1002la, GTX 1650 Max-Q 4GB, i5-9300H 8GB 512GB SSD 15.6" Win10 - 4PG18LA#ABM Pantalla con retroiluminación WLED FHD IPS antirreflectante con microbordes, de 15,6" en diagonal (1920 x 1080) Intel® Core™ i5 9300H Processor (frecuencia base de 2,4 GHz, base de hasta 4,1 GHz con tecnología Intel® Turbo Boost, 8 MB de caché y 4 núcleos) SDRAM DDR4-2666 de 8 GB (1 x 8 GB) SSD M.2 PCIe® NVMe™ de 512 GB Gráficos NVIDIA® GeForce® GTX 1650 (GDDR5 de 4 GB dedicada) Windows 10 Home 64-bit Marca: HP PN: 4PG18LA#ABM ',
    'https://kpchardware.com/img/p/1/0/0/7/8/10078-home_default.jpg',
    'false',
    'b1',
    'sc3',
    'c1',
    's1'
  ),
  new Product(
    'p10',
    "CPU Panzer PRO 3700X, 16GB Ram, SSD 240GB, 1TB HDD, RX 5700, 80+Bronze",
    '$1,611.00',
    'Especificaciones principales: Case Cougar Panzer MAX-G Full Tower Motherboard Gigabyte B450 AORUS PRO Wifi AM4 AMD Procesador AMD Ryzen™ 7 3700X 3.6Ghz up to 4.2Ghz AM4 Memoria Ram PNY DDR4 16GB 3200Mhz XRGB RGB 2x8GB Disco Duro de Estado Solido A400 240GB 2.5" Kingston Disco Duro 1TB 7200rpm 3.5 SATA 6Gb/s BarraCuda Seagate Tarjeta de Video Sapphire Nitro RX 5700 OC Fuente de Poder Apevia Signature 1050W Semi Modular 80+ Bronze',
    'https://aeon.com.sv/web/image/product.product/6726/image_1024/CPU%20Panzer%20PRO%203700X%2C%2016GB%20Ram%2C%20SSD%20240GB%2C%201TB%20HDD%2C%20RX%205700%2C%2080+Bronze%20%2816GB%2C%20SSD240%2C%20Cooler%20de%20Stock%29?unique=3d76064',
    'false',
    'b1',
    'sc4',
    'c1',
    's1'
  ),new Product(
    'p11',
    "LAPTOP DELL LATITUDE 5490 PROC. INTEL CORE I7 8650U DISCO SOLIDO 256GB MEMORIA RAM 8GB PANTALLA LED HD 14 W10 PRO",
    '$1,599.00',
    'Especificaciones principales: • Marca Dell • Nombre del modelo 5490 • Capacidad de la memoria RAM 8 GB • Ranuras de memoria disponibles 2x SO-DIMM • Capacidad máxima de la memoria RAM 32 GB • Tecnología de la memoria RAM SO-DIMM, DDR4-SDRAM • Capacidad del disco 256 GB • Interfaz del disco duro Serial ATA • Sistema operativo Windows 10 Pro • Número de procesadores 4',
    'data:image/jpeg;base64,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',
    'false',
    'b1',
    'sc4',
    'c1',
    's1'
  ),
  new Product(
    'p12',
    "Laptop Lenovo IdealPad 3 17 AMD Ryzen 7 3700U 12GB, 1TB + 128GB SSD Platinum Gre",
    '$949.00',
    'Especificaciones principales:Procesador: AMD Ryzen 7 Color: Gris platino Resolución máxima: 1366 x 768 RAM Tamaño: 12 GB Tamaño de pantalla: 17.3 pulgadas Serie: IdeaPad Capacidad SSD: 128 GB Capacidad del disco duro: 1 TB Peso del artículo: 5.39 libras',
    'https://aeon.com.sv/web/image/product.product/6800/image_1024/%5B08326%5D%20Laptop%20Lenovo%20IdealPad%203%2017%22%20AMD%20Ryzen%207%203700U%2012GB%2C%201TB%20+%20128GB%20SSD%20Platinum%20Gre?unique=80ab98e',
    'false',
    'b1',
    'sc4',
    'c1',
    's1'
  ),
  new Product(
    'p13',
    "CPU Gaming MeshTown, Ryzen 3 3100, 16GB RAM, SSD 240GB, RX580 8GB, 600W 80+ RGB",
    '$773.00',
    'Especificaciones principales:Procesador Ryzen 3 3100 3.9Ghz Stealth Cooler Motherboard MSI A320M-A PRO MAX AM4 DDR4 Disco Duro de Estado Solido A400 240GB 2.5" Kingston Memoria Ram PNY DDR4 16GB 3200Mhz XLR RGB 2x8 Fuente de Poder AeroCool Cylon 600w RGB 80 Plus Bronce Tarjeta de Video Sapphire Pulse RX 580 8GB Case Cougar MX331 Mesh Windows ATX ',
    'https://aeon.com.sv/web/image/product.product/6803/image_1024/CPU%20Gaming%20MeshTown%2C%20Ryzen%203%203100%2C%2016GB%20RAM%2C%20SSD%20240GB%2C%20RX580%208GB%2C%20600W%2080+%20RGB%20%28Ryzen%203100%29?unique=2c012b4',
    'false',
    'b1',
    'sc5',
    'c1',
    's1'
  ),
  new Product(
    'p14',
    "CPU Gaming MidNight GZEN , Ryzen 5 3500X, 8GB RAM, SSD 240GB, RX 580 8GB, 600W 80+ RGB",
    '$786.00',
    'Especificaciones principales:rocesador AMD Ryzen 5 3500X 65w AM4 Motherboard MSI A320M-A PRO MAX AM4 DDR4 Disco Duro de Estado Solido A400 240GB 2.5" Kingston Memoria Ram PNY DDR4 8GB 3200Mhz XLR RGB Case Gaming CQ-07 Micro ATX No Fans Tarjeta de Video Sapphire Pulse RX 580 8GB Fuente de Poder AeroCool Cylon 600w RGB 80 Plus Bronce  ',
    'https://aeon.com.sv/web/image/product.product/6805/image_1024/%5B08327%5D%20CPU%20Gaming%20MidNight%20GZEN%20%2C%20Ryzen%205%203500X%2C%208GB%20RAM%2C%20SSD%20240GB%2C%20RX%20580%208GB%2C%20600W%2080+%20RGB?unique=f2ac94c',
    'false',
    'b1',
    'sc5',
    'c1',
    's1'
  ),
  new Product(
    'p15',
    "CPU Frost Gaming i3 9100F, 8GB DDR4, HDD 1TB, RX 5500XT 8GB, 600W 80+",
    '$722.00',
    'Especificaciones principales:Procesador Intel Core i3-9100F 3.6Ghz LGA 1151 9va Gen Motherboard MSI H310 LGA 1151 DDR4 VGA/DVI/HD Memoria ram PNY XRL8 Gaming 8GB DDR4 3200Mhz Disco Duro 1TB 7200rpm 3.5 SATA 6Gb/s BarraCuda Seagate Tarjeta de video Sapphire Pulse Radeon RX 5500XT 8GB GDDR6 Case AeroCool Aero One Mini Frost-G-BK-v1 Fuente de Poder AeroCool Cylon 600w RGB 80 Plus Bronce  ',
    'https://aeon.com.sv/web/image/product.product/6772/image_1024/%5B08298%5D%20CPU%20Frost%20Gaming%20i3%209100F%2C%208GB%20DDR4%2C%20HDD%201TB%2C%20RX%205500XT%208GB%2C%20600W%2080+?unique=9d5f8b8',
    'false',
    'b1',
    'sc5',
    'c1',
    's1'
  ),
  new Product(
    'p16',
    "Computadora Completa Intel Core i5 9400F 8GB GT710",
    '$750.00',
    'Especificaciones principales:Procesador Intel Core i5 9400f Motherboard MSI H310 PRO VDH Memoria RAM ADATA DDR4 8GB 2666MHz SSD WD Green 240GB Tarjeta de Video Asus GT710 GB Case centra Fuente de poder centra 500W Monitor Samsung 22” 1080p S22D300NY ',
    'https://xht.com.sv/wp-content/uploads/2020/08/photo_2020-08-19_22-06-55.jpg',
    'false',
    'b1',
    'sc6',
    'c1',
    's1'
  ),
  new Product(
    'p17',
    "Computadora AMD Ryzen 3 3200G 8GB C303",
    '$830.00',
    'Especificaciones principales:Case C303 Mid-Tower Vidrio Templado +  Kit Fans 1 color – Rojo – Verde – Azul (especificar en nota de pedido el color deseado).Fuente de Poder EVGA 500W 80+ Motherboard ASUS Prime A320M-K Procesador AMD Ryzen 3 3200G Memoria RAM Adata 8GB 2666MHz SSD Kingston A400 480GB Combo Teclado Xtrike Me y Mouse Xtech 610 ',
    'https://xht.com.sv/wp-content/uploads/2020/09/Computadora-AMD-Ryzen-3-3200G-8GB.jpg',
    'false',
    'b1',
    'sc6',
    'c1',
    's1'
  ),
  new Product(
    'p18',
    "Computadora Intel Core i3 9100F 8GB GTX 1650",
    '$850.00',
    'Especificaciones principales: Case CQ07 Vidrio Templado + Kit Fans 1 color – Rojo – Verde – Azul (especificar en nota de pedido el color deseado).Fuente de Poder EVGA 500W 80+ Motherboard ASUS Prime H310M-E R2.0 Procesador Intel Core i3 9100F Memoria RAM Adata 8GB 2666MHz SSD Kingston A400 480GB Tarjeta de Video ASUS PH GTX 1650 4GB OC',
    'https://xht.com.sv/wp-content/uploads/2020/09/Computadora-i3-9100F.jpg',
    'false',
    'b1',
    'sc6',
    'c1',
    's1'
  )
];
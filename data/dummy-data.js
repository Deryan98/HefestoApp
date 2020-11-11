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
   new SubCategory('sc9', 'GPU', 'videogame-asset', 'material', 'c2'),
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
  ),
  new Product(
    'p19',
    "Procesador Intel I7-10700 2.9Ghz 16MB LGA1200",
    '$515.00',
    'Especificaciones principales: Cantidad de núcleos 8 Cantidad de subprocesos 16 Frecuencia básica del procesador 2,90 GHz Frecuencia turbo máxima 4,80 GHz Caché 16 MB Intel® Smart Cache Velocidad del bus 8 GT/s Frecuencia de la Tecnología Intel® Turbo Boost Max 3.0 4,80 GHz    TDP 65 W Gráficos del procesador Gráficos HD Intel® 630',
    'https://aeon.com.sv/web/image/product.product/6333/image_1024/%5B7005%5D%20Procesador%20Intel%20I7-10700%202.9Ghz%2016MB%20LGA1200?unique=39dafa3',
    'false',
    'b1',
    'sc7',
    'c2',
    's1'
  ),
  new Product(
    'p20',
    "Procesador AMD Ryzen 5 3600XT 3.8Ghz",
    '$314.00',
    'Especificaciones principales: Cantidad de núcleos 6 Cantidad de subprocesos 12 Frecuencia básica del procesador 3,80 GHz',
    'https://aeon.com.sv/web/image/product.product/6295/image_1024/%5B8000%5D%20Procesador%20AMD%20Ryzen%205%203600XT%203.8Ghz?unique=61fe085',
    'false',
    'b1',
    'sc7',
    'c2',
    's1'
  ),
  new Product(
    'p21',
    "Procesador Intel Core i5-9400F 2.90 GHz up to 4.10 GHz 9th Generación",
    '$219.00',
    'Especificaciones principales: # of Cores 6 # of Threads 6 Processor Base Frequency  2.90 GHz Max Turbo Frequency  4.10 GHz Cache  9 MB SmartCache Bus Speed  8 GT/s DMI3 TDP  65 W',
    'https://aeon.com.sv/web/image/product.product/5195/image_1024/%5B5084%5D%20Procesador%20Intel%20Core%20i5-9400F%202.90%20GHz%20%20up%20to%204.10%20GHz%209th%20Generaci%C3%B3n?unique=c5aedc9',
    'false',
    'b1',
    'sc7',
    'c2',
    's1'
  ),
  new Product(
    'p22',
    "Memoria Ram HyperX Predator 8Gb 3200Mhz DDR4",
    '$64.00',
    'Especificaciones principales: Capacidad total: 8GB (1x8GB) Perfil de la memoria: 3200Mhz',
    'https://aeon.com.sv/web/image/product.product/6508/image_1024/%5B08108%5D%20Memoria%20Ram%20HyperX%20Predator%208Gb%203200Mhz%20%20DDR4?unique=2f3ced6',
    'false',
    'b1',
    'sc8',
    'c2',
    's1'
  ),
  new Product(
    'p23',
    "Memoria Ram HyperX Fury 3466Mhz DDR4 8Gb RGB",
    '$69.00',
    'Especificaciones principales: Tipo de memoria interna: DDR4 Memoria interna: 8 GB Diseño de memoria: 1 x 8 GB Latencia CAS: 16 LED RGB',
    'https://aeon.com.sv/web/image/product.product/6374/image_1024/%5B8005%5D%20Memoria%20Ram%20HyperX%20Fury%203466Mhz%20DDR4%208Gb%20RGB?unique=735d11d',
    'false',
    'b1',
    'sc8',
    'c2',
    's1'
  ),
  new Product(
    'p24',
    "Memoria Ram HyperX 3733Mhz 8Gb DDR4 RGB",
    '$82.00',
    'Especificaciones principales: Tipo de memoria interna: DDR4 Memoria interna: 8 GB Diseño de memoria: 1 x 8 GB Velocidad de memoria del reloj: 3733 MHz  Latencia CAS: 19 Factor de Forma: 288-pin DIMM',
    'https://aeon.com.sv/web/image/product.product/6375/image_1024/%5B8006%5D%20Memoria%20Ram%20HyperX%203733Mhz%208Gb%20DDR4%20RGB?unique=4d90f9d',
    'false',
    'b1',
    'sc8',
    'c2',
    's1'
  ),
  new Product(
    'p25',
    "Tarjeta de video MSI GTX 1650 Ventus XS D6 4GB",
    '$205.00',
    'Especificaciones principales: Velocidad de memoria 1740 MHz / 8 Gbps 4 GB GDDR5 DisplayPort x 1 / HDMI x 1 / DL-DVI-D x 1 Utilidad de Overclocking Afterburner Escáner OC: Una función automatizada encuentra los ajustes de overclock estable más altos.Kombustor: Las últimas versiones de referencia de DirectX compatibles.Predator: Grabación de vídeo en el juego.',
    'https://aeon.com.sv/web/image/product.product/6240/image_1024/%5B6983%5D%20Tarjeta%20de%20video%20MSI%20GTX%201650%20Ventus%20XS%20D6%204GB?unique=58689f7',
    'false',
    'b1',
    'sc9',
    'c2',
    's1'
  ),new Product(
    'p26',
    "Tarjeta de Video Sapphire Pulse RX 580 8GB",
    '$265.00',
    'Especificaciones principales: Engine Clock: Up to 1366 MHz (Boost) Memory: 8GB GDDR5 8000 MHz Effective 2304 Stream Processors Dual-X Cooling. Quick Connect',
    'https://aeon.com.sv/web/image/product.product/6571/image_1024/%5B08171%5D%20Tarjeta%20de%20Video%20Sapphire%20Pulse%20RX%20580%208GB?unique=22ab18f',
    'false',
    'b1',
    'sc9',
    'c2',
    's1'
  ),new Product(
    'p27',
    "Tarjeta de video Sapphire NITRO Radeon RX 5700XT 8GB",
    '$499.00',
    'Especificaciones principales: GPU: Boost Clock: Up to 2010 MHz Memory:   8GB/256 bit GDDR6. 14 Gbps Effective Stream Processors: 2560 4K@120Hz Tri-X Cooling Technology',
    'https://aeon.com.sv/web/image/product.product/6569/image_1024/%5B08169%5D%20Tarjeta%20de%20video%20Sapphire%20NITRO%20Radeon%20RX%205700XT%208GB?unique=aea1e56',
    'false',
    'b1',
    'sc9',
    'c2',
    's1'
  ),new Product(
    'p28',
    "Fuente de Poder Gigabyte P550-B 80+BRONZE 550W",
    '$79.00',
    'Especificaciones principales: Fuente de poder de 550Watts',
    'https://aeon.com.sv/web/image/product.product/6595/image_1024/%5B08195%5D%20Fuente%20de%20Poder%20Gigabyte%20P550-B%2080+BRONZE%20%20550W?unique=33ab0fa',
    'false',
    'b1',
    'sc10',
    'c2',
    's1'
  ),new Product(
    'p29',
    "Fuente de Poder Apevia Signature 900W Semi Modular 80+ Bronze",
    '$99.00',
    'Especificaciones principales: 900W de potencia con ventilador LED azul de 13,5 cm Más de 80 años con certificación Bronce  Alta estabilidad con 5% de tolerancia de 5V, 3.3V y 12V de salida Diseño de cable modular híbrido Componentes y carcasas de alta calidad El conector principal de 20 + 4 pines se puede utilizar para 20 pines o 24 pines Conector ATX de 12V de 4/8 pines 4 x 6+2 Pin PCI - Express 4 x conector SATA 4 x conector periférico de 4 pines 1 x conector de disquete Cada cable es extraíble Cables y accesorios',
    'https://aeon.com.sv/web/image/product.product/6582/image_1024/%5B08182%5D%20Fuente%20de%20Poder%20Apevia%20Signature%20900W%20Semi%20Modular%2080+%20Bronze?unique=ee63c93',
    'false',
    'b1',
    'sc10',
    'c2',
    's1'
  ),
  new Product(
    'p30',
    "Fuente de Poder Apevia Prestige 1000W 80 + Gold Active PFC ATX",
    '$149.00',
    'Especificaciones principales:Potencia de 1000W con ventilador negro de 13,5 cm Más de 80 certificados Gold & ROHS Alta estabilidad con 5% de tolerancia de 5V, 3.3V y 12V de salida Componentes y carcasas de alta calidad Entrada de CA universal por PFC activo (99%PF Típico) Contenido del paquete',
    'https://aeon.com.sv/web/image/product.product/6584/image_1024/%5B08184%5D%20Fuente%20de%20Poder%20Apevia%20Prestige%201000W%2080%20+%20Gold%20Active%20PFC%20ATX?unique=ee63c93',
    'false',
    'b1',
    'sc10',
    'c2',
    's1'
  ),
  new Product(
    'p31',
    "Motherboard Asus Prime B550M-A WiFi AM4",
    '$149.00',
    'Especificaciones principales:Zócalo AMD AM4: Listo para AMD Ryzen de 3a generación™ y AMD Ryzen de 3a generación™ con procesadores gráficos Radeon Refrigeración integral: Disipador térmico VRM, disipador térmico PCH y Ventilador Xpert 2+ Conectividad ultrarrápida: Dual M.2, PCIe 4.0, Intel® WiFi 6, Ethernet de 1 Gb, USB 3.2 Gen 2 Tipo-A Aura Sync RGB: Cabezal Gen 2 direccionable a bordo para tiras LED RGB, fácilmente sincronizado con hardware compatible con Aura Sync',
    'https://aeon.com.sv/web/image/product.product/6563/image_1024/%5B08163%5D%20Motherboard%20Asus%20Prime%20B550M-A%20WiFi%20AM4?unique=31a5b54',
    'false',
    'b1',
    'sc11',
    'c2',
    's1'
  ),
  new Product(
    'p32',
    "Motherboard ASUS TUF GAMING B550M-PLUS Wifi AM4",
    '$224.00',
    'Especificaciones principales:Zócalo AMD AM4: Listo para AMD Ryzen de 3a generación™ y AMD Ryzen de 3a generación™ con procesadores gráficos Radeon Solución de alimentación mejorada: 8+ 2 etapas de potencia DrMOS, conector ProCool, componentes TUF de grado militar y Digi+ VRM para máxima durabilidad Refrigeración integral: Disipadores térmicos VRM, disipador térmico PCH sin ventilador, disipador térmico M.2, cabezales de ventilador híbridos y utilidad Fan Xpert 2+ Conectividad de próxima generación: Compatible con PCIe 4.0 M.2, USB 3.2 Gen 2 Tipo-A y Tipo-C Hecho para juegos en línea: Tecnología Intel® WiFi 6, Ethernet de 2,5 Gb, TUF LANGuard y TurboLAN Micrófono con cancelación de ruido AI: Proporciona una comunicación de voz nítida en el juego',
    'https://aeon.com.sv/web/image/product.product/6561/image_1024/%5B08161%5D%20Motherboard%20ASUS%20TUF%20GAMING%20B550M-PLUS%20Wifi%20AM4?unique=44f0d5d',
    'false',
    'b1',
    'sc11',
    'c2',
    's1'
  ),
  new Product(
    'p33',
    "Motherboard Asus TUF Gaming B550M-PLUS AM4",
    '$189.00',
    'Especificaciones principales:Zócalo AMD AM4: Listo para AMD Ryzen de 3a generación™ y AMD Ryzen de 3a generación™ con procesadores gráficos Radeon™ Solución de alimentación mejorada: 8+ 2 etapas de potencia DrMOS, conector ProCool, componentes TUF de grado militar y Digi+ VRM para máxima durabilidad Refrigeración integral: Disipadores térmicos VRM, disipador térmico PCH sin ventilador, disipador térmico M.2, cabezales de ventilador híbridos y utilidad Fan Xpert 2+ Conectividad de próxima generación: Compatible con PCIe 4.0 M.2, USB 3.2 Gen 2 Tipo-A y Tipo-C Hecho para juegos en línea: Ethernet de 2.5 Gb, TECNOLOGÍA TUF LANGuard y TurboLAN Códec Realtek S1200A: Calidad de audio prístina con una relación señal-ruido de 108 dB sin precedentes para salida de línea estéreo y 103 dB SNR para línea de entrada',
    'https://aeon.com.sv/web/image/product.product/6559/image_1024/%5B08159%5D%20Motherboard%20Asus%20TUF%20Gaming%20B550M-PLUS%20AM4?unique=23fcda2',
    'false',
    'b1',
    'sc11',
    'c2',
    's1'
  ),
  new Product(
    'p34',
    "Bundle Disco duro 1TB Seagate + Enclosure de Mesa",
    '$82.00',
    'Especificaciones principales:•Disco Duro 1TB 7200rpm 3.5 SATA 6Gb/s BarraCuda Seagate •Enclosure AGI USB Sata 3.5" AGI-6336 Fuente externa',
    'https://aeon.com.sv/web/image/product.product/6610/image_1024/%5B08210%5D%20Bundle%20Disco%20duro%201TB%20Seagate%20+%20Enclosure%20de%20Mesa?unique=56d9483',
    'false',
    'b1',
    'sc12',
    'c2',
    's1'
  ),
  new Product(
    'p35',
    "Disco Duro Seagate 4TB 3.5 SATA 6Gb/s BarraCuda 5400rpm",
    '$139.00',
    'Especificaciones principales:Capacidad: 4000 GB Velocidad de rotación: 5400 RPM Tamaño de disco duro: 3.5pulg. Interfaz: Serial ATA III Velocidad de transferencia: 6 Gbit/s Tamaño de búfer: 256 MB',
    'https://aeon.com.sv/web/image/product.product/4061/image_1024/%5B4240%5D%20Disco%20Duro%20Seagate%204TB%203.5%20SATA%206Gb-s%20BarraCuda%205400rpm?unique=8016ece',
    'false',
    'b1',
    'sc12',
    'c2',
    's1'
  ),
  new Product(
    'p36',
    "Disco Duro 1TB 7200rpm 3.5 SATA 6Gb/s BarraCuda Seagate",
    '$54.00',
    'Especificaciones principales:HDD 1TB SEAGATE',
    'https://aeon.com.sv/web/image/product.product/3390/image_1024/%5B3513%5D%20Disco%20Duro%201TB%207200rpm%203.5%20SATA%206Gb-s%20BarraCuda%20Seagate?unique=8016ece',
    'false',
    'b1',
    'sc12',
    'c2',
    's1'
  ),
  new Product(
    'p37',
    "Memoria USB Kingston DataTraveler 100 32GB",
    '$8.00',
    'Especificaciones principales:El dispositivo Flash USB DataTraveler® 100 G3 (DT100G3) de Kingston es compatible con las especificaciones1 del USB 3.0 para aprovechar la tecnología de las nuevas laptops, computadoras de escritorio y dispositivos digitales. Con el DT100G3 es más fácil que nunca almacenar y transferir documentos, presentaciones, música, video y mucho más.',
    'https://aeon.com.sv/web/image/product.product/6219/image_1024/%5B2114%5D%20Memoria%20USB%20Kingston%20DataTraveler%20100%2032GB?unique=07d59dc',
    'false',
    'b1',
    'sc13',
    'c3',
    's1'
  ),
  new Product(
    'p38',
    "Memoria USB Adata V350 32GB USB 3.1 AUV350-32G-RBK",
    '$15.00',
    'Especificaciones principales:Capacidad   64GB Color Plata Dimensiones (L x An x Al) 42,4 x 14,95 x 5,35 mm / 1,7 x 0,6 x 0,2" Peso 5.9g / 0.2oz Interfaz USB 3.2 Gen1 (compatible con USB 2.0 ) Requisitos del sistema Windows XP, Vista, 7, 8, 8.1, 10, Mac OS X 10.6 o posterior, kernel de Linux 2.6 o posterior, sin necesidad de controlador de dispositivo',
    'https://aeon.com.sv/web/image/product.product/6342/image_1024/%5B6845%5D%20Memoria%20USB%20Adata%20V350%2032GB%20USB%203.1%20AUV350-32G-RBK?unique=23b7a9b',
    'false',
    'b1',
    'sc13',
    'c3',
    's1'
  ),new Product(
    'p39',
    "Bundle USB 64GB 3.1 + Adaptador USB C a USB A 3.0",
    '$25.00',
    'Especificaciones principales:•Memoria USB Adata V350 64GB USB 3.1 AUV350-64G-RBK •Adaptador USB 3.0 female to type C adapter AGI-1247',
    'https://aeon.com.sv/web/image/product.product/6609/image_1024/%5B08209%5D%20Bundle%20USB%2064GB%203.1%20+%20Adaptador%20USB%20C%20a%20USB%20A%203.0?unique=626f676',
    'false',
    'b1',
    'sc13',
    'c3',
    's1'
  ),new Product(
    'p40',
    "Monitor AOC15.6 E1670Swu-E 1366x768p VGA",
    '$84.00',
    'Especificaciones principales: Puerto USB para máxima flexibilidad Ideal para uso como pantalla extendida Bajo consumo de energía de solo 7 vatios Libre de Mercurio (Hg) Certificación Energy Star  Entrada análoga tradicional (VGA) Alto radio de contraste dinámico (DCR) Exclusivo menú OSD',
    'https://aeon.com.sv/web/image/product.product/4341/image_1024/%5B4448%5D%20Monitor%20AOC15.6%22%20E1670Swu-E%201366x768p%20VGA?unique=a7269b3',
    'false',
    'b1',
    'sc14',
    'c3',
    's1'
  ),
  new Product(
    'p41',
    "Monitor Gigabyte Aorus G27FC Gaming Monitor 165Mhz 27",
    '$329.00',
    'Especificaciones principales: El panel 27" 1500R VA Alta resolución y frecuencia de actualización rápida FHD con 165Hz Fantástica pantalla a color y 90% DCI-P3 de color súper amplio. HDMIx2, Display Portx1, Jack Audio, USB Hub.',
    'https://aeon.com.sv/web/image/product.product/6599/image_1024/%5B08199%5D%20Monitor%20Gigabyte%20Aorus%20G27FC%20Gaming%20Monitor%20165Mhz%2027%22?unique=3b28b2f',
    'false',
    'b1',
    'sc14',
    'c3',
    's1'
  ),
  new Product(
    'p42',
    "Viewsonic VA1903h - HD - VA - PLANO - 19",
    '$104.00',
    'Especificaciones principales: El VA1903h de ViewSonic® es un monitor panorámico de 19” (18,5” visibles) que ofrece valor y rendimiento tanto para las oficinas en el hogar como para las pequeñas empresas.  TAMAÑO DE PANTALLA (PULG.): 19 ÁREA VISIBLE (IN): 18,5 TIPO DE PANEL: TN RESOLUCIÓN: 1366 x 768',
    'https://kpchardware.com/img/p/1/0/6/2/5/10625-home_default.jpg',
    'false',
    'b1',
    'sc14',
    'c3',
    's1'
  ),
  new Product(
    'p43',
    "Teclado Redragon MITRA Black Mecánico Español K551RGB-01-SP",
    '$65.00',
    'Especificaciones principales: Switches Outemu Blue Tecla multimedia FN Tecla de bloqueo de Windows  Retroiluminación RGB Chroma Teclado con pad numérico  Resistente a salpicaduras',
    'https://aeon.com.sv/web/image/product.product/6464/image_1024/%5B08150%5D%20Teclado%20Redragon%20MITRA%20Black%20Mec%C3%A1nico%20Espa%C3%B1ol%20K551RGB-01-SP?unique=c1a385a',
    'false',
    'b1',
    'sc15',
    'c3',
    's1'
  ),
  new Product(
    'p44',
    "Teclado y Touch Pad Wireless K400 Plus TV Logitech",
    '$49.00',
    'Especificaciones principales: Tipo de conexión: Protocolo Logitech Unifying (2,4 GHz) Botones/Teclas especiales: Silencio y ajuste de volumen Conexión/Encendido: Conmutador de encendido/apagado Detalles de las pilas: 2 pilas AA Duración de las pilas (no recargables): Hasta 18 meses',
    'https://aeon.com.sv/web/image/product.product/3331/image_1024/%5B3866%5D%20Teclado%20y%20Touch%20Pad%20Wireless%20K400%20Plus%20TV%20Logitech?unique=31a5b54',
    'false',
    'b1',
    'sc15',
    'c3',
    's1'
  ),
  new Product(
    'p45',
    "Teclado Microsoft 600 Wired USB",
    '$19.00',
    'Especificaciones principales: Valor seguro, listo cuando lo necesite. No busque más. Este es un teclado de calidad que ofrece gran valor. Obtenga todas las características que necesita, y muchas más, con la calidad y la fiabilidad de Microsoft. Las teclas silenciosas y el rápido acceso a los controles multimedia simplifican el uso de su equipo y le permiten centrarse en la tarea que le ocupa.',
    'https://aeon.com.sv/web/image/product.product/6771/image_1024/%5B08297%5D%20Teclado%20Microsoft%20600%20Wired%20USB?unique=1e34c21',
    'false',
    'b1',
    'sc15',
    'c3',
    's1'
  ),
  new Product(
    'p46',
    "Mouse Gaming RAZER Deathadder Essential 6400 DPI RZ01-02540100-R3U1",
    '$39.00',
    'Especificaciones principales: Mouse Gaming Razer con 6400 DPI y diferentes sensibilidades',
    'https://aeon.com.sv/web/image/product.product/5152/image_1024/%5B5072%5D%20Mouse%20Gaming%20RAZER%20Deathadder%20Essential%20%206400%20DPI%20RZ01-02540100-R3U1?unique=bff6a3b',
    'false',
    'b1',
    'sc16',
    'c3',
    's1'
  ),
  new Product(
    'p47',
    "Combo Gaming ADATA XPG Mouse INFAREX M10 + Mousepad INFAREX R10 RGB",
    '$39.00',
    'Especificaciones principales: XPG INFAREX M10 Gaming Mouse Botón 10 millones de clics PPP 800/1600/2400/3200 Aceleración 8G Ultrasondeo 125Hz Efecto de luz Color Full RGB XPG INFAREX R10 Gaming Mouse Pad Superficie dura de PVC Dimensiones 350 x 250 x 3,6mm / 13,7 x 9,8 x 0,1 pulgadas Nueve modos de iluminación 7 luces simples de color sólido y 2 de parpadeo lento arco iris Longitud del cable 1,7M',
    'https://aeon.com.sv/web/image/product.product/5216/image_1024/%5B5130%5D%20Combo%20Gaming%20ADATA%20XPG%20Mouse%20INFAREX%20M10%20+%20Mousepad%20INFAREX%20R10%20RGB?unique=719adc3',
    'false',
    'b1',
    'sc16',
    'c3',
    's1'
  ),
  new Product(
    'p48',
    "Mouse USB Agiler AGI-2095BL Wireless Rojo",
    '$10.00',
    'Especificaciones principales: Mouse inalambrico',
    'https://aeon.com.sv/web/image/product.product/6335/image_1024/%5B6481%5D%20Mouse%20USB%20Agiler%20AGI-2095BL%20Wireless%20Azul?unique=d4e6fad',
    'false',
    'b1',
    'sc16',
    'c3',
    's1'
  ),
  new Product(
    'p49',
    "Impresora HP 415 Wifi InkTank Z4B53A GT52 y GT51",
    '$219.00',
    'Especificaciones principales: Imprima fácilmente grandes volúmenes con un costo por página muy bajo y obtenga una impresión móvil sencilla. Con un sistema de tinta confiable sin derrames, podrá imprimir hasta 8000 páginas en color o 6000 en negro y producir calidad excepcional. Administradores de la oficina o propietarios de pequeñas empresas que necesitan una impresora confiable para producir entre 200 y 800 páginas al mes.',
    'https://aeon.com.sv/web/image/product.product/6776/image_1024/%5B08302%5D%20Impresora%20HP%20415%20Wifi%20InkTank%20Z4B53A%20GT52%20y%20GT51?unique=1b46543',
    'false',
    'b1',
    'sc17',
    'c3',
    's1'
  ),
  new Product(
    'p50',
    "Impresora inalámbrica cannon pixma g6010",
    '$329.00',
    'Especificaciones principales: La impresora inalámbrica multifuncional PIXMA G6010 de Canon, fue diseñada para aquellos que desean imprimir, copiar y escanear sin tener que preocuparse por reemplazar costosos cartuchos de tinta, ni esperar la entrega de un nuevo juego de tinta. La impresora inalámbrica PIXMA G6010, presenta un alto rendimiento de página de hasta 8,300 páginas de texto en negro y hasta 7,700 páginas en colores vivos.',
    'https://siman.vtexassets.com/arquivos/ids/362347-800-auto?width=800&height=auto&aspect=true',
    'false',
    'b1',
    'sc17',
    'c3',
    's1'
  ),
  new Product(
    'p51',
    "Impresora hp smart tank 530",
    '$249.00',
    'Especificaciones principales: Cuente con la excelente calidad de impresión que espera de HP: obtenga una calidad sorprendente una y otra vez. El texto es nítido. Los gráficos son vibrantes. Cuente con texto oscuro y nítido, y obtenga gráficos de colores vibrantes para todas sus impresiones. Manténgase conectado con Wi-Fi de doble banda: conexiones más rápidas y confiables. Ayude a ahorrar tiempo con Smart Tasks, e imprima y escanee en cualquier lugar con HP Smart, la mejor aplicación de impresión móvil de su clase.',
    'https://siman.vtexassets.com/arquivos/ids/364105-800-auto?width=800&height=auto&aspect=true',
    'false',
    'b1',
    'sc17',
    'c3',
    's1'
  ),
  new Product(
    'p52',
    "MSI MAG CH120 Silla Gaming Negro/Rojo",
    '$311.18.00',
    'Especificaciones principales: La silla para juegos MSI MAG CH120 está hecha de acero pintado que puede evitar la oxidación en el uso prolongado, para un gran soporte CH120 usó la espuma de alta densidad en el asiento, puede obtener una sensación de soporte cómoda cuando se sienta sobre ella.',
    'https://thumb.pccomponentes.com/w-530-530/articles/30/300779/1667-msi-mag-ch120-silla-gaming-negro-rojo.jpg',
    'false',
    'b1',
    'sc18',
    'c3',
    's1'
  ),
  new Product(
    'p53',
    "Adec - XTR Pro, Mesa Gamer, Mesa Ordenador, Escritorio Gaming, Tapa Madera Roble Salvaje y Estructura Negra, Medidas: 120 cm (Largo) x 60 cm (Ancho) x 75 cm (Alto)",
    '$200.17',
    'Especificaciones principales: Medidas de la mesa Gamer XTR PRO: 120 cm (largo) x 60 cm (ancho) x 75 cm (alto). Medidas tabla superior: 64 cm (largo parte delantera)/76 cm (largo parte trasera) x 23,5 cm (ancho) x 2 cm (grosor). El hueco entre ambas tapas es de 18 cm. Mesa ideal para ordenadores con un diseño ambientado para gaming. Tiene un gran espacio gracias a su gran superficie para poder jugar con comodidad y su tabla superior para poder colocar el monitor. Tapa de madera roble salvaje con dos tiras en ambos lados de fibra de carbono y estructura metálica negra. Contiene adhesivos decorativos para darle el toque gaming definitivo. Dispone de 4 topes de suelo regulables en altura para adaptarse a las necesidades de cada uno',
    'https://m.media-amazon.com/images/I/61FY-CqMqlL._AC_UL480_FMwebp_QL65_.jpg',
    'false',
    'b1',
    'sc18',
    'c3',
    's1'
  ),
  new Product(
    'p54',
    "WOLTU Racing Silla, Gaming Silla de Escritorio Asiento de Tela Silla Oficina Silla de Ordenador Silla Giratoria de Oficina Silla de Trabajo Ajustable Silla BS38bl Azul",
    '$166.06',
    'Especificaciones principales: Comodidad para estar sentado: la cabeza y los cojines lumbares sostienen las vértebras y alivian la columna durante la sesión. El asiento de cuero acolchado ofrece una experiencia de sentado muy cómoda, incluso cuando está sentado durante mucho tiempo. Función de limpieza: Más libertad de movimiento gracias al mecanismo de balanceo incorporado y el respaldo se puede ajustar hasta 155 ° detrás de sus propios requisitos. Estabilidad y seguridad: El marco integrado hecho del metal de alta calidad aumenta la capacidad de carga de la silla y garantiza una vida de servicio larga. Pie de nylon de alta calidad. Apoyabrazos ajustable: la altura y el ángulo del apoyabrazos son ajustables. Puede ajustar el reposabrazos de acuerdo con sus propias preferencias. Dimensiones: altura total: alrededor de 127-135 cm; Altura del asiento: aproximadamente 47-55cm; Altura del respaldo: aproximadamente 85cm; Área del asiento: aproximadamente 40x54cm (WxD)',
    'https://m.media-amazon.com/images/I/61GY0kY6yyL._AC_UL480_FMwebp_QL65_.jpg',
    'false',
    'b1',
    'sc18',
    'c3',
    's1'
  ),
];
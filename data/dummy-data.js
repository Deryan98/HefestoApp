import Category from '../models/Category';
import SubCategory from '../models/SubCategory';

export const CATEGORIES = [
  new Category('c1', 'Computadora', 'laptop'),
  /**
   * 
   new Category('c2', 'Componentes', 'memory'),
   new Category('c3', 'Periféricos', 'keyboard'),
   */
];

export const SUBCATEGORIES = [
  new SubCategory('sc1', 'Basic', 'laptop', 'material-community', 'c1'),
   new SubCategory('sc2', 'Medium', 'laptop-chromebook', 'material-community', 'c1'),
   new SubCategory('sc3', 'High', 'laptop-mac', 'material-community', 'c1'),
   new SubCategory('sc4', 'Design', 'video-3d-variant', 'material-community', 'c1'),
   new SubCategory('sc5', 'Gaming', 'gamepad-variant', 'material-community', 'c1'),
   new SubCategory('sc6', 'Streaming', 'youtube-gaming', 'material-community', 'c1'),
   /**
    * 
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
    */
   
];

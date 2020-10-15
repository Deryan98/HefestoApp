class Product {
    constructor(id,name,price,description,imageUrl,isWish,idBrand,idSubCategory,idCategory,idStore){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.isWish = isWish;
        this.idBrand = idBrand;
        this.idSubCategory = idSubCategory;
        this.idCategory = idCategory;
        this.idStore = idStore;
    }
}

export default Product;
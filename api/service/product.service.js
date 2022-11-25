const Product = require("../models/Products");
const User = require("../models/User");

class ProductService {
    static async createProduct(reqbody) {
        try {
            let product = new Product(reqbody)            
            return await product.save({});
        } catch (error) {
            console.error("error existente en createProduct- SERVICE", error.message);
        }
    }
    
    static async addReview(userId, reqbody) {
        try {
          return await Product.findByIdAndUpdate(
            reqbody._id,
          )
        } catch (error) {   
          console.error("error existente en addReview- SERVICE", error.message);
        }
      }

    static async addQualification(userId, reqbody) {
        try {
          return await User.findOneAndUpdate(
            reqbody._id, 
          );
        } catch (error) {   
          console.error("error existente en addReview- SERVICE", error.message);
        }
      }

    static async getAllProduct() {
        try {
            let product = await Product.find(
                { unique: true },
            );
            return product;
        } catch (error) {
            console.error("error existente en getAllProduct- SERVICE", error.message);
        }
    }

    static async getProductById(id) {
        try {
            let product = await Product.findById(
                id,
            );
            return product;
        } catch (error) {
            console.error("error existente en getProductById- SERVICE", error.message);
        }
    }

    static async getProductByName(name) {
        try {
            let product = await Product.find(
            );
            return product;
        } catch (error) {
            console.error("error existente en getProductByName- SERVICE", error.message);
        }
    }

    static async getProductByCategory(category) {
        try {
            let product = await Product.find(
            );
            return product;
        } catch (error) {
            console.error("error existente en getProductByCategory- SERVICE", error.message);
        }
    }

    static async getAllCategories() {
        try {
            let categories = await Product.find(
                { unique: true },
            );
            return categories;
        } catch (error) {
            console.error("error existente en getAllProduct- SERVICE", error.message);
        }
    }

    static async getOneProductReviews(productId) {
        try {
            let resenias = await Product.find(
                { productId},
            );
            return resenias;
        } catch (error) {
            console.error("error existente en getOneProductReviews- SERVICE", error.message);
        }
    }

    static async editProduct(id, reqbody) {
        try {
            return await Product.findByIdAndUpdate(
                id,
                { new: true }, 
            );
        } catch (error) {
            console.error("error existente en editProduct- SERVICE", error.message);
        }
    }

    static async deleteProduct(id) {
        try {
            return await Product.findByIdAndDelete(
                id,
            );
        } catch (error) {
            console.error("error existente en deleteProduct- SERVICE", error.message);
        }
    }
}

module.exports = ProductService;
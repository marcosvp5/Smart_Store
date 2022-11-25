const User = require("../models/User");
class UserService {
  static async createUser(reqbody) {
    try {
      let user = new User(reqbody);
      return await user.save({ salt: 0 });
    } catch (error) {
      console.error("error existente en createUser- SERVICE", error.message);
    }
  }
  static async createCategory(userId, category) {
    try {
        return await User.findByIdAndUpdate(
            userId,
            { new: true },
        );
    } catch (error) {
        console.error("error existente en createCategory- SERVICE", error.message);
    }
  }
  static async getAllUser() {
    try {
      let user = await User.find(
      );
      return user;
    } catch (error) {
      console.error("error existente en getAllUser- SERVICE", error.message);
    }
  }
  static async addProduct(id, ordenes) {
    try {
      return await User.findByIdAndUpdate(
        id,
        { new: true },
      );
    } catch (error) {
      console.error("error existente en addProduct- SERVICE", error.message);
    }
  }
  static async addToCart(userId, productId) { 
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { new: true }
      );
      return user;
    } catch (error) {
      console.error("error existente en addToCart- SERVICE", error.message);
    }
  }
  static async deleteCart(userId, productId) { 
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { new: true }
      );
      console.log(user);
      return user;
    } catch (error) {
      console.error({ error });
    }
  }
  static async deleteCartAll(userId) { 
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { new: true },
      );
      return user;
    } catch (error) {
      console.error({ error });
    }
  }
  static async deleteUser(id) {
    try {
      return await User.findByIdAndUpdate(
        id,
        { userStatus: false },
        { new: true },
      );
    } catch (error) {
      console.error("error existente en deleteUser- SERVICE", error.message);
    }
  }
  static async addFav(id, favoritos) {
    try {
      return await User.findByIdAndUpdate(
        id,
        { new: true },
      );
    } catch (error) {
      console.error("error existente en addFav- SERVICE", error.message);
    }
  }
  static async deleteFav(_id, favorites) {
    try {
      const user = await User.findByIdAndUpdate(
        _id,
        { new: true }
      );
      return user;
    } catch (error) {
      console.error({ error });
    }
  }
  static async addAdmin(id) {
    try {
      return await User.findByIdAndUpdate(
        id,
        { new: true }
      );
    } catch (error) {
      console.error("error existente en addAdmin- SERVICE", error.message);
    }
  }
  static async deleteAdmin(id) {
    try {
      return await User.findByIdAndUpdate(
        id,
        { new: true }
      );
    } catch (error) {
      console.error("error existente en deleteAdmin- SERVICE", error.message);
    }
  }
  static async editUser(id, body) {
    try {
      return await User.findByIdAndUpdate(
        id,
        { new: true }
      );
    } catch (error) {
      console.error("error existente en deleteAdmin- SERVICE", error.message);
    }
  }
  static async editCategory(id, reqbody) {
    try {
        return await User.findByIdAndUpdate(
            id,
            { new: true }
        );
    } catch (error) {
        console.error("error existente en editCategory- SERVICE", error.message);
    }
  }
  static async deleteCategory(id) {
    try {
        return await User.findByIdAndDelete(
            id,
        );
    } catch (error) {
        console.error("error existente en deleteCategory- SERVICE", error.message);
    }
  }
}

module.exports = UserService;

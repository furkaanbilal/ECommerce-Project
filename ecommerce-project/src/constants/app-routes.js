export const Routes = {
  auth: {
    login: "/auth/login",
    signUp: "/auth/signup",
    changePassword: "/auth/change-password",
    forgotPassword: "/auth/forgot-password/:email",
    resetPassword: "/auth/reset-password",
  },
  user:{
   getUsers:"/users"
  },
  category:{
    getAll:"/category",
    create:"/category"
  },
  product:{
    create:"/products",
    catId:"/products",
    getAll:"/products",
    updateProduct:"/products",
    getById:"/products/prod-id-"
  },
  productDetail:{
    get:"/productDetails",
    uploadImages:"/productDetails/upload-product-details-images"
  },
  cart:{
    addCart:"/cart",
    getCart:"/cart",
    deleteCart:"/cart"
  }
};

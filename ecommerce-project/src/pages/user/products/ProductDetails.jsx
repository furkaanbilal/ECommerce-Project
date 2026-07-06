import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getProductDetailsByPdId } from "../../../services/productDetails-service";
import { BASE_URL } from "../../../constants/app-urls";
import { FaTag, FaBoxOpen, FaBuilding } from "react-icons/fa";
import { ShoppingCart } from "lucide-react";
import { createCart } from "../../../services/cart-services";
import toast from "react-hot-toast";
import { CartContext } from "../../../context/cart-context";

const ProductDetails = () => {
  const { id } = useParams();

  const [productDetails, setProductDetails] = useState({});
  const [selectedImage, setSelectedImage] = useState("");
  const {getUserCarts}=useContext(CartContext)

  const getProductDetails = async (id) => {
    const response = await getProductDetailsByPdId(id);
    console.log(response)

    if (response.isSuccess) {
      setProductDetails(response.data);

      if (response.data.appFiles?.length > 0) {
        setSelectedImage(`${BASE_URL}/${response.data.appFiles[0].filePath}`);
      } else if (response.data.filePath) {
        setSelectedImage(`${BASE_URL}/${response.data.filePath}`);
      }
    }
  };

  const addToCart=async()=>{
    const model={
        productDetailId:id,
        quantity:1
    }
    let response=await createCart(model);
     if(response.isSuccess)
        toast.success("Added to Cart")
      getUserCarts();
  }

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  const images =
    productDetails.appFiles?.length > 0
      ? productDetails.appFiles
      : productDetails.filePath
        ? [
            {
              filePath: productDetails.filePath,
              fileName: productDetails.fileName,
            },
          ]
        : [];

  const discountedPrice =
    productDetails.price -
    (productDetails.price * productDetails.discount) / 100;

  return (
   <div className="min-h-screen bg-[#0d0d0d] text-white py-8 lg:py-12 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-8">
      <h1 className="text-3xl md:text-4xl font-bold">
        Product Details
      </h1>

      <div className="w-28 h-1 bg-orange-500 rounded-full mt-2"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* ================= LEFT ================= */}

      <div className="bg-[#181818] rounded-3xl border border-zinc-800 p-5">

        {/* Main Image */}

        <div className="rounded-2xl overflow-hidden bg-black">

          {selectedImage ? (

            <img
              src={selectedImage}
              alt=""
              className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-contain hover:scale-105 duration-500"
            />

          ) : (

            <div className="h-[420px] flex justify-center items-center text-zinc-500">
              No Image
            </div>

          )}

        </div>

        {/* Gallery */}

        {images.length > 1 && (

          <div className="flex gap-3 mt-5 overflow-x-auto pb-2">

            {images.map((img, index) => (

              <img
                key={index}
                src={`${BASE_URL}/${img.filePath}`}
                alt=""
                onClick={() =>
                  setSelectedImage(`${BASE_URL}/${img.filePath}`)
                }
                className={`w-24 h-24 rounded-xl object-cover cursor-pointer border-2 transition flex-shrink-0

                ${
                  selectedImage === `${BASE_URL}/${img.filePath}`
                    ? "border-orange-500 scale-105"
                    : "border-zinc-700 hover:border-orange-400"
                }`}
              />

            ))}

          </div>

        )}

      </div>

      {/* ================= RIGHT ================= */}

      <div className="space-y-6">

        {/* Title */}

        <div className="bg-[#181818] rounded-3xl border border-zinc-800 p-6">

          <span className="bg-orange-500 px-4 py-2 rounded-full font-semibold text-sm">
            {productDetails.discount}% OFF
          </span>

          <h1 className="text-3xl lg:text-5xl font-bold mt-5 leading-tight">
            {productDetails.title}
          </h1>

          <p className="text-zinc-400 mt-5 leading-8">
            {productDetails.description}
          </p>

        </div>

        {/* Price */}

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-[#181818] rounded-2xl border border-zinc-800 p-6">

            <p className="text-zinc-500 uppercase text-xs">
              Final Price
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-orange-500 mt-2">
              ₹{discountedPrice?.toFixed(2)}
            </h2>

          </div>

          <div className="bg-[#181818] rounded-2xl border border-zinc-800 p-6">

            <p className="text-zinc-500 uppercase text-xs">
              Original
            </p>

            <h2 className="text-2xl line-through text-zinc-500 mt-2">
              ₹{productDetails.price}
            </h2>

            <p className="text-green-400 mt-2">
              Save {productDetails.discount}%
            </p>

          </div>

        </div>

        {/* Product Info */}

        <div className="bg-[#181818] rounded-3xl border border-zinc-800 overflow-hidden">

          <div className="grid grid-cols-2">

            <div className="p-5 border-b border-r border-zinc-800">

              <div className="flex items-center gap-2 text-orange-500">
                <FaBuilding />
                <span className="text-sm">Brand</span>
              </div>

              <p className="mt-3 text-lg">
                {productDetails.brand}
              </p>

            </div>

            <div className="p-5 border-b border-zinc-800">

              <div className="flex items-center gap-2 text-orange-500">
                <FaBoxOpen />
                <span className="text-sm">Units</span>
              </div>

              <p className="mt-3 text-lg">
                {productDetails.units}
              </p>

            </div>

            <div className="col-span-2 p-5">

              <div className="flex items-center gap-2 text-orange-500">
                <FaTag />
                <span className="text-sm">
                  Product Added
                </span>
              </div>

              <p className="mt-3">

                {productDetails.createdOn
                  ? new Date(productDetails.createdOn).toLocaleDateString()
                  : "-"}

              </p>

            </div>

          </div>

        </div>

        {/* Button */}

        <button
          onClick={addToCart}
          className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 rounded-2xl py-5 font-bold text-lg text-black flex justify-center items-center gap-3 shadow-lg hover:shadow-orange-500/40"
        >
          <ShoppingCart size={24} />
          Add To Cart
        </button>

      </div>

    </div>
  </div>
</div>
  );
};

export default ProductDetails;

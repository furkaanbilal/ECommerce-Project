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
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-3xl mx-auto bg-zinc-900 rounded-xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}

          <div>
            {/* Main Image */}

            <div className="bg-zinc-800 rounded-2xl h-[400px] flex items-center justify-center overflow-hidden">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt=""
                  className="w-full h-full object-contain hover:scale-105 transition duration-500"
                />
              ) : (
                <p>No Image</p>
              )}
            </div>

            {/* Thumbnail Images */}

            {images.length > 1 && (
              <div className="flex gap-3 mt-5 overflow-x-auto">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={`${BASE_URL}/${img.filePath}`}
                    alt=""
                    onClick={() =>
                      setSelectedImage(`${BASE_URL}/${img.filePath}`)
                    }
                    className={`w-24 h-24 rounded-xl object-cover cursor-pointer border-2 transition
                      ${
                        selectedImage === `${BASE_URL}/${img.filePath}`
                          ? "border-orange-500"
                          : "border-transparent"
                      } hover:border-orange-400`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}

          <div className="flex flex-col justify-center">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full w-fit font-semibold">
              {productDetails.discount}% OFF
            </span>

            <h1 className="text-4xl font-bold mt-5">{productDetails.title}</h1>

            <div className="mt-6 space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <FaBuilding className="text-orange-500" />
                <span>
                  <strong>Brand :</strong> {productDetails.brand}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaBoxOpen className="text-orange-500" />
                <span>
                  <strong>Unit :</strong> {productDetails.units}
                </span>
              </div>

              {/* <div className="flex items-center gap-3">
                <FaTag className="text-orange-500" />
                <span>
                  <strong>Category Id :</strong>{" "}
                  {productDetails.categoryId}
                </span>
              </div> */}
            </div>

            {/* Price */}

            <div className="mt-8">
              <h2 className="text-5xl font-bold text-orange-500">
                ₹{discountedPrice?.toFixed(2)}
              </h2>

              <div className="flex items-center gap-5 mt-3">
                <span className="text-2xl line-through text-gray-500">
                  ₹{productDetails.price}
                </span>

                <span className="text-green-400 text-xl">
                  Save {productDetails.discount}%
                </span>
              </div>
            </div>

            {/* Description */}

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-3 text-orange-500">
                Description
              </h2>

              <p className="leading-8 text-gray-300">
                {productDetails.description}
              </p>
            </div>

            {/* Buttons */}

            <div className="flex gap-5 mt-10">
              <button onClick={addToCart} className="p-8 rounded-full bg-orange-500 text-black hover:bg-orange-400 transition">
                <ShoppingCart size={20} />
              </button>

              {/* <button className="border border-orange-500 hover:bg-orange-500 transition px-8 py-4 rounded-xl font-bold">
                Buy Now
              </button> */}
            </div>

            {/* Footer */}

            <div className="mt-10 border-t border-zinc-700 pt-5 text-gray-400">
              Added :{" "}
              {productDetails.createdOn
                ? new Date(productDetails.createdOn).toLocaleDateString()
                : "-"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

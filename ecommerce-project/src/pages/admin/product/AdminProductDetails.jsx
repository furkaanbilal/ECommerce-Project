import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BASE_URL } from "../../../constants/app-urls";
import { getProductDetailsByPdId } from "../../../services/productDetails-service";

const AdminProductDetails = () => {
  const { pdid } = useParams();

  const [productDetails, setProductDetails] = useState({});
  const [selectedImage, setSelectedImage] = useState("");

  const getDetailsByProductDetailsId = async (pdid) => {
    const response = await getProductDetailsByPdId(pdid);

    if (response.isSuccess) {
      setProductDetails(response.data);

      if (response.data.appFiles?.length > 0) {
        setSelectedImage(`${BASE_URL}${response.data.appFiles[0].filePath}`);
      } else if (response.data.filePath) {
        setSelectedImage(`${BASE_URL}${response.data.filePath}`);
      }
    }
  };

  useEffect(() => {
    getDetailsByProductDetailsId(pdid);
  }, [pdid]);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Product Details
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ================= Images ================= */}

          <div className="bg-[#1a1a1a] rounded-3xl p-5 border border-zinc-800">
            {/* Main Image */}

            <div className="overflow-hidden rounded-2xl bg-black">
              <img
                src={selectedImage}
                alt={productDetails.title}
                className="w-full h-[420px] object-cover hover:scale-105 duration-500"
              />
            </div>

            {/* Gallery */}

            {productDetails.appFiles?.length > 0 && (
              <div className="flex gap-3 overflow-x-auto mt-5 pb-2">
                {productDetails.appFiles.map((file, index) => (
                  <img
                    key={index}
                    src={`${BASE_URL}${file.filePath}`}
                    alt={file.fileName}
                    onClick={() =>
                      setSelectedImage(`${BASE_URL}${file.filePath}`)
                    }
                    className={`w-28 h-28 rounded-xl object-cover cursor-pointer border-2 transition flex-shrink-0
                      ${
                        selectedImage === `${BASE_URL}${file.filePath}`
                          ? "border-orange-500 scale-105"
                          : "border-transparent hover:border-orange-500"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ================= Details ================= */}

          <div className="space-y-6">
            {/* Title Card */}

            <div className="bg-[#1a1a1a] rounded-3xl p-6 border border-zinc-800">
              <span className="bg-orange-500 text-sm px-3 py-1 rounded-full">
                {productDetails.brand}
              </span>

              <h2 className="text-4xl font-bold mt-4">
                {productDetails.title}
              </h2>

              <p className="text-zinc-400 mt-4 leading-7">
                {productDetails.description}
              </p>
            </div>

            {/* Price */}

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-zinc-800">
                <p className="text-zinc-400 text-sm">Price</p>

                <h3 className="text-3xl font-bold text-orange-500 mt-2">
                  ₹ {productDetails.price}
                </h3>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-5 border border-zinc-800">
                <p className="text-zinc-400 text-sm">Discount</p>

                <h3 className="text-3xl font-bold text-green-400 mt-2">
                  {productDetails.discount}%
                </h3>
              </div>
            </div>

            {/* Product Info */}

            <div className="bg-[#1a1a1a] rounded-3xl border border-zinc-800 overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="p-5 border-b border-r border-zinc-800">
                  <p className="text-zinc-500 text-xs uppercase">
                    Product ID
                  </p>

                  <p className="mt-2 break-all text-sm">
                    {productDetails.id}
                  </p>
                </div>

                <div className="p-5 border-b border-zinc-800">
                  <p className="text-zinc-500 text-xs uppercase">
                    Product Detail ID
                  </p>

                  <p className="mt-2 break-all text-sm">{pdid}</p>
                </div>

                <div className="p-5 border-r border-zinc-800">
                  <p className="text-zinc-500 text-xs uppercase">
                    Brand
                  </p>

                  <p className="mt-2">{productDetails.brand}</p>
                </div>

                <div className="p-5">
                  <p className="text-zinc-500 text-xs uppercase">
                    Units
                  </p>

                  <p className="mt-2">{productDetails.units}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetails;
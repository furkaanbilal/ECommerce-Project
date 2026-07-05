import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { getProductsByCategoryId } from "../../../services/product-services";
import { BASE_URL } from "../../../constants/app-urls";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
 
  const getProducts = async (id) => {
    const response = await getProductsByCategoryId(id);

    if (response.isSuccess) {
      setProducts(response.data);
    }
  };

  useEffect(() => {
      getProducts(id);
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto" >
    
        {products.length === 0 ? (
          <h2 className="text-center text-gray-400 text-xl">
            No Products Found
          </h2>
        ) : (
          
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
               <Link to={`/products/productDetails/${product.productDetailId}`}>
              <div
                key={product.id}
                className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={`${BASE_URL}/${product.filePath}`}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition">
                    {product.title}
                  </h2>

                   <p className="text-orange-500  line-clamp-2 mb-4">
                    {product.brand}
                  </p>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {product.description}
                  </p>



                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-500">
                      ₹{product.price}
                    </span>
                    <span className="text-2xl font-bold text-orange-500">
                      %{product.discount}
                    </span>

                    <div className="flex gap-2">
                      <Link to={`/products/productDetails/${product.productDetailId}`} className="p-2 rounded-full bg-zinc-800 hover:bg-orange-500 hover:text-black transition">
                        <Eye size={18} />
                      </Link>

                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
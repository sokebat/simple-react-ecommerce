import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductShowCard from "../../components/Card/ProductShowCard/ProductShowCard";
import { useCart } from "../../context/Cart";
import {
  useGetSingleProduct,
  useProductRecomend,
} from "../../lib/react query/queryAndMutaion";
import { productType } from "../../types/type";

const SingleProduct = () => {
  const { id } = useParams<{ slug: string }>();

  const [product, setProduct] = useState<productType>();

  const { data, isLoading, isError } = useGetSingleProduct(id);
  const { data: productRecomended } = useProductRecomend();
  const { addToCart } = useCart();

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  if (!id) return null;
  if (!product) return null;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div className="container mx-auto px-7 ">
      <div className="container grid grid-cols-2 gap-6 py-7 ">
        <div>
          <img
            src={product?.image}
            alt="product"
            className="h-[500px] object-contain  w-full "
          />
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {product?.title}
          </h2>
          <div className="flex items-center mb-4">
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">{product?.category}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">
              {product?.price}
            </p>
            <p className="text-base text-gray-400 line-through">
              {product?.price + 10}
            </p>
          </div>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="pt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Size</h3>
            <div className="flex items-center gap-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xs"
                  className="hidden"
                />
                <label
                  htmlFor="size-xs"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XS
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-sm"
                  className="hidden"
                />
                <label
                  htmlFor="size-sm"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  S
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-m"
                  className="hidden"
                />
                <label
                  htmlFor="size-m"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  M
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-l"
                  className="hidden"
                />
                <label
                  htmlFor="size-l"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  L
                </label>
              </div>
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  id="size-xl"
                  className="hidden"
                />
                <label
                  htmlFor="size-xl"
                  className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                >
                  XL
                </label>
              </div>
            </div>
          </div>

          {/* <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                onClick={() => removeQuantity(product.id)}
              >
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                {quantity}
              </div>
              <div
                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                onClick={() => addQuantity(product.id)}
              >
                +
              </div>
            </div>
          </div> */}

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <p
              onClick={() => {
                addToCart(product);
              }}
              className="bg-primary border border-primary cursor-pointer text-gray-500  px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
            >
              <i className="fa-solid fa-bag-shopping"></i> Add to cart
            </p>
            <a
              href="#"
              className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
            >
              <i className="fa-solid fa-heart"></i> Wishlist
            </a>
          </div>
        </div>
      </div>

      <div className=" py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          recomended for you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 place-content-center place-items-center gap-3 ">
          {productRecomended?.map((data: productType) => (
            <ProductShowCard key={data.id} product={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

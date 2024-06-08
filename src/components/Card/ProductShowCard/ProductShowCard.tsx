import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/Cart";
import { productType } from "../../../types/type";

interface ProductShowCardProps {
  product: productType;
}

const ProductShowCard = ({ product }: ProductShowCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="bg-white shadow rounded overflow-hidden group w-72 py-2 px-1  cursor-pointer ">
      <div
        onClick={() => {
          navigate(`/products/${product.id}`);
        }}
      >
        <div className="relative">
          <img
            src={product.image}
            alt={product.title}
            className=" h-52   mx-auto w-64  object-contain rounded-md "
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
            justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </a>
            <a
              href="#"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <i className="fa-solid fa-heart"></i>
            </a>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <a href="#">
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition line-clamp-1">
              {product.title}
            </h4>
          </a>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">
              ${product.price}
            </p>
            <p className="text-sm text-gray-400 line-through"> </p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150)</div>
          </div>
        </div>
      </div>
      <p
     
        className="block w-full py-1 text-center cursor-pointer text-white bg-red-500  border border-primary rounded-b "
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to cart
      </p>
    </div>
  );
};

export default ProductShowCard;

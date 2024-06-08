import { ArrowLeftIcon, CircleMinus, CirclePlus, Trash2 } from "lucide-react";
import { useCart } from "../../context/Cart";

const Cart = () => {
  const { cartItems, removeFromCart, addQuantity, removeQuantity } = useCart();

  const calculateSummary = () => {
    const originalPrice = cartItems.reduce(
      (total, item) => total + (item.price ?? 0) * (item.quantity ?? 1),
      0
    );
    const savings = 299.0;
    const storePickup = 99.0;
    const tax = originalPrice * 0.1;
    const total = originalPrice - savings + storePickup + tax;

    return {
      originalPrice,
      savings,
      storePickup,
      tax,
      total,
    };
  };

  const { originalPrice, savings, storePickup, tax, total } =
    calculateSummary();

  return (
    <div>
      <section className="bg-white py-8 container mx-auto px-7 md:py-16">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartItems &&
                cartItems.map((item) => {
                  return (
                    <div
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
                      key={item.id}
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1">
                          <img
                            className="h-20 w-20"
                            src={item.image}
                            alt={item.name}
                          />
                        </a>

                        <label htmlFor="counter-input" className="sr-only">
                          Choose quantity:
                        </label>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              onClick={() => removeQuantity(item.id)}
                              className="p-2"
                            >
                              <CircleMinus />
                            </button>
                            <p className="px-2">{item.quantity}</p>
                            <button
                              onClick={() => addQuantity(item.id)}
                              className="p-2"
                            >
                              <CirclePlus />
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-base font-bold text-gray-900">
                              $
                              {item.price && item.quantity
                                ? (item.price * item.quantity).toFixed(2)
                                : item.price}
                            </p>
                          </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a
                            href="#"
                            className="text-base font-medium text-gray-900 hover:underline"
                          >
                            {item.name}
                          </a>
                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline"
                            >
                              <ArrowLeftIcon size={20} /> Add to Favorites
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2"
                            >
                              <Trash2 color="#b72424" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-gray-900">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${originalPrice.toFixed(2)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -${savings.toFixed(2)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${storePickup.toFixed(2)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Tax</dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${tax.toFixed(2)}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">
                    ${total.toFixed(2)}
                  </dd>
                </dl>
              </div>

              <a
                href="#"
                className="flex w-full items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Proceed to Checkout
              </a>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500"> or </span>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;

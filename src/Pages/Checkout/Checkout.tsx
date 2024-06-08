// Import Font Awesome icons if you haven't already set it up
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="container py-4 flex items-center gap-3">
        <a href="../index.html" className="text-primary text-base">
          {/* <FontAwesomeIcon icon={faHouse} /> */}
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          {/* <FontAwesomeIcon icon={faChevronRight} /> */}
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Checkout</p>
      </div>

      {/* Order Form */}
      <div className="container grid grid-cols-12 items-start pb-16 pt-4 gap-6">
        <div className="col-span-8 border border-gray-200 p-4 rounded">
          <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
          <form>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="text-gray-600">
                    First Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="input-box"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="text-gray-600">
                    Last Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="input-box"
                    required
                  />
                </div>
              </div>
              {/* Additional form fields go here */}
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-span-4 border border-gray-200 p-4 rounded">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            Order Summary
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-800 font-medium">
                  Italian shape sofa
                </h5>
                <p className="text-sm text-gray-600">Size: M</p>
              </div>
              <p className="text-gray-600">x3</p>
              <p className="text-gray-800 font-medium">$320</p>
            </div>
            {/* Repeat for additional items */}
          </div>

          <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-medium py-3 uppercase">
            <p>Subtotal</p>
            <p>$1280</p>
          </div>
          {/* Add more totals as needed */}

          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              name="aggrement"
              id="aggrement"
              className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              required
            />
            <label
              htmlFor="aggrement"
              className="text-gray-600 ml-3 cursor-pointer text-sm"
            >
              I agree to the{" "}
              <a href="#" className="text-primary">
                terms & conditions
              </a>
            </label>
          </div>

          <a
            href="#"
            className="block w-full py-3 px-4 text-center text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium"
          >
            Place order
          </a>
        </div>
      </div>
    </>
  );
};

export default Checkout;

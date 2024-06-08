import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className=" bg-gray-800 w-full">
      <nav className="flex justify-between items-center py-4  text-white container mx-auto  px-12">
        <div className="flex w-1/2  items-center  justify-between ">
          <Link to="/" className="text-xl font-bold">
            EXCLUSIVE
          </Link>
          <div className="flex gap-8">
            <a href="/">
              <p className="hover:text-gray-300">Home</p>
            </a>
            <a href="/about">
              <p className="hover:text-gray-300">About</p>
            </a>
            <a href="/services">
              <p className="hover:text-gray-300">Services</p>
            </a>
            <a href="/contact">
              <p className="hover:text-gray-300">Contact</p>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-around   w-1/3 ">
          <div>
            <input
              type="search"
              placeholder="Search..."
              className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600"
            />
          </div>
          <div>love</div>
          <div>Cart</div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

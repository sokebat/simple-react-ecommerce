const Footer = () => {
  return (
    <section>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-12 grid grid-cols-4 gap-4  ">
          <div className="col-span-1 flex flex-col  gap-y-2">
            <div className="text-xl font-bold mb-4">EXCLUSIVE</div>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div>
              <input
                type="search"
                placeholder="Search..."
                className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:bg-gray-600 mt-4"
              />
            </div>
          </div>
          <div className="col-span-1">
            <p className="font-bold">Support</p>
            <p>111 street , Pokhara, DH 1515, Nepal.</p>
            <p>exclusive@gmail.com</p>
            <p>+977 999-999-9999</p>
          </div>
          <div className="col-span-1">
            <p className="font-bold">Account</p>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
          </div>
          <div className="col-span-1">
            <p className="font-bold">Quick Link</p>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

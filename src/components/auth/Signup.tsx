const Signup = () => {
  return (
    <div>
      {" "}
      <section className="mx-auto mt-10 w-full flex-grow mb-10 max-w-[1200px] px-5">
        <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
          <div className="">
            <p className="text-4xl font-bold">CREATE AN ACCOUNT</p>
            <p>Register for new customer</p>
          </div>

          <form className="mt-6 flex flex-col">
            <label htmlFor="name">Full Name</label>
            <input
              className="mb-3 mt-3 border px-4 py-2"
              type="text"
              placeholder="Bogdan Bulakh"
            />

            <label className="mt-3" htmlFor="email">
              Email Address
            </label>
            <input
              className="mt-3 border px-4 py-2"
              type="email"
              placeholder="user@mail.com"
            />

            <label className="mt-5" htmlFor="email">
              Password
            </label>
            <input
              className="mt-3 border px-4 py-2"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            />

            <label className="mt-5" htmlFor="email">
              Confirm password
            </label>
            <input
              className="mt-3 border px-4 py-2"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            />
          </form>

          <div className="mt-4 flex justify-between">
            <form className="flex gap-2">
              <input type="checkbox" />
              <label htmlFor="checkbox">
                I have read and agree with
                <a href="#" className="text-violet-900">
                  terms &amp; conditions
                </a>
              </label>
            </form>
          </div>

          <button className="my-5 w-full bg-violet-900 py-2 text-white">
            CREATE ACCOUNT
          </button>

          <p className="text-center text-gray-500">OR SIGN UP WITH</p>

          <div className="my-5 flex gap-2">
            <button className="w-1/2 bg-blue-800 py-2 text-white">
              FACEBOOK
            </button>
            <button className="w-1/2 bg-orange-500 py-2 text-white">
              GOOGLE
            </button>
          </div>

          <p className="text-center">
            Already have an account?
            <a href="/log-in" className="text-violet-900">
              Login now
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signup;

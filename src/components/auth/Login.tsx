const Login = () => {
  return (
    <div>
      {" "}
      <section className="mx-auto flex-grow w-full mt-10 mb-10 max-w-[1200px] px-5">
        <div className="container mx-auto border px-5 py-5 shadow-sm md:w-1/2">
          <div className="">
            <p className="text-4xl font-bold">LOGIN</p>
            <p>Welcome back, customer!</p>
          </div>

          <form className="mt-6 flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              className="mb-3 mt-3 border px-4 py-2"
              type="email"
              placeholder="youremail@domain.com"
            />

            <label htmlFor="email">Password</label>
            <input
              className="mt-3 border px-4 py-2"
              type="password"
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            />
          </form>

          <div className="mt-4 flex justify-between">
            <form className="flex gap-2">
              <input type="checkbox" />
              <label htmlFor="checkbox">Remember me</label>
            </form>
            <a href="#" className="text-violet-900">
              Forgot password
            </a>
          </div>

          <button className="my-5 w-full bg-violet-900 py-2 text-white">
            LOGIN
          </button>

          <p className="text-center text-gray-500">OR LOGIN WITH</p>

          <div className="my-5 flex gap-2">
            <button className="w-1/2 bg-blue-800 py-2 text-white">
              FACEBOOK
            </button>
            <button className="w-1/2 bg-orange-500 py-2 text-white">
              GOOGLE
            </button>
          </div>

          <p className="text-center">
            Don`t have account?
            <a href="/sign-up" className="text-violet-900">
              Register now
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;

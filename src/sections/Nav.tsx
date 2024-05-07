function Nav() {
  return (
    <nav>
      <div className="flex justify-between items-center mt-6 w-3/4 mx-auto">
        <div>
          <a href="/" className="text-2xl">
            <h1>Brandwise</h1>
          </a>
        </div>
        <div className="text-lg">
          <a href="" className="mx-4">
            Pricing
          </a>
          <a href="" className="mx-4">
            Features
          </a>
          <a href="" className="mx-4">
            FAQ
          </a>
          <a href="" className="mx-4">
            Docs
          </a>
        </div>
        <div>
          <a
            href=""
            className="py-2 px-4 rounded-xl mr-3 text-[#000] border border-blue-700 "
          >
            Sign In
          </a>
          <a
            href=""
            className="py-2 px-4 rounded-2xl text-[#fff] bg-blue-700 border "
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

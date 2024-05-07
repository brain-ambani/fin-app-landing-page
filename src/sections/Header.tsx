function Header() {
  return (
    <header className="w-3/4 mx-auto mt-[8rem] flex flex-col items-center">
      <div
        className="mx-auto mb-4 max-w-fit flex items-center
      justify-center space-x-2 overflow-hidden rounded-full
      border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur
       transition-all hover:border-gray-300 hover:bg-white/50"
      >
        <p className="text-sm font-semibold text-blue-700">
          Brandwise is now public!
        </p>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <h1 className="w-2/4 text-5xl font-semiboldtext-center text-center">
            Grow your brand with smarter engagment
          </h1>
          <p className="text-center text-gray-500 text-xl w-2/3 mt-4">
            Moderate social media comments, manage conversations at scale, and
            increase your sales using AI
          </p>
        </div>
        <div className="flex items-center justify-center mt-6">
          <a
            href="#"
            className="text-xl border bg-blue-700 py-2 px-4 rounded-md mr-4 text-white font-semibold"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="bg-gray-700 w-[1/2] my-12 rounded-md">
        <img
          src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="header-pic"
          className="rounded-md w-full h-full object-cover "
        />
      </div>
    </header>
  );
}

export default Header;

function BeforeFooter() {
  return (
    <div className="w-3/4 mx-auto flex flex-col items-center justify-center ">
      <div className="w-3/4 flex flex-col items-center justify-center m-20">
        <h1 className="text-6xl text-center font-semibold">
          Try <span className="text-blue-700">Brandwise</span> now, it's sleek
          and easy to set up
        </h1>
        <a
          href="#"
          className="mt-20 bg-blue-700 text-white text-xl rounded-full font-semibold px-4 py-2 hover:bg-blue-300 hover:text-black"
        >
          Get Started
        </a>
        <a
          href="#"
          className="mt-6 text-xl hover:bg-blue-200 py-4 px-3 rounded-md"
        >
          Need help or have questions?
        </a>
      </div>
    </div>
  );
}

export default BeforeFooter;

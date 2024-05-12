function Footer() {
  return (
    <div className="bg-gray-300 ">
      <div className="w-3/4 mx-auto pt-16">
        <div className="flex justify-between pb-8">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Brandwise</h2>
            <p>Stay ahead of the Curve</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <a href="# " className="hover:underline">
              Market Intelligence
            </a>
            <a href="#" className="hover:underline">
              News Reader
            </a>
            <p className="hover:underline ">Threat Intelligent</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2 ">Resources</h2>
            <a href="# " className="hover:underline">
              Changelog
            </a>
            <a href="#" className="hover:underline">
              AI Library
            </a>
            <a href="#" className="hover:underline">
              Case Studies
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <p className="hover:underline">Documentation</p>
            <a href="#" className="hover:underline">
              Slack Community
            </a>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Learn More</h2>
            <a href="#" className="hover:underline">
              Advertise on Brandwise
            </a>
            <a href="#" className="hover:underline">
              Discover Top Blogs
            </a>
          </div>
        </div>
        <div>
          <div className="bg-blue-300 w-full  h-[1px]"></div>
          <div>
            <div>
              <h4>copyright 2024</h4>
              <h4>Privacy</h4>
              <h4>Terms of Use</h4>
            </div>
            <div>
              <a href="">twitter</a>
              <a href="">linkedin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

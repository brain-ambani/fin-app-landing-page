import Marquee from "react-fast-marquee";
import img1 from "../assets/images/one.png";
import img2 from "../assets/images/two.png";
import img3 from "../assets/images/three.png";
import img4 from "../assets/images/four.png";

function SliderComponent() {
  return (
    <Marquee className="p-4">
      <img src={img1} alt="" className="mr-1 w-64" />
      <img src={img2} alt="" className="mx-8 w-64" />
      <img src={img3} alt="" className="mx-8 w-64" />
      <img src={img4} alt="" className="mr-1 w-64" />
    </Marquee>
  );
}

export default SliderComponent;

import "../styles/splash.scss";
import Slider from "./Slider"; 
// import Slider from "react-slick";
import ImageUrlConverter from "../util/ImageLinkConverter";


// ImageData is to be refractor later into Data class later on. 
const imagesData = [
  {
    image: 
     ImageUrlConverter("https://drive.google.com/file/d/1E98AHxRPPdzGbyF3kb9AlfEopE1by0sR/view?usp=sharing")
  },
  {
    image: 
    ImageUrlConverter("https://drive.google.com/file/d/13HETOA40IXaagdMN5Sc_khyyWfKohBKd/view?usp=sharing")

  },
  {
    image: 
    ImageUrlConverter("https://drive.google.com/file/d/1FPX8leF_8i7oaS_K1j99jZc1L2wR3C5U/view?usp=sharing")

  },
];

function Splash() {

    return <Slider slides={imagesData}/>;
  }
export default Splash
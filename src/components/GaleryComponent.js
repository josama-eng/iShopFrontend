import React from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.webp";
import img6 from "../assets/images/img6.webp";

console.log(img1);
const GaleryComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 py-10">
      <img
        src={img1}
        alt="Slika 1"
        className="w-imgWidth mb-4 h-imgHeight object-cover"
      />
      <img
        src={img2}
        alt="Slika 2"
        className="w-imgWidth mb-4 h-imgHeight object-cover"
      />
      <img
        src={img3}
        alt="Slika 3"
        className="w-imgWidth mb-4 h-imgHeight object-cover"
      />
      <img
        src={img4}
        alt="Slika 4"
        className="w-imgWidth mb-4 h-imgHeight object-cover"
      />
      <img
        src={img5}
        alt="Slika 5"
        className="w-imgWidth mb-4 h-imgHeight object-cover"
      />
      <img
        src={img6}
        alt="Slika 6"
        className="w-imgWidth mb-4 h-imgHeight object-cover"
      />
    </div>
    // <div className="flex flex-wrap justify-center items-center">
    //   <div className="w-1/2 md:w-1/3 ">
    //     <img
    //       src={img1}
    //       alt="Slika 1"
    //       className="w-imgWidth mb-4 h-imgHeight object-cover"
    //     />
    //     <img
    //       src={img2}
    //       alt="Slika 2"
    //       className="w-imgWidth mb-4 h-imgHeight object-cover"
    //     />
    //     <img
    //       src={img3}
    //       alt="Slika 3"
    //       className="w-imgWidth h-imgHeight object-cover"
    //     />
    //   </div>
    //   <div className="w-1/2 md:w-1/3">
    //     <img
    //       src={img4}
    //       alt="Slika 4"
    //       className="w-imgWidth mb-4 h-imgHeight object-cover"
    //     />
    //     <img
    //       src={img5}
    //       alt="Slika 5"
    //       className="w-imgWidth mb-4 h-imgHeight object-cover"
    //     />
    //     <img
    //       src={img6}
    //       alt="Slika 6"
    //       className="w-imgWidth h-imgHeight object-cover"
    //     />
    //   </div>
    // </div>
  );
};

export default GaleryComponent;

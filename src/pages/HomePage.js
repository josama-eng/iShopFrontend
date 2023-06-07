import HeroComponent from "../components/HeroComponent";
import SpecComponent from "../components/SpecComponent";
import InfoComponent from "../components/InfoComponent";
import AboutComponent from "../components/AboutComponent";
import DetailsComponent from "../components/DetailsComponent";
import BannerComponent from "../components/BannerComponent";
import GaleryComponent from "../components/GaleryComponent";
import ProductsComponent from "../components/ProductsComponent";

const HomePage = () => {
  return (
    <>
      <HeroComponent />
      <SpecComponent />
      <InfoComponent />
      <ProductsComponent />
      <AboutComponent />
      <DetailsComponent />
      <BannerComponent />
      <GaleryComponent />
    </>
  );
};

export default HomePage;

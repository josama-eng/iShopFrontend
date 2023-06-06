import hero from "../assets/images/hero5.png";

const BannerComponent = () => {
  return (
    <div
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
      className="w-full min-h-screen flex flex-col justify-end items-center "
    >
      <div className="text-white pb-5">
        <h2 className="text-customSize">
          No other phone <br /> is like iPhone
        </h2>
        <h3 className="text-customTextSize pt-1 tracking-wider">
          Every decision that goes into iPhone makes it stand apart
        </h3>
        <p className="pt-2">
          From the way it’s made, to the way we build in privacy and security
          from the start, to the innovative ways we recycle its components.
        </p>
      </div>
    </div>
  );
};

export default BannerComponent;

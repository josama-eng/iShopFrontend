import hero from "../assets/images/hero4.jpeg";

const DetailsComponent = () => {
  return (
    <div
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${hero})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
      }}
      className="w-full min-h-screen flex  justify-start items-center py-10 px-10"
    >
      <div className="text-white w-custom text-start">
        <h2 className="text-customSize">Advanced Face ID</h2>
        <h3 className="text-customTextSize tracking-wider py-5">
          Security is simple when your face is your password.
        </h3>
        <p className="text-textSize">
          You can unlock your iPhone, log in to apps, and pay for things with a
          glance. It’s the most secure facial authentication ever in a
          smartphone. And now it’s even faster.
        </p>
      </div>
    </div>
  );
};

export default DetailsComponent;

import hero from "../assets/images/hero3.png";

const AboutComponent = () => {
  return (
    <div
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full min-h-screen flex  justify-start items-center py-10 px-10"
    >
      <div className="w-aboutWidth flex flex-col justify-center items-center  text-start text-white">
        <div className="py-10">
          <h2 className="text-rose text-customSize">Exceptional materials</h2>
          <p className="text-textSize">
            The most durable front glass ever in a smartphone.
            Precision-machined, aerospace-grade aluminum bands. Water and dust
            resistance.2 And six stunning new finishes.
          </p>
        </div>
        <div className="flex justify-start items-start gap-5 flex-wrap md:flex-nowrap">
          <div>
            <h2 className="text-rose text-customTextSize py-2">
              Seven-layer color process
            </h2>
            <p className="text-standardTextSize">
              The beautiful finishes of the back glass are achieved using an
              advanced process that allows for deep, rich colors.
            </p>
          </div>
          <div>
            <h2 className="text-rose text-customTextSize py-2">
              Aerospace-grade aluminum bands
            </h2>
            <p className="text-standardTextSize">
              A special Apple designed alloy is precision‑machined to create
              structural bands, and anodized to complement the color of the back
              glass.
            </p>
          </div>
          <div>
            <h2 className="text-rose text-customTextSize py-2">
              Wireless charging
            </h2>
            <p className="text-standardTextSize">
              The glass back allows iPhone XR to charge easily and wirelessly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;

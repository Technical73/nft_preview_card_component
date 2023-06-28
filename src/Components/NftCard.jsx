import image1 from "../assets/images/image-equilibrium.jpg";
import icon1 from "../assets/images/icon-ethereum.svg";
import clock from "../assets/images/icon-clock.svg";
import avatar from "../assets/images/image-avatar.png";
import view from "../assets/images/icon-view.svg";

const NftCard = () => {
  return (
    <>
      {/*Card Starts from here*/}
      <div className="card bg-cardBg flex mx-auto justify-center items-start flex-col gap-6 rounded-[15px]">
        {/* Image starts from here */}
        <div className="relative">
          <img
            className="w-full rounded-xl transition-opacity duration-300 hover:opacity-50"
            src={image1}
            alt="equilibrium"
          />
          <div className="absolute inset-0 flex justify-center items-center transition-all duration-300 opacity-0 hover:opacity-100 hover:cursor-pointer">
            {/* Overlay */}
            <div className="bg-customCyan absolute inset-0 flex justify-center items-center bg-opacity-40 w-full h-full rounded-xl">
              {/* Centered icon */}
              <img src={view} alt="ethereum" className=" opacity-100" />
            </div>
          </div>
        </div>

        {/* Image Ends here */}
        {/* Header and paragraph starts from here */}
        <div className="flex justify-center items-start flex-col gap-3 w-full">
          <h3 className="w-full font-customFamily font-bold text-lg text-customWhite transition-all duration-300 hover:text-customCyan hover:cursor-pointer">
            Equilibrium #3429
          </h3>
          <p className="text-customFontPara text-start text-softBlue font-customFamily font-[600]">
            Our Equilibrium collection promotes balance and calm.
          </p>
        </div>

        {/* Header and paragraph ends here */}
        {/* Icons and content starts from here */}
        <div className="flex w-full justify-between items-center">
          {/* Icon1 starts from here */}
          <div className="flex justify-center items-center gap-1">
            <span>
              <img src={icon1} alt="ethereum" className="h-[14px]" />
            </span>
            <p className="font-[600] font-customFamily text-customCyan text-[14px]">
              0.041 ETH
            </p>
          </div>

          {/* Icon1 Ends here */}

          {/* Icon2 starts from here */}
          <div className="flex justify-center items-center gap-1">
            <span>
              <img src={clock} alt="ethereum" className="h-[12px]" />
            </span>
            <p className="font-[600] font-customFamily text-softBlue text-[12px]">
              3 days left
            </p>
          </div>

          {/* Icon2 Ends here */}
        </div>

        {/* Icons and content starts from here */}
        {/*Line starts from here*/}
        <div className="border border-lineColor w-full "></div>
        {/*Line ends here*/}
        {/* Profile starts from here*/}
        <div className="flex justify-start items-center gap-3">
          {/* Profile Starts from here */}
          <div className="w-[35px] h-[35px] flex justify-center items-center flex-col rounded-[50%] border-customWhite">
            <img src={avatar} alt="avatar" className="w-full h-full " />
          </div>
          {/* Profile Ends here */}
          <p className="text-customFontPara font-[600] text-start text-customWhite font-customFamily transition-all duration-300 hover:text-customCyan hover:cursor-pointer">
            <span className="text-customFontPara font-[600] text-start text-softBlue font-customFamily">
              Creation of
            </span>{" "}
            Jules Wyvern
          </p>
        </div>

        {/* Profile ends here*/}
      </div>

      {/*Card Ends here*/}
    </>
  );
};

export default NftCard;

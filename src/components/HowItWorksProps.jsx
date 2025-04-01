
const HowItWorksProps = ({ title, text, image }) => {
    return (
      <div className="flex items-center py-4 px-2 justify-center gap-4 border-[1px] border-[#E3E3E3] shadow-md rounded-lg">
        <div>
          <img className="w-auto" src={image} alt="image" />
        </div>
        <div>
          <h1 className="font-sanns font-semibold text-xs md:text-lg lg:text-xl">{title}</h1>
          <p className="font-sanns font-normal text-xs text-[#000000] lg:text-lg">{text}</p>
        </div>
      </div>
    );
  };
export default HowItWorksProps
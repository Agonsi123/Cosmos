const WorkLoad = ({ title, text, image, Roi, monthOne, monthTwo, location, country }) => {
    return (
      <div className="flex items-center py-4 px-2 justify-center gap-1 border-[1px] border-[#E3E3E3] rounded-lg shadow-md">
        <div>
          <img className="w-24 h-24" src={image} alt="image" />
        </div>
        <div>
          <p className="text-gray font-normal text-lg"><span>{monthOne}</span>- <span>{monthTwo} 2024</span></p>
          <h1 className="font-sanns font-semibold text-xs md:text-base">{title}</h1>
          <p>{text}</p>
          <p className="font-normal  text-base">
          <span className="text-gray font-normal text-base">Location:  </span><span className= "text-[#14141499]">
          {location},{country}
          </span>
        </p>
        <p className="font-medium text-lg"><span>Roi + {Roi}% </span></p>
        </div>
      </div>
    );
  };

  export default WorkLoad
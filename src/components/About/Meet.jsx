import React from "react";
import tree from "../../assets/portTree.png";

const Meet = () => {
  return (
    <div className="relative bg-productCol lg:pt-[130px] sm:pb-[100px] md:pt-[500px]  lg:pb-[150px] pt-[46px] pb-[400px] font-sanns ">
      <div className="absolute top-0 right-0">
        <img src={tree} alt="tree" />
      </div>
      <div className="lg:flex items-center gap-8 w-full md:px-16 px-8 lg:px-28">
        <div className="lg:w-1/2 flex relative lg:py-0 px-2  py-8">
          <div className="absolute z-20 bottom-[-760px] sm:left-[100px] sm:bottom-[-770px] md:top-[-178px] left-0 lg:top-[-150px] lg:left-[0px]">
            <img
              className="rounded-xl lg:h-[450px] w-[200px] h-[200px] lg:w-[200px] object-cover"
              src="https://media.istockphoto.com/id/637545544/photo/farmwoking-senior-person-in-field.jpg?s=612x612&w=0&k=20&c=FZ6Aup2-cSn6WLntbmy27ZzWgQUqkfrXXsvPW9NSNbc="
              alt="one"
            />
          </div>
          <div className="absolute w-[100px] bg-[#88B32E] h-[100px]  rounded-xl lg:block hidden z-0 top-[-240px] right-[320px] ">
           
          </div>
          {/* for smaller screens */}
          <div className="absolute w-[100px] h-[100px] sm:bottom-[-600px] sm:left-[170px] block lg:hidden bg-[#88B32E] rounded-xl  z-0 md:bottom-[180px] left-[70px] bottom-[-620px] md:left-[70px] ">
          
          </div>

          <div className=" lg:block hidden z-10">
            <img
              className="absolute right-[50px] bottom-[-300px] rounded-xl h-[600px] w-[300px] object-cover object-center"
              src="https://media.istockphoto.com/id/624356436/photo/young-girl-from-borana-tribe-holding-baby-ethiopia-africa.jpg?s=612x612&w=0&k=20&c=_2MSzRuGA_D00RW0XgRT8lBtgGTIVs2N4jZZM-kNoeo="
              alt="two"
            />
          </div>

          {/* for smaller screens */}

          <div className="absolute sm:top-[533px] right-[-30px] top-[582px] sm:right-[30px] md:top-[-400px] block lg:hidden z-10 md:right-[140px]">
            <img
              className="rounded-xl w-[200px] md:w-[400px] sm:w-[300px] h-[240px] sm:h-[300px] md:h-[424px]"
              src="https://media.istockphoto.com/id/624356436/photo/young-girl-from-borana-tribe-holding-baby-ethiopia-africa.jpg?s=612x612&w=0&k=20&c=_2MSzRuGA_D00RW0XgRT8lBtgGTIVs2N4jZZM-kNoeo="
              alt="two"
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div>
            <h1 className="font-semibold text-header py-4 md:py-4 md:text-4xl">
              Meet Cosmos AgriTech
            </h1>
            <h1 className="font-medium text-[#060606] py-4 md:py-4 md:text-2xl">
              “WHO WE ARE”
            </h1>
            <p className="font-normal md:text-lg text-gray">
              Cosmos Agritech connects investors with smallholder farmers,
              driving food security and sustainable growth through impactful
              agricultural investments.
            </p>
          </div>
          <div>
            <h1 className="font-medium text-[#060606] py-4 md:py-8 md:text-2xl">
              “WHAT WE DO”
            </h1>
            <p className="font-normal md:text-lg text-gray">
              We empower smallholder farmers by providing them with access to
              funding and resources, enabling them to cultivate crops, increase
              yields, and improve livelihoods. Through our platform, investors
              can support sustainable agriculture while earning returns,
              fostering a stronger and more resilient agricultural sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;

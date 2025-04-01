import React from "react";

const How = () => {
  return (
    <div className="relative md:px-16 px-8 md:py-16 py-10 lg:px-28 font-sanns lg:flex items-center gap-8">
      <div className="lg:w-1/2">
        <h1 className="font-semibold text-header py-4 md:py-4 md:text-4xl">How it all Began</h1>
        <h1 className="font-medium text-[#060606] py-4 md:py-4 md:text-4xl">Our Story</h1>
        <p className="font-normal md:text-lg text-gray">
          Cosmos Agritech, founded in [Year], is revolutionizing Nigerian
          agriculture. We connect smallholder farmers with investors, empowering
          them to increase yields, improve livelihoods, and protect the
          environment. Key milestones include our first major partnership with
          [Partner&apos; Name] in [Year] and the launch of our innovative
          platform in [Year], connecting [Number] farmers. By investing in
          Cosmos Agritech, you&apos;re not just supporting a business, but the
          future of Nigerian agriculture.
        </p>
      </div>
      <div className="lg:w-1/2 flex relative lg:py-0  py-8">
        <div className="z-10">
          <img
            className="rounded-xl h-auto w-[400px] object-cover"
            src="https://media.istockphoto.com/id/545653684/photo/potato-farmer-harvesting.jpg?s=612x612&w=0&k=20&c=qL3o7tJuvPfF_rBfIbKfFwoPHq7K7kGB-LR2xJifKpk="
            alt="one"
          />
        </div>
        <div className="absolute w-[100px] bg-[#88B32E] rounded-xl h-[100px] lg:block hidden z-0 top-[220px] left-[350px] ">
        
        </div>
      {/* for smaller screens */}
      <div className="absolute w-[100px] h-[100px] sm:bottom-[290px] sm:left-[350px] block lg:hidden z-0 bg-[#88B32E] rounded-xl md:bottom-[410px] left-[270px] bottom-[230px] md:left-[370px] ">
        
        </div>

        <div className="absolute top-[246px] lg:block hidden z-20 right-[-0px]">
          <img
            className="rounded-xl w-[350px] h-[354px]"
            src="https://media.istockphoto.com/id/1190012698/photo/okra-farm-in-selangor-malaysia.jpg?s=612x612&w=0&k=20&c=N84T8BKm84bIgfHPnRTbWYfNswdl2_Ut_atnQmsA6m4="
            alt="two"
          />
        </div>

        {/* for smaller screens */}

        
        <div className="absolute sm:top-[333px] right-[-30px] top-[280px] sm:right-[30px] md:top-[210px] block lg:hidden z-20 md:right-[10px]">
          <img
            className="rounded-xl w-[200px] md:w-[400px] sm:w-[300px] h-[240px] sm:h-[300px] md:h-[424px]"
            src="https://media.istockphoto.com/id/1190012698/photo/okra-farm-in-selangor-malaysia.jpg?s=612x612&w=0&k=20&c=N84T8BKm84bIgfHPnRTbWYfNswdl2_Ut_atnQmsA6m4="
            alt="two"
          />
        </div>
      </div>
    </div>
  );
};

export default How;

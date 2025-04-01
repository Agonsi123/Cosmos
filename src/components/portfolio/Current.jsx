import React from "react";
import tree from "../../assets/portTree.png";
import Button from "../Button";

import SeeMore from "../SeeMore";

const products = [
  {
    id: 1,
    title: "Premium Plantain Farm",
    location: "Lagos",
    country: "Nigeria",
    minInvestment: 70000,
    Roi: 25,
    status: "Open",
    image: "https://media.istockphoto.com/id/1134494815/photo/woman-harvesting-rice-plant-with-a-sickle.jpg?s=612x612&w=0&k=20&c=ry4EnAQWd4WwOL5qY-78bfKdbcr0fSKevkdn-o-Dftg="
  },
  {
    id: 2,
    title: "Maize Farming Initiative",
    location: "Benin",
    country: "Nigeria",
    minInvestment: 50000,
    Roi: 25,
    status: " Open",
    image: "https://media.istockphoto.com/id/1165251128/photo/aerial-top-view-of-farmers-working-at-farms-cassava.jpg?s=612x612&w=0&k=20&c=EIyWK_WYWD2K1B8DKT2Sxe_zmvlMILDYas_z5g87waY="
  },
  {
    id: 3,
    title: "Rice Farming Initiative",
    location: "Kaduna",
    country: "Nigeria",
    minInvestment: 100000,
    Roi: 25,
    status: " Open",
    image: "https://media.istockphoto.com/id/2147545089/photo/a-woman-is-picking-tea-leaves-in-a-field.jpg?s=612x612&w=0&k=20&c=qClf3RfyL0qIZg6Uc8UoYfxgJ8tKXbT2Z4GG6iCcP8k=",
  },
  
];

const Current = () => {
  return (
    <div className="bg-productCol relative md:px-16 px-8 py-6 lg:px-28 ">
      <div className=" border-[#E3E3E3]  ">
        <div className="absolute top-0 right-0">
          <img src={tree} alt="tree" />
        </div>
        <div>
          <h1 className="text-header font-semibold text-center py-4 md:py-6 md:text-4xl">
            Current Investment Opportunities
          </h1>
        </div>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                products.map((product) => (
                    <ProductList key={product.key} {...product}/>
                ))
            }
            </ul>
        </div>
        <div className="relative py-4">
          <div className="absolute  bottom-10px right-[0px]">
            <SeeMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current;

const ProductList = ({
  image,
  title,
  minInvestment,
  location,
  country,
  Roi,
  status,
}) => {
  return (
    <li className="border-[1px] border-[#E3E3E3] shadow-2xl bg-white rounded-xl w-full mx-a px-2 py-2 ">
      <div className="w-full mx-auto ">
      <img className="w-full h-44 rounded-xl" src={image} alt="" />
      </div>
      <h1 className="py-2 font-semibold text-[22px]">{title}</h1>
      <p className="font-normal  text-base">
        <span className="text-gray">Location:  </span><span className= "text-[#14141499]">
        {location},{country}
        </span>
      </p>
      <p><span className="text-gray">Min.Investment:  </span> <span className= "text-[#14141499]" >{minInvestment}</span></p>
      <p><span className="text-gray">Roi:  </span> <span className= "text-[#14141499]">{Roi}%</span></p>
      <p><span className="text-gray">Status:  </span><span className= "text-[#14141499]">{status}</span></p>
      <div className="w-full py-3"><Button>View Detail</Button></div>
    </li>
  );
};

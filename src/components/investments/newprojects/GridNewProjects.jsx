
import tomato from "../../../assets/tomatogrid.png";
import coco from "../../../assets/coco.png";
import lastgrid from "../../../assets/lastgrid.png";
import planta from "../../../assets/planta.png";
import maizegrid from "../../../assets/maizegrid.png";
import poultry from "../../../assets/poultrygrid.png";
import soy from "../../../assets/soy.png";
import rice from "../../../assets/ricegrid.png";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    image: rice,
    name: "Rice Farming Initiative",
    text: "Invest in sustainable rice farming to meet growing demand.",
    status: "Open",
    roi: 25,
    min: 100000,
  },
  {
    id: 2,
    image: coco,
    name: "Cassava plantation",
    text: "Invest in cassava production to meet export needs.",
    status: "Open",
    roi: 25,
    min: 100000,
  },
  {
    id: 3,
    image: planta,
    name: "Premium Plantain Farm",
    text: "Support plantain farming for local and global markets.",
    status: "Open",
    roi: 25,
    min: 100000,
  },
  {
    id: 4,
    image: maizegrid,
    name: "Maize Farming Initiative",
    text: "Invest in sustainable rice farming to meet growing demand.",
    status: "Open",
    roi: 25,
    min: 100000,
  },
  {
    id: 5,
    image: tomato,
    name: "Tomato Farming Initiative",
    text: "Back eco-friendly farming of tomatoes for year-round supply",
    status: "Open",
    roi: 25,
    min: 100000,
  },
  {
    id: 6,
    image: poultry,
    name: "Poultry Farming Initiative",
    text: "Improve poultry farming techniques for higher profitability.",
    status: "Closed",
    roi: 25,
    min: 100000,
  },
  {
    id: 7,
    image: soy,
    name: "Soy Bean Harvest Plan",
    text: "Promote profitable soybean farming for increasing demand.",
    status: "Open",
    roi: 25,
    min: 100000,
  },
  {
    id: 8,
    image: lastgrid,
    name: "Cocoa Yield Enhancement",
    text: "Support cocoa farming for local and global markets",
    status: "Open",
    roi: 25,
    min: 100000,
  },
];
const GridNewProjects = ({ setSelected, setShow }) => {
  const navigate = useNavigate();
  console.log("GridNewProjects received setSelected:", setSelected);
  return (
    <div>
      <ul className="grid space grid-cols-4 gap-2">
        {products.map((product) => (
          <li
            className="border-[1px] py-4 mb-8 shadow-lg px-2 rounded-xl border-[#1E1E1E1F]"
            key={product.id}
          >
            <Products
              name={product.name}
              text={product.text}
              roi={product.roi}
              status={product.status}
              image={product.image}
              min={product.min}
              setSelected={setSelected}
              setShow={setShow}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GridNewProjects;

const Products = ({ image, text, status, roi, name, min, setSelected, setShow }) => {
  console.log("Products component rendered. setSelected:", setSelected);
  return (
    <div className="font-sanns">
      <div className="space-y-2">
        <img src={image} alt={image} />
        <h1 className="font-semibold font-sanns text-lg text-[#1E1E1E]">
          {name}
        </h1>
        <p className="font-normal text-sm text-[#1E1E1EBF]">{text}</p>
        <p className="font-normal text-sm">
          <span className="text-[#1E1E1EBF]">Status:</span>
          <span className="text-[#000000] ">{status}</span>
          <span className="text-[#1E1E1EBF]">ROI: </span>
          <span className="text-[#000000] ">{roi}</span>
        </p>
        <p>
          <span className="text-[#1E1E1EBF]">Min.Investment : #</span>
          <span className="text-[#000000] ">{min}</span>
        </p>
      </div>
      <div className="flex justify-between items-center pt-4 pb-2">
        <button
          className="text-[#6B911B] font-semibold text-base"
          onClick={() => setSelected({ name, image, text, min, status, roi })}
        >
          View Details
        </button>
        <button onClick={() => setShow({ name, roi, min, status })} className="bg-bgGray text-white py-1 px-3 rounded">
          Invest Now
        </button>
      </div>
    </div>
  );
};

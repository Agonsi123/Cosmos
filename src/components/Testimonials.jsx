import one from "../assets/manfoot.png";
import two from "../assets/grassman.png";
import three from "../assets/footsmile.png";
import { GrFormNext } from "react-icons/gr";
import SeeMore from "./SeeMore";
const testimonials = [
  {
    id: 1,
    name: "John Adedeji",
    text: "Cosmos Agritech transformed my farming business!",
    image: one,
    date: "24 August 2024",
  },
  {
    id: 2,
    name: "Obinna John",
    text: "I'm grateful for the support from Cosmos.",
    image: two,
    date: "24 August 2024",
  },
  {
    id: 3,
    name: "Chika Nwosu",
    text: "Investing Cosmos was a game changer in the agric sector",
    image: three,
    date: "17 December 2024",
  },
];
const Testimonials = () => {
  return (
    <div className="bg-bgFoot bg-no-repeat relative h-[373px] bg-cover flex flex-col items-center justify-center lg:mb-72 md:mb-[660px] mb-[890px] sm:mb-[650px] ">
      <h1 className="font-semibold text-4xl font-sanns text-black text-center pt">
        Testimonials
      </h1>
      <p className="text-base py-2 font-medium text-black font-sanns text-center">
        Stories of Growth Through Funding
      </p>
      <div className="absolute mx-auto md:px-16 px-8 lg:px-28 top-2/3 pb-11 ">
        <ul className="lg:flex sm:grid sm:grid-cols-2 grid-cols-1 items-center justify-center gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              name={testimonial.name}
              text={testimonial.text}
              image={testimonial.image}
              date={testimonial.date}
            />
          ))}
        </ul>
        <div className="relative py-4">
          <div className="absolute  bottom-10px right-[0px]">
            <SeeMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
const Testimonial = (testimonial) => {
  return (
    <li className="bg-white px-4 w-72 font-sannss shadow-lg py-4 rounded-3xl">
      <img
        className="h-44 w-full object-cover rounded-2xl mb-4"
        src={testimonial.image}
        alt=""
      />
      <h1 className=" font-sanns text-[#141414] font-medium text-[21px]">
        {testimonial.name}
      </h1>
      <p className="text-[#9B9D8E] font-sanns font-normal text-lg">
        {testimonial.text}
      </p>
      <p className="text-[#000000BF] font-sanns font-normal text-sm">
        {testimonial.date}
      </p>
    </li>
  );
};

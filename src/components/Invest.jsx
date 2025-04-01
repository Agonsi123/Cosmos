import girl from "../assets/ladycult.png";
import Button from "./Button";

const Invest = () => {
  return (
    <div>
      <div className="md:flex font-sanns justify-between items-center py-20 gap-20 md:px-16 px-8  lg:px-28">
        <div className="md:hidden block">
          <img src={girl} alt="girl" />
        </div>
        <div className="hidden md:block md:w-1/2">
          <img src={girl} alt="girl" />
        </div>
        <div className="md:w-1/2">
          <div>
            <h1 className="font-semibold lg:pb-4 text-header py-6 lg:py-0  text-2xl lg:text-4xl">
              Invest in Agriculture. Grow Your Wealth!
            </h1>
            <p className="text-gray lg:text-lg">
              Support farmers, earn returns, and make a difference today
            </p>
            <div className="py-4">
            <Button variant="primary" size="lg">Contact Us Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;

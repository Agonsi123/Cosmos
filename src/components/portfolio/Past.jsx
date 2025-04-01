
import maize from "../../assets/maize.png";
import maizee from "../../assets/maizee.png";
import ricee from "../../assets/ricee.png";
import riceee from "../../assets/riceee.png";
import plantain from "../../assets/plantain.png";
import thmaize from "../../assets/thmaize.png";
// import { title } from 'process';
import WorkLoad from '../WorkLoad';
const pasts = [
    {
        id:1,
        image: maizee,
        monthOne: "Jan",
        monthTwo: "Feb",
        Roi: 25,
        title: "Maize Farm Project",
        location: "Lagos",
        country: "Nigeria",
    },
    {
        id:2,
        image: riceee,
        monthOne: "May",
        monthTwo: "June",
        Roi: 25,
        title: "Rice Farm Project",
        location: "Ondo",
        country: "Nigeria",
    },
    {
        id:3,
        image: thmaize,
        monthOne: "August",
        monthTwo: "December",
        Roi: 25,
        title: "Poultry Farm Project",
        location: "Kaduna",
        country: "Nigeria",
    },
]
const Past = () => {
  return (
    <div className="md:px-16 px-8 py-6 lg:px-28">
        <h1 className="font-semibold text-header text-center py-6 md:py-6 md:text-4xl font-sanns">Past Investments Opportunities</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            pasts.map((past) => (
                <WorkLoad key={past.id} image={past.image} monthOne={past.monthOne} monthTwo={past.monthTwo} Roi={past.Roi} title={past.title} location={past.location} country={past.country}/>
            ))
        }
      </ul>
    </div>
  )
}

export default Past

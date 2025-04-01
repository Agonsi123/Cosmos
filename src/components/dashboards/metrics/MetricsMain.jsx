import React from "react";
import Card from "./Cards";
import MetricsRight from "./MetricsRight";
import ContainerCard from "./ContainerCard";



const MetricsMain = () => {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-4">
      <ContainerCard/>
      <MetricsRight/>
    </div>
  );
};

export default MetricsMain;

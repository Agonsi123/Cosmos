import React from "react";
import PropOverview from "../components/investments/PropOverview";
import GridNewProjects from "../components/investments/newprojects/GridNewProjects";
import InvestmentHeader from "../components/investments/InvestmentHeader";
import DashBoardsHeader from "../components/dashboards/DashBoardsHeader";
import bell from "../assets/bell.png";
import Pagination from "../components/investments/newprojects/Pagination";
import { useState, useEffect } from "react";
import Modalprojectdetails from "../components/investments/newprojects/Modalprojectdetails";
import ModalnvestNow from "../components/investments/newprojects/ModalnvestNow";
import ModalConfirm from "../components/investments/newprojects/ModalConfirm";
import ModalSuccess from "../components/investments/newprojects/ModalSuccess";
const NewProject = () => {
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const [sucess, setSucess] = useState(null);

  useEffect(() => {
    console.log("Selected state updated:", selected);
  }, [selected]);

  const closeModal = () => {
    setSelected(null);
  };
  const closeShow = () => {
    setShow(null);
  };
  const closeConfirm = () => {
    setConfirm(null);
  };
  const closeSucess = () => {
    setSucess(null);
  };

  return (
    <div className="px-4">
      <DashBoardsHeader
        title="Investment"
        text="Manage and track all your investments easily"
        image={bell}
      />
      <PropOverview name="Available Projects" />
      <GridNewProjects
        setSelected={setSelected}
        setShow={setShow}
        setConfirm={setConfirm}
      />
      <Pagination />
      {selected && (
        <Modalprojectdetails setShow={setShow} selected={selected} setSelected={closeModal} />
      )}
      {show && (
        <ModalnvestNow show={show} setShow={closeShow} setSucess={setSucess} />
      )}
      {confirm && <ModalConfirm confirm={confirm} setConfirm={closeConfirm} />}
      {sucess && <ModalSuccess sucess={sucess} setSucess={closeSucess} />}
    </div>
  );
};

export default NewProject;

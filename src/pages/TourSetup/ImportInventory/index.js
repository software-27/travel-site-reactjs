import React, { useState } from "react";

import { Column, Row} from "components";
import Header from "components/Header/Header/index";
import Sidebar from "components/Sidebar/index";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import Topbtns from "components/Topbutton/index";
import {
  mdiInformation,
  mdiDownload,
  mdiUpload,
} from "@mdi/js";

const ImportInventoryPage = () => {
  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const navigate = useNavigate();

  function handleNavigate20() {
    navigate("/inventory");
  }

  function handleNavigate21() {
    navigate("/packages");
  }

  function handleNavigate22() {
    navigate("/rulestour");
    
  }

  function handleNavigate70() {
    navigate("/importinventory");
    
  }

  return (
    <>
      <Header className="w-[100%]" />
      <Column className="bg-white h-fit w-[100%]">
        <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
          <Column>
            <Topbtns/>
          </Column>
          <Column className="mt-[20px] pl-[40px] text-light_blue_600 font-regular">
           
          </Column>
        </Row>
        <Row className="w-[100%] mt-[8px]">
          <Sidebar />
          <Column className=" p-2 bg-white h-screen w-[100%]">
            <Row>
              <Column className="w-[65%] ml-[10px] mt-[10px] ">
                <text className="text-light_blue_600 text-[25px] font-regular">
                  Import Inventory
                </text>
                <line className="bg-gray_200 my-[10px] h-[1.5px] w-[1250px]" />
                <text className="mt-1 font-regular text-[13.5px]">
                  Import or update your inventory by uploading a Rezgo-formatted CSV file.
                </text>
                <Row>
                  <Icon
                  path={mdiInformation}
                  title="alertcir"
                  className="w-1 h-1 mr-2 text-bold items-center text-white"
                  size={0.8}
                  horizontal-180
                  />
                  <text className="mt-1 font-regular text-[13.5px]">
                    Drag a CSV file to this page to upload it or click the button below.
                  </text>
                </Row>
                <Row className="mt-3">
                  <button className="bg-[#87B87F] py-3 px-6 hover:bg-[#629B58]" type="file">
                    <Row>
                      <Icon
                      path={mdiUpload}
                      title="alertcir"
                      className="w-2 h-2 mr-2 text-bold items-center text-white"
                      size={0.7}
                      horizontal-180
                      />
                      <text className="text-white text-[13.5px]">
                        Upload CSV File
                      </text>
                    </Row>
                  </button>
                  <button className="ml-3 bg-[#6FB3E0] py-3 px-6 hover:bg-[#569FCC]">
                    <Row>
                      <Icon
                      path={mdiDownload}
                      title="alertcir"
                      className="w-2 h-2 mr-2 mt-1 text-bold items-center text-white"
                      size={0.7}
                      horizontal-180
                      />
                      <text className="text-white text-[13.5px]">
                        Download Inventory CSV
                      </text>
                    </Row>
                  </button>
                </Row>
              </Column>
            </Row>
            
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ImportInventoryPage;

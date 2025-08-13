import React, { useState, useEffect } from "react";
import { Column, Row, Text, Input, Button, Line } from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import { CheckBoxAdmin } from "components/CheckBoxAdmin/index";
import Checkbox1 from "components/Checkbox1/index";
import Checkbox2 from "components/Checkbox2/index";
import HeaderOTAAdmin from "components/Header/HeaderOTAAdmin/index";
import SidebarManageUser from "components/SidebarManageUser/index";
import LoginPage from "components/Login/index";
import SignupPage from "components/SignUp/index";

const PageControlPage = () => {
  const [show, setShow] = useState();
  const [showhide, setShowhide] = useState("no");

  const handleshow = (e) => {
    const getshow = e.target.value;
    setShowhide(getshow);
  };

  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/manage-role");
  }

  function handleNavigate2() {
    navigate("/manage-role-2");
  }

  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);

  const openPopup1 = () => {
    setIsPopup1Open(true);
  };

  const openPopup2 = () => {
    setIsPopup2Open(true);
  };

  const closePopup1 = () => {
    setIsPopup1Open(false);
  };

  const closePopup2 = () => {
    setIsPopup2Open(false);
  };

  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(CheckBoxAdmin);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  
  const catalog = list.map(({ id, name }) => {
    return (
      <>
        <Checkbox1
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        {name}
      </>
    );
  });

  const [isCheckAll2, setIsCheckAll2] = useState(false);
  const [isCheck2, setIsCheck2] = useState([]);
  const [list2, setList2] = useState([]);

  useEffect(() => {
    setList2(CheckBoxAdmin);
  }, [list2]);

  const handleSelectAll2 = (e) => {
    setIsCheckAll2(!isCheckAll2);
    setIsCheck2(list2.map((li) => li.id));
    if (isCheckAll2) {
      setIsCheck2([]);
    }
  };

  const handleClick2 = (e) => {
    const { id, checked2 } = e.target;
    setIsCheck2([...isCheck2, id]);
    if (!checked2) {
      setIsCheck2(isCheck2.filter((item) => item !== id));
    }
  };

  const catalog2 = list2.map(({ id, name }) => {
    return (
      <>
        <Checkbox2
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick2={handleClick2}
          isChecked2={isCheck2.includes(id)}
        />
        {name}
      </>
    );
  });

  const [isCheckAll3, setIsCheckAll3] = useState(false);
  const [isCheck3, setIsCheck3] = useState([]);
  const [list3, setList3] = useState([]);

  useEffect(() => {
    setList3(CheckBoxAdmin);
  }, [list3]);

  const handleSelectAll3 = (e) => {
    setIsCheckAll3(!isCheckAll3);
    setIsCheck3(list3.map((li) => li.id));
    if (isCheckAll3) {
      setIsCheck3([]);
    }
  };

  const handleClick3 = (e) => {
    const { id, checked } = e.target;
    setIsCheck3([...isCheck3, id]);
    if (!checked) {
      setIsCheck3(isCheck3.filter((item) => item !== id));
    }
  };

  const catalog3 = list3.map(({ id, name }) => {
    return (
      <>
        <Checkbox2
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick3={handleClick3}
          isChecked3={isCheck3.includes(id)}
        />
        {name}
      </>
    );
  });

    const [isCheckAll4, setIsCheckAll4] = useState(false);
    const [isCheck4, setIsCheck4] = useState([]);
    const [list4, setList4] = useState([]);

    useEffect(() => {
      setList4(CheckBoxAdmin);
    }, [list4]);

    const handleSelectAll4 = (e) => {
      setIsCheckAll4(!isCheckAll4);
      setIsCheck4(list4.map((li) => li.id));
      if (isCheckAll4) {
        setIsCheck4([]);
      }
    };

    const handleClick4 = (e) => {
      const { id, checked } = e.target;
      setIsCheck4([...isCheck4, id]);
      if (!checked) {
        setIsCheck4(isCheck4.filter((item) => item !== id));
      }
    };

    const catalog4 = list4.map(({ id, name }) => {
      return (
        <>
          <Checkbox1
            key={id}
            type="checkbox"
            name={name}
            id={id}
            handleClick4={handleClick4}
            isChecked4={isCheck4.includes(id)}
          />
          {name}
        </>
      );
    });

    const [isCheckAll5, setIsCheckAll5] = useState(false);
    const [isCheck5, setIsCheck5] = useState([]);
    const [list5, setList5] = useState([]);

    useEffect(() => {
      setList5(CheckBoxAdmin);
    }, [list5]);

    const handleSelectAll5 = (e) => {
      setIsCheckAll5(!isCheckAll5);
      setIsCheck5(list5.map((li) => li.id));
      if (isCheckAll5) {
        setIsCheck5([]);
      }
    };

    const handleClick5 = (e) => {
      const { id, checked } = e.target;
      setIsCheck5([...isCheck5, id]);
      if (!checked) {
        setIsCheck5(isCheck5.filter((item) => item !== id));
      }
    };

    const catalog5 = list5.map(({ id, name }) => {
      return (
        <>
          <Checkbox1
            key={id}
            type="checkbox"
            name={name}
            id={id}
            handleClick5={handleClick5}
            isChecked5={isCheck5.includes(id)}
          />
          {name}
        </>
      );
    });

     const [isCheckAll6, setIsCheckAll6] = useState(false);
     const [isCheck6, setIsCheck6] = useState([]);
     const [list6, setList6] = useState([]);

     useEffect(() => {
       setList6(CheckBoxAdmin);
     }, [list6]);

     const handleSelectAll6 = (e) => {
       setIsCheckAll6(!isCheckAll6);
       setIsCheck6(list6.map((li) => li.id));
       if (isCheckAll6) {
         setIsCheck6([]);
       }
     };

     const handleClick6 = (e) => {
       const { id, checked } = e.target;
       setIsCheck6([...isCheck6, id]);
       if (!checked) {
         setIsCheck6(isCheck6.filter((item) => item !== id));
       }
     };

     const catalog6 = list6.map(({ id, name }) => {
       return (
         <>
           <Checkbox1
             key={id}
             type="checkbox"
             name={name}
             id={id}
             handleClick6={handleClick6}
             isChecked6={isCheck6.includes(id)}
           />
           {name}
         </>
       );
     });

      const [isCheckAll7, setIsCheckAll7] = useState(false);
      const [isCheck7, setIsCheck7] = useState([]);
      const [list7, setList7] = useState([]);

      useEffect(() => {
        setList7(CheckBoxAdmin);
      }, [list7]);

      const handleSelectAll7 = (e) => {
        setIsCheckAll7(!isCheckAll7);
        setIsCheck7(list7.map((li) => li.id));
        if (isCheckAll7) {
          setIsCheck7([]);
        }
      };

      const handleClick7 = (e) => {
        const { id, checked } = e.target;
        setIsCheck7([...isCheck7, id]);
        if (!checked) {
          setIsCheck7(isCheck7.filter((item) => item !== id));
        }
      };

      const catalog7 = list7.map(({ id, name }) => {
        return (
          <>
            <Checkbox1
              key={id}
              type="checkbox"
              name={name}
              id={id}
              handleClick7={handleClick7}
              isChecked7={isCheck7.includes(id)}
            />
            {name}
          </>
        );
      });

  return (
    <>
      <div className="w-full font-montserrat">
      <HeaderOTAAdmin openPopup1={openPopup1} className="fixed invisible lg:visible" />
        <LoginPage isOpen={isPopup1Open} openPopup2={openPopup2} closePopup1={closePopup1} />
        <SignupPage isOpen={isPopup2Open} closePopup2={closePopup2} />        <div className="py-5">

          <div className="flex">
            <div className="grid w-[200px]">
              <SidebarManageUser />
            </div>
            <div className="px-2 w-full">
              <text className="font-bold text-[40px]">
                Manage Role
              </text>
              <Column className="bg-gray_100 h-fit font-ptsans items-center  justify-start mx-[auto]  w-[100%]">
        <Column className="justify-start gap-6 w-[80%]">
          <Text className="font-bold pt-2 mt-[10px]" variant="h3">
            Page Control
          </Text>

          <Row className="w-[100%] h-fit">
            {/* First Column for First Row */}
            <Column className="justify-start rounded-radius4 shadow h-[100px] bg-[#F1F1F1] w-[100%]">
              <Row className="justify-end h-[80px] w-[100%]">
                <Text className="font-bold ml-10 pt-2 text-[16px] w-[30%]">
                  Domain
                </Text>
                <Text className="font-regular ml-10 pt-2 text-[16px] w-[70%]">
                  UNIQUEHOLIDAY
                </Text>
              </Row>
              <Row className="justify-end h-[80px] w-[100%]">
                <Text className="font-bold pt-2 ml-10 text-[16px] w-[30%]">
                  Role Name
                </Text>
                <Text className="font-regular pt-2 ml-10 text-[16px] w-[70%]">
                  Administrator
                </Text>
              </Row>
            </Column>
          </Row>

          <Row className="h-fit w-[100%] ">
            {/* Second Row */}
            <Column className="justify-start rounded-radius4 shadow  p-4 h-screen bg-[#F1F1F1] h-fit w-[100%]">
              {/* Row for Table*/}
              <Row className="h-fit w-[100%]">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                  <table class="w-[100%] layout-auto text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-[16px] text-[#FFFFFF] w-[100%] bg-[#555555] dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="w-[30%] pl-6 pr-12 py-3">
                          Administration
                        </th>
                        <th scope="col" class="w-[100%] pl-12 pr-6 py-3">
                          Administration Features
                        </th>
                        <th
                          scope="col"
                          class="w-[10%] justify-end px-20 py-3"
                        ></th>
                        <th
                          scope="col"
                          class="w-[10%] justify-end px-20 py-3"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Manage Accomodation
                        </th>
                        <td class="pl-12 pr-6 py-4">Accomodation Management</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div className="text-[#000000] font-bold inline flex items-center">
                            {catalog}
                          </div>
                        </td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div>
                            <Checkbox1
                              type="checkbox"
                              name="selectAll1"
                              id="selectAll1"
                              handleClick={handleSelectAll}
                              isChecked={isCheckAll}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Manage Hotel
                        </th>
                        <td class="pl-12 pr-6 py-4">Hotel Management</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div className="text-[#000000] font-bold inline flex items-center">
                            {catalog2}
                          </div>
                        </td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div>
                            <Checkbox2
                              type="checkbox"
                              name="selectAll2"
                              id="selectAll2"
                              handleClick2={handleSelectAll2}
                              isChecked2={isCheckAll2}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F1F1] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Manage Tour
                        </th>
                        <td class="pl-12 pr-6 py-4">Tour Management</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div className="text-[#000000] font-bold inline flex items-center">
                            {catalog3}
                          </div>
                        </td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div>
                            <Checkbox1
                              type="checkbox"
                              name="selectAll3"
                              id="selectAll3"
                              handleClick3={handleSelectAll3}
                              isChecked3={isCheckAll3}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Manage Booking
                        </th>
                        <td class="pl-12 pr-6 py-4">Booking Management</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div className="text-[#000000] font-bold inline flex items-center">
                            {catalog4}
                          </div>
                        </td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div>
                            <Checkbox2
                              type="checkbox"
                              name="selectAll4"
                              id="selectAll4"
                              handleClick4={handleSelectAll4}
                              isChecked4={isCheckAll4}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F1F1] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Email Setup
                        </th>
                        <td class="pl-12 pr-6 py-4">Email Setup</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div className="text-[#000000] font-bold inline flex items-center">
                            {catalog5}
                          </div>
                        </td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div>
                            <Checkbox1
                              type="checkbox"
                              name="selectAll5"
                              id="selectAll5"
                              handleClick5={handleSelectAll5}
                              isChecked5={isCheckAll5}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#FFFFFF] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Import Calendar
                        </th>
                        <td class="pl-12 pr-6 py-4">Import Calendar</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div className="text-[#000000] font-bold inline flex items-center">
                            {catalog6}
                          </div>
                        </td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div>
                            <Checkbox1
                              type="checkbox"
                              name="selectAll6"
                              id="selectAll6"
                              handleClick6={handleSelectAll6}
                              isChecked6={isCheckAll6}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr class="bg-[#F1F1F1] text-[14px] border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Manage Report
                        </th>
                        <td class="pl-12 pr-6 py-4">Manage Report</td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div className="text-[#000000] font-bold inline flex items-center">
                            {catalog7}
                          </div>
                        </td>
                        <td class="mr-20 px-20 py-4 w-[100px] justify-end">
                          <div>
                            <Checkbox1
                              type="checkbox"
                              name="selectAll7"
                              id="selectAll7"
                              handleClick7={handleSelectAll7}
                              isChecked7={isCheckAll7}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Row>

              <Row className="justify-start mt-6">
                <Button
                  className="justify-start mr-2 items-center border-none bg-sky-700 common-pointer font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[16px] 3xl:text-[26px] text-[#FFFFFF] w-fit"
                  onClick={handleNavigate2}
                >
                  SAVE
                </Button>

                <Button
                  className="justify-start items-center border-none bg-sky-700 common-pointer font-bold lg:text-[8px] xl:text-[10px] 2xl:text-[16px] 3xl:text-[26px] text-[#FFFFFF] w-fit"
                  onClick={handleNavigate1}
                >
                  BACK
                </Button>
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
            </div>
          </div>
        </div>
      </div>

      {/* Column untuk semua component */}
      
    </>
  );
};

export default PageControlPage;

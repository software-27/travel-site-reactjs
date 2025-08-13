import React from "react";
import { Row,Text,Button } from "components/index";
import { FaRss } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

  const CalendarFeeds= ()=> {

    const navigate = useNavigate();

    function handleNavigate20() {
      navigate("/t21");
    } 
 
     return(
        <>
        <Button class=" bg-[#87B87F] hover:bg-[#629B58] items-center h-8 w-[fit] mx-2 px-2"
        onClick={handleNavigate20}>
                            <Row className="items-center">
                              <FaRss className=" pr-2 h-5 w-5 text-white" />
                                <Text
                                    className="text-white cursor-pointer"
                                    variant="body5"
                                  >
                                    Calendar Feeds
                                </Text>
                                </Row>
                          </Button>
        </>
     )
 }
 
 export default CalendarFeeds;
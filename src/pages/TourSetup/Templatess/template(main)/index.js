
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/index";
import Topbtns from "components/Topbutton/index";
import { Column, Row, Text } from "components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Line } from "components";
import Branding from "../Branding/index";
import HHWebsite from "../HHWebsite/index";
import Notification from "../Notification/index";
import ContentPages from "../ContentPages/index";
import CustomSitePage from "../CustomSitePage/index";
import CannedMessage from "../CannedMessage/index";
import MediaManagerBtn from "../MediaManagerBtn/index";
import HHinterface from "../HHinterface/index";

const Template = () => {
    return (
        <>
            <Header className="w-[100%]" />
            <Column className="bg-white h-fit w-[100%]">
                <Row className="bg-gray_100 h-fit justify-start items-start w-[100%]">
                    <Topbtns />
                </Row>
                <Row className="w-[100%]">
                    <Sidebar />

                    <Row className="p-2 w-[100%]">
                        <Column className="mx-3 w-[100%] mb-[200px]">
                            <Column class="w-[100%]">
                                <Row>
                                    <Column class="w-[100%]">
                                        <Row>
                                            <Text className="font-light text-[#4C8FBD] text-2xl" >
                                                Setting
                                            </Text>
                                            <AiOutlineDoubleRight class="ml-2 mt-3 text-[#667E99]" />
                                            <Text className="font-light text-[#667E99] text-base mt-2 pl-1" >
                                                Template
                                            </Text>
                                        </Row>
                                    </Column>


                                    <MediaManagerBtn />
                                </Row>

                            </Column>
                            <Line className=" bg-gray_700_33 h-[0.5px] mb-2 mt-2 w-[100%]" />

                            <Branding />
                            <HHWebsite />
                            <Notification />
                            <HHinterface/>
                            <ContentPages />
                            <CustomSitePage />
                            <CannedMessage />
                        </Column>


                    </Row>

                </Row>
            </Column>

        </>
    )
}
export default Template;
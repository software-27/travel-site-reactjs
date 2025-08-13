import { FaHome, FaRegCreditCard, FaPlug, FaDesktop, FaCodeBranch, FaCogs } from "react-icons/fa";
import { BsGlobe, BsTextIndentLeft } from "react-icons/bs";
import { IoMdNotificationsOutline, IoDesktopSharp } from "react-icons/io";
import { BiToggleRight } from "react-icons/bi";
import { AiFillLock } from "react-icons/ai";
import { Column, Row, Text, Button } from "components";
import { useNavigate } from "react-router-dom";



const HomeButtonSetting = () => {

    const navigate = useNavigate();

    // navigate to company info 
    function handleNavigateCI() {
        navigate("/t43");
    }
    // navigate to Edit button of website & Widget
    function handleNavigateWW() {
        navigate("/t48");
    }

    // navigate to HH accounts
    function handleNavigateHHa() {
        navigate("/t46");
    }

    // navigate to Customize layout
    function handleNavigateCL() {
        navigate("/t47");
    }

    // navigate to Accept Payment
    function handleNavigateAP() {
        navigate("/t42");
    }
    // navigate to Integration
    function handleNavigateI() {
        navigate("/t64");
    }
    // navigate to Notification
    function handleNavigateN() {
        navigate("/t65");
    }

    // navigate to CustomField
    function handleNavigateCF() {
        navigate("/t69")
    }

    // navigate to General setting
    function handleNavigateSG() {
        navigate("/t66");
    }

    // navigate to Syetem confiq
    function handleNavigateSC() {
        navigate("/t67");
    }

    // navigate to Sgeeral setting
    function handleNavigateGS() {
        navigate("/t63");
    }

    // navigate to template
    function handleNavigateT() {
        navigate("/t68");
    }




    return (
        <>
            <Row >
                <Column class="w-[50%]">

                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                        onClick={handleNavigateCI}
                    >
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#3a87ad]">
                                <FaHome class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        Company Info
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="font-light text-xs text-[#667E99]">
                                        Company details, address, and location information
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>
                </Column>
                <Column class="w-[50%]">

                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                        onClick={handleNavigateWW}>
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#5cb85c]">
                                <BsGlobe class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        Website & Widget
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="font-light text-xs text-[#667E99]">
                                        Custom domain names and widget embedding
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>
                </Column>
            </Row>


            <Row >
                <Column class="w-[50%]">
                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                        onClick={handleNavigateHHa}>
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-white border border-[#3a87ad] ">
                                <img src="images/logoHH.jpg" class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        HalalHoliday Account
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="font-light text-xs text-[#667E99]">
                                        Billing and management for your HalalHoliday account
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>


                </Column>
                <Column class="w-[50%]">

                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                        onClick={handleNavigateCL}>
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#3a87ad]">
                                <BsTextIndentLeft class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        Customize Layout
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="font-light text-xs text-[#667E99]">
                                        Change the look and feel of the HalalHoliday admin system
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>
                </Column>
            </Row>

            <Row >
                <Column class="w-[50%]">
                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                        onClick={handleNavigateAP}
                    >
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#d9534f]">
                                <FaRegCreditCard class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        Accept Payments
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="font-light text-xs text-[#667E99]">
                                        Manage payment methods used by your agents and customers.
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>


                </Column>
                <Column class="w-[50%]">

                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                        onClick={handleNavigateI}
                    >
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#9585bf]">
                                <FaPlug class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        Integrations
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="font-light text-xs text-[#667E99]">
                                        Set API keys and connect HalalHoliday with other services.
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>
                </Column>
            </Row>

            <Row >
                <Column class="w-[50%]">
                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                    onClick={handleNavigateT}>
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#3a87ad]">
                                <FaDesktop class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        Templates
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="justify-starts font-light text-xs text-[#667E99]">
                                        Manage the look of your site, emails, and custom pages.
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>


                </Column>
                <Column class="w-[50%]">

                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                        onClick={handleNavigateN}>
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#5cb85c]">
                                <IoMdNotificationsOutline class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        Notifications
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="font-light text-xs text-[#667E99]">
                                        Manage the messages sent out to you and your customers.
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>
                </Column>
            </Row>

            <Row >
                <Column class="w-[50%]">
                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                    onClick={handleNavigateSG}>
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#d9534f]">
                                <AiFillLock class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        Security Groups
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="font-light text-xs text-[#667E99]">
                                        Set up user security groups with different access permissions.

                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>


                </Column>
                <Column class="w-[50%]">

                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                        onClick={handleNavigateCF}>
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#3a87ad]">
                                <BiToggleRight class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        Custom Fields
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="justify-starts font-light text-xs text-[#667E99]">
                                        Create and manage fields on inventory, contacts and waivers.
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>
                </Column>
            </Row>

            <Row >
                <Column class="w-[50%]">
                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                    onClick={handleNavigateSC}>
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#a0a0a0]">
                                <FaCodeBranch class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        System Configuration
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="font-light text-xs text-[#667E99]">

                                        Configure system behavior and other operational settings.

                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>


                </Column>
                <Column class="w-[50%]">

                    <Button class="w-[100%] bg-white hover:bg-[#f2f6f9] font-light text-blue-700 font-bold py-2 px-4"
                    onClick={handleNavigateGS}
                    >
                        <Row>
                            <div class="rounded-full h-14 w-14 flex items-center justify-center bg-[#a0a0a0]">
                                <FaCogs class="text-white w-8 h-8" />
                            </div>

                            <div class="ml-5 mt-2">
                                <Row>
                                    <Text class="font-normal text-base text-[#667E99]">
                                        General Settings
                                    </Text>
                                </Row>

                                <Row>
                                    <Text class="justify-starts font-light text-xs text-[#667E99]">

                                        Set analytics, labels, reviews, and external booking accounts.
                                    </Text>
                                </Row>
                            </div>
                        </Row>
                    </Button>
                </Column>
            </Row>




        </>
    )
}

export default HomeButtonSetting;


import { Column, Row, Text, Button, Line, Switch } from "components";
import { FaPlus } from "react-icons/fa";

const CustomSitePage = () => {
    return (
        <>
            <Column class="w-[100%] mt-2  mr-2">
                <Row>
                    <Text className="font-light text-black text-xl" >
                        Custom Site Pages
                    </Text>
                    <Text class="ml-2 text-sm font-light break-after-column mt-2">
                        These pages will be available on your HalalHoliday front-end site.
                    </Text>

                </Row>

                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

            </Column>

            <Column>
                <Button class="mt-2 bg-[#87b87f] hover:bg-[#629b58] items-center h-8 w-[17%] px-2 ring-4 ring-[#87b87f] ring-inset"
                >
                    <Row>
                        <FaPlus className="h-4 w-4 text-white font-light " />
                        <Text
                            className="pl-1 font-light text-white cursor-pointer pr-1 "
                            variant="body4"
                        >
                            Create New Page
                        </Text>
                    </Row>
                </Button>
            </Column>
        </>
    )
}

export default CustomSitePage;
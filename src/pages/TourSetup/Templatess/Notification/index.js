import Icon from '@mdi/react'
import { mdiLock, mdiEyeOff, mdiPencil, mdiAt, mdiPrinterOutline } from '@mdi/js';
import { Column, Row, Text, Button, Line, Switch } from "components";

const Notification = () => {
    return (
        <>
            <Column class="w-[100%] mt-2  mr-2">
                <Row>
                    <Text className="font-light text-black text-xl" >
                        Notifications
                    </Text>
                </Row>

                <Line className=" bg-gray_700_33 h-[0.5px] mt-2 w-[100%] mb-3 " />

            </Column>


            <Column className="w-[100%]">
                <div class="">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        </thead>
                        <tbody>

                            <tr class="w-[100%] cursor-pointer bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                            >
                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[45%]">
                                    <Row className="items-center gap-2">
                                        <Icon path={mdiAt}
                                            size={0.9}
                                            color="#478fca"

                                        />
                                        <Text className="text-sm mt-1">Email Template</Text>
                                    </Row>
                                </th>
                                <td class="py-2 w-[20%] text-[13px] text-black ">

                                    <Row className="text-right">

                                        <Switch />
                                        <Text className="mt-1 ml-1">DEFAULT</Text>


                                    </Row>

                                </td>
                                <td className="w-[35%] text-right ">
                                    <Row className="justify-end">
                                        <Button class="mr-2 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                        >
                                            <Row>
                                                <Icon path={mdiEyeOff}
                                                    size={0.6}
                                                    color="white"
                                                    className="mt-1"
                                                />
                                                <Text
                                                    className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                    variant="body4"
                                                >
                                                    View
                                                </Text>
                                            </Row>
                                        </Button>
                                        <Button class="mt-2 bg-[#ffb752] hover:bg-[#eea236] ring-[#ffb752] ring-inset items-center h-6 w-[fit] px-2 ring-4"

                                        >
                                            <Row>
                                                <Icon path={mdiPencil}
                                                    title="Bag"
                                                    size={0.6}
                                                    color="white"
                                                    className="mt-1"
                                                />
                                                <Text
                                                    className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                    variant="body4"
                                                >
                                                    Modify
                                                </Text>
                                            </Row>
                                        </Button>
                                    </Row>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </Column>

            <Column className="w-[100%]">
                <div class="">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        </thead>
                        <tbody>

                            <tr class="w-[100%] cursor-pointer bg-white dark:bg-gray-900 dark:border-gray-700 hover:bg-gray_101"
                            >
                                <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white w-[45%]">
                                    <Row className="items-center gap-2">
                                        <Icon path={mdiPrinterOutline}
                                            size={0.9}
                                            color="#478fca"

                                        />
                                        <Text className="text-sm mt-1">Print Template</Text>
                                    </Row>
                                </th>
                                <td class="py-2 w-[20%] text-[13px] text-black ">

                                    <Row className="text-right">

                                        <Switch />
                                        <Text className="mt-1 ml-1">DEFAULT</Text>


                                    </Row>

                                </td>
                                <td className="w-[35%] text-right ">
                                    <Row className="justify-end">
                                        <Button class="mr-2 text-right mt-2 bg-[#5bc0de] hover:bg-[#46b8da] items-center h-6 w-[fit] px-2 ring-4 ring-[#5bc0de] ring-inset"

                                        >
                                            <Row>
                                                <Icon path={mdiEyeOff}
                                                    size={0.6}
                                                    color="white"
                                                    className="mt-1"
                                                />
                                                <Text
                                                    className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                    variant="body4"
                                                >
                                                    View
                                                </Text>
                                            </Row>
                                        </Button>
                                        <Button class="mt-2 bg-[#ffb752] hover:bg-[#eea236] ring-[#ffb752] ring-inset items-center h-6 w-[fit] px-2 ring-4"

                                        >
                                            <Row>
                                                <Icon path={mdiPencil}
                                                    title="Bag"
                                                    size={0.6}
                                                    color="white"
                                                    className="mt-1"
                                                />
                                                <Text
                                                    className="pl-1 pt-1 text-xs font-light text-white cursor-pointer"
                                                    variant="body4"
                                                >
                                                    Modify
                                                </Text>
                                            </Row>
                                        </Button>
                                    </Row>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </Column>
        </>
    )
}

export default Notification;




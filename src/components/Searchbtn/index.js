import React from "react";
import { Row,Text,Button } from "components/index";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";


  const Search= ()=> {
 
     return(
        <>
        <Button class="bg-[#428bca] hover:bg-[#0671CD] items-center h-9 ml-2 px-2">
            <Row>
                <Text
                    className="text-white text-bold cursor-pointer "
                    variant="body6"
                >
                    Search
                </Text>
                <Icon
                    path={mdiMagnify}
                    title="Search"
                    className="w-4 h-4 ml-2 text-bold items-center text-white"
                    size={1}
                    horizontal-180
                />
            </Row>
        </Button>
        </>
     )
 }
 
 export default Search;
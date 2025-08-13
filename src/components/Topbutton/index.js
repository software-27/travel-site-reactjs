import React from "react";
import { FaShoppingCart, FaThumbtack } from "react-icons/fa";
import { Row,Column,Button,Text } from "components/index";


  const Topbtns= ()=> {
 
 
     return(
         <>
         <Column className="justify-start my-2.5">
         <Row className="items-start w-[100%]">
           <Button class="bg-[#87B87F] hover:bg-[#629B58] items-center h-9 px-2 ml-[10px]">
             <Row>
               <FaShoppingCart className="h-5 w-5 text-white" />
               <Text
                 className="px-1 text-white cursor-pointer"
                 variant="body7"
               >
                 Point of Sale
               </Text>
             </Row>
           </Button>
           <Button class="bg-[#6FB3E0] hover:bg-[#4F99C6] items-center h-9 px-2 ml-[10px]">
             <Row>
               <FaThumbtack className="h-5 w-5 text-white" />
             </Row>
           </Button>
         </Row>
       </Column>
         </>
     )
 }
 
 export default Topbtns;
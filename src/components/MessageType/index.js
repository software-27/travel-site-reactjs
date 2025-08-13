import React from "react";
import Icon from '@mdi/react'
import { mdiFilter } from '@mdi/js'


  const MessageType= ()=> {
 
 
     return(
         <> 
            <div class="flex w-[100%] h-9">
                <span class="h-10 inline-flex items-center px-4 text-sm text-gray-900 bg-gray_100 border border-r-0 border-gray-300">
                <Icon path={mdiFilter}
                          title="Bag"
                          size={0.8}
                          color="black"
                        />
                </span>
                <select class="h-10 w-[100%] bg-white border placeholder-bluegray_400 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" 
                > 
                    <option value="" disabled selected hidden>Message Type</option>
                    <option class="items-center">Unread</option>
                    <option class="items-center">Imported</option>
                </select>
            </div>
         </>
     )
 }
 
 export default MessageType;
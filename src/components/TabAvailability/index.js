import React from "react";
import { useState } from 'react';



const Tabs = () => {
  // const [openTab, setOpenTab] = React.useState(1);

  //for switch 
  const [enabled, setEnabled] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="relative flex flex-col-reverse overflow-hidden w-[100%]">
        <div className="flex">
          <label class="inline-flex relative items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              //    placeholder="Private"
              checked={enabled}
              readOnly
            />

            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"
            >
            </div>

            <span className="ml-6 text-sm font-medium text-gray-900">
              required
            </span>

          </label>
        </div>
      </div>
    </>
  );
};

export { Tabs };
import React from "react";

import { Text, Input, Img, Button, Line} from "components";
import { Column } from "components/Column";
import { Grid } from "components/Grid";
import { Row } from "components/Row";
import { useNavigate } from "react-router-dom";

const ChanManagerAdmPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen">

        <div className="p-5 grid grid-flow-col w-screen">

          <div className="grid grid-flow-col"> 
            <div className="grid grid-flow-col">
          
              <text className="text-[13px]">
                Filtered by Date Created:
              </text>

              <div className="border border-black p-2 w-[40%] h-[50%]">
                <input className="pl-2 text-[13px] w-[20%]"/>
                /
                <input className="pl-2 text-[13px] w-[20%]"/>
                /
                <input className="pl-2 text-[13px] w-[45%]"/>
              </div>

              <Img
                src="images/calendar.svg"
                className="h-5 w-5"
                alt="calendar"
              />
            </div>

          </div>

          <div className="grid grid-flow-col ">
            <text className="text-[13px]">
              Ground:
            </text>

            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer"/>
              <div class="mb-[50px] w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <text className="text-[13px]">
              Group:
            </text>
          
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer"/>
              <div class="mb-[50px] w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="grid grid-flow-col">
            <form>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block w-[400px] p-4 pl-10 text-[13px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search (date, status, code ID, keywords)" required/>
                </div>
            </form>
          </div>
          
          <div className="grid grid-flow-col ">
            <text className="text-[13px]">
              Pax Incentive:
            </text>

            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Show All</option>
              <option value="none">None</option>
              <option value="16">16+1</option>
              <option value="20">20+1</option>
              <option value="32">32+2</option>
            </select>
          </div>

          <div className="grid grid-flow-col ">

            <text className="text-[13px]">
              Approved:
            </text>

            <label class="relative inline-flex items-center cursor-pointer">
              <input checked type="checkbox" value="" class="sr-only peer"/>
              <div class="mb-[50px] w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <text className="text-[13px]">
              Pending:
            </text>

            <label class="relative inline-flex items-center cursor-pointer">
              <input checked type="checkbox" value="" class="sr-only peer"/>
              <div class="mb-[50px] w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <text className="text-[13px]">
              On hold:
            </text>

            <label class="relative inline-flex items-center cursor-pointer">
              <input checked type="checkbox" value="" class="sr-only peer"/>
              <div class="mb-[50px] w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Change Status</option>
              <option value="none">None</option>
              <option value="16">16+1</option>
              <option value="20">20+1</option>
              <option value="32">32+2</option>
            </select>

            <Button className="text-[13px]">
              Apply
            </Button>

          </div>

        </div>

        <div>
          <div class="flex flex-col">
            <div class="overflow-x-auto">
              <div class="inline-block min-w-full py-2 px-4">
                <div class="overflow-y:auto h-[580px]">
                  <table
                    class="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                    <thead class="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th
                          scope="col"
                          class="border-r px-3 py-2 dark:border-neutral-500 text-[12px]">
                          +
                        </th>
                        <th
                          scope="col"
                          class="border-r px-2 py-2 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </th>
                        <th
                          scope="col"
                          class="border-r px-4 py-2 dark:border-neutral-500 text-[12px]">
                          No.
                        </th>
                        <th
                          scope="col"
                          class="border-r px-3 py-2 dark:border-neutral-500 text-[12px]">
                          <div class="flex items-center">
                            Date Created
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="border-r px-2 py-2 dark:border-neutral-500 text-[12px]">
                          <div class="flex items-center">
                            Product Tour
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="border-r px-4 py-2 dark:border-neutral-500 text-[12px]">
                          <div class="flex items-center">
                            Tour Code
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="border-r px-2 py-2 dark:border-neutral-500 text-[12px]">
                          <div class="flex items-center">
                            Supplier ID
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="border-r px-[50px] py-2 dark:border-neutral-500 text-[12px]">
                          Tour Title
                        </th>
                        <th
                          scope="col"
                          class="border-r px-2 py-2 dark:border-neutral-500 text-[12px]">
                          Tour Type
                        </th>
                        <th
                          scope="col"
                          class="border-r px-[50px] py-2 dark:border-neutral-500 text-[12px]">
                          Dates
                        </th>
                        <th
                          scope="col"
                          class="border-r px-4 py-2 dark:border-neutral-500 text-[12px]">
                          <div class="flex items-center">
                            Depature Date
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="border-r px-4 py-2 dark:border-neutral-500 text-[12px]">
                          <div class="flex items-center">
                            Available/Total Quantity
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                          </div>
                        </th>
                        <th
                          scope="col"
                          class="border-r px-3 py-2 dark:border-neutral-500 text-[12px] w-[50%]">
                          Pricing Options
                        </th>
                        <th
                          scope="col"
                          class="border-r px-2 py-2 dark:border-neutral-500 text-[12px]">
                          Status
                        </th>
                        <th
                          scope="col"
                          class="border-r px-2 py-2 dark:border-neutral-500 text-[12px]">
                          Publish to Store
                        </th>
                        <th scope="col" class="px-2 py-2 text-[12px]">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody class="">
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          1
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          6-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          TK891023-GO
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          5768-GR63478-041023-1400
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-5768
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           8 Days 7 Nights Experience the Majestic Wonders of Turkiye
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Ground
                        </td>
                        <td
                          class=" border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 6-Aug-2023 
                          Cut Off: 20-Aug-2023
                          Full Payment: 30-Aug-2023
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          4-Oct-2023 (2:00PM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                            


                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Pending
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          2
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          6-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          TK891023-GO
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          5768-GR63478-231223-1000
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-5768
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           8 Days 7 Nights Experience the Majestic Wonders of Turkiye
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Ground
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 24-Oct-2023 
                          Cut Off: 8-Nov-2023
                          Full Payment: 18-Nov-2023
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          23-Dec-2023 (10:00AM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Approved
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input checked type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          3
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          7-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          ISTIST7M-TKD
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          1520-GP81583-230224-0800
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-1520
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           10 Days 8 Nights Discovery the Wonders of Morocco & Sahara Desert
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Group
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 30-Dec-2023 
                          Cut Off: 14-Jan-2024
                          Full Payment: 24-Jan-2024
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          23-Feb-2024 (8:00AM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Approved
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input checked type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          4
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          7-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          ISTIST7M-TKD
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          1520-GP81583-230224-0800
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-1520
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           10 Days 8 Nights Discovery the Wonders of Morocco & Sahara Desert
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Group
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 30-Dec-2023 
                          Cut Off: 14-Jan-2024
                          Full Payment: 24-Jan-2024
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          23-Feb-2024 (8:00AM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Approved
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input checked type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          5
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          7-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          ISTIST7M-TKD
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          1520-GP81583-230224-0800
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-1520
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           10 Days 8 Nights Discovery the Wonders of Morocco & Sahara Desert
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Group
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 30-Dec-2023 
                          Cut Off: 14-Jan-2024
                          Full Payment: 24-Jan-2024
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          23-Feb-2024 (8:00AM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          On Hold
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          6
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          7-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          ISTIST7M-TKD
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          1520-GP81583-230224-0800
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-1520
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           10 Days 8 Nights Discovery the Wonders of Morocco & Sahara Desert
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Group
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 30-Dec-2023 
                          Cut Off: 14-Jan-2024
                          Full Payment: 24-Jan-2024
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          23-Feb-2024 (8:00AM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          On Hold
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          7
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          7-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          ISTIST7M-TKD
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          1520-GP81583-230224-0800
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-1520
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           10 Days 8 Nights Discovery the Wonders of Morocco & Sahara Desert
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Group
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 30-Dec-2023 
                          Cut Off: 14-Jan-2024
                          Full Payment: 24-Jan-2024
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          23-Feb-2024 (8:00AM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          On Hold
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          8
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          7-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          ISTIST7M-TKD
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          1520-GP81583-230224-0800
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-1520
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           10 Days 8 Nights Discovery the Wonders of Morocco & Sahara Desert
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Group
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 30-Dec-2023 
                          Cut Off: 14-Jan-2024
                          Full Payment: 24-Jan-2024
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          23-Feb-2024 (8:00AM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          On Hold
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          9
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          7-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          ISTIST7M-TKD
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          1520-GP81583-230224-0800
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-1520
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           10 Days 8 Nights Discovery the Wonders of Morocco & Sahara Desert
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Group
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 30-Dec-2023 
                          Cut Off: 14-Jan-2024
                          Full Payment: 24-Jan-2024
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          23-Feb-2024 (8:00AM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          On Hold
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 font-medium dark:border-neutral-500 text-[12px]">
                          +
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-3 py-4 dark:border-neutral-500">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          10
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          7-Mar-2023
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          ISTIST7M-TKD
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          1520-GP81583-230224-0800
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          SPL-1520
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                           10 Days 8 Nights Discovery the Wonders of Morocco & Sahara Desert
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          Group
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px] text-left">
                          
                          Deposit: 30-Dec-2023 
                          Cut Off: 14-Jan-2024
                          Full Payment: 24-Jan-2024
                        </td>
                        <td
                          class="border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          23-Feb-2024 (8:00AM) 
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-5 py-4 dark:border-neutral-500 text-[12px]">
                          
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500 text-[12px]">
                          On Hold
                        </td>
                        <td
                          class="whitespace-nowrap border-r px-2 py-4 dark:border-neutral-500">
                            <label class="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" value="" class="sr-only peer"/>
                              <div class="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </td>
                        <td class="whitespace-nowrap px-2 py-4 grid grid-flow-col ">
                          <Img
                            src="images/edit.svg"
                            className="w-[20px] h-[20px]"
                            alt="edit2"
                          />
                          <Img
                            src="images/delete.svg"
                            className="w-[20px] h-[20px]"
                            alt="delete2"
                          />
                          
                        </td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 grid grid-flow-col place-items-center w-screen">
          <div className="ml-[100px]">
            <button className="h-[25px] border-t border-b border-l px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              ⟨⟨ First
            </button>
            <button className="h-[25px] border-t border-b border-l px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              ⟨ Previous
            </button>
            <button className="h-[25px] bg-[#95BCF2] border-t border-b border-l px-4 py-1 border-black shadow-md text-[13px]">
              1
            </button>
            <button className="h-[25px] border-t border-b border-l px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              2
            </button>
            <button className="h-[25px] border-t border-b border-l px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              3
            </button>
            <button className="h-[25px] border-t border-b border-l px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              ...
            </button>
            <button className="h-[25px] border-t border-b border-l px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              8
            </button>
            <button className="h-[25px] border-t border-b border-l px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              9
            </button>
            <button className="h-[25px] border-t border-b border-l px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              10
            </button>
            <button className="h-[25px] border-t border-b border-l px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              Next ⟩
            </button>
            <button className="h-[25px] border px-4 py-1 border-black hover:bg-[#C4D7F2] shadow-md text-[13px]">
              Last ⟩⟩
            </button>
          </div>
          <div className="grid grid-flow-col ">
            <text className="text-[13px] pr-2 pt-[15px]">
              No. of rows/page:
            </text>
            <select id="countries" class="w-[60px] bg-gray-50 border border-gray-300 text-gray-900 text-[13px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ChanManagerAdmPage;

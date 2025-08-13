import React from "react";
import {useState} from 'react';
import {
  Column,
  Row,
  Text,
  Button,
  Input,
  Line,
} from "components";
import Header from "components/Header/Header";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";


const AddanotherRoom =() => {

    const navigate = useNavigate();
    //navigate to property photo 
    function handleNavigate22() {
      navigate("/hs2");
    }

    //navigate to add another room
    function handleNavigate23() {
        navigate("/hs3");
      }
      function handleNavigate1() {
        navigate("/hs1");
      }
      function handleNavigate2() {
        navigate("/hs2");
      }
      function handleNavigate3() {
        navigate("/hs3");
      }
      function handleNavigate4() {
        navigate("/hs4");
      }
      function handleNavigate5() {
        navigate("/hs5");
      }
      function handleNavigate6() {
        navigate("/hs6");
      }
      function handleNavigate7() {
        navigate("/hs7");
      }
      
  
   // for radio button
   const [showhide, setShowhide]= useState("");

   const handleshow= e=>{
     const getshow= e.target.value;
     setShowhide(getshow);
   }
//for dropdown list
const [isVisible, setIsVisible] = useState("");
const changeHandler = (e) => {
  const getshow= e.target.value;
  setIsVisible(getshow);
}

let [selected1, setSelected1] = React.useState('');

    const changeSelectOptionHandler1 = (event) => {
        setSelected1(event.target.value);
      }
      let [selected2, setSelected2] = React.useState('');

    const changeSelectOptionHandler2 = (event) => {
        setSelected2(event.target.value);
      }

//for input value
const [value, setValue] = useState("");
  const handleInputChange = event =>
   {setValue (event.target.value);}
    
    
    return(
        <>
        <Header className="w-[100%]" />
        <Column className="bg-gray_100 pb-8 font-ptsans items-center justify-start w-[100%]">
            <Column className="items-center justify-center w-[100%] mb-6">
            <Row className="gap-0.5 h-[60px] w-[80%] justify-evenly">
            <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center">
                <Text onClick={handleNavigate1} className="common-pointer text-gray_501" variant="body4" >Basic Info</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans lg:text- bg-gray_200_ce  w-[14%] justify-end items-center">
                <Text onClick={handleNavigate2} className="common-pointer text-gray_702" variant="body4" >Layout & Pricing</Text>
                <Line className="bg-gray_702 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center"> 
                <Text onClick={handleNavigate3} className="common-pointer text-gray_501" variant="body4" >Facilities & Services</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-gray_100  w-[15%] justify-end items-center">
                <Text onClick={handleNavigate4} className="common-pointer text-gray_501" variant="body4" >Amenities</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-100 w-[15%] justify-end items-center"> 
                <Text onClick={handleNavigate5} className="common-pointer text-gray_501" variant="body4" > Photos</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-gray_100 w-[15%] justify-end items-center">
                <Text onClick={handleNavigate6} className="common-pointer text-gray_501" variant="body4" > Policies</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>
            <Column className="font-sans bg-gray_100 w-[14%] justify-end items-center">
                <Text onClick={handleNavigate7} className="common-pointer text-gray_501" variant="body4" > Payments</Text>
                <Line className="bg-gray_501 h-[4px] w-full mt-4"></Line>
            </Column>        
        </Row>
    </Column>
                <Column className="justify-start gap-6 w-[80%]">
                    <Text className="font-bold pt-2 mt-[10px]" variant="h3">
                        Layout and pricing
                    </Text>
                    <a href="/hs2" class="font-bold text-gray_600 dark:text-blue-500 hover:underline">Go back to overview</a>

                    <Column className="justify-start rounded shadow pl-[15px] h-fit bg-white_A700 w-[76%]">
                    <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px]  xl:my-[15px] w-[100%]">
                                            <Text class="text-2xl"  className="Firstlastname" as="body1" variant="body1">
                                                    Please select
                                                </Text>
                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                    Room type
                                                </Text>
                                                <div>
                                                        <select className="w-[40%] text-[14px]" onChange={changeHandler}>
                                                        <option value="" disabled selected hidden>Please select</option>
                                                          <option value="single">Single</option>
                                                          <option value="y">Double</option>
                                                          <option value="y">Twin</option>
                                                          <option value="y">Twin/Double</option>
                                                          <option value="y">Triple</option>
                                                          <option value="y">Quadruple</option>
                                                          <option value="y">Family</option>
                                                          <option value="y">Dormitory room</option>
                                                          <option value="y">Bed in Dormitory</option>
                                                          
                                                        </select>
                                                      </div>

                                                      {isVisible ==='single'&& (
                                             <Row className="w-[100%]">
                                            <div className="w-[50%] pt-6">
                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                    Room name
                                                </Text>
                                                <div>
                                                        <select className=" text-[14px]">
                                                        <option value="" disabled selected hidden>Please select</option>
                                                          <option>Budget Single Room</option>
                                                          <option>Deluxe Single Room</option>
                                                          <option>Deluxe Single Room with Balcony</option>
                                                          <option>Deluxe Single Room with Sea View</option>
                                                          <option>Economy Single Room</option>
                                                          <option>Large Single Room</option>
                                                          <option>New Year's Eve Special - Single Room</option>
                                                          <option>Single Room</option>
                                                          <option>Single Room - Disability Access</option>
                                                          <option>Single Room with Balcony</option>
                                                          <option>Single Room with Bath</option>
                                                          <option>Single Room with Bathroom</option>
                                                          <option>Single Room with Garden View</option>
                                                          <option>Single Room with Lake View</option>
                                                          <option>Single Room with Mountain View</option>
                                                          <option>Single Room with Park View</option>
                                                          <option>Single Room with Pool View</option>
                                                          <option>Single Room with Private Bathroom</option>
                                                          <option>Single Room with Private External Bathroom</option>
                                                          <option>Single Room with Sea View</option>
                                                          <option>Single Room with Shared Bathroom</option>
                                                          <option>Single Room with Shared Shower and Toilet</option>
                                                          <option>Single Room with Shared Toilet</option>
                                                          <option>Single Room with Shower</option>
                                                          <option>Single Room with Terrace</option>
                                                          <option>Small Single Room </option>
                                                          <option>Standard Single Room</option> 
                                                          <option>Standard Single Room with Mountain View</option>
                                                          <option>Standard Single Room with Sauna</option>
                                                          <option>Standard Single Room with Sea View</option>
                                                          <option>Standard Single Room with Shared Bathroom</option>
                                                          <option>Standard Single Room with Shower</option>
                                                          <option>Superior Single Room</option>
                                                          <option>Superior Single Room with Lake View</option>
                                                          <option>Superior Single Room with Sea View</option>
                                                        </select>
                                                      </div>
                                                      <Text className="font-bold text-[12px]">This is the name guests will see on the Booking.com website.</Text>
                                                </div> 

                                                <div className="w-[40%] pt-6">
                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                Custom name (optional)
                                                </Text>
                                                    <div>
                                                        <Input variant="OutlineGray503" className="text-[14px]"></Input>
                                                    </div>
                                                    <Text className="font-bold text-[12px]">Create an optional, custom name for your reference.</Text>
                                                </div>
                                            </Row>
                                            )}
                                           

                                            {isVisible ==='y'&& (
                                             <Row className="w-[100%]">
                                            <div className="w-[50%] pt-6">
                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                    Room name
                                                </Text>
                                                <div>
                                                        <select className=" text-[14px]">
                                                        <option value="" disabled selected hidden>Please select</option>
                                                          <option>Budget Single Room</option>
                                                          <option>Deluxe Single Room</option>
                                                          <option>Deluxe Single Room with Balcony</option>
                                                          <option>Deluxe Single Room with Sea View</option>
                                                          <option>Economy Single Room</option>
                                                          <option>Large Single Room</option>
                                                          <option>New Year's Eve Special - Single Room</option>
                                                          <option>Single Room</option>
                                                          <option>Single Room - Disability Access</option>
                                                          <option>Single Room with Balcony</option>
                                                          <option>Single Room with Bath</option>
                                                          <option>Single Room with Bathroom</option>
                                                          <option>Single Room with Garden View</option>
                                                          <option>Single Room with Lake View</option>
                                                          <option>Single Room with Mountain View</option>
                                                          <option>Single Room with Park View</option>
                                                          <option>Single Room with Pool View</option>
                                                          <option>Single Room with Private Bathroom</option>
                                                          <option>Single Room with Private External Bathroom</option>
                                                          <option>Single Room with Sea View</option>
                                                          <option>Single Room with Shared Bathroom</option>
                                                          <option>Single Room with Shared Shower and Toilet</option>
                                                          <option>Single Room with Shared Toilet</option>
                                                          <option>Single Room with Shower</option>
                                                          <option>Single Room with Terrace</option>
                                                          <option>Small Single Room </option>
                                                          <option>Standard Single Room</option> 
                                                          <option>Standard Single Room with Mountain View</option>
                                                          <option>Standard Single Room with Sauna</option>
                                                          <option>Standard Single Room with Sea View</option>
                                                          <option>Standard Single Room with Shared Bathroom</option>
                                                          <option>Standard Single Room with Shower</option>
                                                          <option>Superior Single Room</option>
                                                          <option>Superior Single Room with Lake View</option>
                                                          <option>Superior Single Room with Sea View</option>
                                                        </select>
                                                      </div>
                                                      <Text className="font-bold text-[12px]">This is the name guests will see on the Booking.com website.</Text>
                                                </div>

                                                <div className="w-[40%] pt-6">
                                                <Text class="text-sm py-2"  className="Firstlastname" as="body1" variant="body1">
                                                Custom name (optional)
                                                </Text>
                                                    <div>
                                                        <Input variant="OutlineGray503" className="text-[14px]"></Input>
                                                    </div>
                                                    <Text className="font-bold text-[12px]">Create an optional, custom name for your reference.</Text>
                                                </div>
                                            </Row>
                                            )}

                                                <Text class="text-sm py-2 pt-6"  className="Firstlastname" as="body1" variant="body1">
                                                    Smoking policy
                                                </Text>
                                                <div>
                                                        <select className="w-[40%] text-[14px]">
                                                        <option value="" disabled selected hidden>Please select</option>
                                                          <option>Non-smoking</option>
                                                          <option>Smoking</option>
                                                          <option>Both</option>
                                                        </select>
                                                      </div>

                                                      <Text class="text-sm py-1 pt-6"  className="Firstlastname" as="body1" variant="body1">
                                                    Number of rooms (of this type)
                                                    </Text>

                                                    
                                                    <div className="w-[15%]">
                                                    <Row >
                                                        <Input className="w-[100%] text-[14px]" variant="OutlineGray503" type="number"/>
                                                        <Row className="py-2">
                                                        <BsFillPersonFill/>
                                                          <Text className="font-bold text-[14px]">
                                                        x6
                                                        </Text>
                                                        </Row>
                                                    </Row>
                                                    </div>
                                                   
                                                    
                                                    
                    </Column>
                    </Column>
                    {isVisible ==='single'&& (

                    <Column className="justify-start rounded shadow pl-[15px] h-fit bg-white_A700 w-[76%]">
                    <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px]  xl:my-[15px] w-[100%]">
                        <Text class="text-2xl"  className="Firstlastname" as="body1" variant="body1">
                            Room size (optional)
                        </Text>

                    <Row className="py-4">
                        <div className="w-[20%]">
                            <Input variant="OutlineGray503" className="w-[100%] text-[14px]" type="number"/>
                        </div>
                        <select className="w-[20%] text-[14px]">
                            <option value="" disabled selected hidden>Please select</option>
                            <option>square metres</option>
                            <option>square feet</option>
                        </select>
                    </Row>
                    
                    </Column>
                    </Column>
                    )}
                {isVisible ==='y'&& (
                    <Column className="justify-start rounded shadow pl-[15px] h-fit bg-white_A700 w-[76%]">
                    <Column className="justify-start 2xl:my-[11px] 3xl:my-[13px]  xl:my-[15px] w-[100%]">
                        <Text class="text-2xl"  className="Firstlastname" as="body1" variant="body1">
                            Bed option
                        </Text>
                        <Column className="bg-gray-200 py-1">
                            <Text class="text-sm">
                                Tell us only about the existing beds in a room. Do not include extra beds.
                            </Text>
                        </Column>

                        <Row className="w-[100%]">
                                                <div className="py-2 pt-6 w-[45%]">
                                                    <Text class="text-sm"  className="Firstlastname" as="body1" variant="body1">
                                                    What kind of beds are available in this room?
                                                    </Text>
                                                    <div>
                                                        <select onChange={changeSelectOptionHandler1} value={selected1} className="text-[14px] w-[80%]">
                                                        <option value="" disabled selected hidden>Please select</option>
                                                          <option value="1">Single bed / 90-100 cm wide</option>
                                                          <option>Double bed / 131-150 cm wide </option>
                                                          <option>Large bed (King size) / 151-180 cm wide</option>
                                                          <option>Extra-large double bed (Super-king size) / 181-210 cm wide</option>
                                                          <option>Bunk bed / Variable size</option>
                                                          <option>Sofa bed / Variable size</option>
                                                          <option>Futon Mat / Variable size</option>
                                                        </select>
                                                      </div>  
                                                </div>

                                                <div className="py-2 pt-14 w-[10%]">
                                                  <Text className="font-bold ">X</Text>
                                                </div>
                                                    

                                                    <div className="py-2 pt-12 w-[45%]">

                                                        <select value = {selected2} onChange={changeSelectOptionHandler2} className="text-[14px] w-[80%]">
                                                        <option value="" disabled selected hidden>Please select</option>
                                                          <option value ="1">1</option>
                                                          <option>2</option>  
                                                          <option>3</option>
                                                          <option>4</option>
                                                          <option>5</option>
                                                          <option>6</option>
                                                          <option>7</option>
                                                          <option>8</option>
                                                          <option>9</option>
                                                          <option>10</option>
                                                          <option>11</option>
                                                          <option>12</option>
                                                       
                                                        </select>
                                                      </div> 
                                                      

                                                      

                        </Row> 

                       

                      
                                                

                                                      <button value="Add another room" checked={ showhide==='Add another room' }  className="text-left hover:underline common-pointer w-[30%] text-blue-600" onClick={ handleshow }> Add another room</button>
                                                     

                                                      {showhide==='Add another room' &&(
                                                        <Column>
                                                    <Row className="w-[100%]">
                                                    <div className="py-2 pt-6 w-[45%]">
                                                        <Text class="text-sm"  className="Firstlastname" as="body1" variant="body1">
                                                        What kind of beds are available in this room?
                                                        </Text>
                                                        <div>
                                                            <select onChange={changeSelectOptionHandler1} value={selected1} className="text-[14px] w-[80%]">
                                                            <option value="" disabled selected hidden>Please select</option>
                                                              <option value="1">Single bed / 90-100 cm wide</option>
                                                              <option>Double bed / 131-150 cm wide </option>
                                                              <option>Large bed (King size) / 151-180 cm wide</option>
                                                              <option>Extra-large double bed (Super-king size) / 181-210 cm wide</option>
                                                              <option>Bunk bed / Variable size</option>
                                                              <option>Sofa bed / Variable size</option>
                                                              <option>Futon Mat / Variable size</option>
                                                            </select>
                                                          </div>  
                                                    </div>
    
                                                    <div className="py-2 pt-14 w-[10%]">
                                                      <Text className="font-bold ">X</Text>
                                                    </div>
                                                        
    
                                                        <div className="py-2 pt-12 w-[45%]">
    
                                                            <select value = {selected2} onChange={changeSelectOptionHandler2} className="text-[14px] w-[80%]">
                                                            <option value="" disabled selected hidden>Please select</option>
                                                              <option value ="1">1</option>
                                                              <option>2</option>  
                                                              <option>3</option>
                                                              <option>4</option>
                                                              <option>5</option>
                                                              <option>6</option>
                                                              <option>7</option>
                                                              <option>8</option>
                                                              <option>9</option>
                                                              <option>10</option>
                                                              <option>11</option>
                                                              <option>12</option>
                                                           
                                                            </select>
                                                          </div> 
                                                          
    
                                                          
    
                            </Row> 
                            
                            
                            </Column>
                            
                                                      )} 
                                                      
                                                      

                                                      

                                                    <Text class="text-sm py-1 pt-6"  className="Firstlastname" as="body1" variant="body1">
                                                    How many guests can stay in this room?
                                                    </Text>
                                                    
                                                    <div className="w-[10%]">
                                                        <Input variant="OutlineGray503" className="w-[100%] text-[14px]" type="number" />
                                                    </div>                                                      
                    </Column>
                    </Column>

                                                      )}

{isVisible ==='y'&& (

<Column className="justify-start rounded shadow pl-[15px] h-fit bg-white_A700 w-[76%]">
<Column className="justify-start 2xl:my-[11px] 3xl:my-[13px]  xl:my-[15px] w-[100%]">
    <Text class="text-2xl"  className="Firstlastname" as="body1" variant="body1">
        Room size (optional)
    </Text>

<Row className="py-4">
    <div className="w-[20%]">
        <Input variant="OutlineGray503" className="w-[100%] text-[14px]" type="number"/>
    </div>
    <select className="w-[20%] text-[14px]">
        <option value="" disabled selected hidden>Please select</option>
        <option>square metres</option>
        <option>square feet</option>
    </select>
</Row>

</Column>
</Column>
)}

                  




<Column className="justify-start rounded shadow pl-[15px] h-fit bg-white_A700 w-[76%]">
<Column className="justify-start 2xl:my-[11px] 3xl:my-[13px]  xl:my-[15px] w-[100%]">
    <Text class="text-2xl pb-3"  className="Firstlastname" as="body1" variant="body1">
    Base price per night
    </Text>

    <Column className="bg-gray_400">
        <Text class="text-sm">
        This is the lowest price that we automatically apply to this room for all dates. Before your property goes live, 
        you can set seasonal pricing in your property dashboard.
        </Text>
    </Column>


    <Row>
      <div className="w-[50%] py-4">
        <Text className="text-[14px]">
            Price for 1 person
          </Text>
        
          <Row id="pricePerChild" className="py-3">
            
            <Button
              class="py-3 flex justify-center text-[13px] items-center w-[30%] h-[42px] bg-gray_400 border-y border-l border-gray_501 rounded-l "
              variant="OutlineBlack90026"
            >
              MYR / per night
            </Button>
            <Input
            
              className="font-normal justify-center items-center not-italic ml-1 text-[14px] placeholder:required text-slate_700 rounded-r w-[100%]"
              placeholder="0.00"
              variant="OutlineGray503"
              type="number"
              min="0.00"
              value={value}
              onChange={handleInputChange}
            ></Input>
          </Row>

          <Text className="text-[14px]">
          Do you offer a lower rate when there are less than 6 guests?
          </Text>

                        <div className="row">
                              <form className="row g-3">
                                    <div className="col-md-12">
                                        
                                        <Row className="flex space-x-4">
                                        <div className="text-black flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-[30%] h-10"> 

                                            <input type="radio" name="userdetail" value="yes1" checked={ showhide==='yes1' } className="common-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow } /> 
                                            <label class="common-pointer py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300" >Yes</label>
                                            
                                        </div>

                                        <div className="text-black flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700 w-[30%] h-10"> 

                                            <input type="radio" name="userdetail" value="no1" checked={ showhide==='no1' }  className="common-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={ handleshow }/> 
                                            <label class="common-pointer py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                            
                                        </div>
                                        </Row>          
                                        

                                       
                                    </div>

                                    {
                                    showhide==='yes1' && (
                                      <Column>
                                        <Text className="text-[14px] pt-8">
                                        How much discount do you offer?
                                        </Text>
                                      
                                        <Row id="pricePerChild" className="py-3">
                                        <Input
                                            id="number"
                                            className="font-normal justify-center items-center not-italic ml-1 text-[14px] placeholder:required text-slate_700 rounded-r w-[100%]"
                                            placeholder="0.00"
                                            variant="OutlineGray503"
                                            type="number"
                                            min="0.00"
                                          />
                                          <select
                                            class="py-2 justify-center items-center w-[30%] h-[42px] bg-gray_400 border-y border-r border-gray_501 rounded-r "
                                            variant="OutlineBlack90026"
                                            
                                          >
                                            <option>MYR</option>
                                            <option>%</option>
                                          </select>
                                          
                                        </Row>

                                        <Text className="text-[14px] pt-5">
                                        What is the minimum occupancy you are willing to offer a discount for?
                                        </Text>
                                        <div className="w-[100%]">

                                          <select className="pt-1 text-[14px] w-[50%]">
                                          <option value="" disabled selected hidden>Please select</option>
                                            <option>1 person</option>
                                            <option>2 person</option>  
                                            <option>3 person</option>
                                            <option>4 person</option>
                                            <option>5 person</option>
                                          </select>
                                        </div>

                                      </Column>

                                    )}
                                    </form>
                                    </div>
                                     
                                    
                                    
      </div>

      <div className="w-[50%] py-4 ">

          <Column className="w-[80%] bg-gray_400 my-5 pl-4 pt-3">
          <Text className="font-bold text-[14px]">
            Price summary for: xxxx
          </Text>

          <Row>
            <div className="w-[50%]">
              <Text className="font-bold text-[14px]">
                Number of guests
              </Text>
        
            </div>
            

            <div className="w-[50%]">
              <Text className="font-bold text-[14px] pl-8">
                Price
              </Text>
              
            </div>
          </Row>

          <Row>
            <div className="w-[50%]">
            
              <Row>
              <BsFillPersonFill/>
                <Text className="font-bold text-[14px]">
              x6
              </Text>
              </Row>
            </div>
            
            <div className="w-[50%]">
              <Text className="font-bold text-[14px] text-lime-700 pl-8">
                MYR {value.toString()}
              </Text>
            </div>
          </Row>

          <Text className="text-[12px] font-bold pb-5 pt-6">
          After you have access to your Booking.com property dashboard, we will ask you to double check your price information before your property goes live on our website.
          </Text>


          


          </Column>
          

      </div>


    </Row>



</Column>
</Column>


                    
                    <Row className="space-x-4 w-[76%]">
                        <Button
                            className="bg-gray_200 hover:bg-gray_400 border-[1px] border-black text-center text-black h-12 w-[50%]"
                            onClick={handleNavigate22}
                        >
                            Go back to overview
                        </Button>

                        <Button
                            className="bg-sky-700 hover:bg-indigo_901 text-center text-white_A700 h-12 w-[50%]"
                            onClick={handleNavigate23}
                        >
                            Continue
                        </Button>
                    </Row>

                </Column>
            </Column>


        </>
    );
};

export default AddanotherRoom;
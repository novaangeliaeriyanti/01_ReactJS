import React from "react";
import { sliderItems } from "../../data";

export default function Landingpage() {
  return (
    <div>
      {/* anouncement */}
      <div className="flex items-center justify-center h-7 bg-red-500 text-white text-sm font-normal">
        Super Deal! Free Shipping on Orders Over Rp50.000
      </div>
      {/* navbar */}
      <div className="h-14">
        <div class="px-5 py-1 flex items-center justify-between ">
          <div class="flex-1 flex items-center">
            <span class="font-normal cursor-pointer">EN</span>
            <div class="flex items-center border-0.5 border-solid border-gray-400 ml-25 p-5 ">
              <input placeholder="Search" class="border-none" />
            </div>
          </div>
          <div class="flex-1 text-center">
            <h1 class="font-bold">NOVA.</h1>
          </div>
          <div class="flex-1 flex items-center justify-end">
            <div class="font-normal cursor-pointer ml-25 p-5">SIGN IN</div>
            <div class="font-normal cursor-pointer ml-25">REGISTER</div>
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="w-full h-screen flex">
        <div class="h-full flex">
          {sliderItems.map((item) => (
            <div class="h-full flex-1 pt-50px pl-75px">
              <image src="item.img"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

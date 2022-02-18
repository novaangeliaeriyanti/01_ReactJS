import React from "react";

export default function Flexbox() {
  return (
    <div>
      <h1>Flexbox</h1>
      <div className="flex bg-slate-300 justify-center">
        <div class="box-border h-32 w-32 p-4 border-4 bg-indigo-300 text-center">
          1
        </div>
        <div class="box-border h-32 w-32 p-4 border-4 bg-orange-300 text-center">
          2
        </div>
        <div class="box-border h-32 w-32 p-4 border-4 bg-red-300 text-center">
          3
        </div>
      </div>
    </div>
  );
}

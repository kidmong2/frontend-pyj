import React from "react";

import Reducer01 from "./b_Reducer/Reducer01";
import Reducer02 from "./b_Reducer/Reducer02";
import Reducer03 from "./b_Reducer/Reducer03";
import Reducer04 from "./b_Reducer/Reducer04";
import UseMemo from "./a_review/UseMemo";
import UseCallback from "./a_review/UseCallback";
import UseEffect from "./a_review/UseEffect";
import Todo from "./a_review/Todo";


export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0705
      </h1>

      <h2>1. review</h2>
      <UseMemo />
      <hr />
      <UseCallback />
      <hr />
      <UseEffect />
      <hr />
      <Todo />


      
    </div>
  );
}

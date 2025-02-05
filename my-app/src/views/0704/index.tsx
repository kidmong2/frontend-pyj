import React from "react";

import UseMemo01 from "./a_useMemo/UseMemo01";
import UseMemo02 from "./a_useMemo/UseMemo02";
import UseMemo03 from "./a_useMemo/UseMemo03";
import UseMemo04 from "./a_useMemo/UseMemo04";
import UseCallback01 from "./b_useCallback/UseCallback01";
import UseCallback02 from "./b_useCallback/UseCallback02";

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0704
      </h1>

      <h2>1. useMemo</h2>
      <UseMemo01 />
      <hr />
      <UseMemo02 />
      <hr />
      <UseMemo03 />
      <hr />
      <UseMemo04 />
      <hr />
      
      <h2>2. useCallback</h2>
      <UseCallback01 />
      <hr />
      <UseCallback02 />

    </div>
  );
}

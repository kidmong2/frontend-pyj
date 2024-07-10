import React from "react";
import Custom01 from "./a_Custom/Custom01";
import Custom02 from "./a_Custom/Custom02";
import Custom03 from "./a_Custom/Custom03";
import Custom04 from "./a_Custom/Custom04";
import WebcamDrawingApp from "./c_Practice/WebcamDrawingApp";

export default function Index() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "pink",
        }}
      >
        0709
      </h1>

      <h2>1. Cutom Hook</h2>
        <Custom01 />
        <hr />
        <Custom02 />
        <hr />
        <Custom03 />
        <hr />
        <Custom04 />

      <hr />
      <h2>2. Practice 2 - 커스텀 훅</h2>


      <hr />
      <h2>3. Practice - 웹캠 드로잉 앱</h2>
        <WebcamDrawingApp />
    </div>
  );
}

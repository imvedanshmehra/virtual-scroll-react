import React from "react";
import VirtualScroll from "./virtual-scroll";
const totalItems = 100000;

const items = new Array(totalItems).fill(null).map((_, index) => {
  return (
    <div style={{ height: "70px" }} key={index}>
      <p>Row Number - {index}</p>
    </div>
  );
});

function App() {
  return (
    <>
      <h1>Virtual Scroll From Scratch</h1>
      <VirtualScroll
        rowHeight={70}
        totalItems={totalItems}
        containerHeight="500px"
        items={items}
        visibleItemsLength={20}
      ></VirtualScroll>
    </>
  );
}
export default App;

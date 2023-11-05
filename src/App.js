import React from "react";
import VirtualScroll from "./virtual-scroll";
import ReactWindowFixedSizeEx from "./react-window-fixed-list";
import ReactWindowVariableSizeEx from "./react-window-variable-list";
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
      <br />
      <h1>React Window Fixed Size Example</h1>
      <ReactWindowFixedSizeEx />
      <br />
      <h1>React Window Variable Size Example</h1>
      <ReactWindowVariableSizeEx />
    </>
  );
}
export default App;

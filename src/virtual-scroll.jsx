import { useState } from "react";

const VirtualScroll = ({
  rowHeight,
  totalItems,
  items,
  visibleItemsLength,
  containerHeight,
}) => {
  // Calculate the total height of the container
  const totalHeight = rowHeight * totalItems;
  //   Current scroll position of the container
  const [scrollTop, setScrollTop] = useState(0);
  // Get the first element to be displayed
  const startNodeElem = Math.ceil(scrollTop / rowHeight);
  // Get the items to be displayed
  const visibleItems = items?.slice(
    startNodeElem,
    startNodeElem + visibleItemsLength
  );
  //  Add padding to the empty space
  const offsetY = startNodeElem * rowHeight;

  const handleScroll = (e) => {
    // set scrollTop to the current scroll position of the container.
    setScrollTop(e?.currentTarget?.scrollTop);
  };

  return (
    <div
      style={{
        height: containerHeight,
        overflow: "auto",
        border: "5px solid black",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems}
        </div>
      </div>
    </div>
  );
};

export default VirtualScroll;

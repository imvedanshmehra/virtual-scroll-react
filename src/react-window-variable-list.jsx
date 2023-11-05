import { VariableSizeList } from "react-window";
import "./App.css";
const totalItemsCount = 100000;

const rowHeights = new Array(totalItemsCount)
  .fill(true)
  .map(() => 12 + Math.round(Math.random() * 50));

const getItemSize = (index) => rowHeights[index];

const Row = ({ index, style }) => (
  <div style={style} className={index % 2 ? "odd" : "even"}>
    Row {index}
  </div>
);

const ReactWindowVariableSizeEx = () => (
  <VariableSizeList
    height={500}
    itemCount={totalItemsCount}
    itemSize={getItemSize}
    width={300}
  >
    {Row}
  </VariableSizeList>
);

export default ReactWindowVariableSizeEx;

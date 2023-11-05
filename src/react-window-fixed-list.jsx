import { FixedSizeList } from "react-window";

const Row = ({ index, style }) => (
  /* Adding style attribute is very important here
    it supplies the row height to the elements. */
  <div style={style}>Row {index}</div>
);

const ReactWindowFixedSizeEx = () => (
  <FixedSizeList height={150} itemCount={100000} itemSize={35} width={300}>
    {Row}
  </FixedSizeList>
);

export default ReactWindowFixedSizeEx;

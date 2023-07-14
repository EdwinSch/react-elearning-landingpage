import { usps } from "../data";
import Tile from "./Tile";

const Grid = () => {
  return (
    <section className="grid-container">
      {usps.map((usp) => {
        return <Tile key={usp.id} {...usp} />;
      })}
    </section>
  );
};

export default Grid;

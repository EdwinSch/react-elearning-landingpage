import { usps } from "../data";
import Tile from "./Tile";

const Grid = () => {
  return (
    <section className="grid-container">
      <article className="tile first-tile">
        Check out our most popular courses!
      </article>
      {usps.map((usp) => {
        return <Tile key={usp.id} {...usp} />;
      })}
    </section>
  );
};

export default Grid;

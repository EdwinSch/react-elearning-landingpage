const Tile = ({ image, title, text }) => {
  return (
    <article className="tile">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

export default Tile;

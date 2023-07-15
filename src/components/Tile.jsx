const Tile = ({ image, title, text }) => {
  return (
    <article className="tile">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <p className="link">get started</p>
    </article>
  );
};

export default Tile;

const Button = ({ color }) => {
  // Handle click
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <button type="button" style={{ background: color }} onClick={handleClick}>
      get started
    </button>
  );
};

export default Button;

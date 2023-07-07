import Button from "./Button";
import logoDark from "../assets/logo-dark.svg";

const Header = () => {
  return (
    <header>
      <img src={logoDark} alt="skilled logo" />
      <Button color={"#13183f"} />
    </header>
  );
};

export default Header;

import Button from "./Button";
import logoLight from "../assets/logo-light.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logoLight} alt="logo" />
      <Button color={"linear-gradient(0deg, #4851ff, #f02aa6)"} />
    </footer>
  );
};

export default Footer;

import Button from "./Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Maximize skill,
          <br />
          minimize budget
        </h1>
        <p className="text">
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button color={"linear-gradient(0deg, #f02aa6, #ff6f48)"} />
      </div>
    </section>
  );
};

export default Hero;

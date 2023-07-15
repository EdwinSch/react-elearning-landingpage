import Header from "./components/Header";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <figure className="hero-img">{/* CSS dynamic */}</figure>
        <Header />
        <Hero />
        <Grid />
      </main>
      <Footer />
    </>
  );
}

export default App;

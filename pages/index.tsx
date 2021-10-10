import CallToAction from "../components/CallToAction";
import Content from "../components/content";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Snippets from "../components/Snippets";
import Stats from "../components/stats";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Content />
      <Snippets />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Home;

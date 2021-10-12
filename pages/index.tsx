import Container from "../components/Container";
import Content from "../components/content";
import Hero from "../components/Hero";
import Snippets from "../components/Snippets";
import Stats from "../components/stats";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Stats />
      <Content />
      <Snippets />
    </Container>
  );
};

export default Home;

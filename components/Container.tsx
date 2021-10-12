import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <CallToAction />
      <Footer />
    </>
  );
};
export default Container;

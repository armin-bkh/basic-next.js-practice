import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

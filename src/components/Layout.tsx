import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={ styles.content }>
    <div className={ styles.pagecontent }>
      <Navbar />
      {children}
    </div>
      <Footer />
    </div>
  );
};

export default Layout;

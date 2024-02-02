import Sidebar from "../Sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Cecep Miftah Solahudin
        </motion.span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="social"
        >
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            href="#"
          >
            <img src="/facebook.png" alt="facebook icon" />
          </motion.a>
          <a href="#">
            <img src="/instagram.png" alt="instagram icon" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="youtube icon" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="dribbble icon" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

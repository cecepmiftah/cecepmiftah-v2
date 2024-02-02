import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="container">
      <motion.div
        ref={ref}
        className="services"
        variants={variants}
        initial="initial"
        //   animate="animate"
        //   whileInView="animate"
        animate={isInView && "animate"}
      >
        <motion.div className="textContainer" variants={variants}>
          <p>
            I focus on helping your brand grow <br /> and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
          <div className="title">
            <img src="./people.webp" alt="" />
            <h1>
              <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
            </h1>
          </div>
          <div className="title">
            <h1>
              <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
              Businiess.
            </h1>
            <button>WHAT WE DO?</button>
          </div>
        </motion.div>
        <div>
          <motion.div className="listContainer" variants={variants}>
            <motion.div
              whileHover={{ background: "lightgray", color: "black" }}
              className="box"
            >
              <h2>Branding</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                voluptates dignissimos, nam distinctio molestiae iusto,
                accusamus dolor saepe doloremque repellat vitae consectetur amet
                quam! Repudiandae optio odio fugiat quisquam fugit.
              </p>
              <button>Go</button>
            </motion.div>
            <motion.div
              whileHover={{ background: "lightgray", color: "black" }}
              className="box"
            >
              <h2>Branding</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                voluptates dignissimos, nam distinctio molestiae iusto,
                accusamus dolor saepe doloremque repellat vitae consectetur amet
                quam! Repudiandae optio odio fugiat quisquam fugit.
              </p>
              <button>Go</button>
            </motion.div>
            <motion.div
              whileHover={{ background: "lightgray", color: "black" }}
              className="box"
            >
              <h2>Branding</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                voluptates dignissimos, nam distinctio molestiae iusto,
                accusamus dolor saepe doloremque repellat vitae consectetur amet
                quam! Repudiandae optio odio fugiat quisquam fugit.
              </p>
              <button>Go</button>
            </motion.div>
            <motion.div
              whileHover={{ background: "lightgray", color: "black" }}
              className="box"
            >
              <h2>Branding</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                voluptates dignissimos, nam distinctio molestiae iusto,
                accusamus dolor saepe doloremque repellat vitae consectetur amet
                quam! Repudiandae optio odio fugiat quisquam fugit.
              </p>
              <button>Go</button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

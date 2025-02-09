"use client"
import { motion } from "framer-motion";
import { ComponentType } from "react";
import { styles } from "../ui/Styles";
import { staggerContainer } from "../../utils/Motions";

const StarWrapper = (Component: ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0)}  // Provide default values here
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
